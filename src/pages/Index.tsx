
import { useEffect } from 'react';
import Layout from './Layout';
import HeroSection from '../components/sections/HeroSection';
import MissionSection from '../components/sections/MissionSection';
import EditorialGallery from '../components/sections/EditorialGallery';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import NewsletterModal from '../components/modals/NewsletterModal';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <EditorialGallery />
      <FeaturedProducts />
      <NewsletterModal />
    </Layout>
  );
};

export default Index;
