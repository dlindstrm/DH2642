$(function() {
  var dinners = [];
	var dinner = new DinnerModel(4, "2016-02-12", 2);
	dinner.addDishToMenu(1);
	dinner.addDishToMenu(100);
	dinner.addDishToMenu(200);
  dinners.push(dinner);
	var dinner1 = new DinnerModel(1, "2016-01-01", 6);
  dinner1.addDishToMenu(2);
  dinner1.addDishToMenu(101);
  dinner1.addDishToMenu(201);
  dinners.push(dinner1);
	var dinner2 = new DinnerModel(2, "2016-01-02", 8);
  dinner2.addDishToMenu(3);
  dinner2.addDishToMenu(102);
  dinner2.addDishToMenu(202);
  dinners.push(dinner2);

  var latestDinner = 0;
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
	  dishView.populateView(dishId);
    navView.hideButtonRight();
    navView.showBackButton('#dinner/'+latestDinner);
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
    navView.setButtonLeft('<a href="#create" class="link">Cancel</a>');
    navView.setButtonRight('<a href="#create" class="link">Select</a>');
  })

  var navView = new NavView($("#navigationView"));
  navView.hideButtonRight();

  var startView = new StartView($("#startView"), dinners);

  var dinnerView = new DinnerView($("#dinnerView"),navView);

  var dishView = new DishView($("#dishView"),navView);

  var createDinnerView = new CreateDinnerView($("#createDinnerView"), new DinnerModel());

  var selectDishView = new SelectDishView($("#selectDishView"), new DinnerModel());
});