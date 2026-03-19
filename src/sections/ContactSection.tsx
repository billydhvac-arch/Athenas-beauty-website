import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Instagram, Send, Clock, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Columns animation
      columnsRef.current.forEach((col, index) => {
        if (!col) return;
        gsap.fromTo(
          col,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: col,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const openInstagram = () => {
    window.open('https://instagram.com/nails_by_atenad', '_blank');
  };

  const openTikTok = () => {
    window.open('https://tiktok.com/@nails_by_atenad', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative bg-off-white py-24 lg:py-32 ${className}`}
    >
      <div className="w-full px-6 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 lg:mb-24">
          <h2 className="font-heading font-bold headline-lg text-black uppercase">
            LET'S <span className="text-gold">CONNECT</span>
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Column 1: Address & Hours */}
          <div
            ref={(el) => { columnsRef.current[0] = el; }}
            className="bg-white rounded-3xl shadow-card card-border p-6 lg:p-8 border border-gold/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <MapPin size={18} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-black">
                Visit Us
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-black font-medium">
                    500 N Bell Ave, Suite 109
                  </p>
                  <p className="font-body text-sm text-text-secondary">
                    Denton, TX 76209
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href="tel:9404351332"
                  className="font-body text-sm text-black hover:text-gold transition-colors"
                >
                  (940) 435-1332
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-black font-medium">
                    By Appointment Only
                  </p>
                  <p className="font-body text-xs text-text-secondary">
                    No walk-ins accepted
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden h-32 bg-black/5 flex items-center justify-center border border-gold/10">
              <div className="text-center">
                <MapPin size={24} className="text-gold mx-auto mb-2" />
                <p className="font-body text-xs text-text-secondary">
                  View on Google Maps
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div
            ref={(el) => { columnsRef.current[1] = el; }}
            className="bg-white rounded-3xl shadow-card card-border p-6 lg:p-8 border border-gold/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Send size={18} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-black">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-xs text-text-secondary mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-off-white border border-black/10 font-body text-sm text-black focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="font-body text-xs text-text-secondary mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-off-white border border-black/10 font-body text-sm text-black focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="font-body text-xs text-text-secondary mb-1 block">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-off-white border border-black/10 font-body text-sm text-black focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-gold font-body font-medium text-sm px-6 py-3 rounded-full btn-hover flex items-center justify-center gap-2"
              >
                Send
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Column 3: Social */}
          <div
            ref={(el) => { columnsRef.current[2] = el; }}
            className="bg-white rounded-3xl shadow-card card-border p-6 lg:p-8 border border-gold/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Instagram size={18} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-black">
                Follow Us
              </h3>
            </div>

            <p className="font-body text-sm text-text-secondary mb-6">
              Follow for daily nail inspiration and behind-the-scenes content.
            </p>

            {/* Instagram */}
            <button
              onClick={openInstagram}
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-off-white hover:bg-gold/10 transition-colors mb-3 border border-gold/10"
            >
              <Instagram size={24} className="text-gold" />
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  @nails_by_atenad
                </p>
                <p className="font-body text-xs text-text-secondary">
                  Follow on Instagram
                </p>
              </div>
            </button>

            {/* TikTok */}
            <button
              onClick={openTikTok}
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-off-white hover:bg-gold/10 transition-colors border border-gold/10"
            >
              <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  @nails_by_atenad
                </p>
                <p className="font-body text-xs text-text-secondary">
                  Follow on TikTok
                </p>
              </div>
            </button>

            {/* Booksy */}
            <a
              href="https://nailsbyatenad.booksy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-gold hover:bg-gold-dark transition-colors mt-3"
            >
              <Calendar size={24} className="text-black" />
              <div className="text-left">
                <p className="font-body text-sm text-black font-medium">
                  Book on Booksy
                </p>
                <p className="font-body text-xs text-black/70">
                  35+ 5-star reviews
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 lg:mt-24 text-center">
          <img
            src="/logo.png"
            alt="Athena's Beauty"
            className="h-12 w-auto mx-auto mb-4 opacity-50"
          />
          <p className="font-body text-xs text-text-secondary">
            © {new Date().getFullYear()} Athena's Beauty. All rights reserved.
          </p>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-white rounded-3xl border border-gold/20 shadow-card">
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-xl text-black">
              Message Sent!
            </DialogTitle>
            <DialogDescription className="font-body text-sm text-text-secondary">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowDialog(false)}
              className="bg-black text-gold font-body font-medium text-sm px-6 py-2 rounded-full btn-hover"
            >
              Got it
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
