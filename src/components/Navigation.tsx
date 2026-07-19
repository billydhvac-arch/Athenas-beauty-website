import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lock, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const [, setShowLangBanner] = useState(() => {
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
  const isSpanishPage = location.pathname.startsWith('/es');

  const openBooksy = () => {
    window.open('https://nailsbyatenad.booksy.com', '_blank');
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <div className="hidden lg:flex items-center justify-between h-24 lg:h-28">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body text-sm transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-gold' 
                    : 'text-black hover:text-gold'
                }`}
              >
                {t('nav.work')}
              </Link>
              <Link
                to="/services"
                className={`font-body text-sm transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-gold' 
                    : 'text-black hover:text-gold'
                }`}
              >
                {t('nav.services')}
              </Link>
            </div>

            <Link
              to="/"
              className="flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                src="/logo.png"
                alt="Athena's Beauty"
                className="h-20 lg:h-24 w-auto drop-shadow-lg transition-transform hover:scale-105"
              />
            </Link>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('#why')}
                className={`font-body text-sm transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-gold' 
                    : 'text-black hover:text-gold'
                }`}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className={`font-body text-sm transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-gold' 
                    : 'text-black hover:text-gold'
                }`}
              >
                {t('nav.contact')}
              </button>
              <Link
                to="/blog"
                className={`font-body text-sm transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-gold' 
                    : 'text-black hover:text-gold'
                }`}
              >
                {t('nav.blog')}
              </Link>
              <Link
                to="/es/"
                className={`font-body text-sm transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-gold' 
                    : 'text-black hover:text-gold'
                } ${isSpanishPage ? 'text-gold' : ''}`}
              >
                Español
              </Link>
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
                  <Link to="/gallery/acrylic" className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors">
                    {t('nav.gallery_acrylic')}
                  </Link>
                  <Link to="/gallery/dip" className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors">
                    {t('nav.gallery_dip')}
                  </Link>
                  <Link to="/gallery/builder-gel" className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors">
                    {t('nav.gallery_builder')}
                  </Link>
                  <Link to="/gallery/gelx" className="block px-4 py-2 text-sm text-black hover:bg-gold/10 hover:text-gold-dark transition-colors">
                    {t('nav.gallery_gelx')}
                  </Link>
                </div>
              </div>

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

              <Link
                to="/dashboard"
                className={`font-body text-xs transition-colors duration-200 opacity-50 hover:opacity-100 ${
                  isScrolled 
                    ? 'text-white/60 hover:text-gold' 
                    : 'text-black/60 hover:text-gold'
                }`}
                title="Admin Dashboard"
              >
                <Lock className="w-3 h-3" />
              </Link>
              <button
                onClick={openBooksy}
                className="bg-gold text-black font-body font-medium text-sm px-5 py-2.5 rounded-full btn-hover"
              >
                {t('nav.bookNow')}
              </button>
            </div>
          </div>

          <div className="flex lg:hidden items-center justify-between h-20">
            <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.png" alt="Athena's Beauty" className="h-16 w-auto drop-shadow-lg" />
            </Link>

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

      <div
        className={`fixed inset-0 z-[99] bg-black transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <img src="/logo.png" alt="Athena's Beauty" className="h-24 w-auto mb-4" />
          
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors">
            {t('nav.work')}
          </Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors">
            {t('nav.services')}
          </Link>
          <button onClick={() => scrollToSection('#why')} className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors">
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('#contact')} className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors">
            {t('nav.contact')}
          </button>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors">
            {t('nav.blog')}
          </Link>
          <Link to="/es/" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-bold text-2xl text-white hover:text-gold transition-colors">
            Español
          </Link>
          
          <div className="border-t border-white/20 pt-4 mt-2 w-full max-w-xs">
            <p className="text-white/50 text-sm mb-3 text-center">{t('nav.gallery')}</p>
            <div className="flex flex-col gap-3">
              <Link to="/gallery/acrylic" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-lg text-white/80 hover:text-gold transition-colors">
                {t('nav.gallery_acrylic')}
              </Link>
              <Link to="/gallery/dip" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-lg text-white/80 hover:text-gold transition-colors">
                {t('nav.gallery_dip')}
              </Link>
              <Link to="/gallery/builder-gel" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-lg text-white/80 hover:text-gold transition-colors">
                {t('nav.gallery_builder')}
              </Link>
              <Link to="/gallery/gelx" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-lg text-white/80 hover:text-gold transition-colors">
                {t('nav.gallery_gelx')}
              </Link>
            </div>
          </div>

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
