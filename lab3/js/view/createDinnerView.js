//CreateDinnerView Object constructor
var CreateDinnerView = function (container, model) {

  this.dateInput = container.find("#date-input");
  this.guestInput = container.find("#guest-input");
  this.totalPrice = container.find("#cinner-totalprice");
  this.list = container.find(".media-list ul");

  var populate = function(model) {
    this.totalPrice.html(model.getTotalMenuPrice());
    for(dish in model.getFullMenu()) {
      var newItem = $("<li></li>").html(
      '<div class="item-content"><div class="item-inner"><div class="item-title-row">'+
          '<div class="item-title">'+dish.name+'</div>'+
          '<div class="item-after">'+model.getDishPrice(dish.id)+'</div>'+
          '</div>'+
          '<div class="item-subtitle">'+dish.type+'</div>'+
          '</div></div>');
      this.list.prepend(newItem);
    }
  }

  this.update = function(model, args) {
    populate(model);
  }

  model.addObserver(this.update);
}