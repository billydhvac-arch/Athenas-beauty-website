import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Calendar, Search, Wrench, XCircle, DollarSign, MessageSquare } from 'lucide-react';

const SpanishClientPolicyPage = () => {
  useEffect(() => {
    document.title = 'Política para Clientes | Satisfacción, Correcciones y Reembolsos | Athena\'s Beauty';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Política de Athena\'s Beauty para satisfacción del servicio, correcciones y reembolsos. Reporta preocupaciones dentro de 5 días. La gerencia revisa la mano de obra y determina el remedio apropiado. La corrección se considera primero. Lee nuestra política completa.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/es/politica-para-clientes');
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = 'Salón de Uñas en Denton, TX | Athena\'s Beauty';
    };
  }, []);

  const policySections = [
    {
      id: 'compromiso',
      number: '01',
      label: 'COMPROMISO',
      title: 'Trabajo hermoso, manejado con justicia',
      icon: Shield,
      content: [
        {
          text: 'Athena\'s Beauty está comprometida con brindar servicios profesionales con cuidado, transparencia y respeto. Debido a que los servicios de belleza involucran anatomía individual, uñas naturales, compatibilidad de productos, estilo de vida, cuidado posterior y preferencias personales, los resultados y el desgaste pueden variar.',
        },
        {
          text: 'Si crees que hay una preocupación de mano de obra, contáctanos de inmediato. Documentaremos la preocupación, revisaremos la información disponible y proporcionaremos una respuesta justa bajo esta política.',
        },
      ],
    },
    {
      id: 'reportar',
      number: '02',
      label: 'REPORTAR',
      title: 'Contáctanos dentro de 5 días calendario',
      icon: Calendar,
      content: [
        {
          text: 'Una posible preocupación de mano de obra debe reportarse dentro de cinco (5) días calendario después de la fecha del servicio. Por favor contacta a Athena\'s Beauty a través de un canal comercial aprobado y proporciona tu nombre, fecha de la cita, servicio recibido, una descripción de la preocupación, y fotografías claras cuando se soliciten.',
        },
        {
          text: 'Reportar dentro de cinco días no garantiza automáticamente una corrección, crédito o reembolso. Permite que la Gerencia revise el servicio mientras la condición puede evaluarse razonablemente. Las preocupaciones reportadas después de este período aún pueden documentarse, pero el alivio complementario no está garantizado.',
          highlight: true,
        },
      ],
    },
    {
      id: 'revision',
      number: '03',
      label: 'REVISIÓN',
      title: 'La gerencia determina el remedio apropiado',
      icon: Search,
      content: [
        {
          text: 'La Gerencia puede solicitar fotografías, registros de reservas y servicios, una evaluación en persona, u otra información razonablemente necesaria para comprender la preocupación. Los clientes deben permitir que Athena\'s Beauty tenga una oportunidad razonable de inspeccionar el trabajo antes de removerlo, alterarlo, repararlo o cubrirlo a través de otro proveedor cuando hacerlo sea seguro y práctico.',
        },
        {
          text: 'Después de la revisión, la Gerencia determina si la preocupación parece relacionada con la mano de obra y qué remedio, si alguno, es apropiado. Los empleados y técnicos no pueden prometer un servicio complementario, crédito o reembolso sin autorización de la Gerencia.',
        },
      ],
    },
    {
      id: 'correcciones',
      number: '04',
      label: 'CORRECCIONES',
      title: 'La corrección se considera normalmente primero',
      icon: Wrench,
      content: [
        {
          text: 'Cuando una preocupación oportuna y verificada parece relacionada con la mano de obra de Athena\'s Beauty, la Gerencia normalmente considerará una corrección complementaria primero. La corrección puede limitarse al área afectada o porción del servicio original aprobado y debe programarse dentro del período ofrecido por la Gerencia.',
        },
        {
          text: 'Una corrección está destinada a abordar la preocupación original. No incluye un nuevo diseño, color, longitud, forma, actualización de servicio, trabajo adicional, o cambio de preferencia a menos que se apruebe y pague por separado.',
          highlight: true,
        },
      ],
    },
    {
      id: 'exclusiones',
      number: '05',
      label: 'EXCLUSIONES',
      title: 'Lo que generalmente no es una preocupación de mano de obra',
      icon: XCircle,
      content: [
        {
          text: 'El alivio complementario generalmente no está disponible para: desgaste normal; impacto o rotura accidental; morder, rascar, mal uso; exposición a químicos o agua; no seguir el cuidado posterior; trabajo alterado por el cliente o otro proveedor; información no divulgada sobre salud, alergias, sensibilidad, medicamentos o productos; insatisfacción basada solo en un cambio de opinión; o resultados que fueron divulgados como variables o limitados durante la consulta.',
        },
        {
          text: 'Athena\'s Beauty no realizará una corrección que parezca insegura o fuera del alcance profesional autorizado. Una preocupación de salud o seguridad puede requerir la remoción del servicio, posposición, negativa, o referencia a un profesional de la salud apropiado.',
        },
      ],
    },
    {
      id: 'reembolsos',
      number: '06',
      label: 'REEMBOLSOS',
      title: 'Revisados después de la opción de corrección',
      icon: DollarSign,
      content: [
        {
          text: 'Los servicios completados no son automáticamente reembolsables. Una corrección es normalmente el primer remedio considerado. La Gerencia puede considerar un reembolso apropiado, reembolso parcial, crédito, remoción, u otra resolución cuando una corrección es insegura, impráctica, sin éxito, o cuando la ley aplicable requiere otro remedio.',
        },
        {
          text: 'Cualquier reembolso monetario aprobado generalmente se devolverá a través del método de pago original aprobado. El tiempo de procesamiento puede depender del proveedor de pagos. Athena\'s Beauty no promete efectivo, un remedio particular, o una fecha de publicación inmediata antes de que la Gerencia complete su revisión.',
        },
        {
          text: 'Compromiso de trato justo: Esta política no limita ningún derecho o remedio que no pueda ser legalmente renunciado. Athena\'s Beauty aplica la política consistentemente y revisa los hechos individuales de buena fe.',
          highlight: true,
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
                Divulgación de Política para Clientes
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                Satisfacción del Servicio,<br />
                Correcciones y<br />
                <span className="text-gold">Política de Reembolso</span>
              </h1>
              <p className="text-white/70 mt-4 max-w-xl text-base leading-relaxed">
                Un proceso claro y respetuoso para reportar preocupaciones, revisar la mano de obra, 
                y seleccionar una resolución apropiada.
              </p>
            </div>
            
            <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border border-gold/30 flex-shrink-0">
              <Shield className="w-10 h-10 text-gold" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Ventana de 5 Días</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Reporta cualquier preocupación de mano de obra dentro de 5 días calendario de la fecha 
              del servicio para revisión por la gerencia.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Wrench className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Corrección Primero</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Una corrección complementaria se considera normalmente antes de cualquier reembolso 
              monetario. Debe programarse dentro del período ofrecido por la gerencia.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Search className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Revisión de Gerencia</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              La gerencia evalúa los hechos y determina el remedio apropiado. Los técnicos no 
              pueden prometer reembolsos sin autorización.
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

      {/* Report a Concern CTA */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-2">¿Necesitas reportar una preocupación?</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Contacta a Athena's Beauty a través de los canales aprobados del salón: Booksy, 
                  teléfono, correo electrónico o sitio web. Por favor no publiques información médica 
                  públicamente. Incluye tu fecha de cita y fotografías claras cuando se soliciten.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-xs">
                Efectivo al publicarse · Versión de política 1.0 · Athena's Beauty Studio LLC · Se requiere revisión de gerencia para correcciones, créditos y reembolsos.
              </p>
              <a 
                href="https://nailsbyatenad.booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-heading font-bold text-sm hover:bg-gold/90 transition-colors"
              >
                Contactar vía Booksy
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
            Athena's Beauty — Política de Satisfacción del Servicio, Correcciones y Reembolsos para Clientes
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpanishClientPolicyPage;
