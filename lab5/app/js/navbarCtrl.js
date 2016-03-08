dinnerPlannerApp.controller('NavbarCtrl', function ($scope,Dinner,Navbar) {
	$scope.navbar = Navbar;
	$scope.title = Navbar.getTitle();
	$scope.backContent = Navbar.backContent;
	$scope.showBack = Navbar.showBack;
	$scope.showRight = Navbar.showRight;
	$scope.rightContent = Navbar.rightContent;
	$scope.execRight = function () {
		console.log("apa");
		Navbar.execRight();
	}
});