import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export function HeroCarousel() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-[750px] overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image}
              alt="Hero background"
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Static Content */}
      <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-[#1a73e8] text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
              ⭐ Start learning today
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
            Learn Skills That <br />
            <span className="text-[#4a9eff]">Actually Matter</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-100 mb-8 leading-relaxed">
            Short courses & workshops for students
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mb-12">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate("/courses")}
              className="px-7 py-3.5 text-base font-semibold shadow-xl"
            >
              Browse Courses
            </Button>
            <button
              onClick={() => navigate("/auth")}
              className="px-7 py-3.5 text-base font-semibold rounded-full bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-[#202124] transition-all duration-300 shadow-xl"
            >
              Join Free
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10">
            <div>
              <div className="text-4xl font-bold text-white mb-0.5">5K+</div>
              <div className="text-xs text-gray-200">Active Students</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div>
              <div className="text-4xl font-bold text-white mb-0.5">50+</div>
              <div className="text-xs text-gray-200">Courses</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div>
              <div className="text-4xl font-bold text-white mb-0.5">4.8★</div>
              <div className="text-xs text-gray-200">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all backdrop-blur-md border border-white/30 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all backdrop-blur-md border border-white/30 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-10 bg-white shadow-lg' 
                : 'w-2.5 bg-white/60 hover:bg-white/90'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
