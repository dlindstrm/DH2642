$(function() {

	var model = new DinnerModel(4, "2016-02-12", 6);
	model.addDishToMenu(3);
	model.addDishToMenu(1);
	model.addDishToMenu(101);

  var dinners = [];
	var dinner1 = new DinnerModel(1, "2016-01-01", 6);
  dinners.push(dinner1);
	var dinner2 = new DinnerModel(2, "2016-01-02", 8);
  dinners.push(dinner2);
  var dinner3 = new DinnerModel(3, "2016-01-03", 12);
  dinners.push(dinner3);
  dinners.push(model);

  route('/', 'startView', function () {
  	$('#startView').css('display', 'block');
    navView.setTitle("Dinn3r Plann3r");
  });
	route('dinner', 'dinnerView', function (dinnerId) {
		$('#dinnerView').css('display', 'block');
	    dinnerView.setModel(_.find(dinners, function(dinner){ return dinner.id == dinnerId; }));
	});
	route('dish', 'dishView', function (dishId) {
		$('#dishView').css('display', 'block');
	    dishView.populateView(dishId)
	});
  route('create', 'createDinnerView', function() {
    $('#createDinnerView').css('display', 'block');
    navView.setTitle('Create dinner');
  });
  route('selectDish', 'selectDishView', function(type) {
    $('#selectDishView').css('display', 'block');
    selectDishView.showTab(type);
  })

  var navView = new NavView($("#navigationView"));
  navView.hideButtonRight();
  navView.hideButtonLeft();

  var startView = new StartView($("#startView"), dinners);

  var dinnerView = new DinnerView($("#dinnerView"),navView);

  var dishView = new DishView($("#dishView"),navView);

  var createDinnerView = new CreateDinnerView($("#createDinnerView"), new DinnerModel());

  var selectDishView = new SelectDishView($("#selectDishView"), new DinnerModel());
});