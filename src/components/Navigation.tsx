import { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#best-work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    // If we're not on the home page, navigate to home first
    const currentHash = window.location.hash;
    if (currentHash && currentHash !== '' && !href.startsWith(currentHash)) {
      window.location.hash = '';
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const goToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const goToBlog = () => {
    window.location.hash = 'blog';
    setIsMobileMenuOpen(false);
  };

  const goToDashboard = () => {
    window.location.hash = 'dashboard';
    setIsMobileMenuOpen(false);
  };

  const openBooksy = () => {
    window.open('https://nailsbyatenad.booksy.com', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12">
          {/* Desktop Navigation - Logo CENTERED with nav on sides */}
          <div className="hidden lg:flex items-center justify-between h-24 lg:h-28">
            {/* Left Side Navigation */}
            <div className="flex items-center gap-6">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`font-body text-sm transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-white/90 hover:text-gold' 
                      : 'text-black hover:text-gold'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CENTERED Logo - BIGGER for brand awareness */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToHome();
              }}
              className="flex items-center justify-center"
            >
              <img
                src="/logo.png"
                alt="Athena's Beauty"
                className="h-20 lg:h-24 w-auto drop-shadow-lg transition-transform hover:scale-105"
              />
            </a>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-6">
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`font-body text-sm transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-white/90 hover:text-gold' 
                      : 'text-black hover:text-gold'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={goToBlog}
                className={`font-body text-sm transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-gold' 
                    : 'text-black hover:text-gold'
                }`}
              >
                Blog
              </button>
              
              {/* Gallery Dropdown */}
              <div className="relative group">
                <button
                  className={`font-body text-sm transition-colors duration-200 flex items-center gap-1 ${
                    isScrolled 
                      ? 'text-white/90 hover:text-gold' 
                      : 'text-black hover:text-gold'
                  }`}
                >
                  Gallery
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <a
                    href="#acrylic-gallery"
                    className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    Acrylic Art
                  </a>
                  <a
                    href="#dip-gallery"
                    className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    Dip Powder
                  </a>
                  <a
                    href="#builder-gel-gallery"
                    className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    Builder Gel
                  </a>
                  <a
                    href="#gelx-gallery"
                    className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    Gel-X Extensions
                  </a>
                </div>
              </div>
              <button
                onClick={goToDashboard}
                className={`font-body text-xs transition-colors duration-200 opacity-50 hover:opacity-100 ${
                  isScrolled 
                    ? 'text-white/60 hover:text-gold' 
                    : 'text-black/60 hover:text-gold'
                }`}
                title="Admin Dashboard"
              >
                <Lock className="w-3 h-3" />
              </button>
              <button
                onClick={openBooksy}
                className="bg-gold text-black font-body font-medium text-sm px-5 py-2.5 rounded-full btn-hover"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Logo centered, menu button on right */}
          <div className="flex lg:hidden items-center justify-between h-20">
            {/* Logo - BIGGER on mobile */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="Athena's Beauty"
                className="h-16 w-auto drop-shadow-lg"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-white' : 'text-black'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-black transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Logo in mobile menu - BIGGER */}
          <img
            src="/logo.png"
            alt="Athena's Beauty"
            className="h-24 w-auto mb-4"
          />
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={goToBlog}
            className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors duration-200"
          >
            Blog
          </button>
          
          {/* Mobile Gallery Links */}
          <div className="border-t border-white/20 pt-4 mt-2 w-full max-w-xs">
            <p className="text-white/50 text-sm mb-3 text-center">Galleries</p>
            <div className="flex flex-col gap-3">
              <a
                href="#acrylic-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-white/80 hover:text-gold transition-colors duration-200"
              >
                Acrylic Art
              </a>
              <a
                href="#dip-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-white/80 hover:text-gold transition-colors duration-200"
              >
                Dip Powder
              </a>
              <a
                href="#builder-gel-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-white/80 hover:text-gold transition-colors duration-200"
              >
                Builder Gel
              </a>
              <a
                href="#gelx-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-white/80 hover:text-gold transition-colors duration-200"
              >
                Gel-X Extensions
              </a>
            </div>
          </div>
          
          <button
            onClick={openBooksy}
            className="bg-gold text-black font-body font-medium text-lg px-8 py-3 rounded-full btn-hover mt-4"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
