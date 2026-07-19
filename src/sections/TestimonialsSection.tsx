import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = t('testimonials.testimonials', { returnObjects: true }) as Array<{ quote: string; author: string }>;

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

      const cards = cardsRef.current;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openBooksy = () => {
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`relative bg-off-white py-24 lg:py-32 ${className}`}
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-black uppercase mb-4">
            {t('testimonials.headline')} <span className="text-gold">{t('testimonials.headlineAccent')}</span> {t('testimonials.headlineLocation')}
          </h2>
          <p className="font-body text-sm lg:text-base text-text-secondary max-w-xl mx-auto mb-4">
            {t('testimonials.subheadline')}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-text-secondary">
              {t('testimonials.reviewCount')}
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-white rounded-3xl shadow-card card-border p-6 lg:p-8 border border-gold/10"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <Quote className="text-gold" size={18} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-black mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <p className="font-heading font-bold text-gold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* View All Reviews CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={openBooksy}
            className="bg-black text-gold font-body font-medium text-sm px-8 py-4 rounded-full btn-hover flex items-center gap-2"
          >
            <Calendar size={18} />
            {t('testimonials.ctaBook')}
          </button>
          <button
            onClick={openBooksy}
            className="inline-flex items-center gap-2 text-gold font-body text-sm hover:underline"
          >
            {t('testimonials.ctaReviews')}
            <Star size={14} className="fill-gold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
