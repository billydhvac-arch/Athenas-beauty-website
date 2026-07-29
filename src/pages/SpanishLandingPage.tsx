import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, MapPin, Calendar, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

const SpanishLandingPage = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // SEO Meta Tags
  useEffect(() => {
    document.title = 'Salón de Uñas en Denton, TX | Athena\'s Beauty | Acrílico, Gel-X, Builder Gel';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Salón de uñas premium en Denton, TX. Especialistas en acrílico, Gel-X, builder gel y arte de uñas personalizado. Servicio en español. Reserva tu cita hoy.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.athenas-beauty.com/es/');
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Salón de Uñas en Denton, TX | Athena\'s Beauty');
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Salón de uñas premium en Denton, TX. Especialistas en acrílico, Gel-X, builder gel y arte de uñas personalizado.');
    
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', 'es_MX');
    
    // Schema.org LocalBusiness in Spanish
    let schema = document.querySelector('script[type="application/ld+json"]');
    if (!schema) {
      schema = document.createElement('script');
      schema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'NailSalon',
      name: 'Salón de Uñas Athena\'s Beauty - Denton, TX',
      description: 'Salón de uñas premium en Denton, TX. Especialistas en acrílico, Gel-X, builder gel y arte de uñas personalizado.',
      image: 'https://www.athenas-beauty.com/hero_portrait.jpg',
      url: 'https://www.athenas-beauty.com/#es',
      telephone: '+1-940-435-1332',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2640 W University Dr, Suite 1266',
        addressLocality: 'Denton',
        addressRegion: 'TX',
        postalCode: '76201',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '33.2148',
        longitude: '-97.1331'
      },
      priceRange: '$$',
      openingHours: 'Mo-Sa 09:00-19:00',
      paymentAccepted: 'Cash, Credit Card',
      areaServed: 'Denton, TX',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Uñas',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Set Completo Acrílico' },
            price: '60',
            priceCurrency: 'USD'
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Extensiones Gel-X' },
            price: '65',
            priceCurrency: 'USD'
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Builder Gel' },
            price: '60',
            priceCurrency: 'USD'
          }
        ]
      }
    });
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = t('gallery.homeTitle');
      if (metaDescription) metaDescription.setAttribute('content', t('gallery.homeDesc'));
      if (canonical) canonical.setAttribute('href', 'https://www.athenas-beauty.com');
      if (ogTitle) ogTitle.setAttribute('content', t('gallery.homeTitle'));
      if (ogDesc) ogDesc.setAttribute('content', t('gallery.homeDesc'));
      if (ogLocale) ogLocale.setAttribute('content', 'en_US');
    };
  }, [t]);

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
    import('../utils/pixelTracking').then(({ trackBookingClick }) => {
      trackBookingClick();
    });
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  const scrollToWork = () => {
    const element = document.querySelector('#best-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-off-white">
      <div className="grain-overlay" />
      <Navigation />
      
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-off-white pt-20 lg:pt-0 overflow-hidden"
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
                35+ reseñas de 5 estrellas en Booksy y Google
              </span>
            </div>

            {/* H1 for Spanish SEO */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black uppercase mb-3 lg:mb-5 text-center lg:text-left leading-none">
              <span className="block">SALÓN DE</span>
              <span className="block text-gold">UÑAS EN</span>
              <span className="block">DENTON, TX</span>
            </h1>

            {/* Subheadline in Spanish */}
            <p className="font-body text-sm lg:text-base text-text-secondary mb-5 lg:mb-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left px-2 lg:px-0">
              Salón de uñas premium en Denton, Texas, atendiendo a estudiantes de UNT y profesionales locales. Especializados en builder gel, sets de acrílico, extensiones Gel-X y arte de uñas personalizado. ¡Hablamos español!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-5 lg:mb-6">
              <button
                onClick={openBooksy}
                className="w-full sm:w-auto bg-black text-gold font-body font-medium text-sm px-5 lg:px-8 py-3 lg:py-4 rounded-full btn-hover flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Reserva tu Cita
              </button>
              <button
                onClick={scrollToWork}
                className="flex items-center gap-2 font-body text-sm text-black hover:text-gold transition-colors duration-200 px-4 py-2"
              >
                Ver Nuestros Trabajos
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Location & Phone */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-text-secondary">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-gold" />
                <span className="font-body text-xs">Denton, TX • Cerca de UNT</span>
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
              <div className="relative rounded-xl lg:rounded-3xl overflow-hidden shadow-card card-border border-2 border-gold/20">
                <img
                  src="/work3.jpg"
                  alt="Arte de uñas por Athena en Denton, TX"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>

              <div className="hidden lg:block absolute -left-6 bottom-[15%] bg-black rounded-xl shadow-gold card-border p-3 border border-gold/30">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Calendar className="text-gold" size={16} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm">Abierto Hoy</p>
                    <p className="font-body text-xs text-white/70">Solo con Cita</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spanish Services Section */}
      <section id="servicios" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold headline-lg text-black uppercase mb-4">
              NUESTROS <span className="text-gold">SERVICIOS</span>
            </h2>
            <p className="font-body body-text text-text-secondary max-w-2xl mx-auto">
              Desde acrílico hasta Gel-X, nuestro estudio en Denton ofrece una gama completa de servicios de uñas de lujo diseñados para mantener tus uñas saludables, fuertes y hermosas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Acrílico con Arte',
                price: '$65+',
                desc: 'Set completo con arte de uñas personalizado incluido',
                image: '/acrylic-custom-design.jpg'
              },
              {
                name: 'Gel-X Mediano',
                price: '$70+',
                desc: 'Extensiones de gel suave, suaves con las uñas',
                image: '/gelx-nude-gold-foil.jpg'
              },
              {
                name: 'Builder Gel',
                price: '$60+',
                desc: 'Fortalecimiento ligero y resistente',
                image: '/builder-gel-hero.jpg'
              },
              {
                name: 'Dip Powder',
                price: '$55+',
                desc: 'Manicura en polvo sin olor y ligera',
                image: '/dip-burgundy-glitter.jpg'
              }
            ].map((service) => (
              <div key={service.name} className="bg-white rounded-3xl shadow-card card-border overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-black mb-1">{service.name}</h3>
                  <p className="text-gold font-heading font-bold text-xl mb-2">{service.price}</p>
                  <p className="font-body text-sm text-text-secondary">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#services-page" className="inline-flex items-center gap-2 bg-black text-gold font-body font-medium px-8 py-4 rounded-full btn-hover">
              Ver Todos los 21 Servicios
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Spanish Why Choose Us */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold headline-lg text-white uppercase mb-4">
              POR QUÉ ELEGIR <span className="text-gold">ATHENA'S</span>
            </h2>
            <p className="font-body body-text text-white/70 max-w-2xl mx-auto">
              Priorizamos la salud de tus uñas, un trabajo preciso y una experiencia tranquila—en cada visita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Herramientas Esterilizadas', desc: 'Todas las herramientas se esterilizan adecuadamente entre clientes.' },
              { title: 'Productos de Calidad', desc: 'Usamos solo productos premium para resultados duraderos.' },
              { title: 'Profesional Licenciada', desc: 'Totalmente licenciada y capacitada en las últimas técnicas.' },
              { title: 'Diseños Personalizados', desc: 'Cada set se adapta a tu estilo único y preferencias.' }
            ].map((feature) => (
              <div key={feature.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="font-heading font-bold text-lg text-gold mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spanish FAQ Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold headline-lg text-black uppercase mb-4">
              PREGUNTAS <span className="text-gold">FRECUENTES</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: '¿Cuánto cuesta el builder gel en Denton, TX?',
                a: 'Los servicios de builder gel en Denton típicamente van de $55-$70+. En Athena\'s Beauty, nuestros sets completos de builder gel comienzan en $60, lo que incluye preparación meticulosa, moldeado personalizado y aplicación de gel premium que dura 3-4 semanas.'
              },
              {
                q: '¿Acrílico vs Builder Gel: Cuál es mejor?',
                a: 'Depende de tus objetivos. Los acrílicos son duraderos y excelentes para longitud dramática. El builder gel es más ligero, más flexible y más saludable para las uñas naturales. En Athena\'s Beauty, ofrecemos ambos.'
              },
              {
                q: '¿Qué son las uñas Gel-X y cuánto cuestan?',
                a: 'Gel-X es un sistema de extensiones de gel suave que es más ligero y flexible que el acrílico. En Denton, los sets completos de Gel-X típicamente comienzan en $65-$85+. En Athena\'s Beauty, nos especializamos en Gel-X para clientes que quieren longitud sin el peso de los acrílicos tradicionales.'
              }
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="font-heading font-bold text-lg text-black mb-2">{faq.q}</h3>
                <p className="font-body text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spanish CTA */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold headline-lg text-white uppercase mb-4">
            ¿LISTA PARA TU <span className="text-gold">NUEVO SET?</span>
          </h2>
          <p className="font-body text-white/70 mb-8 text-lg">
            Reserva tu cita hoy. No aceptamos walk-ins—solo con cita para la mejor experiencia.
          </p>
          <a 
            href="https://nailsbyatenad.booksy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black font-body font-medium px-8 py-4 rounded-full btn-hover"
          >
            Reservar Online
          </a>
        </div>
      </section>

      {/* Spanish Contact */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold headline-lg text-black uppercase mb-8">
            VAMOS A <span className="text-gold">CONECTAR</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h3 className="font-heading font-bold text-lg text-black mb-4">Visítanos</h3>
              <p className="font-body text-text-secondary mb-2">2640 W University Dr, Suite 1266</p>
              <p className="font-body text-text-secondary mb-2">Salons by JC, Cuarto #19</p>
              <p className="font-body text-text-secondary mb-4">Denton, TX 76201</p>
              <a href="tel:9404351332" className="text-gold font-body font-medium hover:underline">
                (940) 435-1332
              </a>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h3 className="font-heading font-bold text-lg text-black mb-4">Síguenos</h3>
              <div className="space-y-3">
                <a href="https://www.instagram.com/athenasbeauty/" target="_blank" className="block font-body text-text-secondary hover:text-gold transition-colors">
                  Instagram @athenasbeauty
                </a>
                <a href="https://www.facebook.com/people/Athenas-Beauty/61574923514775/" target="_blank" className="block font-body text-text-secondary hover:text-gold transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-black/10">
        <p className="font-body text-sm text-text-secondary">
          © 2026 Athena's Beauty. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default SpanishLandingPage;
