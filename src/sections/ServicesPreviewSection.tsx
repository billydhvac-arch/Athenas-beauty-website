import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Shield, Clock, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface ServicesPreviewSectionProps {
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Palette,
  Shield,
  Clock,
};

const ServicesPreviewSection = ({ className = '' }: ServicesPreviewSectionProps) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const serviceKeys = ['acrylic_art', 'gelx_medium', 'builder_gel', 'acrylic_fill'];
  const iconKeys = ['Sparkles', 'Palette', 'Shield', 'Clock'];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goToServices = () => {
    window.location.hash = 'services-page';
  };

  const openBooksy = () => {
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  const tags = t('servicesPreview.tags', { returnObjects: true }) as string[];

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`relative bg-off-white py-16 lg:py-32 ${className}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-black uppercase mb-3 lg:mb-4">
            {t('servicesPreview.headline')} <span className="text-gold">{t('servicesPreview.headlineAccent')}</span> {t('servicesPreview.headlineLocation')}
          </h2>
          <p className="font-body text-sm lg:text-base text-text-secondary max-w-2xl mx-auto px-4">
            {t('servicesPreview.subheadline')}
          </p>
        </div>

        {/* Service Cards - 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12"
        >
          {serviceKeys.map((key, idx) => {
            const Icon = iconMap[iconKeys[idx]];
            return (
              <div
                key={key}
                className="service-card bg-white rounded-2xl lg:rounded-3xl shadow-card card-border p-5 lg:p-6 card-hover border border-gold/10"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-gold/10 flex items-center justify-center mb-3 lg:mb-4">
                  <Icon className="text-gold" size={22} />
                </div>
                <h3 className="font-heading font-bold text-base lg:text-lg text-black mb-1">
                  {t(`servicesPreview.popularServices.${key}.name`)}
                </h3>
                <p className="font-heading font-bold text-xl lg:text-2xl text-gold mb-2">
                  {t(`servicesPreview.popularServices.${key}.price`)}
                </p>
                <p className="font-body text-xs lg:text-sm text-text-secondary mb-4">
                  {t(`servicesPreview.popularServices.${key}.description`)}
                </p>
                <button
                  onClick={openBooksy}
                  className="text-gold font-body text-sm hover:underline flex items-center gap-1"
                >
                  {t('servicesPreview.bookNow')}
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button
            onClick={goToServices}
            className="inline-flex items-center gap-2 border-2 border-black text-black font-body font-medium text-sm px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-black hover:text-gold transition-colors duration-300"
          >
            {t('servicesPreview.viewAll')}
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Additional Services Tags */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="font-body text-xs lg:text-sm text-text-secondary mb-3 lg:mb-4">
            {t('servicesPreview.alsoAvailable')}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-body text-xs lg:text-sm text-black border border-gold/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviewSection;
