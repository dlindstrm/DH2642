//DinnerController Object constructor
var DinnerController = function (view, navView, dinnerCollection) {
  this.navView = navView;
  this.view = view;
  this.dinnerCollection = dinnerCollection;
  this.init = function(dinnerId) {
    $('#dinnerView').css('display', 'block');
    this.view.setModel(this.dinnerCollection[dinnerId]);
    this.navView.setTitle(this.dinnerCollection[dinnerId].getDate());
    this.navView.hideButtonRight();
    this.navView.showBackButton('#');
  }
}
