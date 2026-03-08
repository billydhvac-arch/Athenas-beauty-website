import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    {
      quote: "Athena does amazing work! My nails always look perfect and last for weeks. She's very detailed and takes her time.",
      author: 'Mia R.',
      rating: 5,
    },
    {
      quote: "Best nail tech in Denton! I've been coming here for months and my nails have never looked better. Highly recommend!",
      author: 'Jasmine T.',
      rating: 5,
    },
    {
      quote: "Love my nails every time! The attention to detail is incredible. Athena really listens to what you want.",
      author: 'Sarah K.',
      rating: 5,
    },
  ];

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
          <h2 className="font-heading font-bold headline-lg text-black uppercase mb-4">
            CLIENT <span className="text-gold">LOVE</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-text-secondary">
              35+ 5-star reviews on Booksy
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
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-black mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <p className="font-heading font-bold text-gold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* View All Reviews CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={openBooksy}
            className="inline-flex items-center gap-2 text-gold font-body text-sm hover:underline"
          >
            Read all reviews on Booksy
            <Star size={14} className="fill-gold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
