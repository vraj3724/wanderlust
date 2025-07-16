mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: coords,
  zoom: 11,
});

console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" }) // 🔴 The red pin
  .setLngLat(coordinates)                              // 📍 Set location
  .setPopup(                                          // 💬 Attach popup
    new mapboxgl.Popup({ offset: 25 })                // offset makes it float nicely
      .setHTML("<h4>You'll be here</h4>")
      .setMaxWidth("200px")            // popup content
  )
  .addTo(map);                                        // add it to the map

