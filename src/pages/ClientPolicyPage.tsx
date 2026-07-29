import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Calendar, Search, Wrench, XCircle, DollarSign, MessageSquare } from 'lucide-react';

const ClientPolicyPage = () => {
  useEffect(() => {
    document.title = 'Client Policy | Service Satisfaction, Corrections & Refunds | Athena\'s Beauty';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Athena\'s Beauty client policy for service satisfaction, corrections, and refunds. Report concerns within 5 days. Management reviews workmanship and determines appropriate remedy. Correction is considered first. Read our full policy.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.athenas-beauty.com/client-policy');
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = 'Salón de Uñas en Denton, TX | Athena\'s Beauty';
    };
  }, []);

  const policySections = [
    {
      id: 'commitment',
      number: '01',
      label: 'COMMITMENT',
      title: 'Beautiful work, handled fairly',
      icon: Shield,
      content: [
        {
          text: 'Athena\'s Beauty is committed to providing professional services with care, transparency, and respect. Because beauty services involve individual anatomy, natural nails, product compatibility, lifestyle, aftercare, and personal preferences, results and wear may vary.',
        },
        {
          text: 'If you believe there is a workmanship concern, contact us promptly. We will document the concern, review the available information, and provide a fair response under this policy.',
        },
      ],
    },
    {
      id: 'reporting',
      number: '02',
      label: 'REPORTING',
      title: 'Contact us within 5 calendar days',
      icon: Calendar,
      content: [
        {
          text: 'A possible workmanship concern must be reported within five (5) calendar days after the service date. Please contact Athena\'s Beauty through an approved business channel and provide your name, appointment date, service received, a description of the concern, and clear photographs when requested.',
        },
        {
          text: 'Reporting within five days does not automatically guarantee a correction, credit, or refund. It allows Management to review the service while the condition can be evaluated reasonably. Concerns reported after this window may still be documented, but complimentary relief is not guaranteed.',
          highlight: true,
        },
      ],
    },
    {
      id: 'review',
      number: '03',
      label: 'REVIEW',
      title: 'Management determines the appropriate remedy',
      icon: Search,
      content: [
        {
          text: 'Management may request photographs, booking and service records, an in-person assessment, or other information reasonably needed to understand the concern. Clients must allow Athena\'s Beauty a reasonable opportunity to inspect the work before removing, altering, repairing, or covering it through another provider when doing so is safe and practical.',
        },
        {
          text: 'After review, Management determines whether the concern appears related to workmanship and what remedy, if any, is appropriate. Employees and technicians may not promise a complimentary service, credit, or refund without Management authorization.',
        },
      ],
    },
    {
      id: 'corrections',
      number: '04',
      label: 'CORRECTIONS',
      title: 'Correction is normally considered first',
      icon: Wrench,
      content: [
        {
          text: 'When a timely, verified concern appears related to Athena\'s Beauty\'s workmanship, Management will normally consider a complimentary correction first. The correction may be limited to the affected area or portion of the original approved service and must be scheduled within the timeframe offered by Management.',
        },
        {
          text: 'A correction is intended to address the original concern. It does not include a new design, color, length, shape, service upgrade, additional work, or a change of preference unless separately approved and paid for.',
          highlight: true,
        },
      ],
    },
    {
      id: 'exclusions',
      number: '05',
      label: 'EXCLUSIONS',
      title: 'What is generally not a workmanship concern',
      icon: XCircle,
      content: [
        {
          text: 'Complimentary relief is generally not available for: normal wear; accidental impact or breakage; picking, biting, misuse; chemical or water exposure; failure to follow aftercare; work altered by the client or another provider; undisclosed health, allergy, sensitivity, medication, or product information; dissatisfaction based only on a change of mind; or results that were disclosed as variable or limited during consultation.',
        },
        {
          text: 'Athena\'s Beauty will not perform a correction that appears unsafe or outside an authorized professional scope. A health or safety concern may require service removal, postponement, refusal, or referral to an appropriate healthcare professional.',
        },
      ],
    },
    {
      id: 'refunds',
      number: '06',
      label: 'REFUNDS',
      title: 'Reviewed after the correction option',
      icon: DollarSign,
      content: [
        {
          text: 'Completed services are not automatically refundable. A correction is normally the first remedy considered. Management may consider an appropriate refund, partial refund, credit, removal, or other resolution when a correction is unsafe, impractical, unsuccessful, or when applicable law requires another remedy.',
        },
        {
          text: 'Any approved monetary refund will ordinarily be returned through the original approved payment method. Processing time may depend on the payment provider. Athena\'s Beauty does not promise cash, a particular remedy, or an immediate posting date before Management completes its review.',
        },
        {
          text: 'Fair-treatment commitment: This policy does not limit any right or remedy that cannot legally be waived. Athena\'s Beauty applies the policy consistently and reviews individual facts in good faith.',
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
                Client Policy Disclosure
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                Service Satisfaction,<br />
                Corrections &<br />
                <span className="text-gold">Refund Policy</span>
              </h1>
              <p className="text-white/70 mt-4 max-w-xl text-base leading-relaxed">
                A clear and respectful process for reporting concerns, reviewing workmanship, 
                and selecting an appropriate resolution.
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
            <h3 className="font-heading font-bold text-black text-sm mb-1">5-Day Window</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Report any workmanship concern within 5 calendar days of your service date 
              for management review.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Wrench className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Correction First</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              A complimentary correction is normally considered before any monetary refund. 
              Must be scheduled within management's offered timeframe.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Search className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">Management Review</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Management evaluates facts and determines the appropriate remedy. Technicians 
              cannot promise refunds without authorization.
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
                <h2 className="font-serif text-2xl md:text-3xl mb-2">Need to report a concern?</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Contact Athena's Beauty through the salon's approved Booksy, telephone, email, 
                  or website channel. Please do not post medical information publicly. Include your 
                  appointment date and clear photographs when requested.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-xs">
                Effective upon publication · Policy version 1.0 · Athena's Beauty Studio LLC · Management review required for corrections, credits, and refunds.
              </p>
              <a 
                href="https://nailsbyatenad.booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-heading font-bold text-sm hover:bg-gold/90 transition-colors"
              >
                Contact via Booksy
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
            Athena's Beauty — Client Service Satisfaction, Corrections & Refund Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientPolicyPage;
