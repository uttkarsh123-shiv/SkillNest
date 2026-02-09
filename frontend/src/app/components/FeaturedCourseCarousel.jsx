import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export function FeaturedCourseCarousel({ courses = [] }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayCourses = courses.length > 0 ? courses.slice(0, 3) : [];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (displayCourses.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayCourses.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [displayCourses.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? displayCourses.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayCourses.length);
  };

  if (displayCourses.length === 0) {
    return null;
  }

  const currentCourse = displayCourses[currentIndex];

  return (
    <div className="relative h-[500px] bg-gradient-to-br from-[#1a73e8] to-[#4a9eff] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Course Info */}
          <div className="text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              ⭐ Featured Course
            </div>

            <h2 className="text-4xl font-bold mb-4 leading-tight">
              {currentCourse.title}
            </h2>

            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              {currentCourse.description}
            </p>

            <div className="flex items-center gap-6 mb-8 text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-sm">👨‍🏫 {currentCourse.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">⏱️ {currentCourse.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">⭐ {currentCourse.rating}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="primary" 
                onClick={() => navigate(`/course/${currentCourse._id}`)}
                className="bg-white text-[#1a73e8] hover:bg-gray-100"
              >
                View Course
              </Button>
              <span className="flex items-center text-2xl font-bold text-white">
                {currentCourse.price}
              </span>
            </div>
          </div>

          {/* Right: Course Image */}
          <div className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={currentCourse.image} 
                alt={currentCourse.title}
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#1a73e8] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentCourse.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-full transition-all z-10 border border-white/30"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-full transition-all z-10 border border-white/30"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {displayCourses.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
