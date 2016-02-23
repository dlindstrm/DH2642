//SelectDishController Object constructor
var SelectDishController = function (view, model) {
  view.selectButton.click(function(e) {
    e.preventDefault();
    console.log("heeej");
    model.addDishToMenu(view.id);
    window.location.hash = "#create";
  })
}