var newLatLng;
var i=0;

var tmp = 0;
var trazo =[];

var onSuccess = function(position) {
    x = position.coords.latitude;
    y = position.coords.longitude;
    z = position.coords.accuracy;
    
    centerMap(x, y);

    var coord = ol.proj.transform([y, x], 'EPSG:4326', 'EPSG:3857');

    marker_geo.getGeometry().setCoordinates(coord);
    radius_geo.getGeometry().setCenter(coord);
    radius_geo.getGeometry().setRadius(z);
};

function onError(error) {
    console.log('Debe encender su GPS');
}

navigator.geolocation.watchPosition(onSuccess, onError, {
    maximumAge: 2000, timeout: 3000, enableHighAccuracy: true
});

/////////////////posición actual//////////////////
function posicion(LatLng){
    map.panTo(LatLng); //Set Center
   //inversa(x,y);
}