---
title: intro to testing
type: lesson
duration: '1:15'
creator:
    name: Blaise Thomas
    city: LA // Santa Monica
competencies: Testing, Client Applications
---

#Intro to Testing (part 2) 

(Testing in Angular using Karma and Jasmine)


### Objectives
*After this lesson, students will be able to:*

* Review intro to testing (part 1) and recall
	* The difference between TDD and 'retrospective' (after the fact) testing.
	* The difference between unit tests and E2E tests.
	* The differnece between test runners, testing frameworks and assertion libraries
	* How specs evaluate to true (to pass)
* Do some basic testing in Angular using Karma-Jasmine.
	* Setup, Why use a browser? 
	* Codealong

### Preparation
*Before this lesson, students should already know:*

* npm install karma -g
* Angular basics
* How to use bower and npm to manage dependencies. 


---

## Intro

Last time we looked at an intro to testing in the context of Node. 

* Did we test our express app?
* What did we test?
* What were we running our tests against?
	* Conceptual aside? Running our code against an engine.
* Client side or server side?
* Make a note of the two most important things you remembered from this lesson.


## Karma, Jasmine, Angular - Codealong (TDD style!)

First off: lets go take a look at the [Angular docs](https://docs.angularjs.org/guide/unit-testing), on testing! 


* `$ mkdir karma-tutorial`
* `$ cd karma-tutorial/`
* `$ mkdir app test`
* `$ npm init -f` default settings
* `$ npm install karma --save-dev`
* `$ npm install karma-jasmine --save-dev`
* `$ npm install karma-chrome-launcher --save-dev`
* `$ karma init`
* `$ karma init`
	accept settings for jasmine and chrome and when prompted for location of source & test files: 
	
```	
Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
>

What is the location of your source and test files ?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
> /app/**/*.js
TIMECODE:WARN [init]: There is no file matching this pattern.
> test/**/*.js
TIMECODE:WARN [init]: There is no file matching this pattern.

>
Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
> yes

```

* `$ mkdir test app`
* `$ cd test`
* `touch test.js`
* `$ subl .`

in test.js

```
describe("demo test, passes", function() {
	it("should pass if true", function() {
		true;
	})
})
```


* `$ cd ..`
* `$ karma start karma.conf.js` you should see:

```
Chrome 46.0.2490 (Mac OS X 10.10.5): Executed 1 of 1 SUCCESS (0.042 secs / 0.029 secs)
```

Add angular: 

* `$ bower install angular --save`

The ngMock module provides support to inject and mock Angular services into unit tests. In addition, ngMock also extends various core ng services such that they can be inspected and controlled in a synchronous manner within test code.

* `$ bower install angular-mocks`

The ngResource module provides interaction support with RESTful services via the $resource service.

* `$ bower install angular-resource`

in `karma.config.js` add angular, mocks + resources:

```
// list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-resource/angular-resource.js',
      'app/**/*.js',
      'test/**/*.js'
    ],
```


* `$ cd app && mkdir controllers && cd controllers && touch PasswordController.js`

(back to project root `cd ../..`)

* `$ cd test && mkdir controllers && cd controllers && touch PasswordControllerSpec.js`

Now we should be able to use the code from the [angular docs](https://docs.angularjs.org/guide/unit-testing) Let's test controllers and filters!






