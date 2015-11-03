angular
  .module("todoApp")
  .controller("TodosController", TodosController)

function TodosController(){
  this.todoList = [
    { id: 1, task: "build an awesome todo app",  done: false},
    { id: 2, task: "get super good at Angular",  done: false},
    { id: 3, task: "party on code",              done: false},
    { id: 4, task: "take a nap",                 done: false}
  ]
}
//function that allows us to add new todos to our todoList
TodosController.prototype.addTodo = function () {
  this.todoList.push({ 
    id: this.todoList[this.todoList.length-1].id+1,
    task: this.text,
    done: false 
  })
  this.text = null
}

//function that allows us to delete specific todos from our todoList
TodosController.prototype.deleteTodo = function ( id ) {
  this.todoList.forEach( ( x, i, arr ) => {
    if ( x.id == id ) {
      this.todoList.splice( i, 1 )
    }
  })
}
//returns a count of the tasks that have been marked as done
TodosController.prototype.completedTodos = function () {
  return this.todoList.filter( function ( x ) {
    return x.done == true
  })
}
//returns a count of the tasks that have not been marked as done
TodosController.prototype.remainingTodos = function () {
  return this.todoList.filter( function ( x ) {
    return x.done == false
  })
}
