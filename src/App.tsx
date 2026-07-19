import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import BestWorkSection from './sections/BestWorkSection';
import WhySection from './sections/WhySection';
import ServicesPreviewSection from './sections/ServicesPreviewSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import FinalCTASection from './sections/FinalCTASection';
import ContactSection from './sections/ContactSection';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import SpanishBlogPage from './pages/SpanishBlogPage';
import SpanishLandingPage from './pages/SpanishLandingPage';
import Dashboard from './pages/Dashboard';
import AcrylicGalleryPage from './pages/AcrylicGalleryPage';
import DipGalleryPage from './pages/DipGalleryPage';
import BuilderGelGalleryPage from './pages/BuilderGelGalleryPage';
import GelXGalleryPage from './pages/GelXGalleryPage';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Layout wrapper with Navigation
const Layout = ({ children, showNav = true }: { children: React.ReactNode; showNav?: boolean }) => {
  return (
    <div className="relative bg-off-white">
      <div className="grain-overlay" />
      {showNav && <Navigation />}
      {children}
    </div>
  );
};

// Home Page
const HomePage = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable snap on desktop
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;
    
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
  }, []);

  return (
    <div ref={mainRef} className="relative">
      <main className="relative">
        <HeroSection />
        <BestWorkSection />
        <WhySection />
        <ServicesPreviewSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
        <ContactSection />
      </main>
    </div>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// SEO Manager for page-specific meta tags
const SEOManager = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Update hreflang tags based on current page
    const alternates = document.querySelectorAll('link[rel="alternate"]');
    alternates.forEach(el => {
      if (el.getAttribute('hreflang') === 'es') {
        if (pathname.startsWith('/es')) {
          el.setAttribute('href', `https://athenas-beauty.com${pathname}`);
        } else {
          const esPath = pathname === '/' ? '/es/' : `/es${pathname}`;
          el.setAttribute('href', `https://athenas-beauty.com${esPath}`);
        }
      }
    });
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEOManager />
      <Routes>
        {/* English Routes */}
        <Route path="/" element={
          <Layout><HomePage /></Layout>
        } />
        <Route path="/services" element={
          <Layout><ServicesPage /></Layout>
        } />
        <Route path="/blog" element={
          <Layout><BlogPage /></Layout>
        } />
        <Route path="/gallery/acrylic" element={
          <Layout><AcrylicGalleryPage /></Layout>
        } />
        <Route path="/gallery/dip" element={
          <Layout><DipGalleryPage /></Layout>
        } />
        <Route path="/gallery/builder-gel" element={
          <Layout><BuilderGelGalleryPage /></Layout>
        } />
        <Route path="/gallery/gelx" element={
          <Layout><GelXGalleryPage /></Layout>
        } />
        
        {/* Spanish Routes */}
        <Route path="/es/" element={
          <Layout><SpanishLandingPage /></Layout>
        } />
        <Route path="/es/blog" element={
          <Layout><SpanishBlogPage /></Layout>
        } />
        
        {/* Dashboard (no nav) */}
        <Route path="/dashboard" element={
          <Layout showNav={false}><Dashboard /></Layout>
        } />
        
        {/* Fallback */}
        <Route path="*" element={
          <Layout><HomePage /></Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
