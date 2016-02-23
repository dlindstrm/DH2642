//StarView Object constructor
var StartView = function (container, model) {
  
  // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)

  this.update = function(model, args) {

  }

  model.addObserver(this.update);
}
