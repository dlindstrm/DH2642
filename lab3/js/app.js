$(function() {
  var dinners = [];

  var model = new DinnerModel();

  route('/', 'startView', function () {
  	$('#startView').css('display', 'block');
    navView.setTitle("Dinn3r Plann3r");
    navView.hideButtonRight();
    navView.hideButtonLeft();
  });
	route('dinner', 'dinnerView', function (dinnerId) {
		$('#dinnerView').css('display', 'block');
    latestDinner = dinnerId;
	  dinnerView.setModel(_.find(dinners, function(dinner){ return dinner.id == dinnerId; }));
    navView.hideButtonRight();
    navView.showBackButton('#');
	});
	route('dish', 'dishView', function (dishId) {
		$('#dishView').css('display', 'block');
	  dishView.populateView(dishId);;
	});
  route('create', 'createDinnerView', function() {
    $('#createDinnerView').css('display', 'block');
    navView.setTitle('Create dinner');
    navView.setButtonLeft('<a href="#" class="link">Cancel</a>');
    navView.setButtonRight('<a href="#" class="link">Save</a>');
  });
  route('selectDish', 'selectDishView', function(type) {
    $('#selectDishView').css('display', 'block');
    selectDishView.showTab(type);
    navView.setButtonLeft('<a href="#create" class="link">Back</a>');
    navView.hideButtonRight();
  })

  var navView = new NavView($("#navigationView"));
  navView.hideButtonRight();

  var startView = new StartView($("#startView"), dinners);

  var dinnerView = new DinnerView($("#dinnerView"), navView);

  var dishView = new DishView($("#dishView"), navView, model);

  var createDinnerView = new CreateDinnerView($("#createDinnerView"), model);

  var selectDishView = new SelectDishView($("#selectDishView"), model);

  var createDinnerController = new CreateDinnerController(createDinnerView, model);
  var selectDishController = new SelectDishController(dishView, model);
});