//StarView Object constructor
var NavView = function (container) {
  
  // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
  this.title = container.find("#title");
  this.buttonLeftContainer = container.find("#button-left-container");
  this.buttonLeft = container.find("#button-left");
  this.buttonRightContainer = container.find("#button-right-container");
  this.buttonRight = container.find("#button-right");
  
  this.setTitle = function(title) {
    this.title.css("display", "flex");
    this.title.html(title);
  }
  this.hideTitle = function() {
    this.title.css("display", "none");
  }
  this.setButtonRight = function(content) {
    this.buttonRightContainer.css("display", "flex");
    this.buttonRight.html(content);
  }
  this.hideButtonRight = function() {
    this.buttonRightContainer.css("display", "none");
  }
  this.setButtonLeft = function(content) {
    this.buttonLeftContainer.css("display", "flex");
    this.buttonLeft.html(content);
  }
  this.hideButtonLeft = function() {
    this.buttonLeftContainer.css("display", "none");
  }
  this.showBackButton = function(href) {
    this.buttonLeft.attr("href", href);
    this.buttonLeftContainer.css("display", "flex");
  }
}
