import { useState, useEffect } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export function PromoBanner() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Limited Offer Tag */}
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold tracking-wide">
              LIMITED TIME OFFER
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-3 leading-tight">
                Professional Certificate in UI/UX Design
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Master design thinking, prototyping, and user research. Industry-recognized certification included.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>7,200+ enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>4.9 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>5 weeks · Self-paced</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-white">$45</span>
                <span className="text-2xl text-slate-500 line-through">$199</span>
              </div>
              <div className="bg-red-600 text-white px-3 py-1 rounded font-semibold text-sm">
                Save 77%
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <Button
                variant="primary"
                onClick={() => navigate("/courses")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Button>
              <button
                onClick={() => navigate("/courses")}
                className="text-slate-300 hover:text-white font-medium transition-colors"
              >
                View Details →
              </button>
            </div>
          </div>

          {/* Right: Timer & Info - 5 columns */}
          <div className="lg:col-span-5 space-y-4">
            {/* Timer Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Offer ends in</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2">
                    <div className="text-3xl font-bold text-white">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Hours</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2">
                    <div className="text-3xl font-bold text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Minutes</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2">
                    <div className="text-3xl font-bold text-white">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Seconds</div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="text-sm font-semibold text-white mb-3">What's included</div>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>45 hours of content</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Expert instructor support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
