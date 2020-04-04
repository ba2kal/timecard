from rest_framework import serializers
from .models import MUserInfo
from .models import TWorkTime


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = MUserInfo
        fields = ('user_name', 'email_address', 'password')


class userInfoCreate(serializers.ModelSerializer):
    class Meta:
        model = MUserInfo
        fields = ('user_name', 'email_address',
                  'password', 'creater', 'updater')


class workTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TWorkTime
        fields = ('work_date', 'work_start_time', 'work_end_time')

class workTimeCreate(serializers.ModelSerializer):
    class Meta:
        model = TWorkTime
        fields = ('work_time_id', 'user_email_address', 'work_type', 'work_date', 'work_start_time', 'work_end_time', 'create_emp', 'update_emp')

class workTimeDelete(serializers.ModelSerializer):
    class Meta:
        model = TWorkTime
        fields = ('work_time_id', 'work_date', 'work_start_time', 'work_end_time')
