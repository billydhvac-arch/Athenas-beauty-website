import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickReply {
  label: string;
  response: string;
}

const quickReplies: QuickReply[] = [
  { label: 'Services & Pricing', response: 'What services do you offer and how much do they cost?' },
  { label: 'Book Appointment', response: 'How do I book an appointment?' },
  { label: 'Location & Hours', response: 'Where are you located and what are your hours?' },
  { label: 'Walk-ins?', response: 'Do you accept walk-ins?' },
];

const botResponses: Record<string, string> = {
  'services': `We offer a wide range of nail services:

💅 **Acrylics**
• Full Set (One Color) - $55+
• Fill - $50+
• With Art Work - $65+
• Duck Nails - $65+

✨ **Gel-X Extensions**
• Small - $65+
• Medium - $70+
• Long - $75

💪 **Builder Gel** - $60+

🌸 **Dip Powder (NexGen)** - $45+

🎨 **French/Ombré** - $55+

🦶 **Pedicures**
• Citrus Pedicure - $45
• Gel OHH Pedicure - $50
• Volcano Pedicure - $70

Type "all services" to see the complete list!`,

  'pricing': `Our pricing varies by service:

💅 Acrylics: $28-$65+
✨ Gel-X: $65-$75
💪 Builder Gel: $60+
🌸 Dip Powder: $45+
🎨 French/Ombré: $55+
🦶 Pedicures: $45-$70
💅 Manicures: $25-$40

All prices are starting points and may vary based on length, design complexity, and add-ons.`,

  'book': `You can book an appointment in several ways:

1️⃣ **Online**: Visit our Booksy page at nailsbyatenad.booksy.com

2️⃣ **Call/Text**: (940) 435-1332

3️⃣ **Instagram DM**: @nails_by_atenad

💡 **Tip**: Book 48 hours in advance for best availability!`,

  'location': `📍 **Address:**
500 N Bell Ave, Suite 109
Denton, TX 76209

🕐 **Hours:**
By Appointment Only

📞 **Phone:** (940) 435-1332

💬 Message me if you'd like a day I'm closed - I can often work out a time to see you!`,

  'walk-in': `❌ **No Walk-ins Accepted**

We operate by **appointment only** to ensure each client gets the dedicated time and attention they deserve.

📅 **How to Book:**
• Online: nailsbyatenad.booksy.com
• Call/Text: (940) 435-1332
• Instagram: @nails_by_atenad

Book 48 hours in advance for best availability!`,

  'hours': `🕐 **Hours:**
By Appointment Only

We don't have set business hours - we schedule appointments based on availability.

💡 **Best times to book:**
• Weekdays: 10 AM - 7 PM
• Weekends: Flexible

📞 Call or text (940) 435-1332 to check availability!

💬 Message me if you need a specific day/time - I'll do my best to accommodate!`,

  'contact': `📞 **Get in Touch:**

• **Phone/Text:** (940) 435-1332
• **Instagram:** @nails_by_atenad
• **TikTok:** @nails_by_atenad
• **Booking:** nailsbyatenad.booksy.com

📍 **Location:**
500 N Bell Ave, Suite 109
Denton, TX 76209

I typically respond within a few hours! 💅`,

  'acrylic': `💅 **Acrylic Services:**

• **Full Set (One Color)** - $55+ (3 hours)
• **Fill** - $50+ (2h 50min)
• **With Art Work** - $65+ (2h 30min)
• **Full Set for Toes** - $55+ (1h 55min)
• **(Two) Toes Only** - $28+ (1 hour)
• **Duck Nails** - $65+ (2h 55min)

All acrylic services include shaping, cuticle care, and your choice of color or design!`,

  'gel-x': `✨ **Gel-X Extensions:**

Soft gel extensions that are gentler on natural nails:

• **Small** - $65+ (3 hours)
• **Medium** - $70+ (3 hours)
• **Long** - $75 (3 hours)

Gel-X is flexible, lightweight, and looks more natural than traditional acrylics. Perfect if you want extensions without the bulk!`,

  'pedicure': `🦶 **Pedicure Services:**

• **Citrus Pedicure** - $45 (1h 45min)
  - Nail trimming, shaping, cuticle cleaning
  - Callus treatment, warm towel, moisturizing lotion
  - Add Gel polish for $20

• **Gel OHH Pedicure (Jelly Bath)** - $50 (2h 55min)
  - Jelly texture bath, nail care, callus treatment
  - Paraffin wax, hydrating mask, warm towel
  - Add Gel for $20

• **Volcano Pedicure** - $70 (3 hours)
  - Bubbling & fizzing bath, exfoliating scrub
  - Collagen mask, hot stone massage, collagen socks
  - Add Gel for $20

The ultimate spa experience for your feet!`,

  'manicure': `💅 **Manicure Services:**

• **Basic Manicure** - $25 (1 hour)
  - Nail & cuticle trimming, shaping & buffing
  - Polish of your choice
  - Add Gel polish for $20

• **Spa Manicure** - $40 (1h 15min)
  - Everything in Basic, plus:
  - Exfoliating scrub
  - Hydrating mask
  - Hot towel treatment
  - Add Gel for $20

Perfect for maintaining healthy, beautiful nails!`,

  'design': `🎨 **Nail Art & Designs:**

• **Custom 3D Art** - $15-30 (add-on)
• **Custom 4D Art** - $25-45 (add-on)
• **French Tips** - $10 (add-on)
• **Chrome/Holographic** - $10-15 (add-on)
• **Cat Eye** - $10-15 (add-on)

✨ **Full Sets with Art:**
• Acrylic/Dip/Gel with Art Work - $65+

Bring your inspiration photos and I'll create a custom design just for you!`,

  'builder': `💪 **Builder Gel - $60+ (3 hours)**

Builder gel is a strong, lightweight nail enhancement that:
• Builds natural nail strength without bulk
• Perfect for growing healthy nails
• More flexible than acrylic
• Can be used as an overlay or for extensions

Great for anyone who wants stronger nails without traditional acrylics!`,

  'dip': `🌸 **Dip Powder (NexGen) - $45+ (2 hours)**

Benefits of Dip Powder:
• Odour-free application
• Lightweight and natural-looking
• Lasts 3-4 weeks
• No UV light needed
• Stronger than regular polish

Perfect for a long-lasting, natural manicure!`,

  'remove': `🗑️ **Nail Removal:**

• **Acrylic/Dip/Gel Removal** - $12 (45min)

We safely remove existing product without damaging your natural nails. Includes gentle soaking and nail conditioning treatment.

💡 **Tip**: It's best to have removal done professionally to avoid damaging your natural nails!`,

  'fix': `🔧 **Nail Repair:**

• **Fixing of a Nail** - $12+ (45min)

Broken or damaged nail? We can repair it quickly to keep your set looking perfect!

💡 **Tip**: Don't try to fix it yourself - come in and we'll take care of it properly!`,

  'polish': `💅 **Polish Services:**

• **Gel Polish Only** - $30+ (45min)
  - Long-lasting gel polish on natural nails
  - No extensions, just beautiful color!

• **Nail Polish Change** - $13 (45min)
  - Quick polish change on natural nails
  - Perfect for a fresh color between full services

Great options if you want beautiful nails without extensions!`,

  'all services': `📋 **Complete Service Menu:**

💅 **ACRYLICS**
• Full Set (One Color) - $55+
• Fill - $50+
• With Art Work - $65+
• Full Set for Toes - $55+
• (Two) Toes Only - $28+
• Duck Nails - $65+

✨ **GEL-X**
• Small - $65+
• Medium - $70+
• Long - $75

💪 **BUILDER GEL** - $60+

🌸 **DIP POWDER** - $45+

🎨 **FRENCH/OMBRÉ** - $55+

💅 **MANICURES**
• Basic - $25
• Spa - $40

🦶 **PEDICURES**
• Citrus - $45
• Gel OHH (Jelly Bath) - $50
• Volcano - $70

💅 **POLISH**
• Gel Polish Only - $30+
• Polish Change - $13

🔧 **REPAIR/REMOVAL**
• Fix Nail - $12+
• Removal - $12

Type a service name for more details!`,

  'default': `Hi! I'm Athena's virtual assistant! 💅

I can help you with:
• Services & pricing
• Booking appointments
• Location & hours
• Questions about specific services

**Popular questions:**
💅 What services do you offer?
💰 How much do acrylics cost?
📅 How do I book?
📍 Where are you located?

What can I help you with today?`,
};

