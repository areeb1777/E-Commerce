import EmailSignUp from "@/components/EmailSignUp";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import ListingsSection from "@/components/Listing";
import PopularListingsSection from "@/components/PopularListing";
import BrandStorySection from "@/components/StorySection";
import TopNav from "@/components/TopNavbar";
import React from "react";

const page = () => {
  return (
    <div>
      <TopNav />
      <HeroSection />
      <FeaturesSection />
      <ListingsSection />
      <PopularListingsSection />
      <EmailSignUp />
      <BrandStorySection />
      <Footer />
    </div>
  );
};

export default page;
