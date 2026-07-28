import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'builder-gel-nails-denton-tx-2026',
    title: "Builder Gel Nails in Denton, TX: The Complete Guide to Stronger, Healthier Natural Nails",
    excerpt: "Discover builder gel nails in Denton, TX. Athena's Beauty creates stronger, healthier natural nails with premium builder gel overlays. Learn why builder gel is the fastest-growing nail enhancement in 2026.",
    content: `# Builder Gel Nails in Denton, TX...`,
    date: 'June 29, 2026',
    readTime: '10 min read',
    category: 'Services',
    image: '/builder-gel-hero.jpg',
    featured: true,
  },
  {
    id: 'back-to-school-nails-denton-tx-2026',
    title: "Back-to-School Nails in Denton, TX: The Ultimate Guide for UNT & TWU Students",
    excerpt: "The ultimate back-to-school nail guide for UNT & TWU students in Denton, TX. Discover 5 trending styles, major-specific picks, and why Athena's Beauty is the student favorite. Book now.",
    content: `# Back-to-School Nails in Denton, TX: The Ultimate Guide for UNT & TWU Students

**Meta Title:** Back to School Nails Denton TX | UNT & TWU Student Nail Trends 2026
**Meta Description:** The ultimate back-to-school nail guide for UNT & TWU students in Denton, TX. Discover 5 trending styles, major-specific picks, and why Athena's Beauty is the student favorite. Book now.

Every August, something predictable happens in Denton. Over 42,000 students at the University of North Texas and Texas Woman's University start packing their bags, buying textbooks, and — if they're smart — booking their back-to-school nails. If you're searching for **"back to school nails denton tx"** or **"unt student nails denton,"** you're already ahead of the curve. But here's what most walk-in salons won't tell you: not all back-to-school nails are created equal.

The nails that look perfect on TikTok might chip before syllabus week ends. The design that dominates your Instagram feed might violate your clinical dress code. And the "quick manicure" you squeeze in between orientation events? It might not survive your first round of midterms. At **Athena's Beauty in Denton, TX**, we specialize in nails that don't just look good for move-in day — they look good through midterms, clinical rotations, and every campus coffee run in between.

This guide covers the five back-to-school nail trends every **college student in Denton** is booking right now, which styles work for your major, and why choosing quality over convenience actually saves you money over a semester.

---

## The 5 Back-to-School Nail Trends Taking Over Denton Campuses

If you're trying to decide what nails to get before classes start, the options are endless. But these five trends are dominating TikTok and Instagram right now — and more importantly, they work for real student life.

### Coquette Bow Nails — For the TikTok Girlies
With over **3.2 billion views on TikTok**, the coquette aesthetic isn't slowing down. Think delicate hand-painted bows in soft pink, ivory, and pearl white on short-to-medium nails. It's feminine, current, and photographs beautifully for syllabus week Instagram posts. The key to making coquette bows last? A **builder gel overlay** creates the smooth, strong foundation these detailed designs need. Most walk-in salons skip the structural step, which is why their bows bubble or lift within a week.

### Peridot Green Cat-Eye — August Birthstones, Rejoice
If your birthday falls in August, this one's practically mandatory. **Peridot green cat-eye nails** use magnetic gel polish to create a shimmering olive-green effect that shifts in the light — like holding a gemstone on your fingertips. The trend exploded in late July 2026 and currently has zero competition from other Denton nail salons. No competitor is marketing August birthstone nails, which means Athena's is your only local option for this viral look. Best on **Gel-X extensions** or healthy natural nails with builder gel reinforcement.

### Denim Blue Cat-Eye — Campus Casual, Elevated
The late-July breakout trend that's already crossed **250 million TikTok views**. Denim blue cat-eye nails pair a deep, magnetic blue shimmer with casual campus style better than any other trend on this list. They look equally at home with UNT green, TWU maroon, or your favorite thrifted denim jacket. This is the "I didn't try too hard but my nails are absolutely the moment" look — and it works on any nail length.

### Jelly Glaze — Quiet Luxury on a Student Budget
**Jelly nails** are translucent, candy-colored manicures that look like your nails were dipped in hard candy. Add a **chrome or glazed finish** on top, and you get what nail artists call "Jelly Glaze" — a pearlescent, light-catching effect that's been trending for months with over **500 million TikTok views**. The appeal for students? It looks expensive and intentional without screaming for attention. Perfect for business presentations, clinical rotations, or days when you want your nails to whisper instead of shout.

### Micro-French — Clinical Rotation Approved
If you're a **TWU nursing student**, a **pre-med major**, or anyone in a program with strict dress codes, this one's for you. The micro-French manicure uses an ultra-thin white tip — sometimes barely a millimeter — that reads as professional and polished while still feeling current. Unlike traditional French tips that can look dated, micro-French is what 2026's most style-conscious professionals are wearing. It passes clinical inspection, photographs well in your student ID, and lasts 3-4 weeks with a **builder gel overlay**.

---

## Back-to-School Nails by Major

Not every trend works for every student. Here's what Athena's recommends based on your program:

**Nursing & Healthcare (TWU, Pre-Med)** — Micro-French, Jelly Glaze in nude/peach, or Peridot Green on short natural nails. All are clinical-compliant when executed with thin, refined application. Avoid long extensions and bold 3D art.

**Education & Social Work** — Micro-French, Denim Blue Cat-Eye on medium length, or Coquette Bows on short nails. Professional enough for classroom observation, expressive enough for your personality.

**Business & Marketing** — Jelly Glaze, Denim Blue Cat-Eye, or Peridot Green. These trends project confidence and attention to detail — exactly what you want in a networking event or internship interview.

**Art, Design & Music** — Go bold. Coquette Bows with mixed-media details, Peridot Green with custom embellishments, or layered chrome effects. Your major is literally about creative expression — your nails should reflect that.

**Undeclared / Exploratory** — Start with a versatile **builder gel overlay** in a neutral jelly or cat-eye shade. It looks polished for any class, any event, and any major you eventually choose.

---

## Why Student Nails Fail (And How to Make Yours Last)

The biggest mistake Denton students make is treating nails as a one-time expense instead of a semester-long investment. Here's what actually happens when you choose the cheapest option:

- **Basic manicures** at discount salons last 5-7 days before chipping. Over a 15-week semester, that's 6-7 visits at $25-35 each — roughly **$150-245 total**.
- **Builder gel overlays** at Athena's last 3-4 weeks. Over the same semester, that's 4-5 visits. The total cost is comparable, but your nails look flawless the entire time, your natural nails stay healthy, and you never have to panic-book before a presentation or date.
- **Gel-X extensions** with proper fills every 3-4 weeks give you length, strength, and trend versatility. The upfront cost is higher, but the cost-per-week of flawless nails is lower than most students expect — and the confidence boost is hard to put a price on.

The other factor most students overlook? **Group bookings.** Athena's accommodates roommate squads, sorority sisters, and friend groups who want to book together. When you coordinate your back-to-school nails as a group, you get the social experience of a spa day with the quality of a premium studio — and your nails all look incredible for syllabus week.

---

## Where to Get Back-to-School Nails in Denton, TX

If you've ever walked into a busy salon during move-in week, you know the chaos. Walk-in waits stretch to 2+ hours. Technicians rush through appointments to clear the queue. The nail art you saw on TikTok becomes "we don't do that here." And the "quick manicure" you settled for chips before your first exam.

At **Athena's Beauty**, we do things differently.

- **Appointment-only** — no walk-in chaos, no rushed jobs, no waiting in plastic chairs for an hour
- **Premium builder gel and Gel-X** — nails that last through your entire syllabus, not just syllabus week
- **Trend expertise** — we know what's viral on TikTok because we monitor trends weekly, and we can execute designs that walk-in salons have never heard of
- **Student-friendly approach** — we understand UNT and TWU dress codes, we know what survives dorm life, and we'll recommend styles that fit your actual lifestyle

**Location:** Athena's Beauty at Salons by JC  
2640 W University Dr, Suite 1266  
Denton, TX 76201 (Room #19)

**Booking:** [nailsbyatenad.booksy.com](https://nailsbyatenad.booksy.com)  
**Phone/Text:** (940) 435-1332  
**Instagram:** [@nails_by_atenad](https://instagram.com/nails_by_atenad)

**Appointment only — no walk-ins.** Back-to-school spots fill fast. We recommend booking 3-5 days in advance, especially for weekend slots and group bookings.

---

## Your Semester Starts with Your Nails

Back-to-school nails aren't just a trend — they're the confidence boost that carries you through orientation, your first lecture, your first clinical, and every campus moment that follows. In Denton, TX, where 42,000 students are all searching for their perfect pre-semester set, the salons that understand student life are the ones that thrive.

Whether you're a UNT junior who needs nails that survive dorm laundry day, a TWU nursing student who needs clinical-compliant elegance, or a transfer student who just wants to feel like yourself in a new city — **Athena's Beauty has the back-to-school nails Denton students are actually booking.**

**Ready to start your semester with nails that last?** [Book your back-to-school appointment at Athena's Beauty →](https://nailsbyatenad.booksy.com)

*Questions about dress code compliance, group bookings, or which trend fits your major? DM us on Instagram [@nails_by_atenad](https://instagram.com/nails_by_atenad) or text the studio — we love helping Denton students find their perfect set.*

**Related:**
- [Builder Gel Nails in Denton, TX: The Complete Guide](/#blog?post=builder-gel-nails-denton-tx-2026)
- [Gel-X Extensions in Denton, TX](/#blog?post=gel-x-extensions-denton-tx-2026)
- [Micro-French Manicure in Denton, TX](/#blog?post=micro-french-manicure-denton-tx-2026)
- [Cat Eye Nails in Denton, TX](/#blog?post=cat-eye-nails-denton-2026)

---

*Published July 28, 2026 | Athena's Beauty — Premium Nail Salon in Denton, TX | 2640 W University Dr, Suite 1266 | Denton, TX 76201*`,
    date: 'July 28, 2026',
    readTime: '8 min read',
    category: 'Trends',
    image: '/acrylic-pink-white-gold-bow-french.jpg',
  },
  {
    id: 'biab-structured-manicure-denton-tx-2026',
    title: "What Are BIAB Nails? Denton's Complete Guide to the Structured Manicure Revolution",
    excerpt: "Discover BIAB nails in Denton, TX. Learn why structured manicures are 2026's top nail trend, how they strengthen natural nails, and book at Athena's Beauty.",
    content: `# What Are BIAB Nails? Denton's Complete Guide to the Structured Manicure Revolution

**Meta Title:** BIAB Nails Denton TX | Structured Manicure Guide | Athena's Beauty
**Meta Description:** Discover BIAB nails in Denton, TX. Learn why structured manicures are 2026's top nail trend, how they strengthen natural nails, and book at Athena's Beauty.

If you've been on TikTok or Instagram lately, you've probably seen the acronym **BIAB** floating around nail communities. With over **877 million views** on TikTok and celebrity fans like Hailey Bieber and Kim Kardashian, BIAB nails have officially moved from nail-tech insider secret to mainstream must-have.

But here's what most people don't realize: **BIAB isn't just a trend—it's a complete shift in how we think about nail health.** And if you're in Denton, Texas, there's only one place offering this revolutionary service with true expertise.

At **Athena's Beauty**, we've been perfecting structured manicures long before BIAB became a hashtag. Here's everything you need to know about the nail treatment that's replacing traditional gel manicures across the country.

---

## What Does BIAB Stand For?

**BIAB = Builder In A Bottle**

Originally created by The GelBottle Inc. in 2015, BIAB is a specialized gel formula that combines the strength of acrylic with the flexibility and health benefits of gel polish. Think of it as a **protective armor for your natural nails**—one that builds structure, prevents breakage, and creates that perfectly smooth, plump nail surface everyone wants.

Unlike regular gel polish that simply coats your nail, BIAB actually **builds an apex**—the curved structure that distributes pressure and prevents breakage. This is what nail technicians call a **"structured manicure."**

---

## BIAB vs. Gel Polish vs. Acrylic: What's the Difference?

If you're confused about your manicure options, you're not alone. Most Denton nail salons don't explain the difference—they just ask "gel or acrylic?" Here's the breakdown:

| Feature | Regular Gel Polish | BIAB / Structured | Acrylic Extensions |
|---------|-------------------|-------------------|-------------------|
| **Strength** | Light coating | Reinforces natural nail | Heavy artificial structure |
| **Durability** | 1-2 weeks | 3-4 weeks | 2-3 weeks (with fills) |
| **Nail Health** | Can weaken with repeated soaking | Strengthens over time | Can cause brittleness |
| **Look** | Color on natural nail | Plump, perfected natural nail | Artificial length/shape |
| **Removal** | Soak off | File down, reapply | Drill off |
| **Best For** | Short-term color | Growing healthy natural nails | Dramatic length/shape |

**The key difference:** Regular gel polish sits *on top* of your nail. BIAB *becomes part of* your nail's structure, strengthening it from within while maintaining a completely natural look.

---

## Why BIAB Is Dominating 2026

Several major beauty movements have converged to make BIAB the defining nail trend of 2026:

### The "Clean Girl" Aesthetic
The era of heavy, oversized extensions is giving way to **minimalist, expensive-looking natural nails**. BIAB delivers that "barely-there" perfection—immaculate cuticles, sheer nude tones, and a glass-like shine that suggests health and wealth.

### Nail Health Awareness
Movements around skin health and hair health have exploded. Now, **nail health is finally getting the same attention**. BIAB strengthens natural nails over time instead of damaging them, making it the choice for anyone who wants beautiful nails *and* healthy nails underneath.

### The "Old Money" Nail Trend
Understated elegance is in. BIAB's ability to create perfectly shaped, naturally glossy nails without obvious artificial enhancements aligns perfectly with the quiet luxury aesthetic that's dominating fashion and beauty.

### Low-Maintenance Lifestyle
With schedules getting busier, the promise of a **3-4 week manicure** that doesn't chip, lift, or break is irresistible. BIAB's durability means fewer salon visits, less damage from repeated removal, and nails that look salon-fresh for weeks.

---

## Is BIAB Right for You?

BIAB is ideal for anyone who:
- Wants to **grow their natural nails** longer than they've ever been able to before
- Has **weak, brittle, or peeling nails** that break easily
- Prefers a **natural look** over obvious artificial extensions
- Needs a manicure that lasts **3+ weeks** without chipping
- Wants to **stop biting their nails** (the thickness and durability help break the habit)
- Is transitioning away from acrylics and wants to **restore nail health**

If you're a **UNT or TWU student**, BIAB is perfect for busy semesters when you don't have time for weekly salon visits. If you're a **Denton professional**, the polished, natural look works beautifully in any workplace environment.

---

## What to Expect During a BIAB Service at Athena's Beauty

Our structured manicure service follows a precise, multi-step process to ensure your BIAB nails are flawless and long-lasting:

1. **Dry Manicure Prep** — We begin with meticulous cuticle work and nail preparation using professional-grade tools.
2. **Dehydration & Priming** — A high-quality dehydrator eliminates moisture and oils, followed by primer for chemical bond adhesion.
3. **BIAB Application** — We apply a thin base layer, then build the apex with builder gel, using the self-leveling properties to create a perfect curve.
4. **Color Layer** — Your chosen gel polish color is applied over the BIAB base. Want art? Our custom nail art services work beautifully over BIAB.
5. **Top Coat & Cure** — A high-gloss, non-wipe top coat seals everything for that signature glass-like shine.

**Service Time:** 60-75 minutes  
**Longevity:** 3-4 weeks with proper care  
**Price:** $50+ (check our services page for current pricing)

---

## BIAB Aftercare: Making Your Manicure Last

To get the full 3-4 weeks from your BIAB manicure:
- Apply cuticle oil daily to maintain flexibility
- Wear gloves when doing dishes or cleaning
- Avoid using your nails as tools (opening cans, peeling stickers)
- Schedule your fill appointment at 3 weeks to maintain the structure
- Moisturize your hands regularly—healthy cuticles = longer-lasting nails

---

## Why Choose Athena's Beauty for BIAB in Denton?

While BIAB is trending nationwide, **the quality of your structured manicure depends entirely on your technician's expertise.** At Athena's Beauty, we specialize in advanced nail techniques that most Denton salons don't offer:

- **Expert Builder Gel Application** — Our technicians are trained in precise apex placement and structure building, not just "slapping on polish."
- **Custom Art Over BIAB** — Want nail art on your structured manicure? Our custom nail art services create stunning designs over your BIAB base.
- **Nail Health Focus** — We prioritize the long-term health of your natural nails, not just the immediate aesthetic.
- **Premium Products** — We use professional-grade builder gels and gel polishes for maximum durability and shine.
- **Convenient Location** — Located in Denton, TX, serving UNT students, TWU students, and local professionals.

**[Book Your BIAB Structured Manicure →](https://nailsbyatenad.booksy.com)**

---

## Frequently Asked Questions

**How much do BIAB nails cost in Denton?**  
BIAB pricing varies by salon, but typically ranges from $45-$65 for a full structured manicure. At Athena's Beauty, our builder gel/structured manicure service starts at a competitive rate.

**How long does BIAB last?**  
With proper application and care, BIAB nails last 3-4 weeks. Many clients find they can even stretch to 5 weeks with good aftercare.

**Can you get nail art on BIAB?**  
Absolutely! BIAB creates the perfect smooth canvas for any nail art design. At Athena's Beauty, we offer custom nail art, chrome finishes, cat-eye effects, and more over our BIAB base.

**Is BIAB better than acrylic?**  
For natural nail health, yes. BIAB strengthens your existing nails rather than replacing them with artificial structure. If you want dramatic length, acrylic or Gel-X extensions may be better. [Learn about our Gel-X extensions here](/#services).

**Can BIAB help nail biters?**  
Yes! The thickness and durability of BIAB makes it much harder to bite through, helping many clients break the habit while their natural nails grow out underneath.

---

## Ready to Try the Nail Trend Everyone's Talking About?

BIAB isn't just another passing trend—it's the future of nail care. Stronger natural nails, longer-lasting manicures, and that perfectly polished "Clean Girl" look that works for every occasion.

Whether you're a student at UNT or TWU looking for low-maintenance nails, a busy professional who needs a manicure that lasts, or someone transitioning away from acrylics to restore your nail health, **Athena's Beauty is Denton's destination for expert BIAB structured manicures.**

**[Book Your Appointment Today →](https://nailsbyatenad.booksy.com)**  
*Located in Denton, TX—serving the entire Denton County area.*

---

**Related Articles:**
- [Builder Gel Nails: The Complete Denton Guide](/#blog?post=builder-gel-nails-denton-tx-2026) — Deep dive into our signature builder gel service
- [Gel-X Extensions vs. Acrylic: Which Is Right for You?](/#blog?post=gel-x-extensions-denton-tx-2026) — Comparing modern extension options
- [The Ultimate Guide to Cat Eye Nails](/#blog?post=cat-eye-nails-denton-2026) — Trending nail art styles that work over BIAB

---

*Last updated: July 28, 2026*  
*Athena's Beauty | Premium Nail Salon in Denton, TX*  
*2640 W University Dr, Suite 1266, Denton, TX 76201*  
*Builder Gel • Acrylics • Gel-X • Custom Nail Art • Manicures • Pedicures*`,
    date: 'July 28, 2026',
    readTime: '9 min read',
    category: 'Services',
    image: '/short-white-gold-chrome.jpg',
  },
  {
    id: 'gel-x-extensions-denton-tx-2026',
    title: "Gel-X Extensions in Denton, TX: The Smarter Alternative to Acrylics for 2026",
    excerpt: "Discover Gel-X extensions in Denton, TX. Lightweight, natural-looking nail extensions with no damage. Learn why Gel-X is the smartest alternative to acrylics in 2026.",
    content: `# Gel-X Extensions in Denton, TX...`,
    date: 'June 29, 2026',
    readTime: '10 min read',
    category: 'Services',
    image: '/gelx-long.jpg',
  },
  {
    id: 'soap-nails-foggy-french-denton-tx-2026',
    title: "Soap Nails & Foggy French Manicure in Denton, TX: The 'No Makeup' Nail Trend Taking Over Summer 2026",
    excerpt: "Discover the viral Soap Nails & Foggy French trend in Denton, TX. Athena's Beauty creates the perfect milky, sheer manicure with premium builder gel. Book your appointment today.",
    content: `# Soap Nails & Foggy French Manicure in Denton, TX...`,
    date: 'June 28, 2026',
    readTime: '8 min read',
    category: 'Trends',
    image: '/work4.jpg',
  },
  {
    id: 'chrome-french-acrylic-2026',
    title: "Chrome French Acrylic Nails in Denton, TX: The Mirror-Finish Manicure Everyone Wants",
    excerpt: "Chrome French nails are the #1 nail art trend of 2026. Discover how Athena's Beauty in Denton, TX creates the perfect chrome French tips with premium products and expert technique.",
    content: `# Chrome French Acrylic Nails in Denton, TX...`,
    date: 'June 25, 2026',
    readTime: '7 min read',
    category: 'Trends',
    image: '/chrome-french.jpg',
    featured: true,
  },
  {
    id: 'custom-nail-art-denton-2026',
    title: "Custom Nail Art at Athena's Beauty: Hand-Painted Designs You'll Never Find Anywhere Else",
    excerpt: "From anime characters to floral masterpieces, Athena's Beauty in Denton, TX creates custom hand-painted nail art that turns your nails into wearable art. Book your custom design today.",
    content: `# Custom Nail Art at Athena's Beauty...`,
    date: 'June 22, 2026',
    readTime: '6 min read',
    category: 'Art',
    image: '/nail-artwork.jpg',
  },
  {
    id: 'manicure-longevity-tips-2026',
    title: "How to Make Your Manicure Last 3+ Weeks: Pro Tips from Athena's Beauty",
    excerpt: "Want your manicure to last longer? Discover professional tips from Athena's Beauty in Denton, TX for extending the life of your gel manicure, acrylics, or builder gel nails.",
    content: `# How to Make Your Manicure Last 3+ Weeks...`,
    date: 'June 20, 2026',
    readTime: '5 min read',
    category: 'Tips',
    image: '/work8.jpg',
  },
];

