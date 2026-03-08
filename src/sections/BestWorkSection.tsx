import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BestWorkSectionProps {
  className?: string;
}

const BestWorkSection = ({ className = '' }: BestWorkSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Athena's actual nail art work
  const works = [
    {
      id: 1,
      image: '/work1.jpg',
      title: 'French with Art',
      category: '$65+',
    },
    {
      id: 2,
      image: '/work2.jpg',
      title: 'Blue Marble & Flowers',
      category: 'Custom Art',
    },
    {
      id: 3,
      image: '/work3.jpg',
      title: 'Gold French Tips',
      category: '$55+',
    },
    {
      id: 4,
      image: '/work4.jpg',
      title: 'Teal Marble',
      category: 'Dip Powder',
    },
    {
      id: 5,
      image: '/work5.jpg',
      title: 'Chrome Hearts',
      category: 'Acrylic',
    },
    {
      id: 6,
      image: '/work6.jpg',
      title: '3D Flower Art',
      category: 'Custom Design',
    },
    {
      id: 7,
      image: '/work7.jpg',
      title: 'Beach Theme',
      category: 'Gel-X Long',
    },
    {
      id: 8,
      image: '/work8.jpg',
      title: 'Intricate Design',
      category: 'Acrylic with Art',
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

      const cards = gridRef.current?.querySelectorAll('.work-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openInstagram = () => {
    window.open('https://instagram.com/nails_by_atenad', '_blank');
  };

  const goToServices = () => {
    window.location.hash = 'services-page';
  };

  return (
    <section
      ref={sectionRef}
      id="best-work"
      className={`relative bg-off-white py-16 lg:py-32 ${className}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-12"
        >
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-black uppercase mb-2 lg:mb-4">
              NAIL ART <span className="text-gold">GALLERY</span>
            </h2>
            <p className="font-body text-sm lg:text-base text-text-secondary max-w-md mx-auto lg:mx-0">
              Each set is custom-designed to match your style and personality.
            </p>
          </div>
          <button
            onClick={openInstagram}
            className="flex items-center justify-center gap-2 text-gold font-body text-sm hover:underline"
          >
            <Instagram size={18} />
            Follow @nails_by_atenad
          </button>
        </div>

        {/* Work Grid - 2 columns on mobile, 4 on desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6"
        >
          {works.map((work) => (
            <div
              key={work.id}
              className="work-card group relative aspect-square rounded-xl lg:rounded-2xl overflow-hidden shadow-card card-border cursor-pointer border border-gold/10"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4">
                  <p className="font-heading font-bold text-white text-sm lg:text-lg">
                    {work.title}
                  </p>
                  <p className="font-body text-xs lg:text-sm text-gold">
                    {work.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-8 lg:mt-12 text-center">
          <button
            onClick={goToServices}
            className="inline-flex items-center gap-2 bg-black text-gold font-body font-medium text-sm px-6 lg:px-8 py-3 lg:py-4 rounded-full btn-hover"
          >
            View All Services
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestWorkSection;
