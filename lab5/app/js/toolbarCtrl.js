// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('ToolbarCtrl', function ($scope,Dinner) {

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.getDate = function() {
    return Dinner.getDate();
  }

  $scope.getPrice = function() {
    return Dinner.getTotalMenuPrice();
  }

});