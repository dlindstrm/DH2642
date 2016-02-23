//SelectDishView Object constructor
var SelectDishView = function (container, model) {
  this.container = container;
  this.startersCont = container.find("#starters ul");
  this.mainsCont = container.find("#mains ul");
  this.dessertsCont = container.find("#desserts ul");
  this.search = container.find("#search-input");
  var createTab = function(models, parentDiv) {
    parentDiv.html("");
    _.each(models, function(obj) {
      var li = $('<li></li>');
      var link = $('<a></a>').attr('href', '#dish/' + obj.id).addClass('item-link item-content');
      var divMedia = $('<div></div>').addClass('item-media');
      var img = $('<img></img>').attr({'src': 'images/' + obj.image, 'width': '80'});
      var divInner = $('<div></div>').addClass('item-inner');
      var divTitleRow = $('<div></div>').addClass('item-title-row');
      var title = $('<div></div>').addClass('item-title').append(obj.name);
      var subtitle = $('<div></div>').addClass('item-subtitle');
      divTitleRow.append(title, subtitle);
      divInner.append(divTitleRow);
      divMedia.append(img);
      link.append(divMedia, divInner);
      li.append(link);
      parentDiv.append(li);
    })
  }

  this.createTabs = function(starters, mains, desserts) {
    createTab(starters, this.startersCont);
    createTab(mains, this.mainsCont);
    createTab(desserts, this.dessertsCont);
  }

  this.createTabs(
    model.getAllDishes("starter"),
    model.getAllDishes("main dish"),
    model.getAllDishes("dessert")
  );

  this.showTab = function(type) {
    container.find(".active").removeClass("active");
    container.find("#"+type).addClass("active");
  }
}