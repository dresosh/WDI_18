## Angular Basics and 2-way binding

### SWBAT:
* Describe what 2-way data binding is
* Use double curly braces to bind the MODEL to the VIEW
* Use ng-model to bind the VIEW to the MODEL
* Write functions in our controller that we can use in our view


Today we're going to be using ng-model to illustrate 2-way data binding.

2-way binding is a fancy way of naming a very simple concept.

All it means is that the model can change the view, and the view can change the model.
The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa. 


![one way data merge](https://docs.angularjs.org/img/One_Way_Data_Binding.png)

![two way data binding](https://docs.angularjs.org/img/Two_Way_Data_Binding.png)


### Let's set up our angular app

1) Let's use the ng-app directive at the top of our index.html to define our page as an angular app. This effectively loads up angular, and allows us to use other directives.

2) Now let's use the ng-controller directive to attach our controller (called 'MainController') to the body. We will refer to it as 'mainCtrl' from now on.

3) Now our controller is linked up to our page!

4) Let's get to work on our controller. Whatever we attach to our controller in our app.js file will be available to use in our index.html. We use the controller function to attach properties to our controller. These can be variables or methods. The way we lay them out in the controller can look peculiar, but it makes for more readable, maintainable code. 

5) Let's create a test variable inside our controller function to make sure everything is linked up properly. 

6) Let's create a test object, to see how we can link objects to the view. 

### Your task
* Create an object in the controller called 'self.person'. Give this object a name property (with any name you like), and an occupation property (with any occupation you like).

* Now link the object to the view, so that the name and occupation appear on the business card (it should be around lines 36-38 in the index.html, within the business-card div just after the image). 

-----------------

### Did anyone get a 'pre-render flicker'?

Before Angular has a chance to process the {{mainCtrl.name}} and other double curly expressions, your users will see the brackets and the expression within them, rather than the content that should be there. You might end up seeing some ugly stuff for a half second or so before Angular kicks in. Is there any way to stop this?

-----------------

### What we have so far isn't really two-way binding.
We are just taking data from the model, and using it to update the view. We want the view to be able to update the model too! To do this, we need to use the ng-model directive inside an input tag. 

```html
<li>Name: <input type="text" ng-model="mainCtrl.name"></li>
```


### Your tasks
* Update your index.html to use the new way to bind your data to the view.
* Use ng-model for the name input and occupation input (in the settings-panel div) to allow the View to update the Model.
<br>

* Add more properties to the object (e.g. email, phone number, the name of your company), and bind them to the view so that they appear on the business card. Make sure you can update them in the settings-panel div too! (10 mins)


### Adding functions to our controller
There are two buttons on the settings-div. Let's make the 'Order now' button functional. 

### Your task (5-10 mins)
* Make the "Remove logo" button functional. Look at the steps below or check back to yesterday and ask Bill Murray for help. The key steps are: 
1 - In the controller, make sure your object has an "imageVisible" property that defaults to true. <br>
2 - In the View, add the ng-show directive to the img so that it only shows when this imageVisible variable is true. <br>
3 - Make the button run a function that sets the imageVisible variable to false.
4 - If you want, make the button toggle whether the logo is visible or not.


### Adding more data-binding to our page:

* Add a color input that can change the color of the business card (10 mins)
* Add a range input (you might need to google this) that changes the border-radius of the card (10 mins)
* Add a photo input, so that you can add a photo to your business card (10 mins). 







