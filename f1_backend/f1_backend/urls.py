from django.urls import path, include

urlpatterns = [
    path("api/race/", include("racing.urls")),
]

