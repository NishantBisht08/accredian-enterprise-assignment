import React from 'react';
import { Search, Layers, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Assess',
    subtitle: "Understand your team's needs",
    description:
      'We begin with a thorough skill gap analysis across your organization. Our experts work with HR and team leads to identify where training will have the highest ROI.',
    color: 'blue',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Design',
    subtitle: 'Build a custom learning path',
    description:
      "Based on the assessment, we design a tailored curriculum — choosing the right domains, faculty, and delivery format (live, async, or hybrid) to fit your team's schedule.",
    color: 'purple',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Execute & Track',
    subtitle: 'Deliver, measure & iterate',
    description:
      'We run the program with live mentorship and real-world capstone projects. Your management dashboard tracks attendance, grades, and engagement in real time.',
    color: 'emerald',
  },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    badge: 'bg-blue-600',
    connector: 'border-blue-200',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    badge: 'bg-purple-600',
    connector: 'border-purple-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    badge: 'bg-emerald-600',
    connector: 'border-emerald-200',
  },
};

const HowItWorksSection = () => {
  return (
    <div className="bg-slate-50 py-12 sm:py-16" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-500">
            A simple 3-step process to{' '}
            <span className="text-blue-600 font-medium">upskill your entire workforce</span>
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[60%] border-t-2 border-dashed border-slate-300 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step) => {
              const colors = colorMap[step.color];
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div
                    className={`relative w-32 h-32 rounded-full ${colors.bg} flex items-center justify-center mb-8 shadow-sm border-4 border-white group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className={`h-12 w-12 ${colors.icon}`} strokeWidth={1.5} />
                    {/* Step badge */}
                    <span
                      className={`absolute -top-2 -right-2 ${colors.badge} text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className={`text-sm font-semibold mb-4 ${colors.icon}`}>{step.subtitle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
