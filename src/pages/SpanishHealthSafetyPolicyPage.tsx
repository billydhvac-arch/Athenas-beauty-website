import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, Heart, Stethoscope, XCircle, FileText, Baby, Phone } from 'lucide-react';

const SpanishHealthSafetyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Política de Salud, Seguridad y Derecho a Negar Servicio | Salón de Uñas Denton, TX | Athena\'s Beauty';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Política de salud y seguridad de Athena\'s Beauty para servicios de uñas en Denton, TX. Evaluación de alergias, acomodaciones para embarazo, derecho a negar servicios inseguros, estándares de saneamiento, y procedimientos de emergencia. Salón de uñas cumpliente con TDLR.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/es/politica-de-salud');
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = 'Salón de Uñas en Denton, TX | Athena\'s Beauty';
    };
  }, []);

  const policySections = [
    {
      id: 'seguridad-compartida',
      number: '01',
      label: 'SEGURIDAD COMPARTIDA',
      title: 'Dínos antes de que comience el servicio',
      icon: Stethoscope,
      content: [
        {
          text: 'Por favor informa a tu técnica sobre alergias conocidas, sensibilidades, reacciones previas a productos, irritación actual, lesiones, piel abierta o rota, cambios en las uñas, procedimientos recientes, u otra información que pueda afectar el servicio solicitado. Comparte solo información relevante para proporcionar el servicio de manera segura.',
        },
        {
          text: 'Los empleados de Athena\'s Beauty son profesionales de la belleza, no proveedores de salud. No diagnosticamos condiciones médicas, garantizamos que un producto esté libre de alérgenos, ni aconsejamos a un cliente que ignore la orientación médica. Cuando una condición es incierta, podemos pausar la decisión del servicio y recomendar una evaluación profesional apropiada.',
          highlight: true,
        },
      ],
    },
    {
      id: 'revision-previa',
      number: '02',
      label: 'REVISIÓN PREVIA AL SERVICIO',
      title: 'Podemos modificar, posponer o negar un servicio inseguro',
      icon: Shield,
      content: [
        {
          text: 'Antes de comenzar, la técnica puede revisar el área del servicio, historial de productos, productos solicitados, y alternativas disponibles. Athena\'s Beauty no realizará conscientemente un servicio sobre piel o tejido de uña infectado, inflamado, roto, levantado o hinchado, o sobre una herida abierta o llaga en el área a ser servida.',
        },
        {
          text: 'Un servicio puede ser modificado, pospuesto o negado cuando el área del servicio parece inadecuada; la información requerida no está disponible; un producto seguro o técnica calificada no está disponible; las instrucciones del fabricante no apoyan el uso solicitado; la solicitud está fuera del alcance autorizado; o el servicio no puede realizarse de manera segura y legal.',
        },
      ],
    },
    {
      id: 'alergias',
      number: '03',
      label: 'ALERGIAS Y SENSIBILIDADES',
      title: 'La evaluación reduce el riesgo — no lo elimina',
      icon: AlertTriangle,
      content: [
        {
          text: 'Una reacción previa, sensibilidad, o desencadenante desconocido puede requerir revisión por la Gerencia o la técnica, sustitución de producto, posposición, o negación del servicio afectado. Una solicitud o renuncia del cliente no obliga a Athena\'s Beauty a proceder cuando la decisión profesional de seguridad es detenerse o negar.',
        },
        {
          text: 'Athena\'s Beauty no realiza pruebas de parche informales con productos profesionales de uñas sin curar. Cualquier prueba o alternativa autorizada por el fabricante debe seguir la etiqueta aplicable, instrucciones, información de seguridad, y proceso de aprobación interna.',
          highlight: true,
        },
      ],
    },
    {
      id: 'durante-servicio',
      number: '04',
      label: 'DURANTE EL SERVICIO',
      title: 'Habla si sientes dolor, ardor, calor, picazón o incomodidad',
      icon: Heart,
      content: [
        {
          text: 'Informa a tu técnica inmediatamente si experimentas dolor inesperado, ardor, calor excesivo, picazón, mareos, dificultad para respirar, hinchazón, u otros síntomas preocupantes. La técnica detendrá el paso afectado, removerá la exposición cuando sea seguro y apropiado, y seguirá el procedimiento de respuesta de Athena\'s Beauty.',
        },
        {
          text: 'Para síntomas severos o que progresan rápidamente — incluyendo dificultad para respirar, sibilancias, hinchazón de los labios, lengua o garganta, desmayo, confusión, colapso, o síntomas que involucran más de un sistema del cuerpo — los empleados llamarán al 911 y seguirán las instrucciones de despacho de emergencia.',
          highlight: true,
        },
      ],
    },
    {
      id: 'derecho-a-negar',
      number: '05',
      label: 'DERECHO A DETENER O NEGAR',
      title: 'Las decisiones de seguridad se basan en el servicio — no en características personales',
      icon: XCircle,
      content: [
        {
          text: 'Athena\'s Beauty puede detener, modificar, posponer, o negar un servicio por una preocupación documentada de salud o seguridad, limitación legal o de licencia, restricción del fabricante, requisito de saneamiento, calificación no disponible, incapacidad para obtener el consentimiento requerido, o conducta que crea un riesgo de seguridad inmediato.',
        },
        {
          text: 'Athena\'s Beauty no niega servicio por raza, color, religión, sexo, embarazo, origen nacional, edad, discapacidad, u otra característica protegida por la ley aplicable. Consideramos solicitudes de acomodación razonable y discutiremos alternativas seguras y prácticas cuando sea posible.',
          highlight: true,
        },
      ],
    },
    {
      id: 'despues-incidente',
      number: '06',
      label: 'DESPUÉS DE UN INCIDENTE',
      title: 'Seguimiento y revisión de servicios futuros',
      icon: FileText,
      content: [
        {
          text: 'Una reacción adversa o incidente de seguridad puede resultar en documentación, retención de producto, seguimiento de Gerencia, y una pausa temporal en servicios futuros relacionados mientras los hechos y opciones de servicio seguro son revisados. Las fotografías de incidentes o información relacionada con la salud son registros operativos restringidos y no son consentimiento de marketing.',
        },
        {
          text: 'Busca atención médica pronta cuando los síntomas continúen, empeoren, o causen preocupación. La orientación de emergencia y control de venenos tiene prioridad sobre esta política. Athena\'s Beauty puede solicitar autorización apropiada o información adicional de producto antes de un servicio futuro relacionado cuando sea razonablemente necesario para la seguridad.',
        },
      ],
    },
    {
      id: 'embarazo',
      number: '07',
      label: 'EMBARAZO',
      title: 'El embarazo no es una razón automática para negar el servicio',
      icon: Baby,
      content: [
        {
          text: 'Athena\'s Beauty no niega, restringe, ni desanima automáticamente un servicio de uñas porque una cliente esté embarazada, pueda estar embarazada, haya dado a luz recientemente, o esté amamantando. El embarazo solo no se trata como una contraindicación. Una decisión de servicio debe basarse en el área de servicio real, productos, síntomas, alcance profesional, instrucciones aplicables, y cualquier orientación individual que la cliente elija compartir de un profesional de la salud.',
        },
        {
          text: 'Los productos de salón pueden liberar vapores, polvos o neblinas, y la sensibilidad a olores o posicionamiento puede cambiar durante el embarazo. Athena\'s Beauty usa controles de exposición para todos los clientes y trabajadores, incluyendo ventilación, recipientes cerrados de productos, dispensación cuidadosa, control de polvo, saneamiento, y acceso a información de seguridad de productos.',
        },
        {
          text: 'Una cliente embarazada puede solicitar ajustes razonables como cambios de asiento o posicionamiento, descansos, o una discusión de alternativas de producto o servicio disponibles. No garantizamos que ningún producto de salón o nivel de exposición esté libre de riesgo durante el embarazo.',
        },
        {
          text: 'Acomodación e igualdad de servicio: Por favor contáctanos antes de tu cita si necesitas una modificación razonable o asistencia de comunicación. Discutiremos las opciones disponibles sin requerir detalles médicos innecesarios.',
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
                Divulgación de Política de Salud y Seguridad
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                Salud, Alergias,<br />
                Seguridad y Derecho a<br />
                <span className="text-gold">Negar el Servicio</span>
              </h1>
              <p className="text-white/70 mt-4 max-w-xl text-base leading-relaxed">
                Estándares claros de seguridad para consulta, sensibilidades a productos, embarazo, 
                detener un servicio, y ofrecer alternativas apropiadas en nuestro salón de uñas en Denton, TX.
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
              <Stethoscope className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Divulga Preocupaciones Relevantes</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Cuéntanos sobre alergias, reacciones, irritación, lesiones, o cambios que afecten 
              el área del servicio antes de que comience tu cita.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <AlertTriangle className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Detente Cuando Te Preocupes</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Reporta dolor, ardor, calor, picazón, hinchazón, mareos, o síntomas de respiración 
              inmediatamente durante tu servicio.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Decisiones Basadas en Seguridad</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              El embarazo solo no es razón para negar el servicio. Las condiciones reales del servicio 
              y la evaluación profesional de seguridad controlan todas las decisiones.
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

      {/* Emergency Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                <Phone className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-2 text-red-400">Procedimientos de Emergencia</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Llama al 911 por dificultad para respirar, hinchazón de los labios, lengua o garganta, 
                  desmayo, confusión, colapso, o síntomas severos que empeoren rápidamente. Esta política 
                  del sitio web no es consejo médico. La orientación de emergencia y control de venenos 
                  tiene prioridad sobre cualquier política del salón.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-xs">
                Efectivo al publicarse · Versión de política 1.1 · Athena's Beauty Studio LLC · 
                Las decisiones de seguridad son documentadas y revisadas bajo los SOPs controladores. 
                Salón de uñas cumpliente con TDLR en Denton, Texas.
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
            Athena's Beauty — Política de Salud, Alergias, Seguridad y Derecho a Negar el Servicio
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpanishHealthSafetyPolicyPage;
