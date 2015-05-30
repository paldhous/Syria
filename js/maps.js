


var all = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_all'),
	Q12011 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q12011'),
	Q22011 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q22011'),
	Q32011 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q32011'),
	Q42011 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q42011'),
	Q12012 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q12012'),
	Q22012 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q22012'),
	Q32012 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q32012'),
	Q42012 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q42012'),
	Q12013 = L.mapbox.tileLayer('mapbox.world-black,paldhous.cities_and_countries,paldhous.Syria_Q12013');

var events = L.mapbox.markerLayer ('paldhous.mago8fn8');
	
var map = L.map('map', {
    center: new L.LatLng(35, 36.5),
    zoom: 7, 
    maxZoom: 9,
    minZoom: 5,
    layers: [all, events] 
});

var baseMaps = {
    "All": all,
    "Q1 2011": Q12011,
	"Q2 2011": Q22011,
	"Q3 2011": Q32011,
	"Q4 2011": Q42011,
	"Q1 2012": Q12012,
	"Q2 2012": Q22012,
	"Q3 2012": Q32012,
	"Q4 2012": Q42012,
	"Q1 2013": Q12013
};


var overlayMaps = {
    "Key events": events
};

var layersControl = new L.Control.Layers(baseMaps, overlayMaps, {collapsed: false});
map.addControl(layersControl);



