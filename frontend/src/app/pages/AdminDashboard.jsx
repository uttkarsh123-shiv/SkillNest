import { useState } from "react";
import { GraduationCap, LayoutDashboard, BookOpen, Users, Plus, LogOut, Edit, Trash2, X, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

export function AdminDashboard() {
  const [activeView, setActiveView] = useState("dashboard");
  const [courses, setCourses] = useState([
    { id: 1, title: "Complete Web Development Bootcamp", category: "Web Dev", price: "$49", duration: "8 weeks", students: 12500 },
    { id: 2, title: "AI & Machine Learning Fundamentals", category: "AI", price: "$59", duration: "6 weeks", students: 8900 },
    { id: 3, title: "UI/UX Design Masterclass", category: "Design", price: "$45", duration: "5 weeks", students: 7200 },
    { id: 4, title: "Digital Marketing Strategy", category: "Marketing", price: "$39", duration: "4 weeks", students: 5600 }
  ]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "Web Dev",
    price: "",
    duration: "",
    description: ""
  });
  const navigate = useNavigate();

  const stats = [
    { 
      label: "Total Courses", 
      value: courses.length.toString(), 
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600",
      trend: "+12%"
    },
    { 
      label: "Total Students", 
      value: "5,234", 
      icon: Users,
      color: "bg-green-50 text-green-600",
      trend: "+23%"
    },
    { 
      label: "Total Revenue", 
      value: "$142K", 
      icon: DollarSign,
      color: "bg-purple-50 text-purple-600",
      trend: "+18%"
    },
    { 
      label: "Growth", 
      value: "24.5%", 
      icon: TrendingUp,
      color: "bg-orange-50 text-orange-600",
      trend: "+8%"
    }
  ];

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      category: course.category,
      price: course.price,
      duration: course.duration,
      description: ""
    });
    setActiveView("edit-course");
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    if (editingCourse) {
      setCourses(courses.map(course => 
        course.id === editingCourse.id 
          ? { ...course, ...formData }
          : course
      ));
    } else {
      const newCourse = {
        id: Math.max(...courses.map(c => c.id)) + 1,
        title: formData.title,
        category: formData.category,
        price: formData.price,
        duration: formData.duration,
        students: 0
      };
      setCourses([...courses, newCourse]);
    }
    setFormData({ title: "", category: "Web Dev", price: "", duration: "", description: "" });
    setEditingCourse(null);
    setActiveView("courses");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "add-course", label: "Add Course", icon: Plus },
    { id: "users", label: "Users", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="bg-[#4F46E5] p-2 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 block">SkillNest</span>
              <span className="text-xs text-gray-500">Admin Panel</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeView === item.id
                      ? "bg-[#4F46E5] text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Dashboard View */}
          {activeView === "dashboard" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium text-green-600">{stat.trend}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    { text: "New enrollment in Web Development", time: "2 hours ago", badge: "+1", color: "text-green-600" },
                    { text: "New course published: React Advanced", time: "5 hours ago", badge: "New", color: "text-blue-600" },
                    { text: "User feedback received", time: "1 day ago", badge: "⭐ 5.0", color: "text-gray-600" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-gray-900 font-medium">{activity.text}</p>
                        <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                      </div>
                      <span className={`${activity.color} font-semibold`}>{activity.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Courses View */}
          {activeView === "courses" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Manage Courses</h1>
                <Button onClick={() => setActiveView("add-course")}>
                  <Plus className="w-5 h-5 mr-2" />
                  Add New Course
                </Button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Title</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Category</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Price</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Duration</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Students</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map(course => (
                      <tr key={course.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{course.title}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                            {course.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{course.price}</td>
                        <td className="px-6 py-4 text-gray-600">{course.duration}</td>
                        <td className="px-6 py-4 text-gray-600">{course.students.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditCourse(course)}
                              className="p-2 text-[#4F46E5] hover:bg-[#4F46E5]/10 rounded-lg transition-all"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteCourse(course.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Add/Edit Course View */}
          {(activeView === "add-course" || activeView === "edit-course") && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  {editingCourse ? "Edit Course" : "Add New Course"}
                </h1>
                <button
                  onClick={() => {
                    setActiveView("courses");
                    setEditingCourse(null);
                    setFormData({ title: "", category: "Web Dev", price: "", duration: "", description: "" });
                  }}
                  className="text-gray-600 hover:text-gray-900 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 max-w-3xl">
                <form onSubmit={handleSaveCourse}>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Course Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Complete Web Development Bootcamp"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe what students will learn..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                      >
                        <option value="Web Dev">Web Development</option>
                        <option value="AI">Artificial Intelligence</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Price</label>
                      <input
                        type="text"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder="$49"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Duration</label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="e.g., 8 weeks"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] transition-all"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button variant="primary" size="lg" type="submit" className="flex-1">
                      {editingCourse ? "Update Course" : "Save Course"}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveView("courses");
                        setEditingCourse(null);
                        setFormData({ title: "", category: "Web Dev", price: "", duration: "", description: "" });
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Users View */}
          {activeView === "users" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">User Management</h1>

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Name</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Email</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Courses</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Join Date</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Alex Thompson", email: "alex@email.com", courses: 3, date: "Jan 15, 2026", status: "Active" },
                      { name: "Maria Garcia", email: "maria@email.com", courses: 2, date: "Jan 20, 2026", status: "Active" },
                      { name: "John Smith", email: "john@email.com", courses: 5, date: "Dec 10, 2025", status: "Active" },
                      { name: "Emily Chen", email: "emily@email.com", courses: 1, date: "Feb 1, 2026", status: "Active" }
                    ].map((user, index) => (
                      <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 text-gray-600">{user.email}</td>
                        <td className="px-6 py-4 text-gray-600">{user.courses}</td>
                        <td className="px-6 py-4 text-gray-600">{user.date}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
