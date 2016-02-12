//StarView Object constructor
var NavView = function (container) {
  
  // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
  this.title = container.find("#title");
  this.buttonLeft = container.find("#button-left");
  this.buttonRight = container.find("#button-right");
  
  this.setTitle = function(title) {
    this.title.css("display", "inline-block");
    this.title.html(title);
  }
  this.hideTitle = function() {
    this.title.css("display", "none");
  }
  this.setButtonRight = function(content) {
    this.buttonRight.css("display", "inline-block");
    this.buttonRight.html(content);
  }
  this.hideButtonRight = function() {
    this.buttonRight.css("display", "none");
  }
  this.setButtonLeft = function(content) {
    this.buttonLeft.css("display", "inline-block");
    this.buttonLeft.html(content);
  }
  this.hideButtonLeft = function() {
    this.buttonLeft.css("display", "none");
  }
}
