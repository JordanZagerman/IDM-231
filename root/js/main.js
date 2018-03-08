// Sound Section

var typewriterKeyDown;
var typewriterKeyUp;
var typewriterKeyBackspaceDown;
var typewriterKeySpacebarDown;

function preload() {
  typewriterKeyDown = loadSound("typrwriter-down.wav");
}

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

// Taurus, April 21, May 20
  } else if ((month == 4 && day >= 21) || 
  			(month == 5 && day <= 20)) {
    console.log("Zodiac test", zodiacSigns[1]);

// Gemini, May 21, June 20
  } else if ((month == 5 && day >= 21) || 
  			(month == 6 && day <= 20)) {
    console.log("Zodiac test", zodiacSigns[2]);

// Cancer, June 21, July 22
  } else if ((month == 6 && day >= 1) || 
  			(month == 7 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[3]);

// Leo, July 23, August 22
  } else if ((month == 7 && day >= 23) || 
  			(month == 8 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[4]);

// Virgo, August 23, September 22
  } else if ((month == 8 && day >= 23) || 
  			(month == 9 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[5]);

// Libra, September 23, October 22
  } else if ((month == 9 && day >= 23) || 
  			(month == 10 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[6]);

// Scorpio, October 23, November 22
  } else if ((month == 10 && day >= 23) || 
  			(month == 11 && day <= 22)) {
    console.log("Zodiac test", zodiacSigns[7]);

// Sagitarius, November 23, December 21
  } else if ((month == 11 && day >= 23) || 
  			(month == 12 && day <= 21)) {
    console.log("Zodiac test", zodiacSigns[8]);
  
// Capricorn, December 22, January 19
} else if ((month == 12 && day >=22) || 
  	(month == 1 && day <= 19)) {
  	console.log("Zodiac test", zodiacSigns[9])

// Aquarius, January 20, Febuary 19
  } else if ((month == 1 && day >= 20) || 
  			(month == 2 && day <= 19)) {
    console.log("Zodiac test", zodiacSigns[10]);

// Pices, Febuary 20, March 20
  } else if((month == 2 && day >= 20) || 
  			(month == 3 && day <= 20)) {
    console.log("Zodiac test", zodiacSigns[11]);

	}
}

formEl.addEventListener('submit',formHandler);
formEl.addEventListener('change', formHandler);


