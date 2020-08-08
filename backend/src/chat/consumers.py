


import asyncio
import json
from django.contrib.auth import get_user_model
from channels.consumer import AsyncConsumer
from channels.db import database_sync_to_async

from .models import Thread, ChatMessage


class ChatConsumer(AsyncConsumer):
    async def websocket_connect(self, event):
        print('connected', event)
        await self.send({
            "type": "websocket.accept",
        })
        other_user = self.scope['url_route']['kwargs']['username']
        me = self.scope['user']
        thread_obj = await self.get_thread(me, other_user)
        # print(other_user, me)
        # print(thread_obj)

        
        # chat_room = f"thread_{thread_obj.id}"
        # self.chat_room = chat_room
        # await self.channel_layer.group_add(
        #     chat_room,
        #     self.channel_name
        # )



    async def websocket_receive(self, event):
        print("receive", event)
        front_text = event.get('text', None)
        if front_text is not None:
            dict_loaded_data = json.loads(front_text)
            msg = dict_loaded_data.get('message')
            print(msg)
            user = self.scope['user']
            username = 'default'
            if user.is_authenticated:
                username = user.username
            myResponse = {
                "message":  msg,
                "username": username
            }
            await self.send({
                "type": "websocket.send",
                "text": json.dumps(myResponse)
            })

    async def websocket_disconnect(self, event):
        print("disconect", event)

    @database_sync_to_async
    def get_thread(self, user, other_username):
        return Thread.objects.get_or_new(user, other_username)[0]







