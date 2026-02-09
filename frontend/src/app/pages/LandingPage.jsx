import { Sparkles, TrendingUp, Award } from "lucide-react";
import { Button } from "../components/Button";
import { CourseCard } from "../components/CourseCard";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroCarousel } from "../components/HeroCarousel";
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Why SkillNest Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#202124] mb-4">Why Choose SkillNest?</h2>
            <p className="text-[#5f6368] text-lg">Everything you need to excel in your career</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-[#e3e3e3] hover:border-[#1a73e8] hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#e8f0fe] w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-[#1a73e8]" />
                </div>
                <h3 className="text-xl font-semibold text-[#202124] mb-3">{feature.title}</h3>
                <p className="text-[#5f6368] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#202124] mb-2">Featured Courses</h2>
              <p className="text-[#5f6368] text-lg">Start learning with our most popular courses</p>
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

      <Footer />
    </div>
  );
}
