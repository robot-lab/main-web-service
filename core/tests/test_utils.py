import pytest

from django.core import mail
from django.contrib.auth import authenticate
from django.test import TestCase

from rest_framework.authtoken.models import Token

from core.tests.utils import get_dict_from_user, user_fields, login_fields, \
    default_user_fields
from core.models import CustomUser
from core.utils.functions import get_token, is_not_valid_text_fields, \
    send_email, get_user_or_none, CheckText, create_user_from_fields, \
    check_email


class TestGetToken(TestCase):
    @classmethod
    def setUpClass(cls):
        create_user_from_fields(default_user_fields)

    @classmethod
    def tearDownClass(cls):
        users = CustomUser.objects.all()
        map(lambda x: x.delete(), users)

    def test_get_token(self):
        session_user = authenticate(username=default_user_fields['email'],
                                    password=default_user_fields['password'])
        expected_token, _ = Token.objects.get_or_create(user=session_user)

        actual_token = get_token(default_user_fields['email'],
                                 default_user_fields['password'])

        assert expected_token == actual_token


class TestGetUserOrNone(TestCase):
    @classmethod
    def setUpClass(cls):
        create_user_from_fields(default_user_fields)

    @classmethod
    def tearDownClass(cls):
        users = CustomUser.objects.all()
        map(lambda x: x.delete(), users)

    def test_get_user(self):
        actual_user = get_user_or_none(default_user_fields['email'])
        expected_user = CustomUser.objects.get(
            email=default_user_fields['email'])
        assert expected_user == actual_user

    def test_no_user(self):
        actual_user = get_user_or_none(user_fields['email'])
        assert actual_user is None


class TestSendEmail(TestCase):

    email_message = 'qwerty12345'
    email_address = 'goodEmail@gmail.com'

    @classmethod
    def setUpClass(cls):
        mail.outbox.clear()

    @classmethod
    def tearDownClass(cls):
        mail.outbox.clear()

    def test_send_email(self):
        send_email(self.email_message, self.email_address)

        assert 1 == len(mail.outbox)

        message = mail.outbox[0]

        assert self.email_message == message.body
        assert 1 == len(message.to)
        assert self.email_address == message.to[0]


class TestGetDictFromUser(TestCase):
    @classmethod
    def setUpClass(cls):
        create_user_from_fields(default_user_fields)

    @classmethod
    def tearDownClass(cls):
        users = CustomUser.objects.all()
        map(lambda x: x.delete(), users)

    def test_get_dict_from_user(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        actual_result = get_dict_from_user(user)

        expected_result = {'first_name': user.first_name,
                           'last_name': user.last_name,
                           'email': user.email, 'username': user.username,
                           'id': user.id, 'organization': user.organization}

        assert expected_result == actual_result


class TestCreateUserFromDict(TestCase):
    def tearDown(self):
        users = CustomUser.objects.all()
        map(lambda x: x.delete(), users)

    def test_create_user_from_fields(self):
        actual_user = create_user_from_fields(user_fields)
        users = CustomUser.objects.filter(email=user_fields['email'])

        assert 1 == len(users)

        user = users[0]

        user_dict = get_dict_from_user(user)
        for field in user_fields:
            if field != 'password':
                assert user_fields[field] == user_dict[field]
            else:
                assert user.check_password(user_fields[field])

        assert get_dict_from_user(actual_user) == user_dict


@pytest.fixture(scope="function",
                params=[('qwerty1', False),
                        ('qwerty', True)],
                ids=["not latin", "latin"])
def param_is_latin(request):
    return request.param


def test_is_latin(param_is_latin):
    data, result = param_is_latin
    assert result == CheckText.check_line(data)


@pytest.fixture(scope="function",
                params=[({'1': '1'}, ['1'], None, None, False, False),
                        ({'1': ''}, ['1'], None, None, False, True),
                        ({'1': '1'}, ['2'], None, None, False, True),
                        ({'1': '1', '2': '2'}, ['2', '1'], None, None, False,
                         False),
                        ({'1': '1', '2': '2'}, ['2', '3'], None, None, False,
                         True),
                        ({'1': '11', '2': '22'}, ['2', '1'], None, None, False,
                         False),
                        ({'1': '11', '2': '22'}, ['2', '1'], 1, 3, False,
                         False),
                        ({'1': '11', '2': '22'}, ['2', '1'], 3, 5, False,
                         True),
                        ({'1': '11', '2': '22'}, ['2', '1'], None, 1, False,
                         True),
                        ({'1': 'aa', '2': 'bb'}, ['2', '1'], 1, 3, True,
                         False),
                        ({'1': 'aa', '2': 'b2'}, ['2', '1'], None, 3, True,
                         True),
                        ({'1': '111'}, ['1'], None, 3, False, False),
                        ({'1': '111'}, ['1'], None, 2, False, True),
                        ({'1': '111'}, ['1'], 3, None, False, False),
                        ({'1': '111'}, ['1'], 4, None, False, True),
                        ],
                ids=["check inclusion", "empty field", "without field",
                     "many fields", "not all fields", "other order",
                     "with length checks", "short fields", "long fields",
                     "only latin", "not only latin", "equal up border",
                     "up border +1", "equal down border", "down border -1"])
def param_is_not_valid_text_fields(request):
    return request.param


def test_is_not_valid_text_fields(param_is_not_valid_text_fields):
    data, fields, min_length, max_length, only_latin, result = \
        param_is_not_valid_text_fields
    assert result == is_not_valid_text_fields(data, fields,
                                              max_length=max_length,
                                              min_length=min_length,
                                              only_latin=only_latin)


@pytest.fixture(scope="function",
                params=[('test@gmail.com', True),
                        ('test123', False)],
                ids=["correct", "incorrect"])
def param_check_email(request):
    return request.param


def test_check_email(param_check_email):
    line, result = param_check_email
    assert result == check_email(line)


@pytest.fixture(scope="function",
                params=[(user_fields, ),
                        (default_user_fields, )],
                ids=["user_fields", "default_user_fields"])
def param_user_fields(request):
    return request.param


def test_user_fields(param_user_fields):
    fields = param_user_fields[0]
    assert 'email' in fields
    assert 'password' in fields
    assert 'first_name' in fields
    assert 'last_name' in fields
    assert 'organization' in fields


def test_login_fields():
    assert 'email' in login_fields
    assert 'password' in login_fields
