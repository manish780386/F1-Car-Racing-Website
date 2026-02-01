from django.urls import path
from .views import save_race

urlpatterns = [
    path("save/", save_race),
]
