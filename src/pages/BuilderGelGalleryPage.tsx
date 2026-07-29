import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  tags: string[];
}

// Cache-bust: v3 - added citrus builder gel
const builderGelGalleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/builder-gel-hero.jpg',
    title: 'Blue Cat Eye Design',
    description: 'Stunning blue cat eye builder gel with silver accents and chrome details',
    tags: ['Cat Eye', 'Blue', 'Chrome', 'Trendy'],
  },
  {
    id: '2',
    src: '/work9.jpg',
    title: 'Builder Gel Cat Eye Design',
    description: 'Beautiful cat eye effect on builder gel base with mesmerizing magnetic shimmer',
    tags: ['Cat Eye', 'Shimmer', 'Builder Gel', 'Elegant'],
  },
  {
    id: '3',
    src: '/gelx-citrus-orange-slices.jpg',
    title: 'Builder Gel Citrus Orange Slice Art',
    description: 'Vibrant summer builder gel nails featuring hand-painted orange citrus slices, peachy pink marble swirls, and delicate white dot accents on a coral gradient base',
    tags: ['Builder Gel', 'Citrus', 'Orange', 'Fruit Nails', 'Summer', 'Hand Painted', 'Marble', 'Coral'],
  },
];

const BuilderGelGalleryPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // SEO Meta Tags
  useEffect(() => {
    document.title = t('gallery.builderGel.metaTitle');
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t('gallery.builderGel.metaDesc'));
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.athenas-beauty.com/gallery/builder-gel');
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('gallery.builderGel.metaTitle'));
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('gallery.builderGel.metaDesc'));
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = t('gallery.homeTitle');
      if (metaDescription) metaDescription.setAttribute('content', t('gallery.homeDesc'));
      if (canonical) canonical.setAttribute('href', 'https://www.athenas-beauty.com');
      if (ogTitle) ogTitle.setAttribute('content', t('gallery.homeTitle'));
      if (ogDesc) ogDesc.setAttribute('content', t('gallery.homeDesc'));
    };
  }, [t]);

  // Image Structured Data for SEO
  useEffect(() => {
    const imageData = {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Builder Gel Nail Gallery | Athena\'s Beauty | Denton, TX',
      description: 'Browse our builder gel nail gallery in Denton, TX. Natural nail strengthening with custom designs.',
      url: 'https://www.athenas-beauty.com/gallery/builder-gel',
      inLanguage: 'en',
      about: {
        '@type': 'Thing',
        name: 'Builder Gel Nails in Denton, TX',
      },
      image: builderGelGalleryImages.map((img) => ({
        '@type': 'ImageObject',
        contentUrl: `https://www.athenas-beauty.com${img.src}`,
        name: img.title,
        description: img.description,
        inLanguage: 'en',
        about: img.tags.map((tag) => ({ '@type': 'Thing', name: tag })),
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(imageData);
    script.id = 'builder-gel-gallery-schema';
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('builder-gel-gallery-schema');
      if (existing) existing.remove();
    };
  }, []);

  const allTags = Array.from(new Set(builderGelGalleryImages.flatMap(img => img.tags)));
  
  const filteredImages = selectedTag 
    ? builderGelGalleryImages.filter(img => img.tags.includes(selectedTag))
    : builderGelGalleryImages;

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <div className="bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            {t('gallery.backToServices')}
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            {t('gallery.builderGel.title1')} <span className="text-gold">{t('gallery.builderGel.title2')}</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            {t('gallery.builderGel.subtitle')}
          </p>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="font-body text-sm text-text-secondary">Filter by style:</span>
            <select
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 font-body text-sm text-black focus:outline-none focus:border-gold transition-colors cursor-pointer min-w-[180px]"
            >
              <option value="">{t('gallery.all')}</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-sm text-text-secondary hover:text-gold transition-colors"
              >
                {t('gallery.clear')}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group bg-white rounded-2xl shadow-card overflow-hidden cursor-pointer card-hover"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-black mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {image.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-gold/20 text-gold-dark px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
          >
            <ChevronRight size={40} />
          </button>

          <div 
            className="max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="font-serif text-2xl mb-2">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {selectedImage.tags.map(tag => (
                  <span key={tag} className="text-sm bg-gold/30 text-gold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            {t('gallery.builderGel.ctaHeadline1')} <span className="text-gold">{t('gallery.builderGel.ctaHeadline2')}</span>
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            {t('gallery.builderGel.ctaBody')}
          </p>
          <a 
            href="#book" 
            className="inline-block bg-gold text-black px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
          >
            {t('gallery.bookAppointment')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuilderGelGalleryPage;
