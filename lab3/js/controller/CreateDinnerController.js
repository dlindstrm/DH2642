//CreateDinnerController Object constructor
var CreateDinnerController = function (view, model) {
  view.dateInput.on("change", function() {
    model.setDate(view.dateInput.val());
  })
  view.guestInput.on("change", function() {
    model.setNumberOfGuests(view.guestInput.val());
  })
}