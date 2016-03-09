// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner,Navbar) {
	Navbar.setBackButton("#search");
	Navbar.setRightButton("Select", $routeParams.dishId);

	$scope.isLoading = true;
	$scope.errorMsg = "";
	$scope.error = false;
	this.navBar = Navbar;
	var search = function(id) {
		var navBar = Navbar;
	   Dinner.Dish.get({id:id},function(data){
	     $scope.dish = data;
	     Navbar.setTitle(data.Title);
	     $scope.isLoading = false;
	   },function(data){
	     $scope.errorMsg = "There was an error";
	     $scope.error = true;
	     $scope.isLoading = false;
	     console.log($scope.errorMsg);
	   });
	 }
	 search($routeParams.dishId);

  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  
});