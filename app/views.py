from django.shortcuts import render
from django.http import JsonResponse
from .models import Girl


def girls_api(request):
    girls = list(Girl.objects.all().order_by('-id').values('name', 'age'))
    return JsonResponse(girls, safe=False)


def index(request):
    return render(request, 'index.html')

