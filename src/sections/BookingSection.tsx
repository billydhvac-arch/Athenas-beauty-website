import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BookingSectionProps {
  className?: string;
}

const BookingSection = ({ className = '' }: BookingSectionProps) => {
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
        { x: '-60vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
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
        { x: 0, y: 0, opacity: 1 },
        { x: '-14vw', y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: 0, y: 0, opacity: 1 },
        { x: '14vw', y: '-10vh', opacity: 0, ease: 'power2.in' },
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

  const openBooksy = () => {
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="book"
      className={`pinned-section bg-off-white ${className}`}
    >
      <div className="relative w-full h-full flex items-center">
        {/* Left Image Card */}
        <div
          ref={imageRef}
          className="absolute left-[6vw] top-[14vh] w-[46vw] h-[72vh] rounded-3xl overflow-hidden shadow-card card-border"
        >
          <img
            src="/booking_hands.jpg"
            alt="Beautiful nails"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Headline Card */}
        <div
          ref={cardRef}
          className="absolute left-[56vw] top-[18vh] w-[38vw] h-[64vh] bg-off-white rounded-3xl shadow-card card-border p-8 lg:p-10 flex flex-col justify-center"
        >
          <h2 className="font-heading font-bold headline-lg text-text-primary uppercase mb-6">
            <span className="block">READY WHEN</span>
            <span className="block relative">
              YOU ARE.
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

          <p className="font-body body-text text-text-secondary max-w-sm mb-8">
            Book online, pick a time that works, and show up—no stress, no
            waiting.
          </p>

          {/* Hours */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="font-body text-sm text-text-secondary">Mon–Fri</p>
              <p className="font-body text-sm text-text-primary font-medium">
                10:00–19:00
              </p>
            </div>
            <div>
              <p className="font-body text-sm text-text-secondary">Saturday</p>
              <p className="font-body text-sm text-text-primary font-medium">
                10:00–17:00
              </p>
            </div>
            <div>
              <p className="font-body text-sm text-text-secondary">Sunday</p>
              <p className="font-body text-sm text-text-primary font-medium">
                Closed
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={openBooksy}
              className="bg-cherry text-white font-body text-sm px-6 py-3 rounded-full btn-hover flex items-center gap-2"
            >
              Book an appointment
              <ArrowRight size={16} />
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 font-body text-sm text-text-primary hover:text-cherry transition-colors duration-200"
            >
              <MessageCircle size={16} />
              Send a question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
