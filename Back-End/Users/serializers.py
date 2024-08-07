from rest_framework import serializers
from Users.models import User


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("phone_number", "email", "first_name", "last_name")
