
# Debugging and Logging in Node

| SWBAT |
| :--- |
| Use `morgan` Middleware for Logging |
| Use `nodemon` to Restart App Automatically |
| Use `node-inspector` to Debug App |
| Understand what 'middleware' is |


## Roadmap
- Intro to Debugging
- Morgan, Your Friendly Logger
- Stop Server, Start Server - Not!
- Step-by-Step Debugging
- Maybe.... Scaffold a Skeleton ExpressJS App with express generator...

## Intro to Debugging<br><small>(5 mins)</small>

Debugging is the process of fixing our code and is fundamental to software development.

Debugging server-side code, especially Node's asynchronous code can be tricky.

In this lesson, we will look at three npm packages that are helpful to debugging and development as a whole:

  - Server-side logging with `morgan`, a middleware package.
  - Auto-restart of our ExpressJS server using `nodemon`.
  - Live debugging of server-side code with the help of `node-inspector`.

## Let's Use Blaise's App! 
This lesson will require an ExpressJS app to work with, so let's use the app we made yesterday to play around with.



## Setting up our app for debugging - Codealong (15 mins)

#### Add Middleware for custom debugging.

Middleware is a bit of a funny concept but think about it as _something_ that sits in-between express and you...kind of. Let's look at an example.

Think of **middleware** as a stack of processes that requests flow through. Each piece of middleware can perform tasks such as compiling css, authentication, etc.

Here's a useful diagram showing the ExpressJS request/response cycle:

