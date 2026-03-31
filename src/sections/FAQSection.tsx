import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does builder gel cost in Denton, TX?",
    answer: "Builder gel services in Denton typically range from $55-$70+. At Athena's Beauty, our builder gel full sets start at $70, which includes meticulous prep, custom shaping, and premium gel application that lasts 3-4 weeks. We don't rush — each set receives the detailed attention it deserves."
  },
  {
    question: "What is the best nail salon experience in Denton, TX?",
    answer: "The best nail salon experience is one where you never feel rushed, your technician actually listens, and the work exceeds expectations. At Athena's Beauty, we've built our reputation on what other salons miss: personalized attention, meticulous detail, and respectful service. No assembly-line mentality — just one artist, one client, and nails worth showing off."
  },
  {
    question: "Where can I get custom nail art in Denton?",
    answer: "Athena's Beauty is Denton's destination for custom nail art. From intricate hand-painted designs to 3D embellishments and trending styles like chrome French and stained glass nails, we create wearable art that reflects your personal style. Every design is custom — no stickers, no shortcuts, just pure artistry."
  },
  {
    question: "What are Gel-X nails and how much do they cost in Denton?",
    answer: "Gel-X is a soft gel extension system that's lighter and more flexible than acrylic. In Denton, Gel-X full sets typically range from $65-$85. At Athena's Beauty, we specialize in Gel-X for clients who want length without the heaviness of traditional acrylics — perfect for natural-looking extensions that last."
  },
  {
    question: "Acrylic vs Builder Gel: Which is better in Denton?",
    answer: "It depends on your goals. Acrylics are durable and great for dramatic length. Builder gel is lighter, more flexible, and healthier for natural nails. At Athena's Beauty, we offer both — acrylics for bold, sculpted looks and builder gel for strong, natural-feeling nails. During your consultation, we'll recommend what's best for your lifestyle."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-off-white py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-beige rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-deep-brown" />
            <span className="text-sm font-medium text-deep-brown uppercase tracking-wider">
              Questions Answered
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-deep-brown mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
            Everything you need to know about nail services in Denton, TX — from pricing to what makes Athena's Beauty different.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'border-warm-beige shadow-lg' 
                  : 'border-warm-beige/50 hover:border-warm-beige'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
              >
                <span className="font-display text-lg lg:text-xl text-deep-brown pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-deep-brown flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <p className="text-deep-brown/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-deep-brown/60 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-deep-brown text-off-white font-medium rounded-full hover:bg-deep-brown/90 transition-colors"
          >
            Message Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
