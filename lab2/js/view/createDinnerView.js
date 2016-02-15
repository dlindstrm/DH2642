//CreateDinnerView Object constructor
var CreateDinnerView = function (container, model) {
}
StateController = function() {
  this.goTo = function(template) {
    $(".page-content").html();
    $(".page-content").load(view+".html");
  }
}