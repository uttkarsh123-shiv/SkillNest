import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Course from '../models/Course.js';

dotenv.config();

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, and Node.js from scratch. Build real-world projects and become a full-stack developer.",
    instructor: "Sarah Johnson",
    category: "Web Dev",
    price: "$49",
    duration: "8 weeks",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800",
    enrolledStudents: 1250
  },
  {
    title: "AI & Machine Learning Fundamentals",
    description: "Dive into AI concepts, neural networks, and practical ML applications. Learn Python, TensorFlow, and build intelligent systems.",
    instructor: "Dr. Michael Chen",
    category: "AI",
    price: "$59",
    duration: "6 weeks",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1756967385885-0f20d517f72f?w=800",
    enrolledStudents: 890
  },
  {
    title: "UI/UX Design Masterclass",
    description: "Create stunning user interfaces and exceptional user experiences. Master Figma, design systems, and user research.",
    instructor: "Emma Rodriguez",
    category: "Design",
    price: "$45",
    duration: "5 weeks",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?w=800",
    enrolledStudents: 720
  },
  {
    title: "Digital Marketing Strategy",
    description: "Learn SEO, social media marketing, and content strategy. Grow your brand and reach millions of customers online.",
    instructor: "James Miller",
    category: "Marketing",
    price: "$39",
    duration: "4 weeks",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800",
    enrolledStudents: 560
  },
  {
    title: "Python for Data Science",
    description: "Learn Python programming, pandas, NumPy, and data visualization. Analyze data and make data-driven decisions.",
    instructor: "Dr. Lisa Wang",
    category: "Data Science",
    price: "$55",
    duration: "7 weeks",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    enrolledStudents: 980
  },
  {
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps for iOS and Android. Learn React Native, navigation, and app deployment.",
    instructor: "Alex Kumar",
    category: "Web Dev",
    price: "$52",
    duration: "6 weeks",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    enrolledStudents: 650
  },
  {
    title: "Blockchain & Cryptocurrency Basics",
    description: "Understand blockchain technology, smart contracts, and cryptocurrency. Build decentralized applications.",
    instructor: "David Chen",
    category: "Business",
    price: "$48",
    duration: "5 weeks",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    enrolledStudents: 430
  },
  {
    title: "Cloud Computing with AWS",
    description: "Master Amazon Web Services, cloud architecture, and DevOps. Deploy scalable applications to the cloud.",
    instructor: "Robert Taylor",
    category: "Web Dev",
    price: "$58",
    duration: "8 weeks",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    enrolledStudents: 1100
  }
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing data
    console.log('\nClearing existing data...');
    await User.deleteMany({});
    await Course.deleteMany({});
    console.log('✅ Cleared existing data');

    // Create admin user
    console.log('\nCreating admin user...');
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@skillnest.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('✅ Admin user created');

    // Create regular user
    console.log('Creating test user...');
    const user = await User.create({
      name: 'Test User',
      email: 'user@skillnest.com',
      password: 'user123',
      role: 'user'
    });
    console.log('✅ Test user created');

    // Create courses
    console.log('\nCreating courses...');
    const createdCourses = await Course.insertMany(courses);
    console.log(`✅ ${createdCourses.length} courses created`);

    console.log('\n🎉 Database seeded successfully!\n');
    console.log('═══════════════════════════════════════');
    console.log('Test Credentials:');
    console.log('═══════════════════════════════════════');
    console.log('Admin Account:');
    console.log('  Email: admin@skillnest.com');
    console.log('  Password: admin123');
    console.log('\nUser Account:');
    console.log('  Email: user@skillnest.com');
    console.log('  Password: user123');
    console.log('═══════════════════════════════════════\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
