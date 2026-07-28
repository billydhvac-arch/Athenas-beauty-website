import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, Heart, Stethoscope, XCircle, FileText, Baby, Phone } from 'lucide-react';

const HealthSafetyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Health, Safety & Right to Refuse Policy | Nail Salon Denton, TX | Athena\'s Beauty';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Athena\'s Beauty health and safety policy for nail services in Denton, TX. Allergy screening, pregnancy accommodations, right to refuse unsafe services, sanitation standards, and emergency procedures. TDLR-compliant nail salon safety practices.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/health-safety-policy');
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = 'Salón de Uñas en Denton, TX | Athena\'s Beauty';
    };
  }, []);

  const policySections = [
    {
      id: 'shared-safety',
      number: '01',
      label: 'SHARED SAFETY',
      title: 'Tell us before the service begins',
      icon: Stethoscope,
      content: [
        {
          text: 'Please tell your technician about known allergies, sensitivities, prior product reactions, current irritation, injuries, open or broken skin, nail changes, recent procedures, or other information that may affect the requested service. Share only information relevant to providing the service safely.',
        },
        {
          text: 'Athena\'s Beauty employees are beauty professionals, not healthcare providers. We do not diagnose medical conditions, guarantee that a product is allergen-free, or advise a client to ignore medical guidance. When a condition is uncertain, we may pause the service decision and recommend appropriate professional evaluation.',
          highlight: true,
        },
      ],
    },
    {
      id: 'pre-service',
      number: '02',
      label: 'PRE-SERVICE REVIEW',
      title: 'We may modify, postpone, or decline an unsafe service',
      icon: Shield,
      content: [
        {
          text: 'Before starting, the technician may review the service area, product history, requested products, and available alternatives. Athena\'s Beauty will not knowingly perform a service over infected, inflamed, broken, raised, or swollen skin or nail tissue, or over an open wound or sore in the area to be serviced.',
        },
        {
          text: 'A service may be modified, postponed, or declined when the service area appears unsuitable; required information is unavailable; a safe product or qualified technician is unavailable; manufacturer instructions do not support the requested use; the request is outside authorized scope; or the service cannot be performed safely and lawfully.',
        },
      ],
    },
    {
      id: 'allergies',
      number: '03',
      label: 'ALLERGIES & SENSITIVITIES',
      title: 'Screening reduces risk — it does not eliminate it',
      icon: AlertTriangle,
      content: [
        {
          text: 'A prior reaction, sensitivity, or unknown trigger may require Management or technician review, product substitution, postponement, or refusal of the affected service. A client request or waiver does not require Athena\'s Beauty to proceed when the professional safety decision is to stop or decline.',
        },
        {
          text: 'Athena\'s Beauty does not perform informal patch tests with uncured professional nail products. Any manufacturer-authorized test or alternative must follow the applicable label, instructions, safety information, and internal approval process.',
          highlight: true,
        },
      ],
    },
    {
      id: 'during-service',
      number: '04',
      label: 'DURING SERVICE',
      title: 'Speak up about pain, burning, heat, itching, or discomfort',
      icon: Heart,
      content: [
        {
          text: 'Tell your technician immediately if you experience unexpected pain, burning, excessive heat, itching, dizziness, breathing difficulty, swelling, or other concerning symptoms. The technician will stop the affected step, remove exposure when safe and appropriate, and follow Athena\'s Beauty\'s response procedure.',
        },
        {
          text: 'For severe or rapidly progressing symptoms — including breathing difficulty, wheezing, swelling of the lips, tongue, or throat, faintness, confusion, collapse, or symptoms involving more than one body system — employees will call 911 and follow emergency-dispatch instructions.',
          highlight: true,
        },
      ],
    },
    {
      id: 'right-to-refuse',
      number: '05',
      label: 'RIGHT TO STOP OR REFUSE',
      title: 'Safety decisions are based on the service — not personal characteristics',
      icon: XCircle,
      content: [
        {
          text: 'Athena\'s Beauty may stop, modify, postpone, or refuse a service for a documented health or safety concern, legal or licensing limitation, manufacturer restriction, sanitation requirement, unavailable qualification, inability to obtain required consent, or conduct that creates an immediate safety risk.',
        },
        {
          text: 'Athena\'s Beauty does not refuse service because of race, color, religion, sex, pregnancy, national origin, age, disability, or another characteristic protected by applicable law. We consider reasonable accommodation requests and will discuss safe, practical alternatives when possible.',
          highlight: true,
        },
      ],
    },
    {
      id: 'after-incident',
      number: '06',
      label: 'AFTER AN INCIDENT',
      title: 'Follow-up and future-service review',
      icon: FileText,
      content: [
        {
          text: 'An adverse reaction or safety incident may result in documentation, product hold, Management follow-up, and a temporary hold on future related services while the facts and safe service options are reviewed. Incident photographs or health-related information are restricted operational records and are not marketing consent.',
        },
        {
          text: 'Seek prompt medical attention when symptoms continue, worsen, or cause concern. Emergency and poison-control guidance takes priority over this policy. Athena\'s Beauty may request appropriate clearance or additional product information before a future related service when reasonably necessary for safety.',
        },
      ],
    },
    {
      id: 'pregnancy',
      number: '07',
      label: 'PREGNANCY',
      title: 'Pregnancy is not an automatic reason to deny service',
      icon: Baby,
      content: [
        {
          text: 'Athena\'s Beauty does not automatically refuse, restrict, or discourage a nail service because a client is pregnant, may be pregnant, recently gave birth, or is breastfeeding. Pregnancy alone is not treated as a contraindication. A service decision must be based on the actual service area, products, symptoms, professional scope, applicable instructions, and any individual guidance the client chooses to share from a healthcare professional.',
        },
        {
          text: 'Salon products can release vapors, dusts, or mists, and sensitivity to odors or positioning may change during pregnancy. Athena\'s Beauty uses exposure controls for all clients and workers, including ventilation, closed product containers, careful dispensing, dust control, sanitation, and access to product safety information.',
        },
        {
          text: 'A pregnant client may request reasonable adjustments such as seating or positioning changes, breaks, or a discussion of available product or service alternatives. We do not guarantee that any salon product or exposure level is risk-free during pregnancy.',
        },
        {
          text: 'Accommodation and equal service: Please contact us before your appointment if you need a reasonable modification or communication assistance. We will discuss available options without requiring unnecessary medical details.',
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
            to="/services" 
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-6 text-sm font-body"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
          
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-gold text-xs font-body tracking-widest uppercase mb-3">
                Health & Safety Policy Disclosure
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                Health, Allergies,<br />
                Safety &amp; Right to<br />
                <span className="text-gold">Refuse Service</span>
              </h1>
              <p className="text-white/70 mt-4 max-w-xl text-base leading-relaxed">
                Clear safety standards for consultation, product sensitivities, pregnancy, 
                stopping a service, and offering appropriate alternatives at our Denton, TX nail salon.
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
            <h3 className="font-heading font-bold text-black text-sm mb-1">Disclose Relevant Concerns</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Tell us about allergies, reactions, irritation, injuries, or changes affecting 
              the service area before your appointment begins.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <AlertTriangle className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Stop When Concerned</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Report pain, burning, heat, itching, swelling, dizziness, or breathing 
              symptoms immediately during your service.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Safety-Based Decisions</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Pregnancy alone is not a reason to refuse service. Actual service conditions 
              and professional safety assessment control all decisions.
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
                <h2 className="font-serif text-2xl md:text-3xl mb-2 text-red-400">Emergency Procedures</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Call 911 for breathing difficulty, swelling of the lips, tongue, or throat, 
                  faintness, confusion, collapse, or severe or rapidly worsening symptoms. This 
                  website policy is not medical advice. Emergency and poison-control guidance 
                  takes priority over any salon policy.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-xs">
                Effective upon publication · Policy version 1.1 · Athena's Beauty Studio LLC · 
                Safety decisions are documented and reviewed under the controlling SOPs. 
                TDLR-compliant nail salon in Denton, Texas.
              </p>
              <a 
                href="https://nailsbyatenad.booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-heading font-bold text-sm hover:bg-gold/90 transition-colors"
              >
                Book an Appointment
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
            Athena's Beauty — Health, Allergies, Safety & Right to Refuse Service Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthSafetyPolicyPage;
