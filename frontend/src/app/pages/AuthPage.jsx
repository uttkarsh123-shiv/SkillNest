import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

export function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/courses");
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#4F46E5] via-[#5B52E8] to-[#6B5FEB] p-12 items-center justify-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-md">
          <h2 className="text-4xl font-bold text-white mb-4">
            Upgrade Your Skills Today
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Join thousands of students mastering the skills that matter
          </p>
          
          <div className="mt-16 grid grid-cols-3 gap-0">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5K+</div>
              <div className="text-white/80 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/80 text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10 justify-center lg:justify-start">
            <div className="bg-[#4F46E5] p-2 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">SkillNest</span>
          </div>

          {/* Auth Card */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeTab === "login" ? "Welcome back" : "Get started"}
            </h2>
            <p className="text-gray-600 mb-8">
              {activeTab === "login" 
                ? "Sign in to continue your learning journey" 
                : "Create your account to start learning"}
            </p>

            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-full mb-8">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all ${
                  activeTab === "login"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all ${
                  activeTab === "register"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {activeTab === "register" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                  required
                />
              </div>

              {activeTab === "register" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                    required
                  />
                </div>
              )}

              {activeTab === "login" && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] border-gray-300 rounded focus:ring-[#4F46E5]" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-[#4F46E5] hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button variant="primary" size="lg" type="submit" className="w-full mt-2">
                {activeTab === "login" ? "Sign In" : "Create Account"}
              </Button>
            </form>

            {/* Additional Links */}
            <div className="mt-8 text-center">
              <button 
                onClick={() => navigate("/")}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
