# Seed Database with Sample Data

## Quick Command

```bash
cd backend
npm run seed
```

## What This Does

Creates:
- **2 Users:**
  - Admin: `admin@skillnest.com` / `admin123`
  - User: `user@skillnest.com` / `user123`

- **8 Courses:**
  - Complete Web Development Bootcamp
  - AI & Machine Learning Fundamentals
  - UI/UX Design Masterclass
  - Digital Marketing Strategy
  - Python for Data Science
  - Mobile App Development with React Native
  - Blockchain & Cryptocurrency Basics
  - Cloud Computing with AWS

## Expected Output

```
Connecting to MongoDB...
✅ MongoDB Connected
Clearing existing data...
✅ Cleared existing data
Creating admin user...
✅ Admin user created
Creating test user...
✅ Test user created
Creating courses...
✅ 8 courses created

🎉 Database seeded successfully!

═══════════════════════════════════════
Test Credentials:
═══════════════════════════════════════
Admin Account:
  Email: admin@skillnest.com
  Password: admin123

User Account:
  Email: user@skillnest.com
  Password: user123
═══════════════════════════════════════
```

## Troubleshooting

### "Cannot connect to MongoDB"
- Check your `backend/.env` file
- Make sure MONGODB_URI is correct
- Password special characters must be URL encoded

### "Module not found"
```bash
cd backend
npm install
```

### Want to Re-seed?
Just run `npm run seed` again - it clears old data first.

## After Seeding

1. Refresh your frontend page
2. You should see 8 courses
3. Login with test credentials
4. Start testing!
