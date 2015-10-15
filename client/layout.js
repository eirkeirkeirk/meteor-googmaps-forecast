
Template.mainlayout.helpers({
	currentweather: function(){
		var city = Session.get('city');
		Meteor.call('getWeather', city, function(err, results){
			console.log(results.content);
			Session.set('weather', JSON.parse(results.content).weather[0].description);
		});
	return (Session.get('weather') + ' in ' + city).toUpperCase();
	},
	
	currentweatherZip: function(){
		var zip = Session.get('zip');
		Meteor.call('getWeatherZip', zip, function(err, results){
			console.log(JSON.parse(results.content).weather[0].description);
			Session.set('weather', JSON.parse(results.content).weather[0].description);
		}); 
	return (Session.get('weather') + ' in ' + zip).toUpperCase();
	},
	
	currentTemperature: function(){
		var city = Session.get('city');
		Meteor.call('getTemperature', city, function(err, results){
			console.log(results.content);
			Session.set('minTemperature', JSON.parse(results.content).main.temp_min);
			Session.set('maxTemperature', JSON.parse(results.content).main.temp_max);
		});	
	return (Session.get('minTemperature') + ('\u00B0') + " / " + Session.get("maxTemperature")+('\u00B0'));
	},
	
	currentTemperatureZip: function(){
		var zip = Session.get('zip');
		Meteor.call('getTemperature', zip, function(err, results){
			console.log(results.content);
			Session.set('minTemperature', JSON.parse(results.content).main.temp_min);
			Session.set('maxTemperature', JSON.parse(results.content).main.temp_max);
		});	
	return (Session.get('minTemperature') + ('\u00B0') + " / " + Session.get("maxTemperature")+('\u00B0'));
	},

	latLong: function(){
		var location = Session.get('myLocation');

		Meteor.call('getLatLong', location, function(err, results){
			var data = JSON.parse(results.content);
			console.log("latitude = ",data.results[0].geometry.location.lat);
			console.log("longitude = ",data.results[0].geometry.location.lng);

			//console.log(results.content);
			Session.set('lat', data.results[0].geometry.location.lat);
			Session.set('lon', data.results[0].geometry.location.lng);
		});

	}

});

Template.mainlayout.events({
	
	'change .city': function(evt,tmpl){
		console.log(tmpl.find('.city').value);
		Session.set('city', tmpl.find('.city').value);
	},
	
	// 'submit .my-form': function(evt,tmpl){
	// 	console.log("submit");
	// 	evt.preventDefault();
	// 	console.log(tmpl.find('.zip-enter').value);
	// 	Session.set('zip', tmpl.find('.zip-enter').value);
	// },
	
	'submit .my-form': function(evt, tmpl){
		console.log("submit - search for location and return coords");
		evt.preventDefault();
		console.log(tmpl.find('.location').value);
		Session.set('myLocation', tmpl.find('.location').value);
	}

});







