
# Angular $http

### Objectives

- Use $http to access an API resource, rather than use hardcoded data

### Preparation

- Be able to start up a Node.js app
- Be able to create an Angular app with controllers
- Understand AJAX & RESTful routing

## Intro (10 mins)

We've only been working with hardcoded data so far. Today that changes; it's time to kick it up a notch.

We're going to learn a little about an Angular module that will allow us to start communicating with real data, accessed through an API. 

Now, since we're going to be interacting with an API, in an ideal world we'd force you to write one first. You totally could. But _because_ you could, and because we'd rather skip to the new stuff, let's use a pre-built backend for this lesson.


Do a quick `GET` request in postman to `https://bowties-restful-api.herokuapp.com/api/bowties/` and make sure you're getting some JSON back. 

## Let's set up an app to interact with this API (20 mins)

We're going to need a front-end app that has an ```index.html```, and a js folder that consists of ```app.js``` (where we will make our module) and ```bowtiesController``` (where we will make our controller)


Let's start with the index.html

***********

```html
 <head>
   <meta charset="utf-8">
   <title>Funky Bowtie Shop, Yo</title>
   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
 </head>
```


Now, we set up a module. Go to your `app.js` file, and all it takes is this little line:

```js
// Define a new module. The first argument is what we want to call our app, the second is an array of dependencies (which we don't need at the moment, so there are none)
angular.module('bowtiesApp', []);
```

This sets our app up. It's important to include that array when defining a module, even if there are no dependencies – that tells Angular we're initializing a module.

Now, back in our HTML, make sure your `app.js` is included in a script tag, and add an `ng-app` directive in the `<html>` tag.
```html
<!DOCTYPE html>
<html ng-app="bowtiesApp">
  <head>
    <meta charset="utf-8">
    <title>Intro to Angular</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
    <script src="js/app.js"></script>
  </head>
```

Since we defined it in `app.js` with a name of `bowtiesApp`, we just reference what we named it here. This tells the HTML to use that module.

Now, let's just check to make sure it worked. If it worked correctly, we should be able to put some simple expression in our HTML, and Angular will render it.

```html
<body>
{{ 1 + 1 }}
</body>
```

If Angular's working, it'll add our numbers together and spit out a 2 on the page – that's how templating works in Angular, inside curly brackets.

Open it up in a browser to check. And remember – if it doesn't work, always check your browser's console for errors!


## The Controller - Codealong (15 mins)

So, in Angular's flavor of MVC, controllers are intended to primarily:

1. Respond to user actions.
2. Provide data to the view (occasionally referred to the view-model).

Now, lets stub out a new controller and plug it into our module:

