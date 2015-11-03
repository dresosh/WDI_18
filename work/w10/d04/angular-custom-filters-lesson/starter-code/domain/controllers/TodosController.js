angular.module( "markFilter" ).controller( "TodosController", TodosController )

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
