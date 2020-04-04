from rest_framework.response import Response
from .serializers import userSerializer, userInfoCreate, workTimeSerializer, workTimeCreate, workTimeDelete
from .models import MUserInfo, TWorkTime
from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer
import json

class userInfoList(ListAPIView):
    queryset = MUserInfo.objects.all()
    serializer_class = userSerializer

class timeCardList(ListAPIView):
    queryset = TWorkTime.objects.all()
    serializer_class = workTimeSerializer
    def get(self, request):
        queryset = super().get_queryset()
        userEmail = self.request.query_params.get('userEmail')
        queryset = queryset.filter(user_email_address=userEmail)
        resultList = []
        if len(queryset) != 0:
            for i in queryset:
                resultDic = timeInfoToDic(title=i.work_start_time+'~'+i.work_end_time, date=i.work_date).__dict__
                resultList.append(resultDic)
        return JsonResponse(resultList, safe=False)

class timeCardPost(CreateAPIView):
    queryset = TWorkTime.objects.all()
    serializer_class = workTimeCreate
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            queryset = super().get_queryset()
            userEmail = self.request.data["user_email_address"]
            queryset = queryset.filter(user_email_address=userEmail)
            resultList = []
            if len(queryset) != 0:
                for i in queryset:
                    resultDic = timeInfoToDic(title=i.work_start_time+'~'+i.work_end_time, date=i.work_date).__dict__
                    resultList.append(resultDic)
            return JsonResponse(resultList, safe=False)
        return Response(serializer.errors, status="400")

class timeCardDelete(DestroyAPIView):
    queryset = TWorkTime.objects.all()
    serializer_class = workTimeDelete
    def delete(self, request):
        queryset = super().get_queryset().filter(work_time_id=request.data["work_time_id"])
        queryset.delete()
        queryset = super().get_queryset()
        userEmail = self.request.data["user_email_address"]
        queryset = queryset.filter(user_email_address=userEmail)
        resultList = []
        if len(queryset) != 0:
            for i in queryset:
                resultDic = timeInfoToDic(title=i.work_start_time+'~'+i.work_end_time, date=i.work_date).__dict__
                resultList.append(resultDic)
        return JsonResponse(resultList, safe=False)

class timeInfoToDic(object):
    def __init__(self, title: str, date: str):
        self.title = title
        self.date = date

class userInfoPost(CreateAPIView):
    queryset = MUserInfo.objects.all()
    serializer_class = userInfoCreate
    def post(self, request):
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request.data)
        if serializer.is_valid():
            self.create(request=request)
            return Response(serializer.data, status="200")
        return Response(serializer.errors, status="400")