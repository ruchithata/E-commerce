# MERN E-Commerce Store

This is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to browse products, manage a shopping cart, place orders, and provides an admin panel for product and order management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- *User Authentication*: Login, registration, and session management.
- *Product Browsing*: Users can browse products, filter by category, and view product details.
- *Shopping Cart*: Users can add, remove, and update quantities of products in the cart.
- *Order Management*: Place an order, view past orders, and check order statuses.
- *Admin Panel*: Admins can add, edit, and delete products, manage orders, and update inventory.
- *Payment Integration*: Integration with Stripe or PayPal for secure payment processing (optional for production).

## Tech Stack

- *Frontend*: React.js, React Router, Axios
- *Backend*: Node.js, Express.js
- *Database*: MongoDB (using Mongoose)
- *Authentication*: JSON Web Tokens (JWT)
- *Payment Gateway*: Stripe/PayPal (optional)
- *State Management*: Redux (optional)


---


### **Milestone 1: Project Overview**

In Milestone 1, we focused on laying the groundwork for the e-commerce application. This included defining the project scope, setting up the tech stack (MongoDB, Express.js, React, Node.js), and establishing the basic folder structure for both the backend and frontend. We also covered the environment setup, including installing necessary dependencies and configuring the project for local development. The goal of this milestone was to ensure that the project foundation was solid and ready for the next steps in building the full application.

---

### **Milestone 2: Project Setup & Login Page**

In this milestone, we structured the project, set up the frontend and backend, and built a basic login page using React and Tailwind CSS. This setup lays the foundation for the e-commerce application.

- Project Structure: Organized separate frontend and backend directories.
- Frontend Setup: Initialized a React project using Vite.
- Backend Setup: Set up a Node.js and Express server (to be expanded in future milestones).
- Tailwind CSS Integration: Configured Tailwind CSS for styling.
- Login Page: Created a basic login form with email and password fields, styled with Tailwind CSS.

---

### **Milestone 3: Backend Setup & Database Connection**

In this milestone, we set up the backend for our e-commerce application, connected it to MongoDB, and implemented basic error handling. This lays the groundwork for handling user authentication, product listings, and future API integrations.

- Backend Folder Structure: Organized routes, controllers, models, and middleware for a scalable architecture.
- Node.js & Express Setup: Created an Express server to handle API requests.
- MongoDB Integration: Connected the application to a MongoDB database using Mongoose.
- Basic Error Handling: Implemented middleware to manage errors effectively.

---

### **Milestone 4 – User Model, Registration & Avatar Upload**

This milestone sets up the foundational user system for the e-commerce backend. It includes the user schema, registration API (/sign-up), and Multer-based avatar upload middleware. The system checks for existing users, stores new ones with validation, and handles file uploads securely. Errors are logged and handled gracefully for debugging and clarity.

---

### **Milestone 5 – User Registration UI and Flow**

In this milestone, I implemented the complete Sign-Up flow from frontend to backend:

- Built a responsive and clean Sign-Up Page using React and Tailwind CSS.
- Integrated file upload (avatar) using FormData and multer.
- Added form validation to ensure required fields and proper formats.
- Connected to backend API with Axios and handled loading/error states.
- Verified working Login functionality post-sign-up.

---

### **Milestone 6 - Strengthening Security with bcrypt**

​In this milestone, we focus on enhancing user authentication security by implementing password hashing using the bcrypt algorithm. This approach ensures that plaintext passwords are never stored, safeguarding user data against unauthorized access. By integrating bcrypt, we introduce a robust method to hash and verify passwords, significantly strengthening the overall security posture of the application.

---

### **​Milestone 7: Backend User Login Implementation​**

User Credential Validation: Implement functionality to accept user login credentials (email/username and password) and retrieve the corresponding user data from the database.​

Password Verification with Bcrypt: Utilize the bcrypt library to compare the hashed password stored in the database with the password provided by the user during login. This ensures that even if the database is compromised, plaintext passwords are not exposed, enhancing security.

---

### **Milestone 8: Product Card Component & Homepage Layout**

In this milestone, we focused on building a reusable ProductCard component using React and styled it with Tailwind CSS. We then integrated this component into the Home page, displaying a dynamic grid of product cards. This approach enhances scalability and maintainability, allowing for efficient rendering of multiple products.