
#WebSocket in Node.JS with socket.io

### Objectives
*After this lesson, students will be able to:*

- Describe what realtime means
- Basic usage of the WebSocket APi via socket.io
- Set up WebSocket on the server side
- Use jQuery to update the client side

### Preparation
*Before this lesson, students should already be able to:*

- Create an Express app
- Configure an application to use middleware, nodemon, ejs, and morgan
- Write jQuery that updates the DOM


###ROADMAP for today

1. socket.io official documentation ["chat app"](http://socket.io/get-started/chat/) as in class code along (45 minutes)
	* Bonus challenge 1 - use [ngrok](https://ngrok.com/) `$ ./ngrok http port` to demo your app live on the web without having to deploy it (10 minutes)
	* Bonus challenge 2 - add nickname signatures to chat for each client. Broadcast customization (30 minutes + [solution code](/socket-io-chat-app/finished))
2. Afternoon hackathon in groups. Practice for Project 3. The theme is "use the WebSocket API in a Node app".
	* make use of this fantastic resource as inspiration, or to get you started: [websockets-with-twitter](/websockets-with-twitter) a markdown from Gerry Mathe, WDI London. This awesome codealong makes use of a live data stream from Twitter. 

###Intro

It is important to note that this is an advanced topic at this stage of WDI. But this is a bootcamp! The most important thing is to not be afraid to try new technologies, even if they are complex. 

Second note: "WebSocket" and "websockets" are often used interchangeably. 

Why learn about WebSocket?

So far, we have been learning the art of building RESTful APIs that handle requests from a client, to a server. The client is in control, makes requests, that are (hopefully) fullfilled/delivered. The events that drive this transaction come from the client.

---

[Mozilla resource:](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) WebSockets is an advanced technology that makes it possible to open an interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

[Wikipedia on WebSocket](https://en.wikipedia.org/wiki/WebSocket) (adapted): WebSocket is a protocol providing **full-duplex** communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF in 2011.

WebSocket is designed to be implemented in web **browsers** and web **servers**, but it can be used by any client or server application. The WebSocket Protocol is an independent **TCP-based** protocol. Its only relationship to HTTP is that its **handshake** is interpreted by HTTP servers as an Upgrade request. ~Wikipedia

The WebSocket protocol makes more interaction between a browser and a website possible, facilitating live content and the creation of real-time games. This is made possible by providing a standardized way for the **server** to send content to the **browser** without being solicited by the client, and allowing for messages to be passed back and forth while keeping the connection open. In this way a two-way (bi-directional) ongoing conversation can take place between a browser and the server. The communications are done over TCP port number 80. ~Wikipedia

---

There are many libraries for WebSocket in all languages & popular frameworks. WebSocket is not just for JS + Node. Here are three of the most popular in Node:

* [Socket.IO](http://socket.io/): A powerful cross-platform WebSocket API for Node.js.
* [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): A WebSocket server API implementation for Node.js.
* [Total.js](https://www.totaljs.com/): Web application framework for Node.js (Example: WebSocket chat)

##Codealong 

Head to [socket.io/get-started](http://socket.io/get-started/chat/) for an in class codealong of their demo chat app. 


##Extra Resources

Future technologies that might affect WebSocket.

[SPDY](https://en.wikipedia.org/wiki/SPDY)

[HTTP2](https://http2.github.io/)




