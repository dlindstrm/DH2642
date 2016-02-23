//CreateDinnerController Object constructor
var CreateDinnerController = function (view, navView, model, dinnerCollection) {
  this.navView = navView;
  view.dateInput.on("change", function() {
    model.setDate(new Date(view.dateInput.val()));
  })
  view.guestInput.on("change", function() {
    model.setNumberOfGuests(view.guestInput.val());
  })
  $(document).on("click", ".remove-dish", function(e){
    e.preventDefault();
    var id = $(this).attr('data');
    model.removeDishFromMenu(id);
  })

  this.init = function() {
    $('#createDinnerView').css('display', 'block');
    $('#toolbarView').css('display', 'block');
    this.navView.setTitle('Create dinner');
    this.navView.showBackButton('#');
    this.navView.buttonLeft.click(function(e) {
      e.preventDefault();
      this.model = new DinnerModel();
      window.location.hash = "#";
    });

    this.navView.setButtonRight("Save");
    this.navView.buttonRight.unbind("click");
    this.navView.buttonRight.click(function(e) {
      e.preventDefault();
      if(model.getFullMenu().length == 0) {
        alert("You cannot add a dinner without any dishes!");
      }
      else {
        dinnerCollection.push(model);
      }
      window.location.hash = "#";
    });
  }
}