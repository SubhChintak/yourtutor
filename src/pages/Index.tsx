
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import SubjectsScroll from '@/components/SubjectsScroll';
import BatchesSection from '@/components/BatchesSection';
import FeaturesSection from '@/components/FeaturesSection';
import SuccessStories from '@/components/SuccessStories';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AboutSection />
        <SubjectsScroll />
        <BatchesSection />
        <FeaturesSection />
        <SuccessStories />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
