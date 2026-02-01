from django.db import models

class RaceResult(models.Model):
    player_name = models.CharField(max_length=50)
    laps = models.IntegerField()
    time = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.player_name
