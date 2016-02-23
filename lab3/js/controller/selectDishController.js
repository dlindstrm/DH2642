//SelectDishController Object constructor
var SelectDishController = function (view, model) {
  view.selectButton.click(function(e) {
    e.preventDefault();
    model.addDishToMenu(view.id);
  })
}