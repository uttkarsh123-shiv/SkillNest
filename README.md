# SkillNest - Mini Product Platform

A complete MERN stack learning platform with user authentication, course management, and enrollment system.

## 🚀 Features

### Frontend (React)
- Modern, responsive UI with Material Design principles
- Landing page with hero carousel
- Course listing with search and filters
- Course detail pages
- User authentication (Login/Register)
- Admin dashboard for course management
- User dashboard showing enrolled courses

### Backend (Node.js/Express/MongoDB)
- RESTful API architecture
- JWT-based authentication
- Role-based access control (User/Admin)
- Course CRUD operations
- Enrollment system
- MongoDB database with Mongoose ODM

## 📁 Project Structure

```
SkillNest/
├── frontend/          # React application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/  # Reusable components
│   │   │   ├── pages/       # Page components
│   │   │   └── routes.jsx   # Route configuration
│   │   └── styles/          # CSS files
│   └── package.json
│
├── backend/           # Node.js/Express API
│   ├── config/        # Database configuration
│   ├── controllers/   # Request handlers
│   ├── middleware/    # Auth middleware
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── scripts/       # Utility scripts
│   └── server.js      # Entry point
│
└── README.md
```

## 🛠️ Tech Stack

**Frontend:**
- React 18
- React Router 7
- Tailwind CSS 4
- Lucide React (Icons)
- Vite

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install

# Create .env file (see backend/.env.example)
cp .env.example .env

# Seed database with sample data
npm run seed

# Start server
npm run dev
```

Backend runs on: `http://localhost:5000`

## 🔑 Test Credentials

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

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (Admin)
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/courses/enrolled` - Get enrolled courses

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Render/Railway)
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

### Environment Variables (Production)
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secure_secret_key
NODE_ENV=production
```

## 📝 Assignment Requirements Checklist

- ✅ UI/UX Design - Modern, responsive interface
- ✅ Landing Page - Hero carousel with course showcase
- ✅ Login/Register - Full authentication system
- ✅ Course Listing - Search and filter functionality
- ✅ Course Detail Page - Complete course information
- ✅ Admin Dashboard - CRUD operations for courses
- ✅ User Authentication - JWT-based auth
- ✅ Course Enrollment - Enroll button functionality
- ✅ User Dashboard - Shows enrolled courses
- ✅ MERN Stack - React, Node.js, Express, MongoDB
- ✅ Clean Code - Well-organized and documented

## 🎯 Key Features That Stand Out

1. **Clean Architecture** - Separation of concerns, modular code
2. **Modern UI** - Material Design principles, smooth animations
3. **Security** - JWT authentication, password hashing, protected routes
4. **User Experience** - Intuitive navigation, responsive design
5. **Scalability** - RESTful API, MongoDB for flexible data structure
6. **Documentation** - Comprehensive README, code comments

## 📄 License

MIT

## 👤 Author

Created for Smarrtifai Web Developer Assignment
