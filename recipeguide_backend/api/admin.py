from django.contrib import admin
from .models import Chef, Recipe, Ingredient

admin.site.register(Chef)
admin.site.register(Recipe)
admin.site.register(Ingredient)
