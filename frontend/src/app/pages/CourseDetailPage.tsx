import { useParams, useNavigate } from "react-router";
import { Star, Clock, BarChart, Users, CheckCircle, ArrowLeft, Play } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

export function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const courses = {
    "1": {
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      instructorTitle: "Senior Full-Stack Developer",
      rating: 4.8,
      reviews: 2340,
      students: 12500,
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MDUwMjkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Master the art of web development with this comprehensive bootcamp. You'll learn everything from basic HTML/CSS to advanced React patterns and backend development with Node.js.",
      duration: "8 weeks",
      level: "Beginner",
      price: "$49",
      category: "Web Development",
      whatYouLearn: [
        "Build responsive websites with HTML5 and CSS3",
        "Master JavaScript ES6+ and modern best practices",
        "Create dynamic UIs with React and React Hooks",
        "Build RESTful APIs with Node.js and Express",
        "Work with databases using MongoDB",
        "Deploy applications to production"
      ],
      requirements: [
        "A computer with internet connection",
        "No prior programming experience required",
        "Willingness to learn and practice coding daily"
      ]
    },
    "2": {
      title: "AI & Machine Learning Fundamentals",
      instructor: "Dr. Michael Chen",
      instructorTitle: "AI Research Scientist",
      rating: 4.9,
      reviews: 1890,
      students: 8900,
      image: "https://images.unsplash.com/photo-1756967385885-0f20d517f72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYxNTYwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Dive deep into the world of Artificial Intelligence and Machine Learning. Learn the fundamental concepts, algorithms, and practical applications that power modern AI systems.",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$59",
      category: "Artificial Intelligence",
      whatYouLearn: [
        "Understand core AI and ML concepts",
        "Build and train neural networks",
        "Implement classification and regression models",
        "Work with popular libraries like TensorFlow and PyTorch",
        "Apply ML to real-world problems",
        "Understand deep learning architectures"
      ],
      requirements: [
        "Basic Python programming knowledge",
        "Understanding of high school mathematics",
        "Familiarity with data structures"
      ]
    }
  };

  const course = courses[id as keyof typeof courses] || courses["1"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={() => navigate("/courses")}
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#F8F9FF] to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="bg-[#4F46E5] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  {course.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{course.description}</p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  <span className="font-semibold text-gray-900">{course.rating}</span>
                  <span className="text-gray-600">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students enrolled</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1611181355758-089959e2cfb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNjE1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt={course.instructor}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{course.instructor}</div>
                  <div className="text-sm text-gray-600">{course.instructorTitle}</div>
                </div>
              </div>
            </div>

            {/* Desktop Preview Card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-24">
                <div className="relative h-48 group cursor-pointer">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 p-4 rounded-full">
                      <Play className="w-6 h-6 text-[#4F46E5]" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-4xl font-bold text-[#4F46E5] mb-6">{course.price}</div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600 flex items-center gap-2 text-sm">
                        <Clock className="w-5 h-5" />
                        Duration
                      </span>
                      <span className="font-medium text-gray-900">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between pb-3">
                      <span className="text-gray-600 flex items-center gap-2 text-sm">
                        <BarChart className="w-5 h-5" />
                        Level
                      </span>
                      <span className="font-medium text-gray-900">{course.level}</span>
                    </div>
                  </div>

                  <Button variant="primary" size="lg" className="w-full mb-3">
                    Enroll Now
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    30-day money-back guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-3">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-[#4F46E5] mt-1">•</span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Course</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {course.description} This comprehensive course is designed to take you from beginner to proficient in {course.category}.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through hands-on projects and real-world examples, you'll gain the practical skills needed to excel in today's tech industry. Our expert instructors bring years of industry experience to help you master every concept.
              </p>
            </div>
          </div>

          {/* Mobile Enrollment Card */}
          <div className="lg:hidden">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky bottom-0">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-[#4F46E5]">{course.price}</div>
                <Button variant="primary" size="lg">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
