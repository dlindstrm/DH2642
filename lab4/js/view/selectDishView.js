//SelectDishView Object constructor
var SelectDishView = function (container, model) {
  this.container = container;
  this.startersCont = container.find("#appetizer");
  this.mainsCont = container.find("#main");
  this.dessertsCont = container.find("#dessert");
  this.search = container.find("#search-input");
  this.loadingScreen = container.find("#loading-screen");
  this.tabs = container.find("#tabs");
  this.error = container.find("#error");
  this.activeTab = "appetizer";

  var _this = this;
  var populate = function(model, args) {
    console.log(args);

    if(!args) {
      return;
    }

    var parentDiv = _this.startersCont;
    if(args.type == "appetizer") {
      parentDiv = _this.startersCont;
    }
    else if(args.type == "main") {
      parentDiv = _this.mainsCont;
    }
    else if(args.type == "dessert") {
      parentDiv = _this.dessertsCont;
    }

    if(args.error) {
      _this.loadingScreen.css("display", "none");
      parentDiv.find("#error").css("display", "block");
      parentDiv.find("#error").html(args.errorMessage);
      parentDiv.find("ul").css("display", "none");
      return;
    }

    parentDiv.find("#error").css("display", "none");
    parentDiv.find("ul").css("display", "block");
    createTab(args.dishes, parentDiv.find("ul"));
  }

  var createTab = function(models, parentDiv) {
    parentDiv.html("");
    _this.loadingScreen.css("display", "none");
    _.each(models, function(obj) {
      var li = $('<li></li>');
      var link = $('<a></a>').attr('href', '#dish/' + obj.id).addClass('item-link item-content');
      var divMedia = $('<div></div>').addClass('item-media');
      var img = $('<img></img>').attr({'src': obj.image, 'width': '80'});
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

  this.showTab = function(type) {
    this.loadingScreen.css("display", "block");
    this.activeTab = type;
    model.getAllDishes(this.activeTab);
    container.find(".button-fill").removeClass("button-fill");
    container.find("#"+type+"-button").addClass("button-fill");
    container.find(".active").removeClass("active");
    container.find("#"+type).addClass("active");
    this.search.val("");
  }  

  var _this = this;
  this.update = function(model, args) {
    populate(model, args);
  }
  model.addObserver(this.update);
}