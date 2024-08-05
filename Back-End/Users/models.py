from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from Users.managers import UserManager


class User(AbstractBaseUser):
    phone_number = models.CharField(unique=True, max_length=11)
    email = models.EmailField(unique=True, null=True, blank=True, max_length=255)
    first_name = models.CharField(max_length=70, null=True, blank=True)
    last_name = models.CharField(max_length=70, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "phone_number"

    @property
    def is_staff(self):
        return self.is_admin

    @property
    def name(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self):
        return f"{self.phone_number}"

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True
