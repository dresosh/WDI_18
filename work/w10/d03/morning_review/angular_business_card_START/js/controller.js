// This code first refers to the module we just created (called 'app').

// Then, it attaches a controller to it (which we are calling 'MainController').

// The controller takes TWO arguments - the first is the name of the controller, 
// and the second is a function that describes the behaviour of the controller.

// The controller is where we will put most of our code today. 
angular
	.module('app')
    .controller('MainController', MainController);

    MainController.$inject = ['$http']

    function MainController($http){
    	var vm = this;

        vm.logoIsVisible = true;

    	vm.person = {
    		name: "John",
            occupation: "Dolphin trainer",
            email: "",
            phone: "",
            color: "",
            borderRadius: ""
    	}
    	
        vm.toggleLogo = function(){
            vm.logoIsVisible = !vm.logoIsVisible
        }

        vm.orderNow = function(){
            // $http.post("https://www.localhost:3000/api/persons", vm.person)
            // .then(function(){
            //     console.log("success!")
            // })
            console.log('thanks for ordering')
        }

    	// Here is where you write all the code that 
    	// describes how your controller should work!


    }