const getBotResponse = (userMessage: string): string => {
  const lowerMsg = userMessage.toLowerCase();
  
  // Check for keywords
  if (lowerMsg.includes('service') || lowerMsg.includes('offer') || lowerMsg.includes('menu')) {
    return botResponses['services'];
  }
  if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much')) {
    return botResponses['pricing'];
  }
  if (lowerMsg.includes('book') || lowerMsg.includes('appointment') || lowerMsg.includes('schedule')) {
    return botResponses['book'];
  }
  if (lowerMsg.includes('location') || lowerMsg.includes('address') || lowerMsg.includes('where')) {
    return botResponses['location'];
  }
  if (lowerMsg.includes('walk') || lowerMsg.includes('walk-in') || lowerMsg.includes('walk in')) {
    return botResponses['walk-in'];
  }
  if (lowerMsg.includes('hour') || lowerMsg.includes('time') || lowerMsg.includes('open')) {
    return botResponses['hours'];
  }
  if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('call')) {
    return botResponses['contact'];
  }
  if (lowerMsg.includes('acrylic')) {
    return botResponses['acrylic'];
  }
  if (lowerMsg.includes('gel-x') || lowerMsg.includes('gelx') || lowerMsg.includes('gel x')) {
    return botResponses['gel-x'];
  }
  if (lowerMsg.includes('pedicure') || lowerMsg.includes('pedi')) {
    return botResponses['pedicure'];
  }
  if (lowerMsg.includes('manicure') || lowerMsg.includes('mani')) {
    return botResponses['manicure'];
  }
  if (lowerMsg.includes('design') || lowerMsg.includes('art') || lowerMsg.includes('3d') || lowerMsg.includes('4d')) {
    return botResponses['design'];
  }
  if (lowerMsg.includes('builder')) {
    return botResponses['builder'];
  }
  if (lowerMsg.includes('dip') || lowerMsg.includes('nexgen') || lowerMsg.includes('powder')) {
    return botResponses['dip'];
  }
  if (lowerMsg.includes('remove') || lowerMsg.includes('take off')) {
    return botResponses['remove'];
  }
  if (lowerMsg.includes('fix') || lowerMsg.includes('repair') || lowerMsg.includes('broken')) {
    return botResponses['fix'];
  }
  if (lowerMsg.includes('polish') || lowerMsg.includes('color') || lowerMsg.includes('gel polish')) {
    return botResponses['polish'];
  }
  if (lowerMsg.includes('all') || lowerMsg.includes('complete') || lowerMsg.includes('list')) {
    return botResponses['all services'];
  }
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return botResponses['default'];
  }
  
  return botResponses['default'];
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: `Hi there! 👋 Welcome to Athena's Beauty!

I'm here to help answer your questions about our services, pricing, booking, and more.

What can I help you with today?`,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: QuickReply) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply.response,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(reply.response),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-black rotate-90'
            : 'bg-gold hover:scale-110 btn-hover'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="text-gold" size={24} />
        ) : (
          <MessageCircle className="text-black" size={24} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[100] w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gold/20 flex flex-col">
          {/* Header */}
          <div className="bg-black p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <Sparkles className="text-gold" size={20} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm">
                Athena's Assistant
              </h3>
              <p className="font-body text-xs text-white/60">
                {isTyping ? 'Typing...' : 'Online'}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 max-h-[400px] overflow-y-auto p-4 space-y-4 bg-off-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 whitespace-pre-line ${
                    message.sender === 'user'
                      ? 'bg-gold text-black'
                      : 'bg-white text-black border border-gold/20'
                  }`}
                >
                  <p className="font-body text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-black border border-gold/20 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="bg-white p-3 border-t border-gold/10">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.label}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1.5 bg-off-white text-black text-xs font-body rounded-full border border-gold/20 hover:bg-gold/10 hover:border-gold transition-colors"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="bg-white p-4 border-t border-gold/10">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-off-white rounded-full font-body text-sm text-black placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold transition-colors"
              >
                <Send className="text-gold" size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
