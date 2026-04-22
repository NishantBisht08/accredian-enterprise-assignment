import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import ClientsSection from '../components/sections/ClientsSection';
import EdgeSection from '../components/sections/EdgeSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';

/**
 * Main Home Page Component
 * 
 * This file serves as the core layout assembler for the Accredian Enterprise landing page.
 * It follows a modular architecture, where each major visual section of the page is 
 * isolated into its own reusable React component within the `src/components/sections/` directory.
 * 
 * We use a standard semantic HTML structure (<nav>, <main>, <footer>) for better 
 * SEO and accessibility.
 */
export default function Home() {
  return (
    <>
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main content area - flex-grow ensures it pushes the footer to the bottom on short pages */}
      <main className="flex-grow">
        {/* 1. Primary Hero / Call to Action */}
        <HeroSection />

        {/* 2. Key Metrics & Social Proof */}
        <StatsSection />

        {/* 3. Trusted Partners Logo Strip */}
        <ClientsSection />

        {/* 4. Value Proposition / Benefits */}
        <EdgeSection />

        {/* 5. Course Catalog / Segmentation */}
        <ExpertiseSection />

        {/* 6. Step-by-step Process Explanation */}
        <HowItWorksSection />

        {/* 7. Client Reviews / Success Stories */}
        <TestimonialsSection />

        {/* 8. Help / Information Center */}
        <FAQSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
