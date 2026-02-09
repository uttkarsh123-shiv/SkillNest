import { GraduationCap, LogOut } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => navigate("/")}
          >
            <div className="p-2.5 rounded-xl bg-[#1a73e8] shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-[26px] font-bold text-[#202124]">
              SkillNest
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate("/courses")}
              className="text-[15px] font-semibold px-6 py-3 rounded-full transition-all text-[#5f6368] hover:bg-[#f1f3f4]"
            >
              Courses
            </button>

            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && (
                  <button 
                    onClick={() => navigate("/admin")}
                    className="text-[15px] font-semibold px-6 py-3 rounded-full transition-all text-[#1a73e8] hover:bg-[#e8f0fe]"
                  >
                    Admin
                  </button>
                )}
                <span className="text-[15px] font-medium px-4 text-[#5f6368]">
                  {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="p-3 rounded-full transition-all text-red-600 hover:bg-red-50"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => navigate("/auth")}
                  className="text-[15px] font-semibold px-6 py-3 rounded-full transition-all text-[#1a73e8] hover:bg-[#e8f0fe]"
                >
                  Sign in
                </button>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => navigate("/auth")}
                  className="ml-2 px-6 py-3 font-semibold shadow-md"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
