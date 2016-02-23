//DinnerController Object constructor
var DinnerController = function (view, navView, model) {
  this.navView = navView;
  this.init = function(dinnerId) {
    $('#dinnerView').css('display', 'block');
    this.navView.setTitle("Your dinner on the " + model.getFormattedDate());
    this.navView.hideButtonRight();
    this.navView.hideButtonLeft();
  }
}
