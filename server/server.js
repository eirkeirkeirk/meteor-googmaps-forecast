//open weather map methods:

Meteor.methods({
/*	getWeather: function(city){
		console.log("I called the weather ", city);
		return HTTP.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=APIKEY")
	},*/

/*	getWeather: function(zipcode){
	console.log("I called the weather by zip code ", zipcode);
	return HTTP.get("http://api.openweathermap.org/data/2.5/weather?zip="+ zipcode +",us&APPID=APIKEY")
	},*/

/*	getTemperature: function(city){
	console.log("searching for temperature in ", city);
	return HTTP.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=APIKEY&units=imperial")
	},*/

	getLatLong: function(location){
		console.log("I am contacting google to get lat and long");
		// call google maps with location
		// find lat and long in response object
		// this is a GOOGLE api call, not a darksky call
	return HTTP.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ location +'&key=' + googKey);
	}
})



 // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
 //  type="text/javascript"></script>


// forecast.io methods:

//   Meteor.methods({
// 	getWeather: function(lat, lon){
// 		console.log("I called the weather ", lat, lon);
// 		return HTTP.get("https://api.forecast.io/forecast//" + lat +"," + lon)
// 	},

// 	getWeatherZip: function(zipcode){
// 	console.log("I called the weather by zip code ", zipcode);
// 	return HTTP.get("http://api.openweathermap.org/data/2.5/weather?zip="+ zipcode +",us&APPID=")
// 	},

// 	getTemperature: function(city){
// 	console.log("searching for temperature in ", city);
// 	return HTTP.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=2&units=imperial")
// 	}		
// })

  // https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE