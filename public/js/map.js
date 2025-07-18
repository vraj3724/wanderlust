mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: coords,
  zoom: 11,
});

console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" }) 
  .setLngLat(coordinates)                              
  .setPopup(                                          
    new mapboxgl.Popup({ offset: 25 })               
      .setHTML("<h4>You'll be here</h4>")
      .setMaxWidth("200px")           
  )
  .addTo(map);                                       

