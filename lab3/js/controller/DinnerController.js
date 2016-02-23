//DinnerController Object constructor
var DinnerController = function (view, navView, dinnerCollection) {
  this.navView = navView;
  this.view = view;
  this.dinnerCollection = dinnerCollection;
  this.init = function(dinnerId) {
    $('#dinnerView').css('display', 'block');
    this.view.setModel(dinnerCollection[dinnerId]);
    this.navView.hideButtonRight();
    this.navView.showBackButton('#');
  }
}
