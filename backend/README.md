# SkillNest Backend API

A clean and focused Node.js/Express/MongoDB backend with JWT authentication.

## Features

- ✅ User Authentication (JWT)
- ✅ Role-based Access Control (User/Admin)
- ✅ Course CRUD Operations
- ✅ Course Enrollment System
- ✅ User Dashboard with Enrolled Courses

## Tech Stack

- **Node.js** - Runtime
- **Express** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password Hashing

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/skillnest
JWT_SECRET=your-secret-key
NODE_ENV=development
```

3. Start MongoDB locally or use MongoDB Atlas

4. Run the server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (Protected)

### Courses
- `GET /api/courses` - Get all courses (with optional filters)
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (Admin only)
- `PUT /api/courses/:id` - Update course (Admin only)
- `DELETE /api/courses/:id` - Delete course (Admin only)
- `POST /api/courses/:id/enroll` - Enroll in course (Protected)
- `GET /api/courses/enrolled` - Get enrolled courses (Protected)

## Test Credentials

### Admin Account
```
Email: admin@skillnest.com
Password: admin123
```

### User Account
```
Email: user@skillnest.com
Password: user123
```

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── authController.js  # Auth logic
│   └── courseController.js # Course logic
├── middleware/
│   └── auth.js            # JWT & role verification
├── models/
│   ├── User.js            # User schema
│   └── Course.js          # Course schema
├── routes/
│   ├── authRoutes.js      # Auth endpoints
│   └── courseRoutes.js    # Course endpoints
├── .env                   # Environment variables
├── server.js              # Entry point
└── package.json
```

## Deployment

This backend can be deployed to:
- **Render** (Recommended - Free tier available)
- **Railway**
- **Heroku**
- **DigitalOcean**

Make sure to:
1. Set environment variables on hosting platform
2. Use MongoDB Atlas for production database
3. Update CORS settings for your frontend domain
