const { ServiceBusClient } = require("@azure/service-bus");

export const SendMessageToServiceBus = async (req,res)=>{
    
    const sbClient = new ServiceBusClient('Endpoint=sb://ftljd0262.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=5TnV7RgQVVGWeo+I3MqASDRZ+lUHL/Hco+ASbD4dD0E=');
    const sender = sbClient.createSender('ftldj');
    const messages = [req.body];
    
    try {
      // Sending messages
      await sender.sendMessages(messages);
      console.log(`Sent message(s) to the queue: ${JSON.stringify(req.body)}`);
      res.send('Message(s) sent successfully');
    } catch (error) {
      console.error('Error sending messages:', error);
      res.status(500).send('Failed to send messages');
    } finally {
      try {
        // Ensure to close the sender and Service Bus client even in case of an error
        if (sender) {
          await sender.close();
          console.log('Sender closed');
        }
        if (sbClient) {
          await sbClient.close();
          console.log('Service Bus client closed');
        }
      } catch (closeError) {
        console.error('Error closing sender or client:', closeError);
      }
    }    

}

export const viewSong = async (req, res) => {
//   const connectionString =
//     "Endpoint=sb://ftljd0262.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=5TnV7RgQVVGWeo+I3MqASDRZ+lUHL/Hco+ASbD4dD0E=";
//   const queueName = "ftldj";
//   const maxMessageCount = 12;

//   const serviceBusClient = new ServiceBusClient(connectionString);
//   const receiver = serviceBusClient.createReceiver(queueName, {
//     receiveMode: "peekLock", // Receive and lock the message
//     maxConcurrentCalls: 1, // Process one message at a time
//     prefetchCount: maxMessageCount, // Prefetch the maximum number of messages
//   });

//   const messages = [];

//   try {
//     const receivedMessages = await receiver.receiveMessages(maxMessageCount, {
//       maxWaitTimeInMs: 5000, // Maximum wait time to receive messages
//     });

//     for (const message of receivedMessages) {
//       console.log(`Received message body: ${message.body}`);
//       // Collect message bodies
//       messages.push(message.body);
//       // Complete the message to remove it from the queue
//       await receiver.completeMessage(message);
//     }

//     // Send collected message bodies as a single response
//     res.json(messages);
//   } catch (error) {
//     console.error("Error occurred:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   } finally {
//     await receiver.close();
//     await serviceBusClient.close();
//   }
};
