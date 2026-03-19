import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, MapPin, Calendar, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0
      );

      tl.fromTo(
        imageRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openBooksy = () => {
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  const scrollToWork = () => {
    const element = document.querySelector('#best-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen bg-off-white pt-20 lg:pt-0 overflow-hidden ${className}`}
    >
      <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-0 py-6 lg:py-0">
        {/* Left Content */}
        <div
          ref={contentRef}
          className="w-full lg:w-1/2 lg:pl-[6vw] lg:pr-8 z-10"
        >
          {/* Logo Display - Mobile only */}
          <div className="lg:hidden mb-4 flex justify-center">
            <img
              src="/logo.png"
              alt="Athena's Beauty"
              className="h-14 w-auto"
            />
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 lg:mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-xs text-text-secondary">
              35+ 5-star reviews on Booksy
            </span>
          </div>

          {/* Headline - Smaller on mobile */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black uppercase mb-3 lg:mb-5 text-center lg:text-left leading-none">
            <span className="block">NAILS THAT</span>
            <span className="block text-gold">MAKE YOU FEEL</span>
            <span className="block">CONFIDENT</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-sm lg:text-base text-text-secondary mb-5 lg:mb-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left px-2 lg:px-0">
            Award-winning nail salon in Denton, Texas, serving UNT students and local professionals.
            <br className="hidden sm:block" />
            Specializing in builder gel nails, acrylic full sets, Gel-X extensions, and custom nail art.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-5 lg:mb-6">
            <button
              onClick={openBooksy}
              className="w-full sm:w-auto bg-black text-gold font-body font-medium text-sm px-5 lg:px-8 py-3 lg:py-4 rounded-full btn-hover flex items-center justify-center gap-2"
            >
              <Calendar size={16} />
              Book Your Appointment
            </button>
            <button
              onClick={scrollToWork}
              className="flex items-center gap-2 font-body text-sm text-black hover:text-gold transition-colors duration-200 px-4 py-2"
            >
              View My Work
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Location & Phone */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-text-secondary">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gold" />
              <span className="font-body text-xs">Denton, TX • Near UNT</span>
            </div>
            <a href="tel:9404351332" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={14} className="text-gold" />
              <span className="font-body text-xs">(940) 435-1332</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:h-screen flex items-center justify-center lg:justify-end lg:pr-[6vw] px-4 lg:px-0"
        >
          <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
            {/* Main Image */}
            <div className="relative rounded-xl lg:rounded-3xl overflow-hidden shadow-card card-border border-2 border-gold/20">
              <img
                src="/work3.jpg"
                alt="Beautiful nail art by Athena"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            {/* Floating Badge - Hidden on mobile */}
            <div className="hidden lg:block absolute -left-6 bottom-[15%] bg-black rounded-xl shadow-gold card-border p-3 border border-gold/30">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Calendar className="text-gold" size={16} />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm">Open Today</p>
                  <p className="font-body text-xs text-white/70">By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
