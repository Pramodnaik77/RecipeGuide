from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import Chef, Recipe, Ingredient, Favorite

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only':True, 'required':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class ChefSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chef
        fields = ['id', 'name', 'image']

class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = ['id', 'recipe', 'name']

class RecipeSerializer(serializers.ModelSerializer):
    # ingredient = IngredientSerializer(many=True)
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'image', 'chef_id', 'chef_image', 'category', 'description', 'video_link', 'rating', 'review']

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'recipe']


# project_pm = UserSerializer()
# approvers = serializers.SerializerMethodField()