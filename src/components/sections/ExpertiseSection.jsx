import React from 'react';

/**
 * Course Segmentation Section (ExpertiseSection)
 * 
 * This module displays the various learning paths offered by Accredian.
 * It uses a data-driven approach (`segments` array) to map over content, 
 * ensuring that adding or removing courses in the future is as simple as 
 * updating the data array without touching the UI logic.
 */
const ExpertiseSection = () => {
  // Data structure for course segments to maintain separation of concerns
  const segments = [
    {
      title: 'Program Specific',
      description: 'Certificate, Executive, Post Graduate Certificate',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Industry Specific',
      description: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Topic Specific',
      description: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Level Specific',
      description: 'Senior Leadership, Mid-Career Professionals, Freshers',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-16 relative" id="cat">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =========================================
            HEADER SECTION
        ========================================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Tailored <span className="text-blue-600">Course Segmentation</span>
          </h2>
          <p className="text-base text-slate-600">
            Explore <span className="text-blue-600 font-medium">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        {/* =========================================
            DYNAMIC CARD GRID
            Maps over the segments array to render identical cards
            with unique content. Uses CSS Grid for responsiveness.
        ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment) => (
            <div key={segment.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group">
              <div className="h-44 w-full overflow-hidden">
                <img src={segment.image} alt={segment.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center flex flex-col flex-grow items-center justify-center bg-white relative">
                <h3 className="text-lg font-bold text-blue-600 mb-3">{segment.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-2">{segment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
