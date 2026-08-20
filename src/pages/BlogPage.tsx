import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { blogPosts } from './blogData';

const BlogPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // SEO Meta Tags
  useEffect(() => {
    document.title = 'Nail Trends & Tips Blog | Athena\'s Beauty | Denton, TX';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore the latest nail trends, nail care tips, and salon insights from Athena\'s Beauty in Denton, TX. Builder gel, acrylics, gel-X, nail art trends and more.');
    }
  }, []);

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
              onClick={() => navigate(`/blog/${featuredPost.id}`)}
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
              onClick={() => navigate(`/blog/${post.id}`)}
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
