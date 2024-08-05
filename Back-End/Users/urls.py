from django.urls import path
from Users.views import SignUpAPIView

app_name = "Users"
urlpatterns = [
    path('sign-up/', SignUpAPIView.as_view(), name="sign-up"),
]
