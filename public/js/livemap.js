$(document).ready(function(){

	var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/3a83164a47874169be4cabc2e8b8c449/33481/256/{z}/{x}/{y}.png', cloudmadeAttribution = 'UlmApi.de, Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade', cloudmade = new 	L.TileLayer(
		cloudmadeUrl, {
		maxZoom : 18,
		attribution : cloudmadeAttribution
	});

	var map = new L.Map('map', {
		center : new L.LatLng(48.399976,9.995399),
		zoom : 13,
		layers : [ cloudmade ],
		zoomControl : false
	});

		
});
