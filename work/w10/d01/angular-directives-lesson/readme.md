# Angular Directives

### Objectives

- Research Angular directives that are included in Angular's library
- Use ng-repeat to iterate over data
- Use ng-hide/ng-show to hide & show elements
- Use form to build forms

### Preparation

- Set up a basic Angular app
- Create a basic controller with hardcoded data

## What Are Directives? Intro (5 mins)

Directives are additional DOM nodes – think custom attributes on HTML tags – that Angular uses to apply behaviors to HTML elements. Angular comes with a bunch of different directives for different behaviors and gives you the ability to create your own.

There are a few you'll be using all the time that we're gonna walk through together, today. There are also a few you've already used – `ng-app` and `ng-controller`. You added them onto HTML tags to tell your Angular app what module we were using and what controller we wanted to ask for data from. Those are two examples of specific behaviors so let's see a few more.

## What are we building? Demo (5 mins)

Our end goal for this lesson is to build ourselves a simple little todo app. Shocking, it's true, but it'll be a great way to demonstrate both directives and interacting with controllers.

We'll have to list an array of todos, demonstrate some simple hiding & showing mechanisms, and bind some changing data via a form.

## We Do - Bower ( 10 mins )
#### setup your app

Lets get npm to install bower.io for us.

`$ npm i -g bower`

Now lets initilize bower:

`$ bower init`

This will help you build your bower.json file for your app... this manages your Front End dependancies.
Now that we have bower initilized, lets set it to work and have it go get angular for us:

`$ bower install angular --save`

Now you have angular, and its in the following folder: _(and can be updated with almost no work from you)_

`/bower_components/angular/angular.min.js`

Now anytime in the future angular updates, you have to do nothing to your index.html file and such just run:

`$ bower update`

Bingo, done!

Since you guys are killers at setting up Angular apps, take ten minutes to make empty `domain` folder, and add an `app.js` to get set up. Don't forget an index, with sourced JS files! Make those files, go go go!

## ng-repeat - Codealong ( 15 minutes )

Let's start filling in our `todosController` a little bit - add in some initial seed data:

```js
angular
    .module("todoApp", [])
    .controller("TodosController", TodosController);

function TodosController(){
  // this is our hardcoded seed data
  this.all = [
      {task: "build an awesome todo list",  hidden: false},
      {task: "get super good at Angular",   hidden: false},
      {task: "party on code",               hidden: false},
      {task: "take a nap",                  hidden: false}
  ];

}
```

This is great - we've got an array of simple objects. Granted, `.all` is whatever we want it to be, but calling it that makes it feel almost 'ActiveRecordy', doesn't it? Totally your choice, though.

Now, let's start filling out the view with this data; head over to `index.html`.

```html
<body>
  <header>
    <h1>Angular Todo App</h1>
    <h3>You have {{}} todos to do!</h3>
  </header>
</body>
```

Now, how do we get the data our controller has access to?

```html
<body ng-controller="TodosController as todos">
  <header>
    <h1>Angular Todo App</h1>
    <h3>You have {{todos.all.length}} todos to do!</h3>
  </header>
</body>
```

<img width="752" alt="screen shot 2015-07-31 at 3 45 04 am" src="https://cloud.githubusercontent.com/assets/25366/9005855/8e7bee44-3736-11e5-9276-d930778b197a.png">

Beautiful! But we need more. How do we actually list out our todos? `ng-repeat`.

```html
<ul id='todos'>
  <li ng-repeat="todo in todos.all">
    {{todo.task}}
  </li>
</ul>
```

<img width="752" alt="screen shot 2015-07-31 at 3 49 11 am" src="https://cloud.githubusercontent.com/assets/25366/9005933/1e6c49cc-3737-11e5-8f4d-3dd46a471c34.png">


Let's walk through that. First, hello `ng-repeat`! This is used for iterating over repeating elements. Rather than our old-fashioned `for` loop, Angular uses `ng-repeat` on the element we want to iterate over. Sort of like Ruby (or JavaScript's forEach), we say:

> "For each item in `todos.all`, call the one we're on `todo`."

Then, inside that element, we have access to `{{todo.whateverAttributesTodoHas}}`.

## Adding a Todo - Codealong ( 20 mins )

Now, let's see how _data binding_ works by adding to our list! We'll need a form.

```html
<form>
	<input type="text" placeholder='I need to...'>
</form>
```

Super simple - this does nothing, yet, but we need it to add to our list when we hit enter and submit it. **On the controller side, how would we write a function that adds a new item to our array?**

Maybe something like:

```javascript
//this will add our new function as a property on our controller, so we can use it in the view

// this just adds a new object to our array, with defaults for now
TodosController.prototype.add = function () {
  this.all.push( { task: 'Dummy Task', hidden: false } );
}
```

And the related HTML:

```html
<form id='add-todo' ng-submit="todos.add()">
	<input type="text" placeholder='I need to...'>
</form>
```

Obviously we don't want to only use dummy data. How do we keep an eye on what's in the input and send _that_ to our `add` function?

```js
{ task: "whatever we want", hidden: false }
```

```js
{ task: this.newTask, hidden: false }
this.newTask = ""
```

Now we know that in both the controller, and now, the view, if we access the `.newTask`, we can share data. This is where another awesome directive comes into play – `ng-model`.

In `index.html`:

```html
<form id='add-todo' ng-submit="todos.add()">
  <input type="text" placeholder='I need to...' ng-model="todos.newTask">
</form>
```

What does `ng-model` do? It binds the data not just from the controller to the view like we saw earlier but the other way around, too. As we type in our input, the actual object of `newTask` changes, specifically the `task` attribute inside that object.

Don't believe me? Let's watch it happen.

```html
<form id='add-todo' ng-submit="todos.add()">
  <input type="text" placeholder='I need to...' ng-model="todos.newTask">
</form>
<p>About to add todo: <strong>{{todos.newTask}}</strong></p>
```

You can see, it keeps the data synced, nearly in realtime. That's _powerful._

The last step is update our `todos.add()` function to utilize this new knowledge. Just like in the view, how do you think we access that newTask in our controller?

```js
function addTodo(){
  this.all.push( { task: this.newTask, hidden: false } );
  // this last piece isn't necessary, but nicely resets the task to an empty string, which will clear the textbox because the view is bound to the data
  this.newTask = '';
}
```

## ng-hide Codealong (5 mins)

We're pretty much at capacity for now, but there's one other awesome useful directive you might want to try: `ng-hide`

As an example, lets say we want to be able to hide our tasks to ignore them for later

```html
<a href="#" ng-click="todos.showHidden()">Show Hidden</a>
...
<li ng-repeat="todo in todos.all track by $index" ng-hide="todo.hidden">
...
<a href="#" ng-click="todo.hidden=true" />Hide</a> 
```


## Conclusion (5 mins)

Now, in the next lab, you're going to practice this and hopefully, learn a few extra included directives along the way.

- How do we add a function to a controller?
- How do we iterate over an array of items?
- How do we submit a form?
