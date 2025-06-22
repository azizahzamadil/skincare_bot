from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from django.contrib.auth import authenticate  # Import the authenticate function


@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    # serializer = LoginSerializer(data=request.data)
    # if serializer.is_valid():
    #     # Use the validated username and password to authenticate the user
    #     username = serializer.validated_data['username']
    #     password = serializer.validated_data['password']
    #     user = authenticate(username=username, password=password)

    #     if user:
    #         token, _ = Token.objects.get_or_create(user=user)
    #         return Response({'token': token.key})
    #     return Response({'detail': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   serializer = LoginSerializer(data=request.data)  # Use the LoginSerializer
   if serializer.is_valid():
        # Access the user object from the validated data
        user = serializer.validated_data['user']

        # Create or get the token for the authenticated user
        token, _ = Token.objects.get_or_create(user=user)
        
        # Return the token in the response
        return Response({'token': token.key})
    
   return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    user = request.user
    return Response({
        "username": user.username,
        "email": user.email,
        "full_name": user.get_full_name()
    })


class SomeProtectedView(APIView):
    authentication_classes = [TokenAuthentication]  # Require token authentication
    permission_classes = [IsAuthenticated]  # Only authenticated users can access this

    def get(self, request):
        return Response({"message": "This is a protected endpoint!"})
