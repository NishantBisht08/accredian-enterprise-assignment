import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    programs: [
      'Data Science & AI',
      'Product Management',
      'Business Analytics',
      'Digital Transformation',
      'Web Development',
    ],
    company: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact Us'],
    resources: ['Blog', 'Whitepapers', 'Case Studies', 'Webinars', 'Events'],
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex flex-col justify-center">
              <span className="text-[26px] font-bold text-white tracking-tight leading-none lowercase">
                accredian
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide mt-0.5">
                credentials that matter
              </span>
            </Link>
            <p className="text-sm leading-6 text-slate-400 max-w-xs">
              Empowering organizations worldwide by upskilling their workforce with top-tier education in Data, AI, and Product.
            </p>
            <div className="flex space-x-6">
              {/* Social links generic placeholders */}
              {['Facebook', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-slate-500 hover:text-slate-300">
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 bg-slate-800 rounded-full flex items-center justify-center text-[10px]">{social[0]}</div>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.programs.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.resources.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Sales</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <p className="text-sm leading-6 text-slate-400">
                      Email: enterprise@accredian.com
                    </p>
                  </li>
                  <li>
                    <p className="text-sm leading-6 text-slate-400">
                      Phone: +1 (800) 123-4567
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24 w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-slate-500">
            This is a clone project assignment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
