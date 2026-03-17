import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import BestWorkSection from './sections/BestWorkSection';
import WhySection from './sections/WhySection';
import ServicesPreviewSection from './sections/ServicesPreviewSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FinalCTASection from './sections/FinalCTASection';
import ContactSection from './sections/ContactSection';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import Dashboard from './pages/Dashboard';
import AcrylicGalleryPage from './pages/AcrylicGalleryPage';
import DipGalleryPage from './pages/DipGalleryPage';
import BuilderGelGalleryPage from './pages/BuilderGelGalleryPage';
import GelXGalleryPage from './pages/GelXGalleryPage';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'blog' | 'dashboard' | 'acrylic-gallery' | 'dip-gallery' | 'builder-gel-gallery' | 'gelx-gallery'>('home');

  useEffect(() => {
    // Check URL hash for page routing
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services-page') {
        setCurrentPage('services');
      } else if (hash === '#blog') {
        setCurrentPage('blog');
      } else if (hash === '#dashboard') {
        setCurrentPage('dashboard');
      } else if (hash === '#acrylic-gallery') {
        setCurrentPage('acrylic-gallery');
      } else if (hash === '#dip-gallery') {
        setCurrentPage('dip-gallery');
      } else if (hash === '#builder-gel-gallery') {
        setCurrentPage('builder-gel-gallery');
      } else if (hash === '#gelx-gallery') {
        setCurrentPage('gelx-gallery');
      } else {
        setCurrentPage('home');
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPage !== 'home') return;
    
    // Only enable snap on desktop (min-width: 1024px)
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;
    
    // Wait for all sections to mount before setting up global snap
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [currentPage]);

  if (currentPage === 'services') {
    return (
      <div className="relative bg-off-white">
        <div className="grain-overlay" />
        <Navigation />
        <ServicesPage />
      </div>
    );
  }

  if (currentPage === 'blog') {
    return (
      <div className="relative bg-off-white">
        <div className="grain-overlay" />
        <Navigation />
        <BlogPage />
      </div>
    );
  }

  if (currentPage === 'dashboard') {
    return <Dashboard />;
  }

  if (currentPage === 'acrylic-gallery') {
    return (
      <div className="relative bg-off-white">
        <div className="grain-overlay" />
        <Navigation />
        <AcrylicGalleryPage />
      </div>
    );
  }

  if (currentPage === 'dip-gallery') {
    return (
      <div className="relative bg-off-white">
        <div className="grain-overlay" />
        <Navigation />
        <DipGalleryPage />
      </div>
    );
  }

  if (currentPage === 'builder-gel-gallery') {
    return (
      <div className="relative bg-off-white">
        <div className="grain-overlay" />
        <Navigation />
        <BuilderGelGalleryPage />
      </div>
    );
  }

  if (currentPage === 'gelx-gallery') {
    return (
      <div className="relative bg-off-white">
        <div className="grain-overlay" />
        <Navigation />
        <GelXGalleryPage />
      </div>
    );
  }

  return (
    <div ref={mainRef} className="relative bg-off-white">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <BestWorkSection />
        <WhySection />
        <ServicesPreviewSection />
        <TestimonialsSection />
        <FinalCTASection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
