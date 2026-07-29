import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ArrowRight, Calendar, Phone } from 'lucide-react';

const TWUPage = () => {
  useEffect(() => {
    document.title = 'Nail Salon Near TWU | Athena\'s Beauty | Denton, TX';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Best nail salon near TWU in Denton, TX. Athena\'s Beauty offers clinical-compliant nails, builder gel, Gel-X & custom art for Texas Woman\'s University students. Book online today.');
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://athenas-beauty.com/twu');
    }
  }, []);

  return (
    <div className="min-h-screen bg-off-white pt-28 pb-16">
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="font-body text-sm text-text-secondary hover:text-gold transition-colors">
            Home
          </Link>
          <span className="font-body text-sm text-text-secondary mx-2">/</span>
          <span className="font-body text-sm text-black">TWU Students</span>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(109, 26, 69, 0.1)', color: '#6D1A45' }}>
            🎀 Proudly TWU Maroon Friendly
          </span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-black mb-6">
            Nail Salon Near TWU
            <span className="block text-gold">Denton, TX</span>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mb-8">
            Just <strong className="text-black">1.8 miles</strong> from TWU campus. Premium nail services designed 
            for Texas Woman's University students — clinical-compliant designs, builder gel, 
            Gel-X, and custom nail art. Appointment-only. No walk-in waits.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://nailsbyatenad.booksy.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-body rounded-full hover:bg-gold-dark transition-colors"
            >
              Book Online
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:9404351332"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black font-body rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <Phone size={18} />
              (940) 435-1332
            </a>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-black/5">
            <MapPin className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-heading font-bold text-lg text-black mb-2">1.8 Miles From Campus</h3>
            <p className="font-body text-sm text-text-secondary">
              2640 W University Dr, Suite 1266<br />
              Denton, TX 76201 (Room #19)<br />
              Inside Salons by JC
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-black/5">
            <Clock className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-heading font-bold text-lg text-black mb-2">Clinical-Compliant Nails</h3>
            <p className="font-body text-sm text-text-secondary">
              We understand TWU nursing & health sciences dress codes.<br />
              Micro-French, nude builder gel, and short natural styles.<br />
              Pass inspection. Look polished.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-black/5">
            <Star className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-heading font-bold text-lg text-black mb-2">5-Star Rated</h3>
            <p className="font-body text-sm text-text-secondary">
              Top-rated nail salon in Denton.<br />
              Trusted by TWU nursing students.<br />
              Clinical rotation approved.
            </p>
          </div>
        </div>

        {/* Popular Services for TWU Students */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-black mb-8">
            Trending Services for TWU Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Micro-French Manicure',
                price: '$50+',
                desc: 'Ultra-thin white tips. Clinical-compliant. Passes dress code inspections. Looks polished and professional.',
                link: '/services',
              },
              {
                name: 'Builder Gel Overlay',
                price: '$45+',
                desc: 'Strengthen natural nails with a 3-4 week manicure. Perfect for busy nursing and health sciences schedules.',
                link: '/services',
              },
              {
                name: 'BIAB Structured Manicure',
                price: '$50+',
                desc: 'The "Clean Girl" nail. Plump, healthy natural nails with a glass-like shine. Natural length approved.',
                link: '/blog',
              },
              {
                name: 'Nude Gel-X (Short)',
                price: '$55+',
                desc: 'Natural-looking extensions at a clinical-appropriate length. Adds strength without obvious artificial look.',
                link: '/gallery/gelx',
              },
              {
                name: 'Dip Powder (Nude/Neutral)',
                price: '$45+',
                desc: 'Chip-free, low-maintenance color in professional nudes and neutrals. Lasts 3-4 weeks.',
                link: '/gallery/dip',
              },
              {
                name: 'Graduation Nail Art',
                price: '$65+',
                desc: 'Pearl accents, chrome French, and elegant designs for commencement. Photographs beautifully in maroon.',
                link: '/gallery/acrylic',
              },
            ].map((service) => (
              <div key={service.name} className="p-6 bg-white rounded-2xl border border-black/5 hover:border-gold/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-body font-semibold text-black">{service.name}</h3>
                  <span className="font-body font-bold text-gold">{service.price}</span>
                </div>
                <p className="font-body text-sm text-text-secondary mb-4">{service.desc}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1 text-sm font-body text-gold hover:text-gold-dark transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* TWU-Specific Trend Section */}
        <div className="mb-16 p-8 rounded-3xl" style={{ backgroundColor: 'rgba(109, 26, 69, 0.05)', border: '1px solid rgba(109, 26, 69, 0.1)' }}>
          <h2 className="font-heading font-bold text-2xl text-black mb-4">
            TWU Campus Nail Trends 2026
          </h2>
          <p className="font-body text-text-secondary mb-6">
            What TWU students are booking right now. From clinical rotation nails to graduation glamour.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-body font-semibold text-black mb-2">🎀 Maroon & White Pride</h4>
              <p className="font-body text-sm text-text-secondary">
                TWU maroon accents for spirit week, graduation, and campus events. 
                Subtle maroon tips, maroon cat-eye, or maroon French designs.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-body font-semibold text-black mb-2">🏥 Clinical Rotation Ready</h4>
              <p className="font-body text-sm text-text-secondary">
                Micro-French, nude builder gel, and short natural nails that pass 
                nursing school inspection. Professional and polished.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-body font-semibold text-black mb-2">🎓 Graduation Glamour</h4>
              <p className="font-body text-sm text-text-secondary">
                Pearl accents, chrome finishes, and elegant French tips perfect for 
                commencement photos. TWU maroon gown approved.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-body font-semibold text-black mb-2">💼 Professional Prep</h4>
              <p className="font-body text-sm text-text-secondary">
                Interview-ready nails for nursing job fairs, grad school applications, 
                and professional networking events. Clean girl aesthetic.
              </p>
            </div>
          </div>
        </div>

        {/* Why TWU Students Choose Athena's */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-black mb-8">
            Why TWU Students Choose Athena's
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Understands Clinical Dress Codes',
                desc: 'We know TWU nursing and health sciences programs have strict nail requirements. We recommend styles that pass inspection — and still look beautiful.',
              },
              {
                title: 'Appointment-Only = No Stress',
                desc: 'Between clinicals, labs, and lectures, you don\'t have time to wait 2 hours at a walk-in salon. Your appointment starts on time. Every time.',
              },
              {
                title: 'Nails That Survive Hospital Shifts',
                desc: 'Our builder gel and dip powder applications last 3-4 weeks — through long clinical shifts, hand washing, and sanitizer use.',
              },
              {
                title: 'Close to Campus',
                desc: 'Just 1.8 miles from TWU. Easy to reach between classes or after clinicals. Parking available.',
              },
            ].map((perk, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-black/5">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-gold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-black mb-1">{perk.title}</h3>
                  <p className="font-body text-sm text-text-secondary">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Compliance Guide */}
        <div className="mb-16 p-8 bg-white rounded-3xl border border-black/5">
          <h2 className="font-heading font-bold text-2xl text-black mb-4">
            TWU Clinical Nail Requirements
          </h2>
          <p className="font-body text-text-secondary mb-6">
            Most TWU nursing and health sciences programs require:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green text-xs">✓</span>
              </div>
              <p className="font-body text-sm text-text-secondary">Nails short (no longer than fingertip)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green text-xs">✓</span>
              </div>
              <p className="font-body text-sm text-text-secondary">No chipped polish</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green text-xs">✓</span>
              </div>
              <p className="font-body text-sm text-text-secondary">Neutral or natural colors preferred</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green text-xs">✓</span>
              </div>
              <p className="font-body text-sm text-text-secondary">No 3D embellishments or charms</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green text-xs">✓</span>
              </div>
              <p className="font-body text-sm text-text-secondary">Builder gel and short Gel-X usually approved</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green text-xs">✓</span>
              </div>
              <p className="font-body text-sm text-text-secondary">Dip powder in nude/neutral acceptable</p>
            </div>
          </div>
          <p className="font-body text-sm text-text-secondary">
            <strong>Note:</strong> Always confirm specific requirements with your program coordinator. 
            We can adjust any design to meet your program's standards.
          </p>
        </div>

        {/* Back to School CTA */}
        <div className="mb-16 p-8 bg-gold/5 rounded-3xl text-center">
          <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-heading font-bold text-2xl text-black mb-4">
            Back-to-School Nails Guide
          </h2>
          <p className="font-body text-text-secondary max-w-xl mx-auto mb-6">
            Not sure what to get? Check out our complete back-to-school nail guide 
            with 5 trending styles, major-specific recommendations, and student budgeting tips.
          </p>
          <Link
            to="/blog?post=back-to-school-nails-denton-tx-2026"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-body rounded-full hover:bg-gold-dark transition-colors"
          >
            Read the Guide
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Final CTA */}
        <div className="text-center p-12 bg-black rounded-3xl">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-4">
            Book Your TWU Nail Appointment
          </h2>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8">
            1.8 miles from campus. Appointment-only. Clinical-compliant designs available. 
            Book online or text us — we respond fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://nailsbyatenad.booksy.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-body rounded-full hover:bg-gold-dark transition-colors"
            >
              Book Online Now
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:9404351332"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-body rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <Phone size={18} />
              Text (940) 435-1332
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TWUPage;
