from django.urls import path 
from .views import (RouteCreateView,
                    RouteUpdateView,
                    RouteDetailView,
                    RouteList,
                    RequestList,
                    RatingList,)
                

urlpatterns = [
    path('route-create/',RouteCreateView.as_view(), name = 'create'),
    path('route-list/',RouteList.as_view(), name = 'route'),
    path('request-list/',RequestList.as_view(), name = 'request'),
    path('rating-list/',RatingList.as_view(), name = 'rating'),
    path('route-update/<str:pk>/',RouteUpdateView.as_view(), name = 'update'),
    path('route-detail/<id>/',RouteDetailView.as_view(), name = 'detail'),
]