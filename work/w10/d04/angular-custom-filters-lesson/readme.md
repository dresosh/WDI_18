# Angular Custom Filters Lesson

### Objectives
##### Students will be able to:

- Build a custom filter in Angular
- Leverage a custom filter in a view 
- Filter we will build: checkmark, 'x', or '-'

<hr />

##### First we need a purpose, what should we filter? First thing so you know it can be done, is turn input into a checkmark, 'x', or a '-':

## Codealong - Build the HTML( 15 min )

Lets just get right into it:

Initilize bower: `bower init` - Follow steps to completion
Add angular via bower: `bower install angular`

Open an index.html file in what ever folder you just did a `bower init` in and do the following:

- Now we need an html page... so lets build it instead of using starter-code

```html
-- index.html --
<html>
  <head>
    <title>Angular Custom Filters Lesson</title>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="domain/app.js"></script>
    <script src="domain/controllers/TodosController.js"></script>
  </head>
  <body ng-app="markFilter" ng-controller="TodosController as list">
    <div ng-repeat="item in list.getAll()"> {{ item.name | mark }} - {{ item.name }}</div>
    <div ng-repeat="item in list.getAll()"> {{ 200 | USD }} </div>
    <div>
    	{{ "de donde mis pantelones?" | spanishQuestion }}
    </div>
  </body>
</html>
```

## You Do: Exersize the search - ( 15 min )

Go find a list of unicode characters we want to use... we can think of a bunch of reasons of how to use this or why we may want to (thing building your own e-currency)

__Resource__: __[List\_of\_Unicode\_characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters)__

## Codealong: Build app.js - ( 15 min )
Next lets put together that app.js:

```javascript
-- app.js --
angular
  .module( "markFilter", [] )
  .filter( "mark", function() {
    return function( input ) {
      if ( input === "checkMark") {
        return "\u2713"
      } else if ( input === "exMark") {
        return "\u2717"
      } else if ( input === "boxMark") {
        return "\u2395"
      } else {
        return input 
      }
    }
  })
  .filter( "USD", function () {
    return input => "$" + input   
  })
  .filter( "spanishQuestion", function () {
  	return input => "\u00BF" + input
  })
```
## Codealong: Build the controller - ( 15 min )
- okay, and obviously the controller:

```javascript
angular
	.module( "markFilter" )
	.controller( "TodosController", TodosController )

function TodosController () {
  this.all = [
    { name: "checkMark", visible: true },
    { name: "exMark", visible: true },
    { name: "boxMark", visible: false }
  ] 
}

TodosController.prototype.getAll = function () {
  return this.all.filter( x => {
  	return x.visible
  })
}
```


### You Do: Exersize - ( 20 min )

Take the next 35 minutes to do a microlab:

Make a quick angular app, remember to install bower, and angular. Give yourself a controller if you need or want to get to another level

- Build two custom filters
- First: Takes in a string and returns a number, (strToNum) "one"=1, "two"=2, ...etc
- Second: Takes in a number and returns a string (numToStr)