```bash
touch js/bowtiesController.js
```

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('bowtiesApp')
    .controller('BowtiesController', BowtiesController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function BowtiesController() {

}
```

Now, there are two acceptable methods for defining controllers.  They are commonly referred to as the:

- _$scope_ method
- _controllerAs_ method

Now, they're the same idea – essentially a way to craft a constructor function for each controller you decide to make. Angular started by using $scope, which you can see an example of here:

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('bowtiesApp')
    .controller('BowtiesController', BowtiesController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function BowtiesController($scope) {
  $scope.bowties = [
    {material: 'silk', pattern: 'houndstooth'},
    {material: 'cotton', pattern: 'tartan'}
  ];
}
```

However, as the industry started using Angular more and more in production, people started realizing that despite the name, $scope wasn't scoped very well.

A lot of professionals have since moved on to doing it a little differently, and a little simpler.

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('bowtiesApp')
    .controller('BowtiesController', BowtiesController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function BowtiesController() {
  this.bowties = [
    {material: 'silk', pattern: 'houndstooth'},
    {material: 'cotton', pattern: 'tartan'}
  ];
}
```

The nice thing is that they're not very different, but that the latter looks far more like a normal constructor function you're used to.

Later, we'll see how you can let controllers just connect models and the views - like we're used to - but since we don't have a model, let's just hardcode some junk in there.

## Independent Practice - Adding data to your Controller (5 minutes)

Take five minutes and add some data into your `BowtiesController`. Any sort of data will do so just come up with a few different data types to play with.

- - -
```js
function BowtiesController() {
  this.bowties = [
    {material: 'silk', pattern: 'houndstooth'},
    {material: 'cotton', pattern: 'tartan'}
  ];
}
```

## Connecting Controller To The View - Codealong (10 mins)

The last step here is to connect our controller to the view. We attach any controllers to some div or HTML tag in our view. But first, make sure to include any newly created JS files.

```html
<html ng-app="bowtiesApp">
  <head>
    <meta charset="utf-8">
    <title>Funky Bowtie Shop, Yo</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/bowtiesController.js"></script>
  </head>
```

Now:

```html
<body>
  <section ng-controller="BowtiesController as bowtiesCtrl">
    {{bowtiesCtrl.bowties}}
  </section>
</body>
```

***********



SPEND 5 MINUTES TO GO THROUGH YOUR APP AND COMMENT EACH LINE!



***********


## Hitting an API with $http - Codealong (30 mins)

The simplest starting point will be to switch our hardcoded array of bowties with the one living in our new API.

Step one – **let's delete our hardcoded data.** In `bowtiesController.js`:

```diff
angular.module('bowtiesApp', [])
  .controller('BowtiesController', BowtiesController);

function BowtiesController(){
-  this.bowties = [
-    {material: 'silk', pattern: 'houndstooth'},
-    {material: 'cotton', pattern: 'tartan'}
-  ];
+  this.bowties = [];
}
```



With a little setup, we'll do a GET request to our API, and assign `this.bowties` to the array we get back. To do that, we're going to have to use an Angular library called `$http`.


### Injecting Dependencies

Angular dependencies – like libraries or plugins that other people have built – are defined first in our module (unless they come with Angular by default), and then _injected_ into any controllers that need to use them.

`$http` happens to come with Angular, so we only need to _inject_ it into our controller function. We do that with a simple command, and then by simply passing an argument to our controller function.

In `js/bowtiesController.js`:
```js

angular.module('bowtiesApp')

  .controller('BowtiesController', BowtiesController)

  BowtiesController.$inject = ['$http'];
  function BowtiesController($http){
    // ...
    // ...
    // ...
  }
```

The first tells the controller we intend to use this library called `$http`, the second allows us to pass the library in and gives it the name $http. Think of it just like any other argument in a function – because it's the first argument, and we called it $http, we can use it inside our function using that name.

### Using $http is just AJAX!

`$http` is not very different than how we've used AJAX in the past, especially with JQuery. Let's see it all, then walk through it. In `js/bowtiesController.js` again:

```js
BowtiesController.$inject = ['$http'];

function BowtiesController($http){
  var vm = this;
  vm.bowties = [];

  function getBowties(){
    $http
      .get('https://bowties-restful-api.herokuapp.com/api/bowties/')
      .then(function(response){
        console.log(response)
        vm.bowties = response.data;
    });
  }

  getBowties();

// ...
}
```

There are a few important things to note. Let's cut it down first just to $http:

```js
function BowtiesController($http){
// ...

  function getBowties(){
    $http.get('https://bowties-restful-api.herokuapp.com/api/bowties/')
      .then(function(response){
        vm.bowties = response.data;
    });
  }

  getBowties();

// ...
}
```

We call `$http`, then our favorite HTTP verb, `.get`. There's one for `.post`, too. It's asynchronous, so we'll use `.then` to make sure when it's _done_ it'll do what we want. And what we want is just to overwrite our empty `.bowties` array with the response we get back.

Feel free to `console.log(response)` and see everything that comes back. `.data` is just the data, `.

That's all we're doing in that function. Afterwords, we literally just run the function, which runs when we first load up the app. Easy.

**Now before we move on and you try it yourself, there's an important detail to note.** We've suddenly gone from:

```js
function BowtiesController($http){
  this.bowties = [];
  // ...
```
to
```js
function BowtiesController($http){
  var vm = this;
  vm.bowties = [];
  // ...
```

**Why?** The answer is JavaScript's _scope_. As you've seen in the past few weeks, `this` means different things depending on how many layers deep your code is.

In the previous example, which function is `this` scoped to?

```js
function BowtiesController($http){
// ...

  function getBowties(){
    $http.get('https://bowties-restful-api.herokuapp.com/api/bowties/')
      .then(function(response){
        // Where is 'this' scoped to?
        this.bowties = response.data;
    });
  }
// ...
}
```

We're 3 functions deep when we call `this.bowties` – `this` is no longer referring to our controller, it's referring to the window. If you left it that way, you'd never see any data, because to see it in the view, that data needs to be attached directly to our _controller_.

So what's a simple way to make sure we're scoped to the right place? A tiny little variable. The variable you choose is up to you, it's just preference. So if we do:

```js
function BowtiesController($http){
  var vm = this;
  vm.bowties = [];
// ...

  function getBowties(){
    $http.get('https://bowties-restful-api.herokuapp.com/api/bowties/')
      .then(function(response){
        vm.bowties = response.data;
    });
  }

  getBowties();

// ...
}
```

Now we can trust we're talking to the right scope.

Try refreshing your browser, let's see if it worked!


## Independent Practice (20 minutes)

Now that we've got GETing down, it's up to you to try POSTing. Just like any RESTful API, you can add a new bowtie by POSTing to the correct URL. You'll need to modify your controller action to send a new bowtie from a form to our API, and probably look up the Angular documentation to figure out how to do it.


## Conclusion (5 mins)
- How do you inject dependencies into an Angular controller?
- How do you use $http to do a GET request?
- Why did we start using `vm` instead of `this`?
- How do you do a POST request?