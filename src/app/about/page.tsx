import React from 'react';
import AboutPageHeader from '@/components/AboutPageHeaders';
import TopNav from '@/components/TopNavbar';
import Footer from '@/components/Footer';
import BrandStorySection from "@/components/StorySection";
import AboutFeaturesSection from '@/components/AboutFeatureSection';
import FeaturesSection from '@/components/Features';
import AboutEmailSignUp from '@/components/AboutEmailSignUp';

const About: React.FC = () => {
  return (
    <div>
        <TopNav />
      <AboutPageHeader />
      <BrandStorySection />
      <AboutFeaturesSection />
      <FeaturesSection />
      <AboutEmailSignUp />
      <Footer />
    </div>
  );
};

export default About;
