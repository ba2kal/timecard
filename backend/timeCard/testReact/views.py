from rest_framework import viewsets
from .serializers import TestSerializer
from .models import Test_Tbl

# Create your views here.
class TestViewSet(viewsets.ModelViewSet):
    queryset = Test_Tbl.objects.all()
    serializer_class = TestSerializer