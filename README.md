# CareHub

**CareHub** is a web application designed to help users book reliable caregiving services for babies, elderly, or sick individuals. The platform focuses on making caregiving **simple, safe, and accessible**.

---

## 🔹 Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **User Authentication**: Email/Password login and Google login via **NextAuth**
- **Dynamic Booking**: Select service duration, location, and view total cost (dynamic calculation)
- **Booking Management**:
  - View all bookings in “My Bookings” page

- **Services Overview**: Baby Care, Elderly Care, Sick People Care
- **Navbar**:
  - Shows **Login/Register** when logged out
  - Shows **Profile Picture** and **Logout** when logged in
- **Dark & Light Mode Support**
- **Framer Motion**: Smooth UI animations

---

## 🔹 Pages & Routes

1. **Home (`/`)**
   - Banner / slider with caregiving motivation
   - About section
   - Services overview
   - Testimonials / metrics

2. **Services Page (`/services`)**
   - List of all services
   - Book Service button (redirects to login if not authenticated)

3. **My Bookings Page (`/my-bookings`)** – Private Route
   - View all bookings
   - Track booking status: Pending / Confirmed / Completed
   - Buttons: View Details / Cancel Booking

4. **Authentication**
   - Login: Email/Password, Google login
   - Register: Name, Email, Password validation (6+ chars, 1 uppercase, 1 lowercase)
   - Redirects after login/registration
   - Logged-in users cannot access login/register pages

5. **Error Page (404)**
   - Not Found message with button to return home

---

## 🔹 Technologies Used

- **Next.js** (React framework)
- **NextAuth.js** (Authentication)
- **Tailwind CSS** (Responsive styling)
- **Framer Motion** (Animations)
- **JavaScript**

---

## 🔹 Live Demo

Check the live version of CareHub here: [https://carehub-coral.vercel.app/](https://carehub-coral.vercel.app/)

---

## 🔹 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/carehub.git
cd carehub
```
