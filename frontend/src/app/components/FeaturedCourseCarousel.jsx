import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, Users } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export function FeaturedCourseCarousel() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Master HTML, CSS, JavaScript, React, and Node.js from scratch. Build real-world projects and become a professional web developer.",
      instructor: "Sarah Johnson",
      duration: "8 weeks",
      price: "$49",
      rating: 4.8,
      students: "12,500",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MDUwMjkyNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "AI & Machine Learning Fundamentals",
      description: "Dive into AI concepts, neural networks, and practical ML applications. Learn from industry experts and build intelligent systems.",
      instructor: "Dr. Michael Chen",
      duration: "6 weeks",
      price: "$59",
      rating: 4.9,
      students: "8,900",
      category: "AI",
      image: "https://images.unsplash.com/photo-1756967385885-0f20d517f72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYxNTYwOXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Create stunning user interfaces and exceptional user experiences. Master design tools and principles used by top companies.",
      instructor: "Emma Rodriguez",
      duration: "5 weeks",
      price: "$45",
      rating: 4.7,
      students: "6,200",
      category: "Design",
      image: "https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNTA1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredCourses.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredCourses.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? featuredCourses.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCourses.length);
  };

  const currentCourse = featuredCourses[currentIndex];

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={currentCourse.image}
          alt={currentCourse.title}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-[#1a73e8] text-white px-4 py-2 rounded-full text-sm font-medium">
              ⭐ Start learning today
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Learn Skills That <span className="text-[#4a9eff]">Actually Matter</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Discover short courses & workshops curated for students who want to stay ahead
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-12">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate("/courses")}
            >
              Browse Courses
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Join Free
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8">
            <div>
              <div className="text-4xl font-bold text-white">5K+</div>
              <div className="text-sm text-gray-300">Active Students</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div>
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-300">Courses</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div>
              <div className="text-4xl font-bold text-white">4.8★</div>
              <div className="text-sm text-gray-300">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-full transition-all z-10 border border-white/30"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-full transition-all z-10 border border-white/30"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {featuredCourses.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-12 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
