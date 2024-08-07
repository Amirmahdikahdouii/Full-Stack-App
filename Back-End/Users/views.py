from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from Users.models import User
from Users.serializers import UserSerializers


class SignUpAPIView(CreateAPIView):
    model = User
    serializer_class = UserSerializers
