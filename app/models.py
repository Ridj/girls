from django.db import models


class Girl(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField(default=18)

    def __str__(self):
        return self.name + ', ' + str(self.age)
