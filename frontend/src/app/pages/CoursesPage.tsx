import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CourseCard } from "../components/CourseCard";

export function CoursesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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
    }
  ];

  const categories = ["Web Dev", "AI", "Design", "Marketing"];

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#F8F9FF] to-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Explore Courses</h1>
          <p className="text-gray-600 text-xl">Find the perfect course to boost your skills</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white sticky top-16 z-40 border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
              />
            </div>
            
            {/* Category Pills */}
            <div className="hidden lg:flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-gray-400" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategories.includes(category)
                      ? "bg-[#4F46E5] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Category Pills */}
          <div className="lg:hidden flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategories.includes(category)
                    ? "bg-[#4F46E5] text-white"
                    : "bg-gray-100 text-gray-700"
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
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">No courses found. Try adjusting your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
