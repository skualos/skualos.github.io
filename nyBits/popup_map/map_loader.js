L.mapbox.accessToken = 'pk.eyJ1Ijoic2t1YWxvcyIsImEiOiJUaXo3NjNJIn0.MKxvY63QeYiFnj0lCYPmhA';
// Create map
var map = L.map('map').setView([40.714748, -74.001223], 13);
var stamenLayer = L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
maxZoom:18
});
stamenLayer.setOpacity(0.5);

// NY neighbourhoods layer
var neighLayer = L.tileLayer('https://{s}.tiles.mapbox.com/v3/skualos.uoxajvck/{z}/{x}/{y}.png');
neighLayer.setOpacity(1);
stamenLayer.addTo(map);
neighLayer.addTo(map);

var nprGrid = L.mapbox.gridLayer('skualos.uoxajvck').addTo(map);
nprGrid.on('click', function(e) {
if (!e.data) return;
map.fitBounds([
[parseFloat(e.data.ymin), parseFloat(e.data.xmax)],
[parseFloat(e.data.ymax), parseFloat(e.data.xmin)]
]);
});
var myGridControl = L.mapbox.gridControl(nprGrid, template="<p>{{CD}}</p>");
myGridControl.addTo(map);