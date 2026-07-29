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
import SpanishServicesPage from './pages/SpanishServicesPage';
import SpanishAcrylicGallery from './pages/SpanishAcrylicGallery';
import SpanishDipGallery from './pages/SpanishDipGallery';
import SpanishBuilderGelGallery from './pages/SpanishBuilderGelGallery';
import SpanishGelXGallery from './pages/SpanishGelXGallery';
import Dashboard from './pages/Dashboard';
import AcrylicGalleryPage from './pages/AcrylicGalleryPage';
import DipGalleryPage from './pages/DipGalleryPage';
import BuilderGelGalleryPage from './pages/BuilderGelGalleryPage';
import GelXGalleryPage from './pages/GelXGalleryPage';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import SpanishCancellationPolicyPage from './pages/SpanishCancellationPolicyPage';
import ClientPolicyPage from './pages/ClientPolicyPage';
import SpanishClientPolicyPage from './pages/SpanishClientPolicyPage';
import HealthSafetyPolicyPage from './pages/HealthSafetyPolicyPage';
import SpanishHealthSafetyPolicyPage from './pages/SpanishHealthSafetyPolicyPage';
import UNTPage from './pages/UNTPage';
import TWUPage from './pages/TWUPage';
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
    // Reset meta tags for home page
    document.title = "Athena's Beauty | Premium Nail Salon in Denton, TX | Builder Gel, Acrylics & Custom Nail Art";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium nail salon in Denton, TX specializing in builder gel nails, acrylic full sets, Gel-X extensions, and custom nail art. Book your appointment today for luxury nail services near UNT.');
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://athenas-beauty.com');
    }
  }, []);

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

// SEO Manager for page-specific meta tags and hreflang
const SEOManager = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Update hreflang tags based on current page
    const enHref = `https://athenas-beauty.com${pathname}`;
    const esHref = pathname === '/' ? 'https://athenas-beauty.com/es/' : `https://athenas-beauty.com/es${pathname}`;
    
    // Find or create hreflang tags
    let enLink = document.querySelector('link[hreflang="en-us"]');
    let esLink = document.querySelector('link[hreflang="es-us"]');
    let xDefaultLink = document.querySelector('link[hreflang="x-default"]');
    
    if (enLink) enLink.setAttribute('href', enHref);
    if (esLink) esLink.setAttribute('href', esHref);
    if (xDefaultLink) xDefaultLink.setAttribute('href', enHref);
    
    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', enHref);
    
    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', enHref);
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
        <Route path="/booking-policy" element={
          <Layout><CancellationPolicyPage /></Layout>
        } />
        <Route path="/client-policy" element={
          <Layout><ClientPolicyPage /></Layout>
        } />
        <Route path="/health-safety-policy" element={
          <Layout><HealthSafetyPolicyPage /></Layout>
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
        
        {/* Campus Landing Pages */}
        <Route path="/unt" element={
          <Layout><UNTPage /></Layout>
        } />
        <Route path="/twu" element={
          <Layout><TWUPage /></Layout>
        } />
        
        {/* Spanish Routes */}
        <Route path="/es/" element={
          <Layout><SpanishLandingPage /></Layout>
        } />
        <Route path="/es/servicios" element={
          <Layout><SpanishServicesPage /></Layout>
        } />
        <Route path="/es/blog" element={
          <Layout><SpanishBlogPage /></Layout>
        } />
        <Route path="/es/galeria/acrilico" element={
          <Layout><SpanishAcrylicGallery /></Layout>
        } />
        <Route path="/es/galeria/dip" element={
          <Layout><SpanishDipGallery /></Layout>
        } />
        <Route path="/es/galeria/builder-gel" element={
          <Layout><SpanishBuilderGelGallery /></Layout>
        } />
        <Route path="/es/galeria/gelx" element={
          <Layout><SpanishGelXGallery /></Layout>
        } />
        <Route path="/es/politica-de-reservas" element={
          <Layout><SpanishCancellationPolicyPage /></Layout>
        } />
        <Route path="/es/politica-para-clientes" element={
          <Layout><SpanishClientPolicyPage /></Layout>
        } />
        <Route path="/es/politica-de-salud" element={
          <Layout><SpanishHealthSafetyPolicyPage /></Layout>
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
