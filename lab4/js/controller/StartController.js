//StartController Object constructor
var StartController = function (view, navView) {
  this.navView = navView;
  this.view = view;

  this.init = function() {
    $('#startView').css('display', 'block');
    this.navView.setTitle("Dinn3r Plann3r");
    this.navView.buttonLeft.unbind("click");
    this.navView.hideButtonRight();
    this.navView.hideButtonLeft();
  }
}