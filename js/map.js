/* eslint-disable no-undef */
/**
 * Simple map
 */

// config map
let config = {
  minZoom: 7,
  maxZoom: 20,
};
// magnification with which the map will start
const zoom = 18;
// co-ordinates
const lat = 52.22977;
const lng = 21.01178;

// calling map
// const map = L.map("map", config).setView([lat, lng], zoom);
// Define image bounds (coordinates of top-left and bottom-right corners)
const imageBounds = [
  [52.230575860661446, 21.00922287843673], // Top-left corner
  // [52.230236125511354, 21.00922287843673], // Top-left corner
  [52.2290151603136, 21.014331919752465], // Bottom-right corner
];

const map = L.map("map", {
    center: [lat,lng], // Set center
    zoom: zoom,  // Initial zoom level
    zoomControl: true, // Enable zoom controls (default: true)
    dragging: false,
    maxBounds: imageBounds, // Restrict panning outside this area
    maxBoundsViscosity: 1.0 // Makes panning feel "bounded"
  });
  

  // Add image overlay
  L.imageOverlay("img/gnd_floor.png", imageBounds).addTo(map);

  map.on("click", function (e) {
    console.log("Clicked at: ", e.latlng.lat, e.latlng.lng);
});


  // Define popup with content
// Define popup with content and custom class
const popup = L.popup({
  className: "custom-popup" // Add custom class
})

// .setLatLng([52.22977, 21.01178]) // Set popup location
// .setContent("Demo A!");

// const popup = L.popup()
// .setLatLng([52.22977, 21.01178]) // Set popup location
// .setContent("Demo A! 🎉");

// Open popup when clicking the link
// document.getElementById("A").addEventListener("click", function (event) {
// event.preventDefault(); // Prevent page reload
// popup.openOn(map); // Open popup on map
// });

// Function to show a popup at the given coordinates
function showPopup(lat, lng, name) {
  popup.setLatLng([lat, lng])
      .setContent(`<b>${name}</b>`)
      .openOn(map);
}
