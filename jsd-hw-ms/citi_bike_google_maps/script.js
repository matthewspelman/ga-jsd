// GOOGLE MAP SETUP HERE:

var myMap = new google.maps.Map(document.getElementById('map'), {
	center: {
		lat: 40.7128,
		lng: -74.0060,
	},
	zoom: 12
	});


// CITIBIKE PROJECT HERE:
function renderCitiBikeMarkers(stations) {
  // YOUR CODE HERE!
  console.log(stations);

	stations.forEach(function(station) {
		console.log(station);

		var marker = new google.maps.Marker({
		    position: {
		    	lat: station.lat/1000000,
				lng: station.lng/1000000,
			},
		    map: myMap,
		    title: 'CitiBike Map NYC'
		});
	});
}


// AJAX request to fetch the station data from CitiBike's API
// Warning! Do not break this :D
$.ajax({
	type: 'GET',
	url: 'http://api.citybik.es/citi-bike-nyc.json',
	success: renderCitiBikeMarkers,
});
