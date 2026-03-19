import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TransformationsSectionProps {
  className?: string;
}

const TransformationsSection = ({ className = '' }: TransformationsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const leftCaptionRef = useRef<HTMLDivElement>(null);
  const rightCaptionRef = useRef<HTMLDivElement>(null);
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
        leftImageRef.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        rightImageRef.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        pillRef.current,
        { y: '-30vh', scale: 0.9, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        [leftCaptionRef.current, rightCaptionRef.current],
        { y: '30vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.15
      );

      scrollTl.fromTo(
        scribbleRef.current,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none' },
        0.2
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        leftImageRef.current,
        { x: 0, y: 0, opacity: 1 },
        { x: '-16vw', y: '12vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        rightImageRef.current,
        { x: 0, y: 0, opacity: 1 },
        { x: '16vw', y: '12vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        pillRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [leftCaptionRef.current, rightCaptionRef.current],
        { y: 0, opacity: 1 },
        { y: '14vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        scribbleRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformations"
      className={`pinned-section bg-off-white ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Center Label Pill */}
        <div
          ref={pillRef}
          className="absolute left-1/2 -translate-x-1/2 top-[10vh] bg-off-white rounded-full px-6 py-3 shadow-card card-border"
        >
          <span className="font-heading font-bold text-sm text-text-primary uppercase tracking-wider">
            Transformations
          </span>
        </div>

        {/* Left Image Card (Before) */}
        <div
          ref={leftImageRef}
          className="absolute left-[6vw] top-[16vh] w-[42vw] h-[68vh] rounded-3xl overflow-hidden shadow-card card-border"
        >
          <img
            src="/transformations_before.jpg"
            alt="Before transformation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image Card (After) */}
        <div
          ref={rightImageRef}
          className="absolute left-[52vw] top-[16vh] w-[42vw] h-[68vh] rounded-3xl overflow-hidden shadow-card card-border"
        >
          <img
            src="/transformations_after.jpg"
            alt="After transformation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left Caption Card */}
        <div
          ref={leftCaptionRef}
          className="absolute left-[6vw] top-[72vh] w-[34vw] h-[18vh] bg-off-white rounded-3xl shadow-card card-border p-6 flex flex-col justify-center"
        >
          <p className="font-body body-text text-text-primary">
            Builder gel shaping + custom art.
          </p>
        </div>

        {/* Bottom Right Caption Card */}
        <div
          ref={rightCaptionRef}
          className="absolute left-[62vw] top-[72vh] w-[32vw] h-[18vh] bg-off-white rounded-3xl shadow-card card-border p-6 flex flex-col justify-center"
        >
          <p className="font-body body-text text-text-primary mb-2">
            Strong, lightweight, long-lasting.
          </p>
          <button className="flex items-center gap-2 font-body text-sm text-text-primary hover:text-cherry transition-colors duration-200 w-fit">
            See more results
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Scribble Flourish */}
        <svg
          ref={scribbleRef}
          className="scribble-underline absolute left-1/2 -translate-x-1/2 top-[88vh] w-[12vw] h-6"
          viewBox="0 0 100 24"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M2 16C20 8 40 8 60 12C80 16 90 20 98 10"
            stroke="#D13B3B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default TransformationsSection;
