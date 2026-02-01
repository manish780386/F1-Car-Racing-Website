from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import RaceResult

@api_view(["POST"])
def save_race(request):
    data = request.data
    race = RaceResult.objects.create(
        player_name=data["player_name"],
        laps=data["laps"],
        time=data["time"],
    )
    return Response({"status": "saved"})
