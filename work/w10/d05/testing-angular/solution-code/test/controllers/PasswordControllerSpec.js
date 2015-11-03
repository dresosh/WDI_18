describe('PasswordController', function() {
  beforeEach(module('password'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('PasswordController', { $scope: $scope });
    });

    it('sets the strength to "strong" if the password length is >8 chars', function() {
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });
  });
});


// describe('length filter', function() {

//   var $filter;

//   beforeEach(inject(function(_$filter_){
//     $filter = _$filter_;
//   }));

//   it('returns 0 when given null', function() {
//     var length = $filter('length');
//     expect(length(null)).toEqual(0);
//   });

//   it('returns the correct value when given a string of chars', function() {
//     var length = $filter('length');
//     expect(length('abc')).toEqual(3);
//   });
// });

