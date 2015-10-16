Template.mainlayout.events({
	'submit .my-form': function(evt, tmpl){
		evt.preventDefault();
		console.log("submit - search for location and return coords");
		console.log(tmpl.find('.location').value);
		Meteor.call('getLatLong', tmpl.find('.location').value, function (err, results) {
			var data = JSON.parse(results.content);
			var lat = data.results[0].geometry.location.lat;
			var lng = data.results[0].geometry.location.lng;
			console.log("latitude = ", lat);
			console.log("longitude = ", lng);
			Meteor.call('getWeather', lat, lng, function(err, results) {
				console.log("finished calling Meteor.getWeather()");
				console.log("err", err);
				var weather = JSON.parse(results.content)
				console.log(weather.currently.temperature + " " + weather.currently.summary);
			})
		});
	}
});
