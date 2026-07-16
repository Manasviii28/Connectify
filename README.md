# Connectify

Connectify is a social media web application built using **Node.js, Express.js, MongoDB, and EJS**. It allows users to register, log in securely, create posts, edit or delete their own posts, and manage their profiles through a simple web interface.

This project was built to strengthen my understanding of backend development, authentication, database management, and full-stack web application development.

---

## 🚀 Features

- User Registration and Login
- Secure Authentication using JWT
- Password Hashing with bcrypt
- Create, Edit, and Delete Posts
- User Profile Management
- MongoDB Database Integration
- Environment Variable Configuration

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Tokens)
- bcrypt

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Connectify.git
```

### 2. Navigate to the project directory

```bash
cd Connectify
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Copy the variables from the provided `.env.example` file and add your own credentials.

Example:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start the application

Using Nodemon:

```bash
nodemon index.js
```

Or using Node:

```bash
node index.js
```

---

## 📁 Project Structure

```text
Connectify/
│── config/
│── controllers/
│── models/
│── public/
│── routes/
│── views/
│── .env.example
│── .gitignore
│── index.js
│── package.json
│── package-lock.json
└── README.md
```

---

## 🎯 Future Improvements

- Modern and responsive user interface
- Like and Comment functionality
- Follow/Unfollow users
- Image upload support
- Profile editing
- User search
- Notifications
- Infinite scrolling / Pagination
- Improved error handling and validation
- Real-time chat using Socket.io
- Refactor codebase for improved scalability and maintainability

---

## 📚 Learning Outcomes

This project helped me gain practical experience with:

- Express.js Routing
- MongoDB & Mongoose
- JWT Authentication
- Password Hashing using bcrypt
- CRUD Operations
- Environment Variables
- Git & GitHub Workflow

---


