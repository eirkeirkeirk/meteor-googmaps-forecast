Meteor.methods({
	getWeather: function(lat, lng) {
		// console.log("I called the weather with ", lat, lng);
		var apiUrl = "https://api.forecast.io/forecast/" + forecastKey + "/" + lat + "," + lng;
		// console.log("made API call: ", apiUrl);
		var weather = HTTP.get(apiUrl, {params: {data: "JSONP"}});
		console.log("weather: ", weather);
		return weather;
	},
	getLatLong: function(location){
		console.log("I am contacting google to get lat and long for", location);
		return HTTP.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ location +'&key=' + googKey);
	}
})
