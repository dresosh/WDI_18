angular
  .module( "todoApp", [] )
  .controller( "TodosController", TodosController )
  //.directive( "newTask", newTask )

function TodosController () {
  // this is our hardcoded seed data
  this.all = [
      { task: "Get good at AngularJS",      hidden: false },
      { task: "Build an awesome todo list", hidden: false },
      { task: "Party on code",              hidden: false },
      { task: "Take a nap",                 hidden: false }
  ]
}

TodosController.prototype.showHidden = function () {
  this.all.forEach( function ( obj ) {
    obj.hidden = false
  })  
}

TodosController.prototype.add = function ( ) {
  this.all.push( { task: this.newTask, hidden: false } )
  this.newTask = ''
}

TodosController.prototype.remove = function ( index ) {
    this.all.splice( index, 1 )
}
/*
function newTask () {
  return {
    
    link: function (scope, element, attrs) {
      
      element.on( 'submit', function ( e ) {
        scope.todos.all.push( { task: this.querySelector("input").value, hidden: false } ) 
        scope.$apply()
      })

    }

  }
}*/
