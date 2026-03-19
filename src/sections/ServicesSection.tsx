import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection = ({ className = '' }: ServicesSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const bottomImageRef = useRef<HTMLDivElement>(null);
  const scribbleRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        leftCardRef.current,
        { x: '-55vw', rotate: -2, opacity: 0 },
        { x: 0, rotate: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        topImageRef.current,
        { x: '55vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        bottomImageRef.current,
        { y: '60vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        scribbleRef.current,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none' },
        0.15
      );

      // SETTLE (30% - 70%) - elements hold position

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        leftCardRef.current,
        { x: 0, y: 0, scale: 1, opacity: 1 },
        { x: '-22vw', y: '18vh', scale: 0.92, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        topImageRef.current,
        { x: 0, y: 0, opacity: 1 },
        { x: '18vw', y: '-16vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bottomImageRef.current,
        { y: 0, scale: 1, opacity: 1 },
        { y: '22vh', scale: 0.94, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        scribbleRef.current,
        { scaleX: 1, opacity: 1 },
        { scaleX: 0.2, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services-detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`pinned-section bg-off-white ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Left Headline Card */}
        <div
          ref={leftCardRef}
          className="absolute left-[6vw] top-[16vh] w-[46vw] h-[68vh] bg-off-white rounded-3xl shadow-card card-border p-8 lg:p-12 flex flex-col justify-center"
        >
          <h2 className="font-heading font-bold headline-lg text-text-primary uppercase mb-6">
            <span className="block">CLEAN CUTS.</span>
            <span className="block relative">
              DETAILED
              <br />
              FINISHES.
              {/* Scribble Underline */}
              <svg
                ref={scribbleRef}
                className="scribble-underline absolute -bottom-1 left-0 w-[60%] h-4"
                viewBox="0 0 200 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 12C40 4 80 4 120 8C160 12 180 16 198 10"
                  stroke="#D13B3B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h2>

          <p className="font-body body-text text-text-secondary max-w-md mb-8">
            From shaping to cuticle care, every step is precise—so your nails
            stay healthy and polished.
          </p>

          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 font-body text-sm text-text-primary hover:text-cherry transition-colors duration-200 w-fit"
          >
            See services
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Top Right Image */}
        <div
          ref={topImageRef}
          className="absolute left-[56vw] top-[14vh] w-[38vw] h-[26vh] rounded-3xl overflow-hidden shadow-card card-border"
        >
          <img
            src="/services_manicure.jpg"
            alt="Manicure in progress"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right Image */}
        <div
          ref={bottomImageRef}
          className="absolute left-[56vw] top-[46vh] w-[38vw] h-[40vh] rounded-3xl overflow-hidden shadow-card card-border"
        >
          <img
            src="/services_tools.jpg"
            alt="Nail tools and products"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
