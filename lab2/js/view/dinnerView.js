//DinnerView Object constructor
var DinnerView = function (container, models) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dinnerDate = container.find("#dinnerDate");
	this.totalPrice = container.find("#totalPrice");
	this.dishesList = container.find("#dishesList");

	this.populateView = function(dinner) {
		this.numberOfGuests.html(dinner.guests);
		this.dinnerDate.html(dinner.date)
		this.totalPrice.html(dinner.getTotalMenuPrice() + ":-");
		var dishes = dinner.getFullMenu();
		for(var i=0;i<dishes.length;i++) {
			var li = $('<li></li>');
			var link = $('<a></a>').attr('href', '#dish/' + dishes[i].id).addClass('item-link item-content');
			var divMedia = $('<div></div>').addClass('item-media');
			var img = $('<img></img>').attr({'src': 'images/' + dishes[i].image, 'width': '80'});
			var divInner = $('<div></div>').addClass('item-inner');
			var divTitleRow = $('<div></div>').addClass('item-title-row');
			var title = $('<div></div>').addClass('item-title').append(dishes[i].name);
			var price = $('<div></div>').addClass('item-after').append(dinner.getDishPrice(dishes[i].id) + ':-');
			var subtitle = $('<div></div>').addClass('item-subtitle').append(dishes[i].type);
			divTitleRow.append(title,price);
			divInner.append(divTitleRow, subtitle);
			divMedia.append(img);
			link.append(divMedia,divInner);
			li.append(link);
			this.dishesList.append(li);	

		}
	}

	this.table = container.find("table");


	
	
}
 
