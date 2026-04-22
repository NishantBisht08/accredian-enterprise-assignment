'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';
import LeadCaptureModal from '../LeadCaptureModal';

/**
 * HeroSection Component
 * 
 * The primary landing module for the enterprise page.
 * Uses a grid layout to split text content (left) and visual assets (right).
 * Includes state management for a Lead Capture Modal to handle user conversions.
 */
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-16 md:pt-24 pb-16">
        
        {/* =========================================
            BACKGROUND DECORATIONS
            Uses an SVG pattern mask to create a subtle grid
        ========================================= */}
        <div className="absolute inset-x-0 bottom-0 top-0 text-slate-900/5 [mask-image:linear-gradient(transparent,black)]">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%">
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* =========================================
                LEFT COLUMN: COPY & CALL TO ACTIONS
            ========================================= */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 ring-1 ring-inset ring-blue-600/20 mb-8 blur-[0.3px]">
                Empowering Global Analytics Teams
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Empower your workforce with <span className="text-blue-600">Accredian Enterprise</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg">
                Transform your organization through world-class executive education in Data Science, AI, and Product Management. Trusted by top Fortune 500 companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                  Enquire Now
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src={`https://ui-avatars.com/api/?name=User+${i}&background=random`}
                      alt=""
                    />
                  ))}
                </div>
                <p>Join 10,000+ professionals upskilled</p>
              </div>
            </div>

            {/* =========================================
                RIGHT COLUMN: VISUAL ASSETS
            ========================================= */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Main Image Card with overlay gradient */}
              <div className="relative rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                  alt="Team collaborating"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-24 text-white">
                  <p className="font-semibold text-lg">World-class Faculty & Mentorship</p>
                  <p className="text-sm text-slate-200 opacity-90">Live interactive classes led by industry leaders</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Average Hike</p>
                    <p className="text-xl font-bold text-slate-900">126%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
