# 🚀 Start SkillNest Project

## Quick Start (2 Terminals)

### Terminal 1: Backend
```bash
cd backend
npm install          # First time only
npm run seed         # First time only - creates test data
npm run dev          # Start backend server
```

Wait for: `Server running on port 5000` and `MongoDB Connected`

### Terminal 2: Frontend
```bash
cd frontend
npm install          # First time only
npm run dev          # Start frontend
```

Open browser: `http://localhost:5173`

## Test Login

**Admin Account:**
- Email: `admin@skillnest.com`
- Password: `admin123`

**User Account:**
- Email: `user@skillnest.com`
- Password: `user123`

## Troubleshooting

### "Failed to fetch" Error
✅ **Solution:** Backend is not running. Start it in Terminal 1 above.

### "MongoDB Connection Error"
✅ **Solution:** Update `backend/.env` with your MongoDB URI:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skillnest
```

### Port Already in Use
✅ **Solution:** Kill the process or change port in `.env` files

## What You Should See

1. **Landing Page** - Hero carousel with courses
2. **Courses Page** - All courses with search/filter
3. **Auth Page** - Login/Register forms
4. **Admin Dashboard** - Course management (admin only)

## Features to Test

- ✅ Register new account
- ✅ Login with test credentials
- ✅ Browse courses
- ✅ Search and filter courses
- ✅ Admin: Create/Edit/Delete courses
- ✅ User: Enroll in courses
