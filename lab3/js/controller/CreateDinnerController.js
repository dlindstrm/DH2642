//CreateDinnerView Object constructor
var CreateDinnerController = function (view, model) {
  view.dateInput.on("change", function(value) {
    model.setDate(value);
  })
  view.guestInput.on("change", function(value) {
    model.setNumberOfGuests(value);
  })
}