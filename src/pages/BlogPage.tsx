import { useState } from 'react';
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
      window.location.hash = '';
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
