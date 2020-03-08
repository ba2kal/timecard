from rest_framework.response import Response
from .serializers import userSerializer, userInfoCreate
from .models import MUserInfo
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.renderers import JSONRenderer

class userInfoList(ListAPIView):
    queryset = MUserInfo.objects.all()
    serializer_class = userSerializer
    
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