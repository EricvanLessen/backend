import asyncio
import websockets

async def server_handler(websocket, path):
    print('Client connected to Python server')

    # Send a message to the connected client every 5 seconds
    async def send_messages():
        while True:
            print('Python server sending message to client')
            await websocket.send('Message from Python')
            await asyncio.sleep(5)

    asyncio.create_task(send_messages())

    # Print messages received from the client
    async for message in websocket:
        print('Python server received:', message)

async def client_handler():
    uri = "ws://localhost:8080"
    async with websockets.connect(uri) as websocket:
        print('Connected to Node.js server')

        # Send a message to the Node.js server every 5 seconds
        async def send_messages():
            while True:
                print('Python client sending message to Node.js server')
                await websocket.send('Message from Python client')
                await asyncio.sleep(5)

        asyncio.create_task(send_messages())

        # Print messages received from the Node.js server
        async for message in websocket:
            print('Python client received:', message)

start_server = websockets.serve(server_handler, 'localhost', 9090)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_until_complete(client_handler())
asyncio.get_event_loop().run_forever()
