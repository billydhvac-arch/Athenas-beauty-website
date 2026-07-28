import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Gift, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface FinalCTASectionProps {
  className?: string;
}

const FinalCTASection = ({ className = '' }: FinalCTASectionProps) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openBooksy = () => {
    import('../utils/pixelTracking').then(({ trackBookingClick }) => {
      trackBookingClick();
    });
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="book"
      className={`relative bg-black py-24 lg:py-32 ${className}`}
    >
      <div className="w-full px-6 lg:px-12">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Gift Icon */}
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <Gift className="text-gold" size={32} />
          </div>

          {/* Headline */}
          <h2 className="font-heading font-bold headline-lg text-white uppercase mb-4">
            {t('finalCTA.headline1')}
            <br />
            <span className="text-gold">{t('finalCTA.headline2')}</span>
          </h2>

          {/* Subheadline */}
          <p className="font-body text-lg text-white/80 mb-6 max-w-xl mx-auto">
            {t('finalCTA.subheadline')}
          </p>

          {/* Location */}
          <div className="mb-8">
            <p className="font-body text-white/60 text-sm mb-1">{t('finalCTA.locationLabel')}</p>
            <p className="font-body text-white font-medium">
              {t('finalCTA.address')}
            </p>
            <p className="font-body text-white/60 text-sm">{t('finalCTA.room')}</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBooksy}
              className="bg-gold text-black font-body font-medium text-sm px-8 py-4 rounded-full btn-hover flex items-center gap-2 shadow-gold"
            >
              <Calendar size={18} />
              {t('finalCTA.ctaBook')}
            </button>
            <a
              href="tel:9404351332"
              className="text-gold font-body text-sm hover:underline flex items-center gap-2 border border-gold/50 px-6 py-4 rounded-full"
            >
              <Phone size={16} />
              {t('finalCTA.ctaCall')}
            </a>
          </div>

          {/* Note */}
          <p className="font-body text-sm text-white/50 mt-8">
            {t('finalCTA.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
