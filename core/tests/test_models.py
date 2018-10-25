from django.test import TestCase

from core.tests.utils import default_user_fields
from core.models import CustomUser
from core.utils.functions import create_user_from_fields
# TODO (Danila) Create tests for link model.


# Magic constants take from specification.
class TestUserModel(TestCase):

    text_field_max_length = 255

    @classmethod
    def setUpClass(cls):
        create_user_from_fields(default_user_fields)

    @classmethod
    def tearDownClass(cls):
        users = CustomUser.objects.all()
        for user in users:
            user.delete()

    def test_name(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        field_label = user._meta.get_field('first_name').verbose_name
        length = user._meta.get_field('first_name').max_length
        assert 'first name' == field_label
        assert self.text_field_max_length == length
        assert default_user_fields['first_name'] == user.first_name

    def test_surname(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        field_label = user._meta.get_field('last_name').verbose_name
        length = user._meta.get_field('last_name').max_length
        assert 'last name' == field_label
        assert self.text_field_max_length == length
        assert default_user_fields['last_name'] == user.last_name

    def test_email(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        assert default_user_fields['email'] == user.email

    def test_username(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        assert default_user_fields['email'] == user.username

    def test_password(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        assert user.check_password(default_user_fields['password'])

    def test_organisation(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        organization_label = user._meta.get_field('organization').verbose_name
        max_length = user._meta.get_field('organization').max_length
        assert 'organization' == organization_label
        assert self.text_field_max_length == max_length
        assert default_user_fields['organization'] == user.organization

    def test_verificate(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        verificate_label = user._meta.get_field('verificate').verbose_name
        verificate_default = user._meta.get_field('verificate').default
        assert 'verificate' == verificate_label
        assert isinstance(verificate_default, bool) and not verificate_default

    def test_to_string(self):
        user = CustomUser.objects.get(email=default_user_fields['email'])
        assert default_user_fields['email'] == str(user)


