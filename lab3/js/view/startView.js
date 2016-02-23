//StarView Object constructor
var StartView = function (container, model) {
  
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
  this.model = model;
  this.readyContainer = container.find("#ready-dinner");
  this.numberOfGuests = container.find("#numberOfGuests");
  this.totalPrice = container.find("#totalPrice");
  this.dishesList = container.find("#dishesList");




  this.populate = function(model) {
    if(model.dishes.length == 0) {
      console.log("inne");
      this.readyContainer.css("display", "none");
      return;
    }
    this.numberOfGuests.html('');
    this.dinnerDate.html('');
    this.totalPrice.html('');
    this.dishesList.html('');
    this.numberOfGuests.html(this.model.guests);
    this.dinnerDate.html(this.model.date)
    this.totalPrice.html(this.model.getTotalMenuPrice() + ":-");
    var dishes = this.model.getFullMenu();
    for(var i=0;i<dishes.length;i++) {
      var dish = dishes[i];
      var ingredients = "";
      for(var j=0;j< dish.ingredients.length;j++) {
        ingredients += "<span>" + dish.ingredients[j].quantity + " ";
        ingredients += dish.ingredients[j].unit + " ";
        ingredients += dish.ingredients[j].name + "</span><br/>";
      }

      this.dishesList.append('<div class="card demo-card-header-pic">'+
        '<div style="background-image:url(images/'+dishes[i].image+')" valign="bottom" class="card-header color-white no-border">'+
        dishes[i].name+'</div>'+
          '<div class="card-content">'+
          '<div class="card-content-inner">'+
            '<p class="color-gray">'+ dishes[i].type + '</p>'+
            '<p>'+ingredients+'</p></div></div>'+
        '<div class="card-footer">'+dishes[i].description + '</div></div>');
    
      }
  }

  this.update = function(model, args) {
    this.populate(model);
  }
  this.populate(model);
  model.addObserver(this.update);
}
