from telethon import TelegramClient, events
from settings import TELEGRAM_API_ID, TELEGRAM_API_HASH, COMBINATIONS

client = TelegramClient('session_name', api_id=TELEGRAM_API_ID, api_hash=TELEGRAM_API_HASH)
client.start()

@client.on(events.NewMessage)
async def main(event):
    sender_chat_id = event.sender_id
    if sender_chat_id in list(COMBINATIONS.keys()):
        # send the message destination chat
        destination_chat_ids = COMBINATIONS.get(sender_chat_id, [])
        for chat_id in destination_chat_ids:
            await client.forward_messages(chat_id, event.message)

with client:
    client.run_until_disconnected()