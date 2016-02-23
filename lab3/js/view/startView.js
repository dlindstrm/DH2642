//StarView Object constructor
var StartView = function (container, dinnerCollection) {
  
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
  this.dinnerCollection = dinnerCollection;

  this.populate = function() {
    if(this.dinnerCollection.length == 0) {
      return;
    }
    container.find(".content-block").remove();
    this.mediaBlock = $("<div></div>").addClass("list-block media-list");
    this.list = $("<ul></ul>")
    var _this = this;
    this.list.html("");
    _.each(this.dinnerCollection, function(obj, index) {
      _this.list.append(
        $('<li><a href="#dinner/'+index+'" class="item-link item-content"><div class="item-inner">'
          +'<div class="item-title-row">'+
            '<div class="item-title">'+obj.date+'</div>'+
            '<div class="item-after">'+obj.getTotalMenuPrice()+" kr</div>"+
          '</div>'+
          '<div class="item-subtitle">'+obj.guests+" ppl</div>"+
          "</div></a></li>"));
    })
    this.mediaBlock.append(this.list);
    container.append(this.mediaBlock);
  }


}
