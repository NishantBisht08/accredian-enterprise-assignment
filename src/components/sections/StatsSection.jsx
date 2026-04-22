import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: '10K+',
      description: 'Professionals Trained For Exceptional Career Success',
    },
    {
      id: 2,
      value: '200+',
      description: 'Sessions Delivered With Unmatched Learning Excellence',
    },
    {
      id: 3,
      value: '5K+',
      description: 'Active Learners Engaged In Dynamic Courses',
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16" id="stats">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-500">
            The Numbers Behind <span className="text-blue-600">Our Success</span>
          </p>
        </div>

        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-slate-200">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center px-8 group">
                <div className="bg-blue-50 border border-blue-100 text-blue-600 font-bold text-3xl sm:text-4xl tracking-tight rounded-2xl px-10 py-4 mb-5 group-hover:bg-blue-100 group-hover:border-blue-200 transition-all duration-300 shadow-sm">
                  {stat.value}
                </div>
                <p className="text-sm font-medium leading-6 text-slate-600 max-w-[220px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

