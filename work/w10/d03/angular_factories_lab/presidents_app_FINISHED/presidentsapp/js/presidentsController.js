angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['presidentsFactory'];

function PresidentsController(presidentsFactory){
  var vm = this;
  vm.all = [];
  vm.addPresident = addPresident;
  vm.newPresident = {};
  vm.getPresidents = getPresidents;
  vm.deletePresident = deletePresident;

  getPresidents();

  function getPresidents(){
    presidentsFactory.index()
      .then(function(response){
        vm.all = response.data.presidents;
    });
  }

  function addPresident(president){
    presidentsFactory.create(president)
      .then(function(response){
        console.log(response)
        getPresidents();
    });
    vm.newPresident = {};
  }

  function deletePresident(president){
    console.log(president)
    presidentsFactory.destroy(president)
      .then(function(response){
        var index = vm.all.indexOf(president);
        vm.all.splice(index, 1);
      });
  }
}
