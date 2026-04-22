import React from 'react';
import { Target, Users, BookOpen, Trophy } from 'lucide-react';

const EdgeSection = () => {
  const features = [
    {
      name: 'Industry-Vetted Curriculum',
      description: 'Curriculum designed and frequently updated by CXOs and leading practitioners from tier-1 companies.',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      name: 'World-Class Faculty',
      description: 'Learn directly from leaders who have built and scaled products at global top tech companies.',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      name: 'Outcome-Driven Approach',
      description: 'Focus on practical applications, capstone projects, and measurable ROI for the enterprise.',
      icon: Target,
      color: 'bg-green-100 text-green-600',
    },
    {
      name: 'Recognized Certifications',
      description: 'Prestigious certifications that carry weight in the industry and validate the skills acquired.',
      icon: Trophy,
      color: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <div className="bg-slate-50 py-12 sm:py-16" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-500">
            Key Aspects of <span className="text-blue-600 font-medium">Our Strategic Training</span>
          </p>
        </div>
        <div className="mx-auto mt-10 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-8 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 mb-4">
                  <div className={`h-10 w-10 flex items-center justify-center rounded-xl ${feature.color}`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="flex flex-auto flex-col text-sm leading-7 text-slate-500">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default EdgeSection;
