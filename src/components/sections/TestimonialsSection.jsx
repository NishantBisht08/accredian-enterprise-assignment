import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Accredian Enterprise transformed our entire analytics division. The customized curriculum directly addressed our skill gaps and the hands-on capstone projects meant we saw immediate ROI on the training.",
    name: 'Priya Sharma',
    role: 'VP of Data Science',
    company: 'Reliance Industries',
    initials: 'PS',
    color: 'bg-blue-600',
  },
  {
    quote:
      "The faculty quality is unmatched. Having industry practitioners lead the live sessions gave our engineering managers exactly what they needed to transition into strategic tech leadership roles.",
    name: 'Rahul Menon',
    role: 'CTO',
    company: 'HCL Technologies',
    initials: 'RM',
    color: 'bg-purple-600',
  },
  {
    quote:
      "We upskilled 500+ product owners globally. The hybrid learning format provided the perfect balance of flexibility and accountability. It's the best corporate learning initiative we've ever run.",
    name: 'Anita Kumar',
    role: 'Head of Product',
    company: 'ADP India',
    initials: 'AK',
    color: 'bg-emerald-600',
  },
];

const TestimonialsSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 overflow-hidden" id="testimonials">
      {/* subtle top divider glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our <span className="text-blue-600">Partners Say</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Trusted by leaders across{' '}
            <span className="text-blue-600 font-medium">India's top enterprises</span>
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-blue-100 mb-4 fill-blue-100" />

              {/* Quote text */}
              <p className="text-slate-700 text-sm leading-relaxed flex-grow">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                {/* Name & Role */}
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                  <p className="text-xs font-medium text-blue-600">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
