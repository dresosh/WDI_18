angular.module( "InfamousCriminals" )
.controller( "CriminalsController", CriminalsController )

CriminalsController.$inject = [ "$http" ]

function CriminalsController($http){
  this.all = []
  this.newCriminal = {}
  this.$http = $http
  this.getCriminals()
}
CriminalsController.prototype.getCriminals = function () {
  this.$http
    .get( "http://localhost:3000/criminals" )
    .then( response => {
      this.all = response.data.criminals
    })
}

CriminalsController.prototype.addCriminal = function () {
  this.$http
    .post( "http://localhost:3000/criminals", this.newCriminal )
    .then( ()=> getCriminals() )
  this.newCriminal = {}
}

CriminalsController.prototype.deleteCriminal = function ( criminal ){
  this.$http
    .delete( "http://localhost:3000/criminals/" + criminal._id )
    .then( response => {
      var index = this.all.indexOf( criminal )
      this.all.splice( index, 1 )
    })
}

