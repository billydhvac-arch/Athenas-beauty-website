import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t('faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>;

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
              {t('faq.badge')}
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-deep-brown mb-4">
            {t('faq.headline')}
          </h2>
          <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
            {t('faq.subheadline')}
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
            {t('faq.stillQuestions')}
          </p>
          <a
            href="tel:940-435-1332"
            className="inline-flex items-center gap-2 px-8 py-4 bg-deep-brown text-off-white font-medium rounded-full hover:bg-deep-brown/90 transition-colors"
          >
            {t('faq.call')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
