// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner,Navbar) {
  Navbar.setTitle("Your Dinn3r");
  Navbar.hideRightButton();
  Navbar.hideBackButton();

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.getDate = function() {
    return Dinner.getDate();
  }

  $scope.getPrice = function() {
    return Dinner.getTotalMenuPrice();
  }

  $scope.getDishes = function() {
    return Dinner.getFullMenu();
  }

  $scope.getDishPrice = function(id) {
    return Dinner.getDishPrice(id);
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});