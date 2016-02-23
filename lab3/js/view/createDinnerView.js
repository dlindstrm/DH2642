//CreateDinnerView Object constructor
var CreateDinnerView = function (container, model) {

  this.dateInput = container.find("#date-input");
  this.guestInput = container.find("#guest-input");
  this.totalPrice = container.find("#dinner-totalprice");
  this.list = container.find(".media-list ul");
  this.dateInput.val(model.getDate().toISOString().substring(0, 10));


  this.addNewDishButton = container.find("#add-new");

  var _this = this;
  this.populate = function(model) {
    _this.list.html("");
    _this.list.append(this.addNewDishButton);
    this.totalPrice.html(model.getTotalMenuPrice());
    this.guestInput.val(model.getNumberOfGuests());
    var dishes = model.getFullMenu();
    for(var i = 0; i < dishes.length; i++) {
      var dish = dishes[i];
      var newItem = $("<li></li>").html(
      '<div class="item-content"><div class="item-inner"><div class="item-title-row">'+
          '<div class="item-title">'+dish.name+' ('+dish.type+')</div>'+
          '<div class="item-after">'+model.getDishPrice(dish.id)+':-</div>'+
          '</div>'+
          '<div class="item-subtitle"><a class="remove-dish" data="'+dish.id+'" href="#">Remove</a></div>'+
          '</div></div>');
      _this.list.prepend(newItem);
    }
  }
  this.update = function(model, args) {
    _this.populate(model);
  }

  this.populate(model);
  model.addObserver(this.update);
}