from rest_framework import serializers

class ChatSerializer(serializers.Serializer):
    text = serializers.CharField(max_length = 40)