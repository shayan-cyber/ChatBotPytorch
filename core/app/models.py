from django.db import models
class Chat(models.Model):
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.message + " from " + self.author