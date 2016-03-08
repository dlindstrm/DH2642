dinnerPlannerApp.factory('Navbar',function (Dinner) {
  this.title;
  this.showBack = false;
  this.backContent;
  this.showRight = false;
  this.rightContent;
  var dishId = null;

  this.setTitle = function(title) {
    this.title = title;
    console.log(this.title);
  }

  this.getTitle = function() {
  	return this.title;
  }

  this.setBackButton = function(content) {
  	this.showBack = true;
  	this.backContent = content;
  }

  this.hideBackButton = function(){
  	this.showBack = false;
  }

  this.hideRightButton = function(){
    dishId = null;
  	this.showRight = false;
  }

  this.setRightButton = function(content, id) {
    console.log("setright")
    if(id) {
      dishId = id;
    }
    else {
      dishId = null;
    }
  	this.showRight = true;
  	this.rightContent = content;
  }

  this.execRight = function() {
  	if(this.rightContent == "Save") {
  	  if(Dinner.getFullMenu().length == 0) {
        alert("You cannot add a dinner without any dishes!");
      }
      else {
        window.location.hash = "#dinner";
      }
  	}
  	else if (this.rightContent == "Select") {
      Dinner.addDishToMenu(dishId);
      window.location.hash = "#create";
  	}
  }


	return this;
});