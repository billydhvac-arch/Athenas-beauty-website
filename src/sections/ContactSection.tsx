import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Instagram, Send, Clock, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Columns animation
      columnsRef.current.forEach((col, index) => {
        if (!col) return;
        gsap.fromTo(
          col,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: col,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const openInstagram = () => {
    window.open('https://instagram.com/nails_by_atenad', '_blank');
  };

  const openTikTok = () => {
    window.open('https://tiktok.com/@nails_by_atenad', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative bg-off-white py-24 lg:py-32 ${className}`}
    >
      <div className="w-full px-6 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 lg:mb-24">
          <h2 className="font-heading font-bold headline-lg text-black uppercase">
            {t('contact.headline')} <span className="text-gold">{t('contact.headlineAccent')}</span>
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Column 1: Address & Hours */}
          <div
            ref={(el) => { columnsRef.current[0] = el; }}
            className="bg-white rounded-3xl shadow-card card-border p-6 lg:p-8 border border-gold/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <MapPin size={18} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-black">
                {t('contact.visit')}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://maps.google.com/?q=2640+W+University+Dr+Suite+1266+Denton+TX+76201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-black font-medium hover:text-gold transition-colors"
                  >
                    {t('contact.address')}
                  </a>
                  <p className="font-body text-sm text-text-secondary">
                    {t('contact.salonsByJC')}
                  </p>
                  <p className="font-body text-sm text-text-secondary">
                    {t('contact.cityState')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href="tel:9404351332"
                  className="font-body text-sm text-black hover:text-gold transition-colors"
                >
                  {t('contact.phone')}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-black font-medium">
                    {t('contact.appointmentOnly')}
                  </p>
                  <p className="font-body text-xs text-text-secondary">
                    {t('contact.acceptingNew')}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <a
              href="https://maps.google.com/?q=2640+W+University+Dr+Suite+1266+Denton+TX+76201"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-2xl overflow-hidden h-32 bg-black/5 flex items-center justify-center border border-gold/10 hover:bg-black/10 transition-colors cursor-pointer"
            >
              <div className="text-center">
                <MapPin size={24} className="text-gold mx-auto mb-2" />
                <p className="font-body text-xs text-text-secondary">
                  {t('contact.viewMap')}
                </p>
              </div>
            </a>
          </div>

          {/* Column 2: Contact Form */}
          <div
            ref={(el) => { columnsRef.current[1] = el; }}
            className="bg-white rounded-3xl shadow-card card-border p-6 lg:p-8 border border-gold/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Send size={18} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-black">
                {t('contact.sendMessage')}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-xs text-text-secondary mb-1 block">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-off-white border border-black/10 font-body text-sm text-black focus:outline-none focus:border-gold transition-colors"
                  placeholder={t('contact.namePlaceholder')}
                  required
                />
              </div>

              <div>
                <label className="font-body text-xs text-text-secondary mb-1 block">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-off-white border border-black/10 font-body text-sm text-black focus:outline-none focus:border-gold transition-colors"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                />
              </div>

              <div>
                <label className="font-body text-xs text-text-secondary mb-1 block">
                  {t('contact.message')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-off-white border border-black/10 font-body text-sm text-black focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-gold font-body font-medium text-sm px-6 py-3 rounded-full btn-hover flex items-center justify-center gap-2"
              >
                {t('contact.send')}
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Column 3: Social */}
          <div
            ref={(el) => { columnsRef.current[2] = el; }}
            className="bg-white rounded-3xl shadow-card card-border p-6 lg:p-8 border border-gold/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Instagram size={18} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-black">
                {t('contact.followUs')}
              </h3>
            </div>

            <p className="font-body text-sm text-text-secondary mb-6">
              {t('contact.followText')}
            </p>

            {/* Instagram */}
            <button
              onClick={openInstagram}
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-off-white hover:bg-gold/10 transition-colors mb-3 border border-gold/10"
            >
              <Instagram size={24} className="text-gold" />
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  @nails_by_atenad
                </p>
                <p className="font-body text-xs text-text-secondary">
                  {t('contact.instagram')}
                </p>
              </div>
            </button>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1X96F8gqea/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-off-white hover:bg-blue-50 transition-colors mb-3 border border-blue-100"
            >
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  {t('contact.facebook')}
                </p>
                <p className="font-body text-xs text-text-secondary">
                  Follow our page
                </p>
              </div>
            </a>

            {/* TikTok */}
            <button
              onClick={openTikTok}
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-off-white hover:bg-gold/10 transition-colors border border-gold/10"
            >
              <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  @nails_by_atenad
                </p>
                <p className="font-body text-xs text-text-secondary">
                  {t('contact.tiktok')}
                </p>
              </div>
            </button>

            {/* Booksy */}
            <a
              href="https://nailsbyatenad.booksy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-gold hover:bg-gold-dark transition-colors mt-3"
            >
              <Calendar size={24} className="text-black" />
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  {t('contact.booksy')}
                </p>
                <p className="font-body text-xs text-black/70">
                  {t('contact.booksyReviews')}
                </p>
              </div>
            </a>

            {/* Google Business */}
            <a
              href="https://maps.app.goo.gl/3rwQNmMHv8U8Q7Hn6?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-off-white hover:bg-blue-50 transition-colors mt-3 border border-blue-100"
            >
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  {t('contact.googleReview')}
                </p>
                <p className="font-body text-xs text-text-secondary">
                  Leave a Google review
                </p>
              </div>
            </a>

            {/* Yelp */}
            <a
              href="https://www.yelp.com/biz/athenas-beauty-denton"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-off-white hover:bg-red-50 transition-colors mt-3 border border-red-100"
            >
              <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-7c-1.93 0-3.5 1.57-3.5 3.5h7c0-1.93-1.57-3.5-3.5-3.5z"/>
              </svg>
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  {t('contact.yelpReview')}
                </p>
                <p className="font-body text-xs text-text-secondary">
                  Find us on Yelp
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 lg:mt-24 text-center">
          <img
            src="/logo.png"
            alt="Athena's Beauty"
            className="h-12 w-auto mx-auto mb-4 opacity-50"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <a
              href="/booking-policy"
              className="font-body text-xs text-text-secondary hover:text-gold transition-colors"
            >
              {t('contact.bookingPolicy', 'Booking Policy')}
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/es/politica-de-reservas"
              className="font-body text-xs text-text-secondary hover:text-gold transition-colors"
            >
              {t('contact.bookingPolicyEs', 'Política de Reservas')}
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/client-policy"
              className="font-body text-xs text-text-secondary hover:text-gold transition-colors"
            >
              Client Policy
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/es/politica-para-clientes"
              className="font-body text-xs text-text-secondary hover:text-gold transition-colors"
            >
              Política para Clientes
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/health-safety-policy"
              className="font-body text-xs text-text-secondary hover:text-gold transition-colors"
            >
              Health & Safety
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/es/politica-de-salud"
              className="font-body text-xs text-text-secondary hover:text-gold transition-colors"
            >
              Salud y Seguridad
            </a>
          </div>
          <p className="font-body text-xs text-text-secondary">
            {t('contact.footer', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-white rounded-3xl border border-gold/20 shadow-card">
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-xl text-black">
              {t('contact.dialogTitle')}
            </DialogTitle>
            <DialogDescription className="font-body text-sm text-text-secondary">
              {t('contact.dialogBody')}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowDialog(false)}
              className="bg-black text-gold font-body font-medium text-sm px-6 py-2 rounded-full btn-hover"
            >
              {t('contact.dialogOk')}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
