import { GraduationCap } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3.5">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <div className="bg-[#4F46E5] p-2 rounded-xl">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">SkillNest</span>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate("/courses")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => navigate("/auth")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Login
            </button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}