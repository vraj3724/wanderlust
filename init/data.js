const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    shortDescription: "Room in Malibu",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 106,
    location: "Malibu",
    country: "United States",
    about: "Welcome to our cozy beachfront cottage, ideally located in Malibu. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 queen bed + workspace , Private bath",
    amenities: [ "Wi-Fi", "Air conditioning", "Private pool", "Kitchen" ],
    host: "6866f0bfecc70b0ebf47c992",
    availability: "10 - 12 September",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    },
    category: "Beach"

  },
  {
    title: "Modern Loft in Downtown",
    shortDescription: "Room in New York City",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 130,
    location: "New York City",
    country: "United States",
    about: "Welcome to our modern loft in downtown, ideally located in New York City. Perfect for urban explorers who want to stay in the heart of the city.",
    detail: "1 king bed , Private bathroom",
    amenities: [ "Wi-Fi", "Free parking", "Heating", "Washer" ],
    host: "6866f0f5ecc70b0ebf47c9a0",
    availability: "25 - 26 August",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    },
    category: "Trending"
  },
  {
    title: "Mountain Retreat",
    shortDescription: "Room in Aspen",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 137,
    location: "Aspen",
    country: "United States",
    about: "Welcome to our mountain retreat, ideally located in Aspen. Unplug and unwind in the peaceful surroundings of nature, great for a digital detox.",
    detail: "Loft bed , Shared bath access",
    amenities: [ "Air conditioning", "Kitchen", "Dryer", "TV" ],
    host: "6866f0d6ecc70b0ebf47c999",
    availability: "10 - 13 August",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    },
    category: "Snow"
  },
  {
    title: "Historic Villa in Tuscany",
    shortDescription: "Villa in Florence",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 140,
    location: "Florence",
    country: "Italy",
    about: "Welcome to our historic villa in tuscany, ideally located in Florence. Explore the rolling hills and vineyards of Tuscany while staying in a beautifully restored villa.",
    detail: "1 queen bed + workspace , Private bath",
    amenities: [ "Wi-Fi", "Workspace", "Coffee maker", "Private entrance" ],
    host: "6866f039ecc70b0ebf47c984",
    availability: "18 - 21 July",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    },
    category: "Villa"
  },
  {
    title: "Secluded Treehouse Getaway",
    shortDescription: "Treehouse in Portland",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 104,
    location: "Portland",
    country: "United States",
    about: "Welcome to our secluded treehouse getaway, ideally located in Portland. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "Loft bed , Shared bath access",
    amenities: [ "Free parking", "BBQ grill", "Balcony", "Outdoor dining" ],
    host: "6866ec391c43245c7b6080ad",
    availability: "24 - 27 October",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231]
    },
    category: "Adventure"

  },
  {
    title: "Beachfront Paradise",
    shortDescription: "Beach House in Mexico",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 148,
    location: "Cancun",
    country: "Mexico",
    about: "Welcome to our beachfront paradise, ideally located in Cancun. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 queen bed , Shared bathroom",
    amenities: [ "Wi-Fi", "Hot tub", "Fireplace", "Essentials" ],
    host: "6866f0a2ecc70b0ebf47c98b",
    availability: "15 - 17 October",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619]
    },
    category: "Beach"
  },
  {
    title: "Rustic Cabin by the Lake",
    shortDescription: "Cabin in Lake Tahoe",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 89,
    location: "Lake Tahoe",
    country: "United States",
    about: "Welcome to our rustic cabin by the lake, ideally located in Lake Tahoe. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 bunk bed , Shared bathroom",
    amenities: [ "Pet-friendly", "Heating", "Hair dryer", "First aid kit" ],
    host: "6866f0f5ecc70b0ebf47c9a0",
    availability: "24 - 27 July",
    geometry: {
      type: "Point",
      coordinates: [-120.0440, 39.0968]
    },
    category: "Adventure"

  },
  {
    title: "Luxury Penthouse with City Views",
    shortDescription: "Penthouse in LA",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 145,
    location: "Los Angeles",
    country: "United States",
    about: "Welcome to our luxury penthouse with city views, ideally located in Los Angeles. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "2 queen beds -  Ensuite",
    amenities: [ "Wi-Fi", "Gym access", "Elevator", "Smoke alarm" ],
    host: "6866f0d6ecc70b0ebf47c999",
    availability: "18 - 21 August",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522]
    },
    category: "Trending"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    shortDescription: "Room in Verbier",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 137,
    location: "Verbier",
    country: "Switzerland",
    about: "Welcome to our ski-in/ski-out chalet, ideally located in Verbier. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 king bed , Private bathroom",
    amenities: [ "Air conditioning", "Iron", "Dishwasher", "Carbon monoxide alarm" ],
    host: "6866f0a2ecc70b0ebf47c98b",
    availability: "20 - 23 September",
    geometry: {
      type: "Point",
      coordinates: [7.2333, 46.1000]
    },
    category: "Snow"
  },
  {
    title: "Safari Lodge in the Serengeti",
    shortDescription: "Lodge in Tanzania",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 85,
    location: "Serengeti National Park",
    country: "Tanzania",
    about: "Welcome to our safari lodge in the serengeti, ideally located in Serengeti National Park. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 king bed , Private bathroom",
    amenities: [ "Wi-Fi", "Mini fridge", "Microwave", "Toiletries" ],
    host: "6866f0bfecc70b0ebf47c992",
    availability: "11 - 14 October",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333]
    },
    category: "Adventure"
  },
  {
    title: "Historic Canal House",
    shortDescription: "Canal House in Amsterdam",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 152,
    location: "Amsterdam",
    country: "Netherlands",
    about: "Welcome to our historic canal house, ideally located in Amsterdam. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 double bed -  Shared bathroom",
    amenities: [ "Wi-Fi", "Air conditioning", "Private pool", "Kitchen" ],
    host: "6866f0bfecc70b0ebf47c992",
    availability: "12 - 14 September",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676]
    },
    category: "Trending"
  },
  {
    title: "Private Island Retreat",
    shortDescription: "Island in Fiji",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 132,
    location: "Fiji",
    country: "Fiji",
    about: "Welcome to our private island retreat, ideally located in Fiji. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 king bed ,  Private bathroom",
    amenities: [ "Wi-Fi", "Free parking", "Heating", "Washer" ],
    host: "6866ec391c43245c7b6080ad",
    availability: "23 - 26 October",
    geometry: {
      type: "Point",
      coordinates: [178.0650, -17.7134]
    },
    category: "Beach"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    shortDescription: "Cottage in Cotswolds",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 98,
    location: "Cotswolds",
    country: "United Kingdom",
    about: "Welcome to our charming cottage in the cotswolds, ideally located in Cotswolds. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "Loft bed ,  Shared bath access",
    amenities: [ "Air conditioning", "Kitchen", "Dryer", "TV" ],
    host: "6866f0d6ecc70b0ebf47c999",
    availability: "15 - 16 September",
    geometry: {
      type: "Point",
      coordinates: [-1.8433, 51.8330]
    },
    category: "Farm"
  },
  {
    title: "Historic Brownstone in Boston",
    shortDescription: "Room in Boston",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 98,
    location: "Boston",
    country: "United States",
    about: "Welcome to our historic brownstone in boston, ideally located in Boston. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 king bed , Private bathroom",
    amenities: [ "Wi-Fi", "Workspace", "Coffee maker", "Private entrance" ],
    host: "6866f0f5ecc70b0ebf47c9a0",
    availability: "24 - 25 October",
    geometry: {
      type: "Point",
      coordinates: [-71.0589, 42.3601]
    },
    category: "Trending"
  },
  {
    title: "Beachfront Bungalow in Bali",
    shortDescription: "Bungalow in Bali",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 101,
    location: "Bali",
    country: "Indonesia",
    about: "Welcome to our beachfront bungalow in bali, ideally located in Bali. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 queen bed + workspace , Private bath",
    amenities: [ "Free parking", "BBQ grill", "Balcony", "Outdoor dining" ],
    host: "6866f0bfecc70b0ebf47c992",
    availability: "13 - 15 October",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    },
    category: "Beach"
  },
  {
    title: "Mountain View Cabin in Banff",
    shortDescription: "Cabin in Banff",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 101,
    location: "Banff",
    country: "Canada",
    about: "Welcome to our mountain view cabin in banff, ideally located in Banff. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "2 single beds , Private ensuite",
    amenities: [ "Wi-Fi", "Hot tub", "Fireplace", "Essentials" ],
    host: "6866f0bfecc70b0ebf47c992",
    availability: "13 - 16 July",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784]
    },
    category: "Snow"
  },
  {
    title: "Art Deco Apartment in Miami",
    shortDescription: "Appartment in Miami",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 160,
    location: "Miami",
    country: "United States",
    about: "Welcome to our art deco apartment in miami, ideally located in Miami. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "2 single beds , Private ensuite",
    amenities: [ "Pet-friendly", "Heating", "Hair dryer", "First aid kit" ],
    host: "6866ec391c43245c7b6080ad",
    availability: "17 - 19 September",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617]
    },
    category: "Beach"
  },
  {
    title: "Tropical Villa in Phuket",
    shortDescription: "Villa in Phuket",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 120,
    location: "Phuket",
    country: "Thailand",
    about: "Welcome to our tropical villa in phuket, ideally located in Phuket. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "2 queen beds , Ensuite",
    amenities: [ "Wi-Fi", "Gym access", "Elevator", "Smoke alarm" ],
    host: "6866f0a2ecc70b0ebf47c98b",
    availability: "20 - 23 July",
    geometry: {
      type: "Point",
      coordinates: [98.3381, 7.8804]
    },
    category: "Villa"
  },
  {
    title: "Historic Castle in Scotland",
    shortDescription: "Castle in Scotland",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 102,
    location: "Scottish Highlands",
    country: "United Kingdom",
    about: "Welcome to our historic castle in scotland, ideally located in Scottish Highlands. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 queen bed + workspace , Private bath",
    amenities: [ "Air conditioning", "Iron", "Dishwasher", "Carbon monoxide alarm" ],
    host: "6866f039ecc70b0ebf47c984",
    availability: "22 - 23 September",
    geometry: {
      type: "Point",
      coordinates: [-4.2026, 57.1200]
    },
    category: "Castle"
  },
  {
    title: "Desert Oasis in Dubai",
    shortDescription: "Desert Cottage in Dubai",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 156,
    location: "Dubai",
    country: "United Arab Emirates",
    about: "Welcome to our desert oasis in dubai, ideally located in Dubai. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "2 single beds , Private ensuite",
    amenities: [ "Wi-Fi", "Mini fridge", "Microwave", "Toiletries" ],
    host: "6866f0a2ecc70b0ebf47c98b",
    availability: "14 - 17 October",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048]
    },
    category: "Trending"
  },
  {
    title: "Rustic Log Cabin in Montana",
    shortDescription: "Cabin in Montana",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 141,
    location: "Montana",
    country: "United States",
    about: "Welcome to our rustic log cabin in montana, ideally located in Montana. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 bunk bed , Shared bathroom",
    amenities: [ "Wi-Fi", "Air conditioning", "Private pool", "Kitchen" ],
    host: "6866f0a2ecc70b0ebf47c98b",
    availability: "22 - 25 September",
    geometry: {
      type: "Point",
      coordinates: [-110.3626, 46.8797]
    },
    category: "Farm"

  },
  {
    title: "Beachfront Villa in Greece",
    shortDescription: "Villa in Mykonos",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 90,
    location: "Mykonos",
    country: "Greece",
    about: "Welcome to our beachfront villa in greece, ideally located in Mykonos. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 bunk bed , Shared bathroom",
    amenities: [ "Wi-Fi", "Free parking", "Heating", "Washer" ],
    host: "6866f0f5ecc70b0ebf47c9a0",
    availability: "13 - 16 September",
    geometry: {
      type: "Point",
      coordinates: [25.3289, 37.4467]
    },
    category: "Villa"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    shortDescription: "Treehouse in Costa Rica",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 114,
    location: "Costa Rica",
    country: "Costa Rica",
    about: "Welcome to our eco-friendly treehouse retreat, ideally located in Costa Rica. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "Double bed , Attached bathroom",
    amenities: [ "Air conditioning", "Kitchen", "Dryer", "TV" ],
    host: "6866f0bfecc70b0ebf47c992",
    availability: "21 - 23 September",
    geometry: {
      type: "Point",
      coordinates: [-84.0907, 9.7489]
    },
    category: "Adventure"
  },
  {
    title: "Historic Cottage in Charleston",
    shortDescription: "Cottage in Charleston",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 131,
    location: "Charleston",
    country: "United States",
    about: "Welcome to our historic cottage in charleston, ideally located in Charleston. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "2 queen beds , Ensuite",
    amenities: [ "Wi-Fi", "Workspace", "Coffee maker", "Private entrance" ],
    host: "6866f0d6ecc70b0ebf47c999",
    availability: "20 - 23 August",
    geometry: {
      type: "Point",
      coordinates: [-79.9311, 32.7765]
    },
    category: "Farm"
  },
  {
    title: "Modern Apartment in Tokyo",
    shortDescription: "Room in Tokyo",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 80,
    location: "Tokyo",
    country: "Japan",
    about: "Welcome to our modern apartment in tokyo, ideally located in Tokyo. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "Studio with sofa bed , Shared bath",
    amenities: [ "Free parking", "BBQ grill", "Balcony", "Outdoor dining" ],
    host: "6866f0bfecc70b0ebf47c992",
    availability: "14 - 15 September",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    },
    category: "Trending"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    shortDescription: "Cabin in New Hampshire",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 152,
    location: "New Hampshire",
    country: "United States",
    about: "Welcome to our lakefront cabin in new hampshire, ideally located in New Hampshire. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "2 queen beds , Ensuite",
    amenities: [ "Wi-Fi", "Hot tub", "Fireplace", "Essentials" ],
    host: "6866f0bfecc70b0ebf47c992",
    availability: "11 - 13 August",
    geometry: {
      type: "Point",
      coordinates: [-71.5724, 43.1939]
    },
    category: "Farm"
  },
  {
    title: "Luxury Villa in the Maldives",
    shortDescription: "Villa in Maldives",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 85,
    location: "Maldives",
    country: "Maldives",
    about: "Welcome to our luxury villa in the maldives, ideally located in Maldives. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 double bed , Shared bathroom",
    amenities: [ "Pet-friendly", "Heating", "Hair dryer", "First aid kit" ],
    host: "6866f0a2ecc70b0ebf47c98b",
    availability: "15 - 18 August",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028]
    },
    category: "Villa"
  },
  {
    title: "Ski Chalet in Aspen",
    shortDescription: "Chalet in Aspen",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 123,
    location: "Aspen",
    country: "United States",
    about: "Welcome to our ski chalet in aspen, ideally located in Aspen. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "2 single beds , Private ensuite",
    amenities: [ "Wi-Fi", "Gym access", "Elevator", "Smoke alarm" ],
    host: "6866f0a2ecc70b0ebf47c98b",
    availability: "19 - 22 September",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    },
    category: "Snow"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    shortDescription: "Beach House in Costa Rica",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 107,
    location: "Costa Rica",
    country: "Costa Rica",
    about: "Welcome to our secluded beach house in costa rica, ideally located in Costa Rica. Whether you're here for business or leisure, this is the perfect base for your stay!",
    detail: "1 double bed , Shared bathroom",
    amenities: [ "Air conditioning", "Iron", "Dishwasher", "Carbon monoxide alarm" ],
    host: "6866f0a2ecc70b0ebf47c98b",
    availability: "11 - 14 August",
    geometry: {
      type: "Point",
      coordinates: [-84.0907, 9.7489]
    },
    category: "Adventure"
  }
];

module.exports = { data: sampleListings };