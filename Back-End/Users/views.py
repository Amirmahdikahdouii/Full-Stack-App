from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from Users.models import User


class SignUpAPIView(APIView):
    model = User

    def post(self, request):
        phone_number: str = request.data.get('phone_number')
        password: str = request.data.get('password')
        try:
            self.model.objects.get(phone_number=phone_number)
            return Response(
                {"message": "Phone Number already exists"},
                status=status.HTTP_409_CONFLICT
            )
        except self.model.DoesNotExist:
            self.model.objects.create_user(phone_number=phone_number, password=password)
            return Response({"message": "success"}, status=status.HTTP_200_OK)
