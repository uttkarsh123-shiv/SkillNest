import { BookOpen, Users, DollarSign, Star, Sparkles, TrendingUp, Award } from "lucide-react";
import { Button } from "../components/Button";
import { CourseCard } from "../components/CourseCard";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router";

export function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: "Short Courses",
      description: "Learn quickly with our focused, bite-sized courses designed for busy students"
    },
    {
      icon: Award,
      title: "Expert Mentors",
      description: "Get guidance from industry professionals with real-world experience"
    },
    {
      icon: TrendingUp,
      title: "Affordable Pricing",
      description: "Quality education shouldn't break the bank. Student-friendly prices"
    }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Master HTML, CSS, JavaScript, React, and Node.js from scratch",
      instructor: "Sarah Johnson",
      duration: "8 weeks",
      price: "$49",
      rating: 4.8,
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MDUwMjkyNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "AI & Machine Learning Fundamentals",
      description: "Dive into AI concepts, neural networks, and practical ML applications",
      instructor: "Dr. Michael Chen",
      duration: "6 weeks",
      price: "$59",
      rating: 4.9,
      category: "AI",
      image: "https://images.unsplash.com/photo-1756967385885-0f20d517f72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYxNTYwOXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Create stunning user interfaces and exceptional user experiences",
      instructor: "Emma Rodriguez",
      duration: "5 weeks",
      price: "$45",
      rating: 4.7,
      category: "Design",
      image: "https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNTA1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      description: "Learn SEO, social media marketing, and content strategy",
      instructor: "James Miller",
      duration: "4 weeks",
      price: "$39",
      rating: 4.6,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA2MTU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Computer Science Student",
      image: "https://images.unsplash.com/photo-1611181355758-089959e2cfb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNjE1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "SkillNest helped me land my dream internship! The courses are practical and taught by amazing instructors."
    },
    {
      name: "Maria Garcia",
      role: "Design Student",
      image: "https://images.unsplash.com/photo-1611181355758-089959e2cfb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNjE1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "The best investment I made in my education. Affordable prices and top-quality content. Highly recommend!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EEF2FF] border border-[#4F46E5]/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-sm font-medium text-[#4F46E5]">Start learning today</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Learn Skills That <span className="text-[#4F46E5]">Actually Matter</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover short courses & workshops curated for students who want to stay ahead
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                >
                  Join Free
                </Button>
              </div>
              
              <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
                <div>
                  <div className="text-3xl font-bold text-gray-900">5K+</div>
                  <div className="text-sm text-gray-600">Active Students</div>
                </div>
                <div className="h-10 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="h-10 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.8★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#4F46E5]/10">
                <img 
                  src="https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNjE1NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Online Learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SkillNest Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SkillNest?</h2>
            <p className="text-gray-600 text-lg">Everything you need to excel in your career</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-[#4F46E5]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#EEF2FF] w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-[#4F46E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Courses</h2>
              <p className="text-gray-600 text-lg">Start learning with our most popular courses</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate("/courses")}
            >
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 text-lg">Join thousands of successful learners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#F8F9FF] p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-base leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
