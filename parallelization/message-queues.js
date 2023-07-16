const amqp = require('amqplib');

// Connect to RabbitMQ
const connect = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'task_queue';

    // Send a task to the queue
    channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from('Task data'));

    // Consume tasks from the queue
    channel.consume(queue, (message) => {
      const task = message.content.toString();
      console.log(`Received task: ${task}`);

      // Process the task

      // Send the result back

      channel.ack(message);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

connect();
