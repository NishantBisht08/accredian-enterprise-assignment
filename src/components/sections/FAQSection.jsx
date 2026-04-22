'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FAQSection Component
 * 
 * Implements a fully interactive Accordion UI for Frequently Asked Questions.
 * Uses React state (`openIndex`) to track which question is currently expanded.
 * This avoids the need for heavy third-party UI libraries like Headless UI or Radix.
 */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How are the enterprise programs customized for our company?',
      answer: 'We conduct a thorough skill gap analysis before the program begins. Based on the insights, we tailor the curriculum, capstone projects, and delivery schedule to align with your organization\'s strategic goals and current tech stack.',
    },
    {
      question: 'What is the commitment required from our employees?',
      answer: 'The programs are designed for working professionals. Participants typically need to dedicate 4-6 hours per week, which includes live sessions on weekends and asynchronous learning/projects on weekdays.',
    },
    {
      question: 'Do you provide progress tracking for the management?',
      answer: 'Yes. Enterprise partners get access to a dedicated dashboard that tracks attendance, assignment grades, capstone project completion, and overall engagement metrics of all enrolled employees.',
    },
    {
      question: 'Are there any practical projects involved?',
      answer: 'Absolutely. We believe in learning by doing. Over 40% of the program evaluation is based on capstone projects that solve real-world problems, often using your company\'s anonymized data if permitted.',
    },
  ];

  return (
    <div className="bg-slate-50 py-12 sm:py-16" id="faqs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Header */}
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-slate-900 mb-4 text-center">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-center text-slate-500 mb-12">Everything you need to know before getting started</p>
          
          {/* FAQ Accordion List */}
          <dl className="space-y-0 divide-y divide-slate-200 border-t border-slate-200">
            {faqs.map((faq, index) => (
              <div key={faq.question} className={`py-6 transition-all duration-200 ${openIndex === index ? 'bg-blue-50/60 px-5 -mx-5 rounded-xl' : ''}`}>
                <dt>
                  <button
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    className="flex w-full items-start justify-between text-left text-slate-900 focus:outline-none"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-6 w-6 transform transition-transform duration-200 ${
                          openIndex === index ? '-rotate-180 text-blue-600' : 'text-slate-400'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-4 pr-12">
                    <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
