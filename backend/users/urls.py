# from django.urls import path
# from .views import register, login, get_user_info

# urlpatterns = [
#     path('register/', register),
#     path('login/', login),
#     path('user/', get_user_info),

# ]

# users/urls.py
from django.urls import path
from .views import register, login, get_user_info

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('user/', get_user_info, name='get_user_info'),
]
