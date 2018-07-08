from django.db import models

class Girl(models.Model):
    girl_name = models.CharField(max_length=30)
    girl_age = models.IntegerField(default=18)

    def __str__(self):
        return self.girl_name + ', ' + str(self.girl_age)