![](https://camo.githubusercontent.com/af25dcefb2d951a9925adfc0c2c11f9684e19c1e/687474703a2f2f61647269616e6d656a69612e636f6d2f696d616765732f657870726573732d6d6964646c6577617265732e706e67)


By default, in most apps without debugging configuration, we'd be logging out the server port once it has started. That is it. We get no other information about requests or errors like we have in Rails. No biggie, though, we can use some _Middleware_ to achieve this.


## Middleware

After setting up our app and before our routes we tell our app to use a new function we are providing. That's all Middleware is! When writing custom Middleware, it's best practice to pass in the **req** object, the **res** object and finally **next**, even if we don't use it! In this case, we are about to simply log out the request method ('GET'), the request path ('/') and the request IP ('127.0.0.1' - localhost). The request object provided by Express Callbacks will give you access to a lot of properties and methods that will be really useful debugging:

* ExpressJS request object Properties
	* req.app
	* req.baseUrl
	* req.body
	* req.cookies
	* req.fresh
	* req.hostname
	* req.ip
	* req.ips
	* req.originalUrl
	* req.params
	* req.path
	* req.protocol
	* req.query
	* req.route
	* req.secure
	* req.signedCookies
	* req.stale
	* req.subdomains
	* req.xhr


You can find more details [here](http://expressjs.com/api.html#req).

## Working with Express debugging tools - Codealong (15 mins)


Open up an Express app, and let's configure our app to use Middleware.


```javascript
// Middleware
app.use(function(req, res, next) {
  console.log(req.method + " request to " + req.path + " from " + req.ip);
  next();
});

spend a couple of minutes console logging other cool stuff

```

#### Next

Take a look at `next`, what does it do?

This tells express to continue processing the request or the next piece of Middleware. You can edit the request from inside of a Middleware function so if you are writing your own - be careful!

---

## Morgan, Your Friendly Logger<br><small>(Code Along - 15 mins)</small>

We can get better logging by a piece of _middleware_ imported and then _mounted_ to the app's routing system.

Let's install morgan:

```
$ npm install morgan --save
```

Now let's `subl .` into our app and take a look at the package.json. Thr morgan module has been added, cool.

So now let's require the `morgan` module:

```js
var logger = require('morgan');
```

...and then plug it into the middleware stack:

```js
app.use(logger('dev'));
```
> Note: Middleware is executed based upon the order it is mounted.

'dev' is just a parameter that tells it to log out the HTTP verb, the path, and the response time.

Let's comment out these two lines of code and restart the server. Watch your Terminal's output while refreshing the browser - nothing, nada...

**What would happen if we moved our logger middleware between our routes like this?**

```js
app.get('/', function(req, res) {
	res.send('Hello WDI18, I love you guys!!!!');
})

app.use(logger('dev'))

app.get('/home', function(req, res) {
	res.send("Hey! Welcome to my homepage");
})
```
**Take two minutes to try it and see...**


## Stop Server, Start Server - Not!<br><small>(Code Along - 5 mins)</small>

Unfortunately, every change in the source code requires a server restart. This is because Node loads the entire application into memory once - at startup.

There's nothing quite as fun as stopping and starting the server right? If you said "Yes", you may skip to the next section :)

Fortunately, there's a Node module, [`nodemon`](http://nodemon.io/), that will watch for changes saved to our files and restart the server for us.

```
> npm install -g nodemon
```

Now we start our server by typing:<br>`> nodemon`

Move

```js
app.use(logger('dev'));
```

back above the `bodyParser`, save the file, and you'll see the server restart automatically.

A tool like `nodemon` is virtually mandatory for Node development since it saves a tremendous amount of time!

## Step-by-Step Debugging<br><small>(Code Along -  20 mins)</small>

#### `node-inspector`

Being able to set breakpoints, step through code line-by-line, inspect variables, etc., is not only valuable, it's a great way to learn how code masters write their libraries!

`node-inspector` is a dev tool that provides a visual interface to Node's built-in debugger. It uses a version of the same tooling engine that Chrome's Dev Tools does. Let's install it globally so that we don't have to install it for every app:

```
> npm install -g node-inspector
```

#### Starting in Debug Mode

Starting an app to use the debugger is not quite as straight forward as it is without debugging.  Throw in our desire to use `nodemon` for auto-restarts, along with the typical "several ways of doing something", well, you get it...

Here's the basic process:

1. In Terminal, type `> node-inspector` to start the debugger.
2. Now we need to start our app using in Node's debug mode, using `nodemon`, in a separate Terminal session:<br>`> nodemon --debug app.js`<br>
3. Open a browser window and copy/paste the URL that `node-inspector` provided - probably<br>`http://127.0.0.1:8080/?ws=127.0.0.1:8080&port=5858`
  - This will open the debugger's UI.
  - The debugger will sometimes automatically hit a breakpoint in ExpressJS's bootstrap code.  To continue loading your app, click the bluish _continue_ button<br><p align='center'>
<img src='http://s10.postimg.org/ycaokgsl1/Screen_Shot_2015_07_27_at_14_22_53.png'
</p>
4. In another browser, browse to your app at `localhost:3000`.

You are now set to debug!

**?: What is the minimum number of Terminal sessions open we will need to debug our Node app?**

**?: What is a npm package that we can install and use to debug our Node app? Is it installed locally or globally?**

#### Setting a Breakpoint

We can view the source code by clicking on the files within the _Sources_ tab of the the debugger.

Let's set a breakpoint in our `/users` route handler. The handler code is in the `routes` folder. Click on `user.js` to view its source.

To set a breakpoint, we click on the line number - line 6 is where we want to break at. Click it and a blue breakpoint marker will appear.

Browsing to `localhost:3000/users` will trigger the breakpoint and the app will not continue until we tell it to. The blue line shows the next line of code to be executed.

There are lots of things we can do now, just take a look at those **Call Stack** & **Scope Variables** windows on the right!

One of the niftiest things to do is to hover over variables that are in scope and drill into their values if they are objects.

Take a few moments to explore the `req` object passed into our handler. There are lots of properties in there like `body`, `params` and `query` that you will likely find useful when developing your apps!

Continue the code, then let's browse to `localhost:3000/users?my-param=my-value`.

When we hit our breakpoint, check the `query` property on the `req` object - sweet.

#### Stepping Through Code

Next to the blue resume button are buttons that allow you to step through, into and out of functions. Try clicking the _Step into next function call_ button.

You're now looking at the `send` function inside of the `response.js` module's source code!

Click the _Step out of current function_ button several times and watch the _Call Stack_ shrink - amazing!

Click the _Resume script execution_ button when you've been dazzled enough...


<!-- We can add some debugger statements in our different Node apps and debug the code in real time using `node-inspector`. Let's install it:

```bash
npm install -g node-inspector
```

Now you can run:


```bash
node-debug app.js
```

When a Node app is running, v8 (the javascript engine executing the code) keeps a "backdoor" open so that it is possible for another program to view what is the code executed and change the code "in realtime" without re-starting the server. This will be done using the Chrome dev tools, when you type the command above, Node will automatically launch a new instance of Google Chrome and open an inspector window that basically gives you access to all the code you typed in the files. In the left sidebar of the window, just click on `app.js`, then add a debugger statement and click on the "execute script button":

<p align='center'>
<img src='http://s10.postimg.org/ycaokgsl1/Screen_Shot_2015_07_27_at_14_22_53.png'
</p>

The console should now be stopped where you added the `debugger`statement, if you click on the tab `console` in Chrome dev tools, then you can access the variable declared before the debugger statement, as if we were debugging JavaScript in the browser!
 -->
## Debugging a Node app (25 mins)

Let's set up our app to use node-debug - in addition `Middleware`, `Morgan`, and `Nodemon` - and work through some problems we encounter.

> Note: Instructor should ensure that applications are properly configured with Middleware, Morgan, Nodemon, and node-inspector (with students) and then work through the errors in the existing code base with the class.

<!-- 
CHEATY WAY TO QUICKLY SET UP AN EXPRESS APP!

First, install the `express-generator` package:

```
> npm install -g express-generator
```

There are a few options, let's check them out:

```
> express -h
```

Even though we will not be using views in this lesson, let's generate our app as if we are using the **ejs** template engine:

```
> express -e node-app
> cd node-app
> npm install
```

Then, test that the app starts up with `npm start`, which will run the command associated with the `start` key in `package.json`.

Browse to `localhost:3000` and observe ExpressJS's welcome page. -->

#### Conclusion (5 mins)

You will need to use Debugging a lot in NodeJS, and we've shown you how to install these tools in your application:

- Why can't you use the Chrome console to debug a Node.js model, controller, or `app.js` file without `node-inspector`?
- Describe the steps to be taken to set up an Express app to log like Rails.


## Individual Practice - Set Up a New App for Debugging<br><small>(20 mins)</small>

To get some practice, you're going to set up a new app.

1. Create a new app using the `express` generator.
2. Ensure that you can browse to the Express welcome page.
3. Install `nodemon`.
4. Install `node-inspector`.
5. Start your app in debug mode and experiment setting breakpoints and inspecting objects.

## Conclusion<br><small>(5 mins)</small>

- **Why can't you use the Chrome console to debug Node.js code without using `node-inspector`?**

- **What is middleware?**

- **What is the middleware used to perform server-side logging in an ExpressJS app?**


## References

- [Morgan](https://github.com/expressjs/morgan)
- [Nodemon](https://github.com/remy/nodemon)
- [ExpressJS](http://expressjs.com/)