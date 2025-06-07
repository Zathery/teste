from django.shortcuts import render
from datetime import datetime

def index(request):
    data_inicio = datetime(2023, 10, 7)
    dias = (datetime.now() - data_inicio).days
    data_formatada = data_inicio.strftime('%d/%m/%Y')
    print(data_inicio,data_formatada,dias)
    return render(request, 'index.html', {'dias': dias, 'data': data_formatada})

# Create your views here.
