//StarView Object constructor
var StartView = function (container, models) {
  
  // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
  this.table = container.find("table")
  var _this = this;
  _.each(models, function(obj) {
    _this.table.append($("<tr><td>"+obj.date+"</td><td>"+obj.guests+" ppl</td><td>"+obj.getTotalMenuPrice()+" kr</td></tr>"));
  })
}
