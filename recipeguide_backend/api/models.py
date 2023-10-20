from django.db import models

class Chef(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=150)
    def __str__(self):
        return self.name

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=150)
    chef_id = models.ForeignKey(Chef, on_delete=models.CASCADE)
    chef_image = models.CharField(max_length=150)
    rating = models.IntegerField(default=0)
    category = models.CharField(max_length=100,default="")
    description = models.CharField(max_length=5000,default="")
    video_link = models.CharField(max_length=500,default="")
    review = models.CharField(max_length=1000,default="")
    class Meta:
        unique_together = (('name', 'chef_id'),)
    def __str__(self):
        return self.name

class Ingredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    name = models.CharField(max_length=500,default="")

    def __str__(self):
        return self.name

class Favorite(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('id', 'recipe'),)