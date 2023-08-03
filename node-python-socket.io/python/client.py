import socketio
import asyncio

sio = socketio.AsyncClient()

@sio.on('connect')
async def on_connect():
    print('Connected to Node.js server')

    while True:
        print('Python client sending message to Node.js server')
        await sio.emit('message', 'Message from Python client')
        await asyncio.sleep(5)

@sio.on('message')
def on_message(data):
    print('Python client received:', data)

async def start_client():
    await sio.connect('http://localhost:8080')
    await sio.wait()

asyncio.run(start_client())
