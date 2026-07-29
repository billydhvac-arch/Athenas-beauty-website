import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ArrowRight, Calendar, Phone } from 'lucide-react';

const UNTPage = () => {
  useEffect(() => {
    document.title = 'Nail Salon Near UNT | Athena\'s Beauty | Denton, TX';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Best nail salon near UNT in Denton, TX. Athena\'s Beauty offers builder gel, acrylics, Gel-X & custom nail art for University of North Texas students. Book online today.');
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://athenas-beauty.com/unt');
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
          <span className="font-body text-sm text-black">UNT Students</span>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 133, 61, 0.1)', color: '#00853D' }}>
            🦅 Officially UNT Green Friendly
          </span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-black mb-6">
            Nail Salon Near UNT
            <span className="block text-gold">Denton, TX</span>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mb-8">
            Just <strong className="text-black">2.1 miles</strong> from UNT campus. Premium nail services designed 
            for University of North Texas students — builder gel, Gel-X, acrylics, and custom nail art. 
            Appointment-only. No walk-in waits.
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
            <h3 className="font-heading font-bold text-lg text-black mb-2">2.1 Miles From Campus</h3>
            <p className="font-body text-sm text-text-secondary">
              2640 W University Dr, Suite 1266<br />
              Denton, TX 76201 (Room #19)<br />
              Inside Salons by JC
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-black/5">
            <Clock className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-heading font-bold text-lg text-black mb-2">Student-Friendly Hours</h3>
            <p className="font-body text-sm text-text-secondary">
              Open late for UNT students.<br />
              Weekend appointments available.<br />
              Group booking for squads.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-black/5">
            <Star className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-heading font-bold text-lg text-black mb-2">5-Star Rated</h3>
            <p className="font-body text-sm text-text-secondary">
              Top-rated nail salon in Denton.<br />
              Specializing in trend-forward designs.<br />
              UNT student favorite.
            </p>
          </div>
        </div>

        {/* Popular Services for UNT Students */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-black mb-8">
            Trending Services for UNT Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Builder Gel Overlay',
                price: '$45+',
                desc: 'Strengthen natural nails with a 3-4 week manicure. Perfect for busy semester schedules.',
                link: '/services',
              },
              {
                name: 'Gel-X Extensions',
                price: '$60+',
                desc: 'Lightweight, natural-looking extensions. No damage. Lasts 3+ weeks between fills.',
                link: '/services',
              },
              {
                name: 'BIAB Structured Manicure',
                price: '$50+',
                desc: 'The TikTok-famous "Clean Girl" nail. Plump, healthy natural nails with glass-like shine.',
                link: '/blog',
              },
              {
                name: 'Acrylic Full Set',
                price: '$55+',
                desc: 'Bold, custom designs. Cat-eye, chrome, 3D art — whatever your feed is showing.',
                link: '/gallery/acrylic',
              },
              {
                name: 'Dip Powder',
                price: '$45+',
                desc: 'Durable, chip-free color. Lasts 3-4 weeks. Great for low-maintenance students.',
                link: '/gallery/dip',
              },
              {
                name: 'Custom Nail Art',
                price: '$65+',
                desc: 'Hand-painted designs, 3D embellishments, chrome effects. Bring your Pinterest board.',
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

        {/* UNT-Specific Trend Section */}
        <div className="mb-16 p-8 rounded-3xl" style={{ backgroundColor: 'rgba(0, 133, 61, 0.05)', border: '1px solid rgba(0, 133, 61, 0.1)' }}>
          <h2 className="font-heading font-bold text-2xl text-black mb-4">
            UNT Campus Nail Trends 2026
          </h2>
          <p className="font-body text-text-secondary mb-6">
            What UNT students are booking right now. From game day nails to graduation-ready manicures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-body font-semibold text-black mb-2">🦅 Mean Green Pride</h4>
              <p className="font-body text-sm text-text-secondary">
                UNT green and white designs for game days, spirit week, and graduation. 
                Show your Eagle pride with custom nail art.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-body font-semibold text-black mb-2">📚 Finals Week Survival</h4>
              <p className="font-body text-sm text-text-secondary">
                Low-maintenance builder gel or dip powder that lasts through finals. 
                No chipping during all-nighters at Willis Library.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-body font-semibold text-black mb-2">🎓 Graduation Ready</h4>
              <p className="font-body text-sm text-text-secondary">
                Elegant French tips, chrome finishes, and pearl accents perfect for 
                commencement photos at Apogee Stadium.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <h4 className="font-body font-semibold text-black mb-2">💚 Recruitment Season</h4>
              <p className="font-body text-sm text-text-secondary">
                Polished, professional nails for sorority recruitment, job interviews, 
                and networking events. Clean girl aesthetic approved.
              </p>
            </div>
          </div>
        </div>

        {/* Student Perks */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-black mb-8">
            Why UNT Students Choose Athena's
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Appointment-Only = No Wait Times',
                desc: 'Walk into any salon during syllabus week and wait 2+ hours. At Athena\'s, your appointment starts on time. Every time.',
              },
              {
                title: 'Nails That Survive Dorm Life',
                desc: 'Our builder gel and Gel-X applications last 3-4 weeks — through laundry day, cafeteria runs, and late-night study sessions.',
              },
              {
                title: 'Trend Expertise',
                desc: 'We monitor TikTok and Instagram trends weekly. When a new style goes viral, we already know how to execute it.',
              },
              {
                title: 'Group Bookings Available',
                desc: 'Roommate squads, sorority sisters, project groups — book together and make it a spa day.',
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
            Book Your UNT Nail Appointment
          </h2>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8">
            2.1 miles from campus. Appointment-only. No walk-in chaos. 
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

export default UNTPage;
