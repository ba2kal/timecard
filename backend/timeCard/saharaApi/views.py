from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse
from .serializers import userSerializer, userInfoCreate, workTimeSerializer
from .models import MUserInfo, TWorkTime
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.renderers import JSONRenderer
import json
from django.core.serializers.json import DjangoJSONEncoder

class userInfoList(ListAPIView):
    queryset = MUserInfo.objects.all()
    serializer_class = userSerializer

class timeCardList(ListAPIView):
    queryset = TWorkTime.objects.all()
    serializer_class = workTimeSerializer
    def get_object(self):
        queryset = super().get_queryset()
        serializer_class = self.get_serializer_class()
        userEmail = self.request.query_params.get('userEmail')
        queryset = queryset.filter(user_email_address=userEmail)
        resultList = []
        for i in queryset:
            result = timeCardListToJson(title=i.work_start_time+'~'+i.work_end_time, event=i.work_date)
            jsonData = json.dumps(result.__dict__)
            resultList.append(jsonData)
        return JsonResponse(resultList, safe=False)

class timeCardListToJson(object):
    def __init__(self, title: str, event: str):
        self.title = title
        self.event = event

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