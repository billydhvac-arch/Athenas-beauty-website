import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Sparkles, Award, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface WhySectionProps {
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Sparkles,
  Award,
  Heart,
};

const WhySection = ({ className = '' }: WhySectionProps) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const featureKeys = ['sanitized', 'quality', 'licensed', 'custom'];
  const iconKeys = ['Shield', 'Sparkles', 'Award', 'Heart'];

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

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60 + index * 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      className={`relative bg-black py-24 lg:py-32 ${className}`}
    >
      <div className="w-full px-6 lg:px-12">
        {/* Heading Block */}
        <div ref={headingRef} className="text-center mb-16 lg:mb-24">
          <h2 className="font-heading font-bold headline-lg text-white uppercase mb-6">
            {t('whySection.headline')} <span className="text-gold">{t('whySection.headlineAccent')}</span>
          </h2>
          <p className="font-body body-text text-white/70 max-w-2xl mx-auto">
            {t('whySection.subheadline')}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((key, index) => {
            const Icon = iconMap[iconKeys[index]];
            return (
              <div
                key={key}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 card-hover border border-gold/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <Icon className="text-gold" size={28} />
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-3">
                  {t(`whySection.features.${key}.title`)}
                </h3>

                <p className="font-body text-sm text-white/70">
                  {t(`whySection.features.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
