import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, AlertTriangle, Shield, Info } from 'lucide-react';

const SpanishCancellationPolicyPage = () => {
  useEffect(() => {
    document.title = 'Política de Reservas | Depósito, Cancelación y No-Show | Athena\'s Beauty';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Política de reservas de Athena\'s Beauty: depósito del 25% requerido. Aviso de cancelación de 24 horas para reembolso completo. Período de gracia de 15 minutos. Conoce nuestras políticas de depósito, reprogramación y no-show.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/es/politica-de-reservas');
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = 'Salón de Uñas en Denton, TX | Athena\'s Beauty';
    };
  }, []);

  const policySections = [
    {
      id: 'deposito',
      number: '01',
      label: 'DEPÓSITO',
      title: 'Cómo funciona tu depósito',
      icon: Shield,
      content: [
        {
          text: 'Se requiere un depósito igual al 25% del precio del servicio programado para reservar una cita. Cuando se completa el servicio, el depósito se acredita al total final del servicio; no es un cargo adicional.',
        },
        {
          text: 'La cita se reserva después de que se completen el depósito requerido y las tarifas de reserva a través de Booksy. Athena\'s Beauty no cobra una tarifa de cancelación separada bajo esta política.',
        },
        {
          text: 'Precios transparentes: el porcentaje del depósito, el precio del servicio y la política se divulgan antes de la confirmación de la reserva.',
          highlight: true,
        },
      ],
    },
    {
      id: 'cancelacion',
      number: '02',
      label: 'AVISO',
      title: 'Cancelación y reprogramación',
      icon: Calendar,
      content: [
        {
          text: 'Cancela 24 horas o más antes de la hora de inicio de la cita programada y el depósito del 25% será reembolsado por completo al método de pago original.',
        },
        {
          text: 'Solicita una reprogramación 24 horas o más antes de la hora de inicio programada y el depósito existente se transferirá a la cita de reemplazo aprobada, sujeto a disponibilidad, duración del servicio y calificación del técnico.',
        },
        {
          text: 'Una solicitud de cancelación o reprogramación recibida con menos de 24 horas antes de la hora de inicio programada es una cancelación tardía. El depósito se pierde y se requiere un nuevo depósito del 25% para reservar otra cita.',
        },
        {
          text: 'Cómo se mide el plazo: una cita programada para el martes a las 2:00 p.m. debe cancelarse o reprogramarse a más tardar el lunes a las 2:00 p.m. La marca de tiempo de Booksy—o la hora en que Athena\'s Beauty recibe la solicitud—determina si se cumplió el plazo.',
          highlight: true,
        },
      ],
    },
    {
      id: 'llegadas-tarde',
      number: '03',
      label: 'LLEGADAS TARDÍAS',
      title: 'Llegadas tardías y no-shows',
      icon: Clock,
      content: [
        {
          text: 'Un cliente que no llega a la cita programada se considera un no-show y pierde el depósito. Se requiere un nuevo depósito del 25% antes de que se pueda reservar otra cita.',
        },
        {
          text: 'Aplica un período de gracia de 15 minutos. A partir del minuto 16, la cita se cancela automáticamente porque ya no podemos brindar el servicio de manera segura y sin afectar a otros clientes.',
        },
        {
          text: 'Regla de llegada tardía: una cita cancelada automáticamente después del período de gracia se trata como una cancelación tardía. El depósito se pierde y se requiere un nuevo depósito del 25% para reprogramar.',
          highlight: true,
        },
      ],
    },
    {
      id: 'emergencias',
      number: '04',
      label: 'REVISIÓN',
      title: 'Emergencias y cancelaciones del salón',
      icon: AlertTriangle,
      content: [
        {
          text: 'Entendemos que pueden ocurrir emergencias genuinas y errores de reserva o del sistema verificados. Contáctanos lo antes posible. La gerencia puede revisar circunstancias documentadas de manera consistente e individual; una excepción no está garantizada.',
        },
        {
          text: 'Si Athena\'s Beauty debe cancelar una cita, el cliente puede elegir un reembolso completo del depósito o transferir el depósito a otra cita disponible. Los reembolsos se devuelven a través del canal de pago original; el tiempo de procesamiento puede variar según Booksy, el procesador de pagos y la institución financiera del cliente.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <div className="bg-black text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/es/servicios" 
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-6 text-sm font-body"
          >
            <ArrowLeft size={18} />
            Volver a Servicios
          </Link>
          
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-gold text-xs font-body tracking-widest uppercase mb-3">
                Divulgación de Política de Citas
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                Depósito,<br />
                Cancelación y<br />
                <span className="text-gold">Política de No-Show</span>
              </h1>
              <p className="text-white/70 mt-4 max-w-xl text-base leading-relaxed">
                Tu depósito del 25% reserva tiempo dedicado para tu cita. Un aviso claro de 24 horas 
                protege ese tiempo manteniendo las cancelaciones y reprogramaciones justas y 
                comprensibles.
              </p>
            </div>
            
            <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border border-gold/30 flex-shrink-0">
              <Info className="w-10 h-10 text-gold" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Depósito del 25%</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Tu depósito reserva el tiempo de la cita y se acredita hacia el servicio completado. 
              No es un cargo adicional.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Aviso de 24 horas</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Cancela 24 horas o más antes de la hora de inicio programada para un reembolso completo 
              del depósito, o reprograma y transfiérelo.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Período de gracia de 15 min</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              A partir del minuto 16, la cita se cancela automáticamente y el depósito se pierde.
            </p>
          </div>
        </div>
      </div>

      {/* Policy Sections */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {policySections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0">
                  <span className="text-gold font-heading text-sm font-bold">{section.number}</span>
                  <div className="w-px h-24 bg-gold/30" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="md:hidden text-gold font-heading text-sm font-bold">{section.number}</span>
                    <span className="text-xs font-body tracking-widest uppercase text-text-secondary">{section.label}</span>
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.content.map((item, index) => (
                      <div 
                        key={index}
                        className={`p-5 rounded-xl leading-relaxed ${
                          item.highlight 
                            ? 'bg-gold/10 border border-gold/30' 
                            : 'bg-white border border-gray-100'
                        }`}
                      >
                        <p className={`text-sm ${item.highlight ? 'text-black font-medium' : 'text-text-primary'}`}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Booking Acknowledgment */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Reconocimiento de reserva</h2>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>
                Al pagar el depósito del 25% y reservar una cita, reconoces que revisaste y 
                aceptaste el plazo de cancelación y reprogramación de 24 horas, los términos de 
                pérdida del depósito, la regla de llegada tardía de 15 minutos y los términos de no-show.
              </p>
              <p>
                Esta versión de la política y los términos mostrados antes de la confirmación rigen 
                esa cita. Los cambios de política posteriores no se aplicarán retroactivamente.
              </p>
              <p>
                Las preguntas son siempre bienvenidas antes de reservar. Los cambios de cita deben 
                enviarse a través de tu confirmación de Booksy, la aplicación de Booksy o un método 
                de contacto aprobado del salón para que se registre la hora de la solicitud con precisión.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-xs">
                Última actualización: 19 de julio de 2026
              </p>
              <a 
                href="https://nailsbyatenad.booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-heading font-bold text-sm hover:bg-gold/90 transition-colors"
              >
                Reservar una Cita
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-off-white py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-secondary text-xs">
            Athena's Beauty — Política de Depósito, Cancelación y No-Show
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpanishCancellationPolicyPage;
