
// Form Section Start

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

	console.log("date",date);

	// Starts from 0
	var month = date.getUTCMonth() + 1;
	// Starts from 1
	var day = date.getUTCDate();
	var year = date.getUTCFullYear();
	
	// console.log("Name", name);
	// console.log("Date", dateValueRaw);
	console.log("Month test", month);
	console.log("Day test", day);
	// prevents reload of page
	event.preventDefault();

	// Array of Zodiac signs
	 var zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ]

// Aries, March 21 - April 20
	if ((month == 3 && day >= 21) || 
  		(month == 4 && day <= 20)) {
    console.log("Zodiac test", zodiacSigns[0]);
    window.location.href = "pages/aries.html";


// Taurus, April 21, May 20
  } else if ((month == 4 && day >= 21) || 
  			(month == 5 && day <= 20)) {
    console.log("Zodiac test", zodiacSigns[1]);
        window.location.href = "pages/taurus.html";

// Gemini, May 21, June 20
  } else if ((month == 5 && day >= 21) || 
  			(month == 6 && day <= 20)) {
    console.log("Zodiac test", zodiacSigns[2]);
    window.location.href = "pages/gemini.html";

// Cancer, June 21, July 22
  } else if ((month == 6 && day >= 1) || 
  			(month == 7 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[3]);
    window.location.href = "pages/cancer.html";

// Leo, July 23, August 22
  } else if ((month == 7 && day >= 23) || 
  			(month == 8 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[4]);
    window.location.href = "pages/leo.html";

// Virgo, August 23, September 22
  } else if ((month == 8 && day >= 23) || 
  			(month == 9 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[5]);
    window.location.href = "pages/virgo.html";

// Libra, September 23, October 22
  } else if ((month == 9 && day >= 23) || 
  			(month == 10 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[6]);
    window.location.href = "pages/libra.html";

// Scorpio, October 23, November 22
  } else if ((month == 10 && day >= 23) || 
  			(month == 11 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[7]);
    window.location.href = "pages/scorpio.html";

// Sagittarius, November 23, December 21
  } else if ((month == 11 && day >= 23) || 
  			(month == 12 && day <= 21)) {
    console.log("Zodiac test", zodiacSigns[8]);
    window.location.href = "pages/sagittarius.html";
  
// Capricorn, December 22, January 19
} else if ((month == 12 && day >=22) || 
  	(month == 1 && day <= 19)) {
  	console.log("Zodiac test", zodiacSigns[9])
    window.location.href = "pages/capricorn.html";

// Aquarius, January 20, Febuary 19
  } else if ((month == 1 && day >= 20) || 
  			(month == 2 && day <= 19)) {
    console.log("Zodiac test", zodiacSigns[10]);
    window.location.href = "pages/aquarius.html";

// Pisces, Febuary 20, March 20
  } else if((month == 2 && day >= 20) || 
  			(month == 3 && day <= 20)) {
    console.log("Zodiac test", zodiacSigns[11]);
    window.location.href = "pages/pisces.html";

	}
}

formEl.addEventListener('submit',formHandler);
formEl.addEventListener('change', formHandler);

// fade to Black When button is pressed