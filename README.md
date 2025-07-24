# 🏕️ Wanderlust – Full-Stack Travel Listing Web App

**Wanderlust** is a feature-rich web application that lets users explore, list, and review accommodations around the world. Inspired by Airbnb, it combines a responsive UI with secure user authentication, review systems, and interactive maps for a smooth travel listing experience.

---

## 🌟 Features

- 🏡 **List & Explore Stays**  
  Add new properties, browse listings, and view stay details with images and descriptions.

- ✍️ **Reviews & Ratings**  
  Logged-in users can leave, edit, or delete reviews for each listing.

- 🗺️ **Map Integration**  
  Location-based listings powered by Mapbox, giving users an interactive map view.

- 📷 **Image Uploads with Cloudinary**  
  Upload and manage listing images securely with Cloudinary.

- 🔐 **Authentication with Passport.js**  
  Secure sign-up, login, session handling, and flash messaging.

- 📱 **Responsive Design**  
  Fully mobile-friendly UI using Bootstrap 5 for clean layouts across devices.

---

## 🛠️ Tech Stack

| Layer           | Technology                            |
|-----------------|----------------------------------------|
| **Frontend**    | EJS, HTML5, CSS3, Bootstrap 5         |
| **Backend**     | Node.js, Express.js                   |
| **Database**    | MongoDB with Mongoose ODM             |
| **Authentication** | Passport.js, Express-Session, Flash |
| **Maps**        | Mapbox GL JS                          |
| **Image Upload**| Cloudinary, Multer                    |
| **Validation**  | Joi for schema validation             |

## 🧱 Architecture

Wanderlust follows the **MVC (Model-View-Controller)** design pattern:

- **Model** – Defines data schemas and handles database operations (Mongoose)  
- **View** – Uses EJS templates to render dynamic pages  
- **Controller** – Contains logic for routing, CRUD operations, and error handling

## 📁 Folder Structure

```bash
wanderlust/
├── controllers/           # Business logic for listings, reviews, users
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── init/                  # Database seeding scripts
│   ├── data.js
│   ├── index.js
│   └── reviews.js
│
├── models/                # Mongoose schemas
│   ├── listings.js
│   ├── reviews.js
│   └── user.js
│
├── routes/                # Express route handlers
│   ├── listing.js
│   ├── mylisting.js
│   ├── review.js
│   └── user.js
│
├── views/                 # EJS templates
│   ├── includes/          # Navbar, footer, flash messages
│   ├── layouts/           # Boilerplate template
│   ├── listings/          # Listing pages (CRUD)
│   ├── users/             # Auth pages
│   └── error.ejs          # Global error page
│
├── public/                # Static files
│   ├── css/
│   └── js/
│
├── middleware.js          # Custom auth & validation middleware
├── schema.js              # Joi validation schemas
├── utils/                 # Error handling utilities
│   └── ExpressError.js
│
├── app.js                 # Main server entry point
├── cloudConfig.js         # Cloudinary configuration
├── .env                   # Environment variables
└── package.json           # Project metadata and dependencies

```
---

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a .env file in the root directory:**

```bash
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API__KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
ATLASDB_URL=clusterdatabaseUrl
SECRET=your_session_secret
```

4. **Start the development server:**
   
```bash
npm start
```

5. Visit the app:
```bash
http://localhost:8080
```

---

## 📸 Screenshots

### 🏠 Home Page
<img src="https://github.com/user-attachments/assets/2b1e19fa-1998-4466-a936-1e6df09e35f7" alt="Index Page" width="100%" />

---

### 🔐 Authentication (Signup & Login)
<p align="center">
  <img src="https://github.com/user-attachments/assets/eb09c898-9026-4af4-8eaf-50d005c5d9aa" alt="Signup Page" width="45%" />
  &nbsp;
  <img src="https://github.com/user-attachments/assets/eb008eb9-ee82-42e6-accf-ceb4b2403507" alt="Login Page" width="45%" />
</p>

---

### 🆕 New Listing Form
<img src="https://github.com/user-attachments/assets/00cd5b47-d7c0-438d-b77c-3ddceef906ca" alt="New Listing Form" width="100%" />

---

### 📋 My Listings Dashboard
<img src="https://github.com/user-attachments/assets/ed0d2887-a0ae-4157-927e-2d0131e62504" alt="My Listings" width="100%" />

---

### 🧾 Listing Detail Page
<p align="center">
  <img src="https://github.com/user-attachments/assets/09d18504-c730-4da2-9242-fd2d63162557" alt="Detail Page 1" width="48%" />
  &nbsp;
  <img src="https://github.com/user-attachments/assets/d3a1de36-a643-4a56-aeb2-9d5cdf1ceac2" alt="Detail Page 2" width="48%" />
</p>

## 🧠 Coming Soon

- 📦 Add booking and checkout functionality  
- 💖 Wishlist and saved listings  
- 👥 Dual login system for **Host** and **Booker** roles  
- 💳 Integrate fake payment gateway for simulated transactions  
- 📱 Progressive Web App (PWA) support  
- 📊 Admin dashboard for managing listings and users

## 🙌 Inspiration

Wanderlust was created to address the need for a simple yet powerful platform to list and discover unique stays around the world. Inspired by Airbnb, this project was built to demonstrate full-stack web development, with a focus on clean UI, secure backend practices, and real-world architecture.

## 👤 Author

**Vraj Patel**  
Graduated BSc (Hons) Computer Science Student. 
🛠️ Full-Stack Web Developer | Exploring AI & Machine Learning | Building Projects in React, Node.js & Python. 
📍 Based in UK | 💼 Aspiring Full Stack Web Developer. 
🔗 [LinkedIn](https://www.linkedin.com/in/vraj-patel-459033212/). 

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
