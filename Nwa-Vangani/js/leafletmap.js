
// Initialise Map.
$(document).ready(function() {
    "use strict";
    var map = initMap(); 
});
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
function initMap() {
  // The location of the Nwa vangani school.
  var nwa = [-25.7235529, 28.38618987521903];
  var map = L.map('leafmap', {
    center: nwa,
    zoom: 16
  });
  // Add map layers.
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; '
        + '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, '
        + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
        + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamFuLWp1c3RpbiIsImEiOiJjamttZHlteWgwcDF4M3dwb3JmeG1saWpyIn0.e1I9wsxI7QgZI3z3q2jf3w'
  }).addTo(map);
  // Add marker to map.
  L.marker(nwa).addTo(map);
  // Add text popup.
  L.popup()
    .setLatLng([nwa[0] + 0.0005, nwa[1]])
    .setContent("N'Wa-Vangani Primary School")
    .openOn(map)
  return map;
}