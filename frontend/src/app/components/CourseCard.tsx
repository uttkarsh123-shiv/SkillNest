import { Clock, Star } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  category: string;
}

export function CourseCard({ 
  id,
  title, 
  description, 
  instructor, 
  duration, 
  price, 
  rating, 
  image,
  category 
}: CourseCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative h-44 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#4F46E5] text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
          </div>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-600">{instructor}</span>
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 leading-snug">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
          <span className="text-[#4F46E5] font-semibold text-lg">{price}</span>
        </div>

        <Button 
          variant="primary" 
          size="md" 
          className="w-full mt-4"
          onClick={() => navigate(`/course/${id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}