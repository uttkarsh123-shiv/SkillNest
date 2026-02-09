import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CourseCard } from "../components/CourseCard";
import { PromoBanner } from "../components/PromoBanner";
import { Pagination } from "../components/Pagination";
import { courseAPI } from "../../utils/api";

export function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const categories = ["All", "Web Dev", "AI", "Design", "Marketing", "Data Science", "Business"];

  // Fetch courses from API
  useEffect(() => {
    fetchCourses();
  }, [selectedCategory]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const filters = {};
      if (selectedCategory !== "All") {
        filters.category = selectedCategory;
      }
      const data = await courseAPI.getAll(filters);
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter courses by search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        {/* Promo Banner */}
        <PromoBanner />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#202124] mb-2">Explore Courses</h1>
            <p className="text-[#5f6368] text-lg">Discover your next learning adventure</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5f6368]" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-[#e3e3e3] bg-[#f8f9fa] focus:outline-none focus:border-[#1a73e8] focus:bg-white transition-all text-[15px]"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#1a73e8] text-white shadow-md scale-105'
                      : 'bg-[#f1f3f4] text-[#5f6368] hover:bg-[#e8eaed]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-[#1a73e8] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-[#5f6368]">Loading courses...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-5 rounded-2xl mb-8">
              <div className="font-semibold mb-2">⚠️ Error Loading Courses</div>
              <div className="text-sm">{error}</div>
              {error.includes('Cannot connect') && (
                <div className="mt-3 text-sm bg-red-100 p-3 rounded-lg">
                  <strong>Quick Fix:</strong>
                  <ol className="list-decimal ml-4 mt-2 space-y-1">
                    <li>Open terminal and run: <code className="bg-red-200 px-2 py-1 rounded">cd backend && npm run dev</code></li>
                    <li>Make sure you see "Server running on port 5000"</li>
                    <li>Refresh this page</li>
                  </ol>
                </div>
              )}
            </div>
          )}

          {/* Courses Grid */}
          {!loading && !error && (
            <>
              {currentCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {currentCourses.map((course) => (
                    <CourseCard key={course._id} {...course} id={course._id} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gradient-to-br from-[#f8f9fa] to-[#e8f0fe] rounded-3xl">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-[#202124] mb-2">No courses found</h3>
                  <p className="text-[#5f6368]">Try adjusting your search or filters</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
