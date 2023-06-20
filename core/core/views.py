from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ChatSerializer
from .utils.pytorchchatbot.chat import lets_chat
from app.models import Chat

@api_view(["GET","POST"])
def send_response(request):
    if request.method == "POST":
        
        serializer = ChatSerializer(data = request.data)

        if serializer.is_valid():
            print(lets_chat(serializer.data.get("text")))
            obj = Chat(message=serializer.data.get("text"), author="Author")
            obj.save()
            return Response({ "data":lets_chat(serializer.data.get("text"))})
        