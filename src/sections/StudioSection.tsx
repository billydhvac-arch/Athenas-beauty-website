import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StudioSectionProps {
  className?: string;
}

const StudioSection = ({ className = '' }: StudioSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
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
        imageRef.current,
        { y: '70vh', scale: 0.92, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: '-55vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.08
      );

      scrollTl.fromTo(
        scribbleRef.current,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none' },
        0.18
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        imageRef.current,
        { x: 0, scale: 1, opacity: 1 },
        { x: '-18vw', scale: 0.94, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: 0, y: 0, opacity: 1 },
        { x: '-18vw', y: '10vh', opacity: 0, ease: 'power2.in' },
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

  return (
    <section
      ref={sectionRef}
      id="studio"
      className={`pinned-section bg-off-white ${className}`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Large Center Image */}
        <div
          ref={imageRef}
          className="absolute left-[18vw] top-[14vh] w-[64vw] h-[72vh] rounded-3xl overflow-hidden shadow-card card-border"
        >
          <img
            src="/studio_interior.jpg"
            alt="Studio interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Headline Card (overlapping left) */}
        <div
          ref={cardRef}
          className="absolute left-[6vw] top-[34vh] w-[40vw] h-[32vh] bg-off-white rounded-3xl shadow-card card-border p-8 lg:p-10 flex flex-col justify-center"
        >
          <h2 className="font-heading font-bold headline-lg text-text-primary uppercase mb-4">
            <span className="block">A SPACE</span>
            <span className="block relative">
              TO RELAX.
              {/* Scribble Underline */}
              <svg
                ref={scribbleRef}
                className="scribble-underline absolute -bottom-1 left-0 w-[70%] h-4"
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

          <p className="font-body body-text text-text-secondary max-w-sm mb-6">
            Soft lighting, clean tools, and a slower pace—so you can actually
            enjoy the moment.
          </p>

          <button className="flex items-center gap-2 font-body text-sm text-text-primary hover:text-cherry transition-colors duration-200 w-fit">
            View the studio
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
