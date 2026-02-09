import { GraduationCap } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-[#e3e3e3] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigate("/")}
          >
            <div className="bg-[#1a73e8] p-2 rounded-lg group-hover:bg-[#1557b0] transition-colors">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-[22px] font-normal text-[#202124]">SkillNest</span>
          </div>

          <div className="flex items-center gap-1">
            <button 
              onClick={() => navigate("/courses")}
              className="text-sm font-medium text-[#5f6368] hover:bg-[#f1f3f4] px-4 py-2 rounded-full transition-all"
            >
              Courses
            </button>
            <button 
              onClick={() => navigate("/auth")}
              className="text-sm font-medium text-[#1a73e8] hover:bg-[#e8f0fe] px-4 py-2 rounded-full transition-all"
            >
              Sign in
            </button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => navigate("/auth")}
              className="ml-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}