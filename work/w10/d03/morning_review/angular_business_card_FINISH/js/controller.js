// This code first refers to the module we just created (called 'app').

// Then, it attaches a controller to it (which we are calling 'MainController').

// The controller takes TWO arguments - the first is the name of the controller, 
// and the second is a function that describes the behaviour of the controller.

// The controller is where we will put most of our code today. 
angular.module('app')

    .controller('MainController', MainController);

    function MainController(){
    	var vm = this;
        vm.logoIsVisible = true;

    	vm.person = {
    		name: "John",
            occupation: "Web Developer",
            email: "john@gmail.com",
            phone: "123-456-7899",
            color: "lightgray",
            borderRadius: 10
    	}

        vm.toggleLogo = function(){
            vm.logoIsVisible = !vm.logoIsVisible
        }
    	
    	// Here is where you write all the code that 
    	// describes how your controller should work!


    }

