# MERN Blog App

A full-featured **blog application** built with the **MERN stack (MongoDB, Express, React, Node.js)**. Users can read blogs, like posts, and leave comments, while admins can manage content, users, and see analytics.

---

## Features

### User Features

* Read and browse blog posts.
* Like and comment on blogs.
* View public posts and interact with other users’ content.

### Admin Features

* Create, edit, and delete blog posts.
* Manage users, including roles and permissions.
* Moderate comments and likes.
* View detailed insights and analytics on user activity and blog engagement.

---

## Tech Stack

* **Frontend:** React, Axios, Context API / Redux
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT-based user authentication

---

## Project Structure

```
blog/
├─ api/         # Node.js + Express API
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  └─ server.js
├─ client/        # React application
│  ├─ src/
│  │  ├─ pages/
│  │  ├─ components/
│  │  └─ App.js
└─ README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blog.git
cd blog
```

### 2. Backend Setup

```bash
cd api
npm install
```

Create a `.env` file:

```env
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000
```

Run the backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

* Frontend runs on `http://localhost:3000`
* Backend runs on `http://localhost:5000`

---

## Usage

* **Users:** Browse blogs, like posts, and comment.
* **Admins:** Log in with admin credentials to manage blogs, users, comments, and view analytics.

---

## Future Enhancements

* Rich text editor for blog creation
* File/image uploads for blogs
* Social login (Google, Facebook, etc.)
* Blog search and categories
* Notifications for new comments or likes

---

## License

MIT License

