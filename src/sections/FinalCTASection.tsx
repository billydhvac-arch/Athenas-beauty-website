import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Gift, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FinalCTASectionProps {
  className?: string;
}

const FinalCTASection = ({ className = '' }: FinalCTASectionProps) => {
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
            READY FOR YOUR
            <br />
            <span className="text-gold">NEW SET?</span>
          </h2>

          {/* Subheadline */}
          <p className="font-body text-lg text-white/80 mb-6 max-w-xl mx-auto">
            Book your appointment today. Walk-ins not accepted — 
            appointment only for the best experience.
          </p>

          {/* Location */}
          <div className="mb-8">
            <p className="font-body text-white/60 text-sm mb-1">Visit us at:</p>
            <p className="font-body text-white font-medium">
              500 N Bell Ave, Suite 109, Denton, TX 76209
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBooksy}
              className="bg-gold text-black font-body font-medium text-sm px-8 py-4 rounded-full btn-hover flex items-center gap-2 shadow-gold"
            >
              <Calendar size={18} />
              Book Online
            </button>
            <a
              href="tel:9404351332"
              className="text-gold font-body text-sm hover:underline flex items-center gap-2 border border-gold/50 px-6 py-4 rounded-full"
            >
              <Phone size={16} />
              Call (940) 435-1332
            </a>
          </div>

          {/* Note */}
          <p className="font-body text-sm text-white/50 mt-8">
            Message me if you would like a day that I am closed. 
            I can work out a time to see you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
