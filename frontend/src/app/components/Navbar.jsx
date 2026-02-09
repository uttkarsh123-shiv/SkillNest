import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-lg shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => navigate("/")}
          >
            <div className={`p-2.5 rounded-xl transition-all duration-500 ${
              isScrolled ? 'bg-[#1a73e8] shadow-lg' : 'bg-white/25 backdrop-blur-md shadow-xl'
            }`}>
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className={`text-[26px] font-bold transition-all duration-500 ${
              isScrolled ? 'text-[#202124]' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
            }`}>
              SkillNest
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate("/courses")}
              className={`text-[15px] font-semibold px-6 py-3 rounded-full transition-all duration-500 ${
                isScrolled 
                  ? 'text-[#5f6368] hover:bg-[#f1f3f4]' 
                  : 'text-white hover:bg-white/20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
              }`}
            >
              Courses
            </button>
            <button 
              onClick={() => navigate("/auth")}
              className={`text-[15px] font-semibold px-6 py-3 rounded-full transition-all duration-500 ${
                isScrolled 
                  ? 'text-[#1a73e8] hover:bg-[#e8f0fe]' 
                  : 'text-white hover:bg-white/20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
              }`}
            >
              Sign in
            </button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => navigate("/auth")}
              className={`ml-2 px-6 py-3 font-semibold transition-all duration-500 ${
                !isScrolled ? 'shadow-xl' : 'shadow-md'
              }`}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
