import { useState, useEffect } from 'react';
import { Menu, X, Lock, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const [showLangBanner, setShowLangBanner] = useState(() => {
    // Show banner if no language preference has been set
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('i18nextLng');
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowLangMenu(false);
    setIsMobileMenuOpen(false);
    setShowLangBanner(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18nextLng', lang);
    }
  };

  const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

  const navLinks = [
    { label: t('nav.work'), href: '#best-work' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#why' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const currentHash = window.location.hash;
    if (currentHash && currentHash !== '' && !href.startsWith(currentHash)) {
      window.location.hash = '';
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
                {t('nav.blog')}
              </button>
              
              <a
                href="#es"
                className={`font-body text-sm transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-gold' 
                    : 'text-black hover:text-gold'
                }`}
              >
                Español
              </a>
              
              {/* Gallery Dropdown */}
              <div className="relative group">
                <button
                  className={`font-body text-sm transition-colors duration-200 flex items-center gap-1 ${
                    isScrolled 
                      ? 'text-white/90 hover:text-gold' 
                      : 'text-black hover:text-gold'
                  }`}
                >
                  {t('nav.gallery')}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <a
                    href="#acrylic-gallery"
                    className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    {t('nav.gallery_acrylic')}
                  </a>
                  <a
                    href="#dip-gallery"
                    className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    {t('nav.gallery_dip')}
                  </a>
                  <a
                    href="#builder-gel-gallery"
                    className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    {t('nav.gallery_builder')}
                  </a>
                  <a
                    href="#gelx-gallery"
                    className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    {t('nav.gallery_gelx')}
                  </a>
                </div>
              </div>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className={`font-body text-sm transition-colors duration-200 flex items-center gap-1 ${
                    isScrolled 
                      ? 'text-white/90 hover:text-gold' 
                      : 'text-black hover:text-gold'
                  }`}
                  title={t('lang.switch')}
                >
                  <Globe size={14} />
                  <span className="uppercase text-xs">{currentLang}</span>
                </button>
                {showLangMenu && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl py-2 z-[101]">
                    <button
                      onClick={() => toggleLanguage('en')}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentLang === 'en' ? 'text-gold font-medium' : 'text-black hover:bg-gold/10'
                      }`}
                    >
                      {t('lang.en')}
                    </button>
                    <button
                      onClick={() => toggleLanguage('es')}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentLang === 'es' ? 'text-gold font-medium' : 'text-black hover:bg-gold/10'
                      }`}
                    >
                      {t('lang.es')}
                    </button>
                  </div>
                )}
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
                {t('nav.bookNow')}
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

      {/* Language Selection Banner */}
      {showLangBanner && (
        <div className={`fixed z-[99] left-0 right-0 transition-all duration-300 ${
          isScrolled ? 'top-24 lg:top-28' : 'top-20 lg:top-28'
        }`}>
          <div className="bg-gold/95 backdrop-blur-sm text-black py-2 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
              <span className="font-body text-sm font-medium">{t('lang.switch')}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-body transition-colors ${
                    currentLang === 'en' ? 'bg-black text-gold' : 'bg-black/10 hover:bg-black/20'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => toggleLanguage('es')}
                  className={`px-3 py-1 rounded-full text-xs font-body transition-colors ${
                    currentLang === 'es' ? 'bg-black text-gold' : 'bg-black/10 hover:bg-black/20'
                  }`}
                >
                  Español
                </button>
              </div>
              <button
                onClick={() => setShowLangBanner(false)}
                className="ml-2 text-black/60 hover:text-black transition-colors"
                aria-label="Dismiss"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

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
            {t('nav.blog')}
          </button>
          
          <a
            href="#es"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors duration-200"
          >
            Español
          </a>
          
          {/* Mobile Gallery Links */}
          <div className="border-t border-white/20 pt-4 mt-2 w-full max-w-xs">
            <p className="text-white/50 text-sm mb-3 text-center">{t('nav.gallery')}</p>
            <div className="flex flex-col gap-3">
              <a
                href="#acrylic-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-white/80 hover:text-gold transition-colors duration-200"
              >
                {t('nav.gallery_acrylic')}
              </a>
              <a
                href="#dip-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-white/80 hover:text-gold transition-colors duration-200"
              >
                {t('nav.gallery_dip')}
              </a>
              <a
                href="#builder-gel-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-white/80 hover:text-gold transition-colors duration-200"
              >
                {t('nav.gallery_builder')}
              </a>
              <a
                href="#gelx-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-white/80 hover:text-gold transition-colors duration-200"
              >
                {t('nav.gallery_gelx')}
              </a>
            </div>
          </div>

          {/* Mobile Language Switcher */}
          <div className="border-t border-white/20 pt-4 w-full max-w-xs">
            <p className="text-white/50 text-sm mb-3 text-center">{t('lang.switch')}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => toggleLanguage('en')}
                className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                  currentLang === 'en' ? 'bg-gold text-black' : 'text-white border border-white/30'
                }`}
              >
                {t('lang.en')}
              </button>
              <button
                onClick={() => toggleLanguage('es')}
                className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                  currentLang === 'es' ? 'bg-gold text-black' : 'text-white border border-white/30'
                }`}
              >
                {t('lang.es')}
              </button>
            </div>
          </div>
          
          <button
            onClick={openBooksy}
            className="bg-gold text-black font-body font-medium text-lg px-8 py-3 rounded-full btn-hover mt-4"
          >
            {t('nav.bookNow')}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
