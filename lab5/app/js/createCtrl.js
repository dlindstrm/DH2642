// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('CreateCtrl', function ($scope,Dinner,Navbar) {

  Navbar.setTitle("Create Dinn3r");
  Navbar.setBackButton("#home");
  Navbar.setRightButton("Save");
  $scope.guests = Dinner.getNumberOfGuests();
  $scope.date = Dinner.getDate();
  
  $scope.setNumberOfGuest = function(number){
    console.log($scope.guests);
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.getDate = function() {
    return Dinner.getDate();
  }

  $scope.setDate = function(date) {
    Dinner.setDate(new Date(date));
  }

  $scope.getPrice = function() {
    return Dinner.getTotalMenuPrice();
  }

  $scope.getDishes = function() {
    console.log(Dinner.getFullMenu());
    return Dinner.getFullMenu();
  }

  $scope.getDishPrice = function(id) {
    return Dinner.getDishPrice(id);
  }

  $scope.removeDish = function(id) {
    Dinner.removeDishFromMenu(id);
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});