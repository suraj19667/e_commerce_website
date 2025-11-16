'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-gradient-shift"></div>
      
      {/* Subtle animated particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float-1"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-float-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-float-3"></div>
        <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-white rounded-full animate-float-4"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            <span className="inline-block animate-fade-in-up">Welcome to</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-gradient-text">
              StyleAura
            </span>
          </h1>
          
          <p 
            className={`text-xl sm:text-2xl mb-8 text-gray-300 transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            Discover the latest trends in men&apos;s and women&apos;s fashion
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
          >
           
          </div>
        </div>
      </div>
    </section>
  );
}

