import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, type BlogPost } from './blogData';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Athena's Beauty Blog`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://www.athenas-beauty.com/blog/${post.id}`);
      }
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', `https://www.athenas-beauty.com/blog/${post.id}`);
      }
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-off-white pt-28 pb-16">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-2xl text-black mb-4">Article Not Found</h1>
          <p className="font-body text-text-secondary mb-8">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-body text-sm rounded-full hover:bg-gold-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const getRelatedPosts = (currentPost: BlogPost) => {
    return blogPosts
      .filter((p) => p.id !== currentPost.id && p.category === currentPost.category)
      .slice(0, 3);
  };

  const getGalleryLink = (currentPost: BlogPost) => {
    if (currentPost.title.toLowerCase().includes('acrylic')) return '/gallery/acrylic';
    if (currentPost.title.toLowerCase().includes('builder gel') || currentPost.title.toLowerCase().includes('biab')) return '/gallery/builder-gel';
    if (currentPost.title.toLowerCase().includes('gel-x')) return '/gallery/gel-x';
    if (currentPost.title.toLowerCase().includes('dip')) return '/gallery/dip';
    return null;
  };

  const relatedPosts = getRelatedPosts(post);
  const galleryLink = getGalleryLink(post);

  return (
    <div className="min-h-screen bg-off-white pt-28 pb-16">
      <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-black hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-body text-sm">Back to Blog</span>
        </button>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 lg:h-96 object-cover rounded-3xl mb-8"
        />

        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <span className="px-3 py-1 bg-gold/10 text-gold-dark text-xs font-body rounded-full">
            {post.category}
          </span>
          <div className="flex items-center gap-1 text-text-secondary">
            <Calendar size={14} />
            <span className="font-body text-xs">{post.date}</span>
          </div>
          <div className="flex items-center gap-1 text-text-secondary">
            <Clock size={14} />
            <span className="font-body text-xs">{post.readTime}</span>
          </div>
        </div>

        <h1 className="font-heading font-bold text-2xl lg:text-4xl text-black mb-6">
          {post.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="font-body text-black whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-black/10">
            <h2 className="font-heading font-bold text-xl lg:text-2xl text-black mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <button
                  key={relatedPost.id}
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                  className="text-left group"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:opacity-90 transition-opacity"
                  />
                  <span className="px-2 py-1 bg-gold/10 text-gold-dark text-xs font-body rounded-full">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-body font-semibold text-sm text-black mt-2 group-hover:text-gold transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Link */}
        {galleryLink && (
          <div className="mt-12 p-8 bg-gold/5 rounded-3xl">
            <h3 className="font-heading font-bold text-lg text-black mb-2">
              See These Designs in Our Gallery
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Browse real client work and find inspiration for your next appointment.
            </p>
            <a
              href={galleryLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-body text-sm rounded-full hover:bg-gold-dark transition-colors"
            >
              View Gallery
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;
