//StartController Object constructor
var StartController = function (view, navView, model) {
  this.navView = navView;

  this.init = function() {
    $('#startView').css('display', 'block');
    this.navView.setTitle("Dinn3r Plann3r");
    this.navView.hideButtonRight();
    this.navView.hideButtonLeft();
  }
}