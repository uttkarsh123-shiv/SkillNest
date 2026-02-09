import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CourseCard } from "../components/CourseCard";
import { FeaturedCourseCarousel } from "../components/FeaturedCourseCarousel";
import { Pagination } from "../components/Pagination";

export function CoursesPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const allCourses = [
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
    },
    {
      id: 5,
      title: "Python for Data Science",
      description: "Master Python programming and data analysis libraries",
      instructor: "David Kim",
      duration: "6 weeks",
      price: "$49",
      rating: 4.8,
      category: "AI",
      image: "https://images.unsplash.com/photo-1756967385885-0f20d517f72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYxNTYwOXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      title: "React Advanced Patterns",
      description: "Build scalable React applications with advanced techniques",
      instructor: "Sarah Johnson",
      duration: "5 weeks",
      price: "$55",
      rating: 4.9,
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MDUwMjkyNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 7,
      title: "Graphic Design Essentials",
      description: "Learn Adobe Creative Suite and design principles",
      instructor: "Lisa Wong",
      duration: "4 weeks",
      price: "$42",
      rating: 4.7,
      category: "Design",
      image: "https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNTA1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 8,
      title: "Social Media Marketing Mastery",
      description: "Grow your brand on Instagram, Facebook, and TikTok",
      instructor: "Alex Turner",
      duration: "3 weeks",
      price: "$35",
      rating: 4.5,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA2MTU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 9,
      title: "Full Stack JavaScript Development",
      description: "Build complete web applications with MERN stack",
      instructor: "Robert Martinez",
      duration: "10 weeks",
      price: "$65",
      rating: 4.9,
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MDUwMjkyNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 10,
      title: "Deep Learning with TensorFlow",
      description: "Build neural networks and deep learning models from scratch",
      instructor: "Dr. Priya Sharma",
      duration: "7 weeks",
      price: "$69",
      rating: 4.8,
      category: "AI",
      image: "https://images.unsplash.com/photo-1756967385885-0f20d517f72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYxNTYwOXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 11,
      title: "Motion Graphics & Animation",
      description: "Create engaging animations with After Effects and Cinema 4D",
      instructor: "Carlos Mendez",
      duration: "6 weeks",
      price: "$52",
      rating: 4.6,
      category: "Design",
      image: "https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNTA1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 12,
      title: "Email Marketing & Automation",
      description: "Master email campaigns, automation, and conversion optimization",
      instructor: "Jennifer Lee",
      duration: "4 weeks",
      price: "$38",
      rating: 4.5,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA2MTU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 13,
      title: "TypeScript for Modern Development",
      description: "Write type-safe JavaScript applications with TypeScript",
      instructor: "Thomas Anderson",
      duration: "5 weeks",
      price: "$48",
      rating: 4.7,
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MDUwMjkyNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 14,
      title: "Natural Language Processing",
      description: "Build chatbots and text analysis systems with NLP",
      instructor: "Dr. Aisha Patel",
      duration: "8 weeks",
      price: "$72",
      rating: 4.9,
      category: "AI",
      image: "https://images.unsplash.com/photo-1756967385885-0f20d517f72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDYxNTYwOXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 15,
      title: "Brand Identity Design",
      description: "Create memorable brand identities and visual systems",
      instructor: "Sophie Chen",
      duration: "5 weeks",
      price: "$46",
      rating: 4.8,
      category: "Design",
      image: "https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNTA1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 16,
      title: "Growth Hacking Strategies",
      description: "Scale your startup with proven growth hacking techniques",
      instructor: "Mark Stevens",
      duration: "4 weeks",
      price: "$44",
      rating: 4.6,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA2MTU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = ["Web Dev", "AI", "Design", "Marketing"];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    setCurrentPage(1);
  };

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Featured Course Carousel */}
      <FeaturedCourseCarousel />

      {/* Header */}
      <div className="bg-white border-b border-[#e3e3e3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-normal text-[#202124] mb-3">All Courses</h1>
          <p className="text-[#5f6368] text-lg">Browse our complete course catalog</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white sticky top-[57px] z-40 shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 items-center">
            <div className="flex-1 relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5f6368] group-focus-within:text-[#1a73e8] transition-colors" />
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-[#e3e3e3] hover:border-[#c4c7c5] focus:outline-none focus:border-[#1a73e8] focus:shadow-lg transition-all text-base bg-white"
              />
            </div>
            
            {/* Category Pills */}
            <div className="hidden lg:flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-[#5f6368]" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedCategories.includes(category)
                      ? "bg-[#1a73e8] text-white shadow-lg scale-105"
                      : "bg-white text-[#5f6368] border-2 border-[#e3e3e3] hover:border-[#1a73e8] hover:text-[#1a73e8]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Category Pills */}
          <div className="lg:hidden flex flex-wrap gap-3 mt-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategories.includes(category)
                    ? "bg-[#1a73e8] text-white shadow-lg"
                    : "bg-white text-[#5f6368] border-2 border-[#e3e3e3]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-[#5f6368] text-base">
              Showing <span className="font-bold text-[#1a73e8] text-lg">{currentCourses.length}</span> of <span className="font-semibold text-[#202124]">{filteredCourses.length}</span> courses
            </p>
          </div>
          {totalPages > 1 && (
            <p className="text-sm text-[#5f6368]">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-24 bg-gradient-to-br from-[#f8f9fa] to-white rounded-3xl border-2 border-dashed border-[#e3e3e3]">
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="text-2xl font-semibold text-[#202124] mb-2">No courses found</h3>
            <p className="text-[#5f6368] text-base">Try adjusting your search or filters</p>
          </div>
        )}

        {filteredCourses.length > 0 && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
