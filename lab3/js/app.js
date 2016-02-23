$(function() {
  var dinners = [];
  var model = new DinnerModel();
  var navView = new NavView($("#navigationView"));
  navView.hideButtonRight();

  var toolbarView = new ToolbarView($("#toolbarView"), model);

  var startView = new StartView($("#startView"), dinners);

  var dinnerView = new DinnerView($("#dinnerView"), navView);

  var dishView = new DishView($("#dishView"), navView, model);

  var createDinnerView = new CreateDinnerView($("#createDinnerView"), model);

  var selectDishView = new SelectDishView($("#selectDishView"), model);

  var createDinnerController = new CreateDinnerController(createDinnerView, navView, model);
  var selectDishController = new SelectDishController(dishView, navView, model);

  route('/', 'startView', function () {
  	$('#startView').css('display', 'block');
    navView.setTitle("Dinn3r Plann3r");
    navView.hideButtonRight();
    navView.hideButtonLeft();
  });
	route('dinner', 'dinnerView', function (dinnerId) {
		$('#dinnerView').css('display', 'block');
	  dinnerView.setModel(_.find(dinners, function(dinner){ return dinner.id == dinnerId; }));
    navView.hideButtonRight();
    navView.showBackButton('#');
	});
	route('dish', 'dishView', function (dishId) {
		$('#dishView').css('display', 'block');
    $('#toolbarView').css('display', 'block');
	  dishView.populateView(dishId);
    navView.showBackButton("#selectDish/starters");
    navView.hideButtonRight();
	});
  route('create', 'createDinnerView', createDinnerController);
  route('selectDish', 'selectDishView', function(type) {
    $('#selectDishView').css('display', 'block');
    $('#toolbarView').css('display', 'block');
    selectDishView.showTab(type);
    navView.setTitle('Select dish');
    navView.showBackButton('#create');
    navView.hideButtonRight();
  })
});