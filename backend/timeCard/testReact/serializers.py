from rest_framework import serializers
from .models import Test_Tbl

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test_Tbl
        fields = ['id', 'password', 'name']