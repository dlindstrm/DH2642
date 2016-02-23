//SelectDishView Object constructor
var SelectDishView = function (container, model) {
  this.startersCont = container.find("#starters ul");
  this.mainsCont = container.find("#mains ul");
  this.dessertsCont = container.find("#desserts ul");

  this.starters = model.getAllDishes("starter");
  this.mains = model.getAllDishes('main dish');
  this.desserts = model.getAllDishes('dessert');

  var createTab = function(models, parentDiv) {
    _.each(models, function(obj) {
      var li = $('<li></li>');
      var div = $('<div></div>').addClass('item-content');
      var divMedia = $('<div></div>').addClass('item-media');
      var img = $('<img></img>').attr({'src': 'images/' + obj.image, 'width': '80'});
      var divInner = $('<div></div>').addClass('item-inner');
      var divTitleRow = $('<div></div>').addClass('item-title-row');
      var title = $('<div></div>').addClass('item-title').append(obj.name);
      var subtitle = $('<div></div>').addClass('item-subtitle');
      divTitleRow.append(title, subtitle);
      divInner.append(divTitleRow);
      divMedia.append(img);
      div.append(divMedia, divInner);
      li.append(div);
      parentDiv.append(li);
    })
  }
  createTab(this.starters, this.startersCont);
  createTab(this.mains, this.mainsCont);
  createTab(this.desserts, this.dessertsCont);

  this.showTab = function(type) {
    container.find(".active").removeClass("active");
    container.find("#"+type).addClass("active");
  }
}