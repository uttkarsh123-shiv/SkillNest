import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#4F46E5] p-2 rounded-xl">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">SkillNest</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering students with skills that actually matter.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">AI & ML</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-white border border-gray-200 p-2.5 rounded-full hover:bg-gray-50 hover:border-[#4F46E5] transition-all group">
                <Facebook className="w-4 h-4 text-gray-600 group-hover:text-[#4F46E5]" />
              </a>
              <a href="#" className="bg-white border border-gray-200 p-2.5 rounded-full hover:bg-gray-50 hover:border-[#4F46E5] transition-all group">
                <Twitter className="w-4 h-4 text-gray-600 group-hover:text-[#4F46E5]" />
              </a>
              <a href="#" className="bg-white border border-gray-200 p-2.5 rounded-full hover:bg-gray-50 hover:border-[#4F46E5] transition-all group">
                <Instagram className="w-4 h-4 text-gray-600 group-hover:text-[#4F46E5]" />
              </a>
              <a href="#" className="bg-white border border-gray-200 p-2.5 rounded-full hover:bg-gray-50 hover:border-[#4F46E5] transition-all group">
                <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-[#4F46E5]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2026 SkillNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}