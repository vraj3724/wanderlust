mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  projection: 'globe',
  zoom: 6,
  center: [72.5714, 23.0225]
});

// Optional: Add a console log to confirm map loads its content
map.on('load', () => {
    console.log('Map has loaded all its resources!');
});