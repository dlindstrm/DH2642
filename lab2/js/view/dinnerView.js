//DinnerView Object constructor
var DinnerView = function (container, models) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dinnerDate = container.find("#dinnerDate");
	this.totalPrice = container.find("#totalPrice");
	this.dishesTable = container.find("#dishesTable");

	this.populateView = function(dinner) {
		this.numberOfGuests.html(dinner.guests);
		this.dinnerDate.html(dinner.date)
		this.totalPrice.html(dinner.getTotalMenuPrice() + ":-");
		var dishes = dinner.getFullMenu();
		var dishesHTML = "";
		for(var i=0;i<dishes.length;i++) {
			dishesHTML = dishesHTML + "<tr><td>" + dishes[i].name + "</td><td>" + dishes[i].type + "</td><td>" + dinner.getDishPrice(dishes[i].id) + ":-</td></tr>";
		}
		this.dishesTable.html(dishesHTML);
	}

	this.table = container.find("table");


	
	
}
 
