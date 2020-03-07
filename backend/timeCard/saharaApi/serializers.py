from rest_framework import serializers
from .models import MUserInfo

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = MUserInfo
        fields = ('user_name', 'email_address', 'password')

class userInfoCreate(serializers.ModelSerializer):
    class Meta:
        model = MUserInfo
        fields = ('user_name', 'email_address', 'password', 'creater', 'updater')
