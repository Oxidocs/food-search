var x = 0;
var y = 0; 
var z = 0;
var marker_geo;
var radius_geo;
var map;

function initMap(){

    marker_geo = new ol.Feature(new ol.geom.Point([0, 0]));

    radius_geo = new ol.Feature(new ol.geom.Circle([0,10,1]));

    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            new ol.layer.Vector({
                source: new ol.source.Vector({
                features: [marker_geo, radius_geo]
                }),
                style: new ol.style.Style({
                    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                        // anchor: [0.5, 46],
                        // anchorXUnits: 'fraction',
                        // anchorYUnits: 'pixels',
                        // opacity: 0.95,
                        src: 'img/geolocation.png'
                    })),
                    stroke: new ol.style.Stroke({
                        // width: 3,
                        color: [0, 0, 255, 0.8],
                    }),
                    fill: new ol.style.Fill({
                        color: [0, 0, 255, 0.1],
                    })
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([0, 0]),
            zoom: 19
        })
    });
}

function centerMap(lat, long) {
    map.getView().setCenter(ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
}