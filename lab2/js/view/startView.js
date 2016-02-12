//StarView Object constructor
var StartView = function (container, models) {
  
  // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
  this.list = container.find("ul")
  var _this = this;
  _.each(models, function(obj) {
    _this.list.append(
      $('<li class="with-chevron"><a href="#">'
        +'<strong>'+obj.date+'</strong>'+obj.guests+" ppl "+obj.getTotalMenuPrice()+"</a></li>"));
  })
}
