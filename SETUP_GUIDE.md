# SkillNest Setup Guide

## Quick Start

### 1. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Configure environment
# Edit backend/.env with your MongoDB URI

# Seed database with sample data
npm run seed

# Start backend server
npm run dev
```

Backend will run on: `http://localhost:5000`

### 2. Frontend Setup

```bash
# Navigate to frontend (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start frontend
npm run dev
```

Frontend will run on: `http://localhost:5173`

## Test Credentials

### Admin Account
- Email: `admin@skillnest.com`
- Password: `admin123`
- Access: Full CRUD operations on courses

### User Account
- Email: `user@skillnest.com`
- Password: `user123`
- Access: Browse and enroll in courses

## Features Implemented

### ✅ Frontend
- Landing page with hero carousel
- Course listing with search & filters
- User authentication (login/register)
- Admin dashboard for course management
- Responsive design
- Real-time data from backend API

### ✅ Backend
- JWT authentication
- Role-based access control
- Course CRUD operations
- User enrollment system
- MongoDB database
- RESTful API

## API Endpoints

### Auth
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Get profile (Protected)

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (Admin)
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/courses/enrolled` - Get enrolled courses

## Project Structure

```
SkillNest/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   ├── context/
│   │   └── utils/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   └── server.js
│
└── README.md
```

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running locally OR
- Use MongoDB Atlas and update the URI in `backend/.env`

### CORS Errors
- Backend is configured to allow all origins in development
- For production, update CORS settings in `backend/server.js`

### Port Already in Use
- Backend: Change PORT in `backend/.env`
- Frontend: Vite will automatically use next available port

## Next Steps

1. Test authentication flow
2. Create/edit courses as admin
3. Enroll in courses as user
4. Deploy to production (see README.md)
