// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  $scope.isLoading = true;
  $scope.error = "";
  $scope.appetizers = [];
  $scope.mains = [];
  $scope.desserts = [];
  $scope.activeTab = "appetizers";

  var getDishes = function(query) {
    var type;
    if($scope.activeTab == "appetizers") {
      type = "appetizer";
    }
    else if($scope.activeTab == "mains") {
      type = "main dish";
    }
    else if($scope.activeTab == "desserts") {
      type = "dessert";
    }

    $scope.isLoading = true;

    var getParams;
    if(query === "") {
      getParams = {title_kw:type}
    }
    else {
      getParams = {title_kw:type, any_kw:query};
    }
    Dinner.DishSearch.get(getParams,function(data){
      populateTab(data.Results);
      $scope.isLoading = false;
    },function(data){
      $scope.error = "There was an error querying dishes, please check you connection.";
      $scope.isLoading = false;
    });
  }

  var populateTab = function(dishes) {
    if($scope.activeTab == "appetizers") {
      $scope.appetizers = dishes;
    }
    else if($scope.activeTab == "mains") {
      $scope.mains = dishes;
    }
    else if($scope.activeTab == "desserts") {
      $scope.desserts = dishes;
    }
  }

  $scope.search = function() {
    getDishes($scope.searchQuery);
  }

  $scope.changeTab = function(tab) {
    $scope.activeTab = tab;
    getDishes($scope.searchQuery);
  }

  $scope.showTab = function(tab) {
    return $scope.activeTab === tab;
  }

  getDishes("");
});