const BlogPage = () => {
  const { t } = useTranslation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // SEO Meta Tags
  useEffect(() => {
    if (selectedPost) {
      document.title = `${selectedPost.title} | Athena's Beauty Blog`;
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', selectedPost.excerpt);
      }
    } else {
      document.title = 'Nail Trends & Tips Blog | Athena\'s Beauty | Denton, TX';
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Explore the latest nail trends, nail care tips, and salon insights from Athena\'s Beauty in Denton, TX. Builder gel, acrylics, gel-X, nail art trends and more.');
      }
    }
  }, [selectedPost]);

  const filteredPosts = blogPosts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => post.id !== featuredPost?.id);

  const goBack = () => {
    if (selectedPost) {
      setSelectedPost(null);
    } else {
      window.location.href = '/';
    }
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-off-white pt-28 pb-16">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-black hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-body text-sm">{t('blogPage.back')}</span>
          </button>

          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-64 lg:h-96 object-cover rounded-3xl mb-8"
          />

          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-gold/10 text-gold-dark text-xs font-body rounded-full">
              {selectedPost.category}
            </span>
            <div className="flex items-center gap-1 text-text-secondary">
              <Calendar size={14} />
              <span className="font-body text-xs">{selectedPost.date}</span>
            </div>
            <div className="flex items-center gap-1 text-text-secondary">
              <Clock size={14} />
              <span className="font-body text-xs">{selectedPost.readTime}</span>
            </div>
          </div>

          <h1 className="font-heading font-bold text-2xl lg:text-4xl text-black mb-6">
            {selectedPost.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="font-body text-black whitespace-pre-wrap leading-relaxed">
              {selectedPost.content}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white pt-28 pb-16">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold headline-lg text-black uppercase mb-4">
            {t('blogPage.headline')} <span className="text-gold">{t('blogPage.headlineAccent')}</span>
          </h1>
          <p className="font-body body-text text-text-secondary max-w-2xl mx-auto">
            {t('blogPage.subheadline')}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder={t('blogPage.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-white border border-black/10 font-body text-black focus:outline-none focus:border-gold transition-colors shadow-card"
          />
        </div>

        {/* Featured Post */}
        {featuredPost && !searchQuery && (
          <div className="mb-12">
            <div
              onClick={() => setSelectedPost(featuredPost)}
              className="relative bg-white rounded-3xl shadow-card card-border overflow-hidden cursor-pointer card-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gold text-black text-xs font-body rounded-full font-medium">
                      {t('blogPage.featured')}
                    </span>
                    <span className="text-text-secondary font-body text-xs">{featuredPost.category}</span>
                  </div>
                  <h2 className="font-heading font-bold text-xl lg:text-2xl text-black mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body text-text-secondary mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="font-body text-xs text-text-secondary">{featuredPost.date}</span>
                    <span className="font-body text-xs text-text-secondary">{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-3xl shadow-card card-border overflow-hidden cursor-pointer card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={14} className="text-gold" />
                  <span className="font-body text-xs text-text-secondary">{post.category}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-black mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-text-secondary mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-text-secondary">{post.date}</span>
                  <span className="flex items-center gap-1 text-gold font-body text-xs">
                    {t('blogPage.readMore')} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-text-secondary">{t('blogPage.noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
