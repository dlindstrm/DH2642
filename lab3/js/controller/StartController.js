//StartController Object constructor
var StartController = function (view, navView) {
  this.navView = navView;
  this.view = view;

  this.init = function() {
    $('#startView').css('display', 'block');
    this.view.populate();
    this.navView.setTitle("Dinn3r Plann3r");
    this.navView.hideButtonRight();
    this.navView.hideButtonLeft();
  }
}