import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Clock } from "lucide-react";
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
    <div className="relative bg-gradient-to-br from-[#f0f4f9] to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-normal text-[#202124] mb-3">Featured Course</h2>
          <p className="text-[#5f6368] text-lg">Start learning with our most popular course</p>
        </div>

        <div className="relative">
          {/* Main Course Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e3e3e3]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img 
                  src={currentCourse.image}
                  alt={currentCourse.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6 bg-[#1a73e8] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentCourse.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 bg-[#fef7e0] px-3 py-1.5 rounded-lg">
                    <Star className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                    <span className="text-base font-semibold text-[#202124]">{currentCourse.rating}</span>
                  </div>
                  <span className="text-[#5f6368]">•</span>
                  <span className="text-[#5f6368]">{currentCourse.students} students</span>
                </div>

                <h3 className="text-3xl font-semibold text-[#202124] mb-4 leading-tight">
                  {currentCourse.title}
                </h3>

                <p className="text-[#5f6368] text-lg mb-6 leading-relaxed">
                  {currentCourse.description}
                </p>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-[#5f6368]">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{currentCourse.duration}</span>
                  </div>
                  <span className="text-[#5f6368]">•</span>
                  <span className="text-[#5f6368]">By {currentCourse.instructor}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-[#1a73e8]">{currentCourse.price}</span>
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => navigate(`/course/${currentCourse.id}`)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-[#202124]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-[#202124]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredCourses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-[#1a73e8]' 
                    : 'w-2 bg-[#dadce0] hover:bg-[#c4c7c5]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
