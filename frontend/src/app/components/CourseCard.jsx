import { Clock, Star } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

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
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#e3e3e3] hover:shadow-lg hover:border-[#d2d2d2] transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-3 left-3 bg-[#1a73e8] text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
            <span className="text-sm font-medium text-[#202124]">{rating}</span>
          </div>
          <span className="text-[#dadce0]">•</span>
          <span className="text-sm text-[#5f6368] truncate">{instructor}</span>
        </div>

        <h3 className="text-base font-medium text-[#202124] mb-2 line-clamp-2 leading-snug h-[2.8rem]">{title}</h3>
        <p className="text-[#5f6368] text-sm mb-4 line-clamp-2 leading-relaxed h-[2.5rem]">{description}</p>

        <div className="mt-auto">
          <div className="flex items-center justify-between pt-3 border-t border-[#e8eaed] mb-4">
            <div className="flex items-center gap-1.5 text-[#5f6368]">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{duration}</span>
            </div>
            <span className="text-[#1a73e8] font-semibold text-lg">{price}</span>
          </div>

          <Button 
            variant="primary" 
            size="md" 
            className="w-full"
            onClick={() => navigate(`/course/${id}`)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
