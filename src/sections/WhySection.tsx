import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Sparkles, Award, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface WhySectionProps {
  className?: string;
}

const WhySection = ({ className = '' }: WhySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  const features = [
    {
      icon: Shield,
      title: 'Sanitized Tools',
      description: 'All tools are properly sanitized between clients for your safety.',
    },
    {
      icon: Sparkles,
      title: 'Quality Products',
      description: 'We use only premium nail products for long-lasting results.',
    },
    {
      icon: Award,
      title: 'Licensed Professional',
      description: 'Fully licensed and trained in the latest nail techniques.',
    },
    {
      icon: Heart,
      title: 'Custom Designs',
      description: 'Every set is tailored to your unique style and preferences.',
    },
  ];

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
            WHY CHOOSE <span className="text-gold">ATHENA'S</span>
          </h2>
          <p className="font-body body-text text-white/70 max-w-2xl mx-auto">
            We prioritize nail health, precise work, and a calm experience—every single visit.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 card-hover border border-gold/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                <feature.icon className="text-gold" size={28} />
              </div>

              <h3 className="font-heading font-bold text-lg text-white mb-3">
                {feature.title}
              </h3>

              <p className="font-body text-sm text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
