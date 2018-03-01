var formEl = document.getElementById("form");
var nameInputEl = document.getElementById("name-input");
var dateInputEl = document.getElementById("date-input");

// listens for either button pressed or enter pressed

function formHandler(){	

	// Listens for name 
	var	name = nameInputEl.value;
	// Listens for date
	var dateValueRaw = dateInputEl.value;

	var date = new Date(dateValueRaw);

	console.log("ddate",date);

	// Starts from 0
	var month = date.getUTCMonth() + 1;
	// Starts from 1
	var day = date.getUTCDate();
	var year = date.getUTCFullYear();
	
	// console.log("Name", name);
	// console.log("Date", dateValueRaw);
	console.log("Month", month);
	console.log("Day test", day);
	// prevents reload of page
	event.preventDefault();
}

formEl.addEventListener('submit',formHandler);
formEl.addEventListener('change', formHandler);