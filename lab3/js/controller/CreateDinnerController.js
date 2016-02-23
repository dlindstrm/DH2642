//CreateDinnerController Object constructor
var CreateDinnerController = function (view, navView, model) {
  this.navView = navView;
  view.dateInput.on("change", function() {
    model.setDate(new Date(view.dateInput.val()));
  })
  view.guestInput.on("change", function() {
    model.setNumberOfGuests(view.guestInput.val());
  })

  this.init = function() {
    $('#createDinnerView').css('display', 'block');
    $('#toolbarView').css('display', 'block');
    this.navView.setTitle('Create dinner');
    this.navView.showBackButton('#');
    this.navView.hideButtonRight();
  }
}