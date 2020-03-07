from rest_framework import viewsets
from .serializers import userSerializer, userInfoCreate
from .models import MUserInfo
from rest_framework.generics import CreateAPIView

class userInfoCreate(CreateAPIView):
    queryset = MUserInfo.objects.all()
    serializer_class = userInfoCreate