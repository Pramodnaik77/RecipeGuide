from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer, ChefSerializer, RecipeSerializer, IngredientSerializer, FavoriteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Chef, Recipe, Ingredient, Favorite
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ChefViewSet(viewsets.ModelViewSet):
    queryset = Chef.objects.all()
    serializer_class = ChefSerializer
    authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    # permission_classes = (AllowAny,)


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

class IngredientListView(APIView):
    authentication_classes = (TokenAuthentication,)
    def get(self, request,recipe_id):
        # # Get the recipe ID from the request.
        # recipe_id = request.query_params.get('recipe_id')

        # Filter the ingredients by recipe ID.
        ingredients = Ingredient.objects.filter(recipe=recipe_id)

        # Serialize the ingredients data.
        serializer = IngredientSerializer(ingredients, many=True)
        serialized_ingredients_data = serializer.data

        # Return the serialized ingredients data.
        return Response(serialized_ingredients_data)

class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    authentication_classes = (TokenAuthentication,)
    # permission_classes = (AllowAny,)

class FavoriteDeletetView(APIView):
    authentication_classes = (TokenAuthentication,)
    def delete(self, request,recipe_id):
        # # Get the recipe ID from the request.
        # recipe_id = request.query_params.get('recipe_id')

        # Filter the ingredients by recipe ID.
        Favorite.objects.filter(recipe=recipe_id).delete()
        return Response("Deleted")
class FavoriteListView(APIView):
    authentication_classes = (TokenAuthentication,)
    def get(self, request):
        # # Get the recipe ID from the request.
        # recipe_id = request.query_params.get('recipe_id')

        # Filter the ingredients by recipe ID.
        favorites = Favorite.objects.all()
        recipeList = []
        for fav in favorites:
            recipe = Recipe.objects.get(name=fav.recipe)
            recipeList.append(recipe)
        serializer = RecipeSerializer(recipeList, many=True)
        serialized_ingredients_data = serializer.data

        # Return the serialized ingredients data.
        return Response(serialized_ingredients_data)