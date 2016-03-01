$(function() {
  var bigOvenRestService = new BigOvenRestService();
  var model = new DinnerModel(bigOvenRestService);
  var navView = new NavView($("#navigationView"));

  var toolbarView = new ToolbarView($("#toolbarView"), model);
  var startView = new StartView($("#startView"), model);
  var dinnerView = new DinnerView($("#dinnerView"), model);
  var dishView = new DishView($("#dishView"), model);
  var createDinnerView = new CreateDinnerView($("#createDinnerView"), model);
  var selectDishView = new SelectDishView($("#selectDishView"), model);

  var createDinnerController = new CreateDinnerController(createDinnerView, navView, model);
  var selectDishController = new SelectDishController(selectDishView, navView, model);
  var startController = new StartController(startView, navView);
  var dinnerController = new DinnerController(dinnerView, navView, model);
  var dishController = new DishController(dishView, navView, model);

  route('/', 'startView', startController);
	route('dinner', 'dinnerView', dinnerController);
	route('dish', 'dishView', dishController);
  route('create', 'createDinnerView', createDinnerController);
  route('selectDish', 'selectDishView', selectDishController);

});