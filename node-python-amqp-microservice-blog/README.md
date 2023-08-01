## node-python-amqp-microservice 

Useful links:

Setup RabitMQ server: https://docs.celeryq.dev/en/stable/getting-started/backends-and-brokers/rabbitmq.html

Add user to management: http://www.freekb.net/Article?id=3488

# Node-Python-AMQP-Microservice

This project is a simple demonstration of microservices using Python, NodeJS, and RabbitMQ.

## Setup

### Part 1: Setup project files

#### Step 1: Create a project directory and move inside it
```
mkdir node-python-amqp-microservice
cd node-python-amqp-microservice
```
#### Step 2: Create a backend directory and a python_celery directory
```
mkdir backend python_celery
```
#### Step 3: Move inside python_celery and let's create a python virtual environment
```
cd python_celery
python3 -m venv venv
```
#### Step 4: Activate the virtual environment and the install celery package
```
source venv/bin/activate
pip3 install celery
```
#### Step 5: Now get back to the main directory and go inside the backend directory, then install express and amqplib
```
cd ..
cd backend
npm install --save express amqplib
```
#### Step 6: Now everything is set up, let's start with python celery app

### Part 2: Configure python celery

#### Step 1: First, go inside the python_celery directory

#### Step 2: Create an app.py file and add the following
```python
from celery import Celery

app = Celery('python_celery',broker='amqps://',task_serializer='json')
```
#### Step 3: Then in the same file, We will create a task and call it asyncTask, and register it to celery
```python
@app.task(serializer='json')
def asyncTask(message):

    # Add your code here

    print(f"Task is Recieved: {message} from the backend")
    return
```
#### Step 4: Now to start the celery app, run the following command in the terminal
```
celery -A app worker  --loglevel info
```
#### Step 5: Now our celery app is ready to execute tasks. Keep it running, and Let's start building our backend.

### Part 2: Build NodeJS backend

#### Step 1: Go into the backend directory

#### Step 2: Create a celery.config.js file, and add the following
```javascript
const amqp = require('amqplib');

class Celery{

    connect = async () => {
        const connection = await amqp.connect('amqps://');
            this.channel = await connection.createChannel();
        }
}

const celery = new Celery()

const init = async () => {
    await celery.connect()
}  

module.exports.init = init
module.exports.celery = celery
```
#### Step 3: Now, to call the task specified in our python celery app, create a task.js file and add the following
```javascript
const { celery } = require('./celery.config')

async function delayQueuedTask() {

  const queueName = 'celery';
  const taskName = "app.asyncTask"

  const headers = {
    'task': taskName,
    'id': 'a855b247-8394-4be3-b744-98fa900efcdb',
    'lang': 'py',
    'argsrepr': '',
    'kwargsrepr': '{}'
  }

  const body = {
    args: [],
    kwargs:{"message":"Hey Celery!"}
  }

  const options = {
    headers:headers, 
    contentType:'application/json', 
    contentEncoding:'utf-8',
    deliveryMode: 2
  }
  await celery.channel.assertQueue(queueName);
  await celery.channel.publish('',queueName, Buffer.from(JSON.stringify(body)), options);
}

module.exports = {delayQueuedTask}
```
#### Step 4: Create an app.js file to run the server
```javascript
const {delayQueuedTask} = require('./tasks');
const express = require("express");
const celery = require("./celery.config")

// Initialize Express
const app = express()

app.get("", async (req, res)=> {

    try{
        await delayQueuedTask()
      return res.json({"Message":"task queued, check celery logs!"})
    } catch(err) {
        console.log(err)
    }
})

celery.init().then(() => {
    app.listen(8000)
  }).catch(err => {
    console.log(err)
  })
```
#### Step 5: Run the server
```
nodemon app.js
```
#### Step 6: Now, let's test our app.

### Part 3: Test our project

1. Keep both of the apps running, and hit a request from your browser to your localhost http://localhost:8000/
2. Check your celery terminal logs, you should see that the task is executed.

Congratulations!! Now you created your first microservices apps using Python, NodeJS, and RabbitMQ
