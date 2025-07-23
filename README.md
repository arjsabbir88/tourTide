# 🌍 TourTide - Tour Package Booking Platform

Live Site 👉 [https://tour-tide-server.vercel.app](https://tour-tide-server.vercel.app)

## 📌 Project Overview

**TourTide** is a full-stack MERN web application that allows users to explore, book, and manage tour packages. This booking management system includes user authentication, real-time tour data handling, booking history, and user-specific tour management functionality.

The project focuses on usability, responsiveness, and secure implementation of Firebase Auth & JWT to provide a seamless booking experience.

---

## 🚀 Features

### 🔓 Public Access

- Home Page with Hero Banner & Featured Packages
- All Packages listing
- Package Details (requires login)
- About Us Page

### 🔐 Authentication

- Login with Email/Password
- Login with Google
- Registration with validation (Name, Email, Password, Photo URL)
- JWT token issued after login & used for protected API routes
- Secure routes for booking & package management

### 🧑‍💻 Logged-in User Features

- Add New Tour Package
- Manage My Packages (Update/Delete)
- Book any Package
- View My Bookings & confirm status
- View guide info on packages

### 💼 Admin/Guide Features

- View only own-added packages
- Update / Delete packages with confirmation
- Booking count updates automatically using `$inc`

---

## 🧭 Routes & Pages

- `/` → Home (Banner + Featured + Extras)
- `/all-packages` → All Packages with search
- `/add-package` → Private Route (Add Tour)
- `/manage-packages` → Private Route (Edit/Delete)
- `/my-bookings` → Private Route (See own bookings)
- `/package/:id` → Private Route (Package details + Booking)
- `/about` → About Us
- `/login` → Login
- `/register` → Register
- `*` → 404 Page with animation

---

## 🔐 Authentication & Authorization

- Firebase Authentication
- Google Sign-In
- JWT token stored in `localStorage` for session
- Backend protected routes using custom JWT middleware
- Firebase domain whitelisted for deployment

---

## 🛠️ Tech Stack

### Frontend:

- React
- React Router DOM
- Tailwind CSS
- DaisyUI
- Axios
- React Hook Form
- Framer Motion (optional)
- Firebase Auth

### Backend:

- Express.js
- Node.js
- MongoDB (with Mongoose)
- JWT for secure API calls
- CORS configured
- dotenv for secure environment variables

---

## 📂 Database Collections

### `tourPackages`

```json
{
  "tour_name": "Dhaka to Cox’s Bazar Tour",
  "image": "url",
  "duration": "3 Days 2 Nights",
  "departure_location": "Dhaka",
  "destination": "Cox's Bazar",
  "price": 12000,
  "departure_date": "2025-07-15",
  "package_details": "Includes transport, hotel and guide",
  "guide_name": "John Doe",
  "guide_email": "john@example.com",
  "guide_photo": "url",
  "guide_contact_no": "017xxxxxx",
  "bookingCount": 3,
  "created_at": "2025-06-24T12:00:00Z"
}
```
