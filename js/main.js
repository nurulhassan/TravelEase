
var trip;
var directionsService, directionsDisplay;

function initMap() {
	directionsService = new google.maps.DirectionsService();
	directionsDisplay = new google.maps.DirectionsRenderer();
	var uluru = {lat: 25.773955, lng: 78.051144};
  	var map = new google.maps.Map(
  		document.getElementById('map'));
  	url=new URL(window.location.href);
	var c = url.searchParams.get("map");
	trip =JSON.parse(atob(c));
	console.log(trip.destination);
	directionsDisplay.setMap(map);
	calcRoute();
  	}



function getloc() {
	var source = document.getElementById('from');
	var dest = document.getElementById('to');
	var autocomplete = new google.maps.places.Autocomplete(source);
	var autocomplete = new google.maps.places.Autocomplete(dest);

}


		function calcRoute() {
	console.log(trip.source);

		  var start = trip.source;
		  var end = trip.destination;
		  var request = {
		    origin: start,
		    destination: end,
		    travelMode: 'DRIVING'
		  };
		  directionsService.route(request, function(result, status) {
		    if (status == 'OK') {
		      directionsDisplay.setDirections(result);
		    }
		  });
		}


// var url_string = window.location;
// 	// var url = new URL(url_string);
// 	// var c = url.searchParams.get("map");
// 	// console.log(c);
// 	console.log(url_string);

// 	$(window).ready(function{
	
// };


	// var isrc,idest;

// function go() {
// 	var geocoder = new google.maps.Geocoder();

// 	var src = document.getElementById('source').value;
// 	var dest = document.getElementById('destination').value;
// 	geocoder.geocode({'address':src, 'address' }, function(results, status){
// 		if(status === "OK"){
// 			console.log(results[0].place_id);
// 			console.log(results[1].place_id);

// 			// sets(results[0].place_id);
// 		}
// 	});
// 	// var isrc = geocoder.geocode({'address': dest}, function(results, status){
// 	// 	if(status === "OK"){
// 	// 		// console.log(results[0].place_id);
// 	// 		setd(results[0].place_id);
// 	// 	}
// 	// });

// 	// console.log(isrc)
// 	// var url = "tdata"
// 	// $.post('./pages/tdata.php', {source:isrc, destination:idest}, function(data){
// 	// 	$('result').html(data);
// 	// });
// }

// // function sets(a) {
// // 	isrc=a
// // 	console.log(a,isrc);
// // }

// // function setd(a) {
// // 	idest=a
// // 	console.log(a,idest);
// // 	console.log(isrc,idest);

// // }

