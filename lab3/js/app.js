$(function() {
  var model = new DinnerModel();
  var navView = new NavView($("#navigationView"));

  var toolbarView = new ToolbarView($("#toolbarView"), model);
  var startView = new StartView($("#startView"), model);
  var dinnerView = new DinnerView($("#dinnerView"));
  var dishView = new DishView($("#dishView"), model);
  var createDinnerView = new CreateDinnerView($("#createDinnerView"), model);
  var selectDishView = new SelectDishView($("#selectDishView"), model);

  var createDinnerController = new CreateDinnerController(createDinnerView, navView, model);
  var selectDishController = new SelectDishController(selectDishView, navView, model);
  var startController = new StartController(startView, navView);
  var dinnerController = new DinnerController(dinnerView, navView);
  var dishController = new DishController(dishView, navView, model);

  route('/', 'startView', startController);
	route('dinner', 'dinnerView', dinnerController);
	route('dish', 'dishView', dishController);
  route('create', 'createDinnerView', createDinnerController);
  route('selectDish', 'selectDishView', selectDishController);
});