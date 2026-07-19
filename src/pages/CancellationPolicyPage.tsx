import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, AlertTriangle, Shield, Info } from 'lucide-react';

const CancellationPolicyPage = () => {
  // SEO Meta Tags
  useEffect(() => {
    document.title = 'Booking Policy | Deposit, Cancellation & No-Show | Athena\'s Beauty';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Athena\'s Beauty booking policy: 25% deposit required. 24-hour cancellation notice for full refund. 15-minute grace period. Learn about our deposit, rescheduling, and no-show policies.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/booking-policy');
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = 'Athena\'s Beauty | Premium Nail Salon in Denton, TX';
    };
  }, []);

  const policySections = [
    {
      id: 'deposit',
      number: '01',
      label: 'DEPOSIT',
      title: 'How your deposit works',
      icon: Shield,
      content: [
        {
          text: 'A deposit equal to 25% of the scheduled service price is required to reserve an appointment. When the service is completed, the deposit is credited toward the final service total; it is not an additional fee.',
        },
        {
          text: 'The appointment is reserved after the required deposit and booking fees are completed through Booksy. Athena\'s Beauty does not charge a separate cancellation fee under this policy.',
        },
        {
          text: 'Transparent pricing: The deposit percentage, service price, and policy are disclosed before booking confirmation.',
          highlight: true,
        },
      ],
    },
    {
      id: 'cancellation',
      number: '02',
      label: 'NOTICE',
      title: 'Cancellation & rescheduling',
      icon: Calendar,
      content: [
        {
          text: 'Cancel 24 hours or more before the scheduled appointment start time and the 25% deposit will be fully refunded to the original payment method.',
        },
        {
          text: 'Request a reschedule 24 hours or more before the scheduled start time and the existing deposit will transfer to the approved replacement appointment, subject to availability, service duration, and technician qualification.',
        },
        {
          text: 'A cancellation or rescheduling request received fewer than 24 hours before the scheduled start time is a late cancellation. The deposit is forfeited, and a new 25% deposit is required to reserve another appointment.',
        },
        {
          text: 'How the deadline is measured: An appointment scheduled for Tuesday at 2:00 p.m. must be cancelled or rescheduled no later than Monday at 2:00 p.m. The Booksy timestamp—or the time Athena\'s Beauty receives the request—determines whether the deadline was met.',
          highlight: true,
        },
      ],
    },
    {
      id: 'late-arrivals',
      number: '03',
      label: 'LATE ARRIVALS',
      title: 'Late arrivals & no-shows',
      icon: Clock,
      content: [
        {
          text: 'A client who does not arrive for the scheduled appointment is considered a no-show and forfeits the deposit. A new 25% deposit is required before another appointment can be reserved.',
        },
        {
          text: 'A 15-minute grace period applies. Beginning at minute 16, the appointment is automatically cancelled because we may no longer be able to provide the service safely and without affecting other clients.',
        },
        {
          text: 'Late-arrival rule: An appointment automatically cancelled after the grace period is treated as a late cancellation. The deposit is forfeited, and a new 25% deposit is required to rebook.',
          highlight: true,
        },
      ],
    },
    {
      id: 'emergencies',
      number: '04',
      label: 'REVIEW',
      title: 'Emergencies & salon cancellations',
      icon: AlertTriangle,
      content: [
        {
          text: 'We understand that genuine emergencies and verified booking or system errors may occur. Contact us as soon as possible. Management may review documented circumstances consistently and individually; an exception is not guaranteed.',
        },
        {
          text: 'If Athena\'s Beauty must cancel an appointment, the client may choose a full deposit refund or transfer the deposit to another available appointment. Refunds are returned through the original payment channel; processing time may vary by Booksy, the payment processor, and the client\'s financial institution.',
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
                Appointment Policy Disclosure
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                Deposit,<br />
                Cancellation &<br />
                <span className="text-gold">No-Show Policy</span>
              </h1>
              <p className="text-white/70 mt-4 max-w-xl text-base leading-relaxed">
                Your 25% deposit reserves dedicated appointment time. Clear 24-hour notice 
                protects that time while keeping cancellations and rescheduling fair and 
                understandable.
              </p>
            </div>
            
            {/* Logo mark */}
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
            <h3 className="font-heading font-bold text-black text-sm mb-1">25% booking deposit</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Your deposit reserves the appointment time and is credited toward the completed service. 
              It is not an additional charge.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">24-hour notice</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Cancel 24 hours or more before the scheduled start time for a full deposit refund, 
              or reschedule and transfer it.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-card card-hover border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-black text-sm mb-1">15-minute grace period</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Beginning at minute 16, the appointment is automatically cancelled and the deposit 
              is forfeited.
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
                {/* Section Number */}
                <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0">
                  <span className="text-gold font-heading text-sm font-bold">{section.number}</span>
                  <div className="w-px h-24 bg-gold/30" />
                </div>
                
                <div className="flex-1">
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="md:hidden text-gold font-heading text-sm font-bold">{section.number}</span>
                    <span className="text-xs font-body tracking-widest uppercase text-text-secondary">{section.label}</span>
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">
                    {section.title}
                  </h2>
                  
                  {/* Content */}
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
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Booking acknowledgment</h2>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>
                By paying the 25% deposit and booking an appointment, you acknowledge that you reviewed 
                and accepted the 24-hour cancellation and rescheduling deadline, deposit-forfeiture terms, 
                15-minute late-arrival rule, and no-show terms.
              </p>
              <p>
                This policy version and terms shown before confirmation govern that appointment. Later 
                policy changes will not be applied retroactively.
              </p>
              <p>
                Questions are always welcome before booking. Appointment changes should be submitted 
                through your Booksy confirmation, the Booksy app, or an approved salon contact method 
                so the request time can be recorded accurately.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-xs">
                Last updated: July 19, 2026
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
            Athena's Beauty — Deposit, Cancellation & No-Show Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;
