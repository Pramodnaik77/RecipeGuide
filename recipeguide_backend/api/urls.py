
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, ChefViewSet, RecipeViewSet, IngredientViewSet, IngredientListView, FavoriteViewSet, FavoriteDeletetView, FavoriteListView

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('chefs', ChefViewSet)
router.register('recipe', RecipeViewSet)
router.register('ingredient', IngredientViewSet)
router.register('favorite', FavoriteViewSet)
# router.register('ingredient/<int:recipe_id>/', IngredientListView.as_view(), basename='MyIngredient')
# router.register('ingredient/', IngredientListView)
# router.register(r'my-model/', MyModelView, basename='MyModel')
urlpatterns = [

    path('', include(router.urls)),
    path('api/ingredient/<int:recipe_id>/', IngredientListView.as_view()),
    path('api/favorite/<int:recipe_id>/', FavoriteDeletetView.as_view()),
    path('api/favorites/', FavoriteListView.as_view()),

]