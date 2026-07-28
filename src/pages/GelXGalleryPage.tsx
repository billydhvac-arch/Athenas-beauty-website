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

const gelXGalleryImages: GalleryImage[] = [
  {
    id: 'gelx-pepper-ann-character-art-1',
    src: '/gelx-pepper-ann-character-art.jpg',
    title: 'Gel-X Pepper Ann Cartoon Character Nail Art | Hand-Painted Custom Design Denton, TX',
    description: 'Showstopping long Gel-X extensions featuring hand-painted characters from the beloved animated series Pepper Ann. Each nail showcases a different cartoon character rendered in vibrant, detailed freehand nail art — from the iconic title character to her memorable friends. This custom Gel-X set transforms nostalgic pop culture into wearable art, perfect for clients seeking unique character-themed nail designs in Denton, TX. Crafted with precision Gel-X application for lightweight, durable wear and artistic hand-painting that brings your favorite cartoons to life.',
    tags: ['Gel-X', 'Character Art', 'Hand Painted', 'Cartoon Nails', 'Pop Culture', 'Pepper Ann', 'Long Nails', 'Custom Design', 'Denton TX'],
  },
  {
    id: '1',
    src: '/work8.jpg',
    title: 'Long Gel-X Custom Art with Hand Made 3D',
    description: 'Stunning long Gel-X extensions featuring intricate custom artwork with hand-crafted 3D elements for a bold, artistic statement',
    tags: ['Gel-X', '3D Art', 'Long Nails', 'Custom', 'Hand Made'],
  },
  {
    id: '2',
    src: '/gelx-tiger-amber.jpg',
    title: 'Gel-X Tiger Print with Amber Gemstones',
    description: 'Striking Gel-X extensions featuring bold tiger stripe patterns, rich amber crystal centerpieces with ornate silver frames, and delicate coral butterfly accents',
    tags: ['Gel-X', 'Tiger Print', 'Animal Print', '3D Art', 'Crystals', 'Butterfly'],
  },
  {
    id: '3',
    src: '/gelx-tiger-amber-detail.jpg',
    title: 'Gel-X Amber Crystal & Tiger Design Detail',
    description: 'Close-up of intricate Gel-X artistry showcasing amber gemstone detailing with silver embellishments on tiger-stripe base with butterfly accents',
    tags: ['Gel-X', 'Tiger Print', 'Crystals', '3D Art', 'Close-up'],
  },
  {
    id: '4',
    src: '/gelx-nude-gold-foil.jpg',
    title: 'Gel-X Nude with Gold Foil Accents',
    description: 'Elegant medium-length Gel-X extensions in soft nude blush with delicate gold foil leaf details and gold French tip accents',
    tags: ['Gel-X', 'Gold Foil', 'Nude', 'French Tips', 'Elegant'],
  },
  {
    id: '5',
    src: '/work3.jpg',
    title: 'Gel-X French Tips with Gold Outlining',
    description: 'Sophisticated medium-length Gel-X extensions featuring classic French tips with elegant gold outlining and delicate crystal embellishments',
    tags: ['Gel-X', 'French Tips', 'Gold Foil', 'Crystals', 'Elegant', 'Nude'],
  },
  {
    id: '6',
    src: '/gelx-stained-glass-cherry.jpg',
    title: 'Gel-X Stained Glass Cherry Blossom',
    description: 'Elegant Gel-X extensions featuring intricate stained glass style artwork with cherry blossoms, geometric gemstone accents, and sage green shimmer bases',
    tags: ['Gel-X', 'Stained Glass', 'Cherry Blossom', 'Hand Drawn', 'Geometric', 'Sage', 'Spring'],
  },
];

const GelXGalleryPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // SEO Meta Tags
  useEffect(() => {
    document.title = t('gallery.gelx.metaTitle');
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t('gallery.gelx.metaDesc'));
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/gallery/gelx');
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('gallery.gelx.metaTitle'));
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('gallery.gelx.metaDesc'));
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = t('gallery.homeTitle');
      if (metaDescription) metaDescription.setAttribute('content', t('gallery.homeDesc'));
      if (canonical) canonical.setAttribute('href', 'https://athenas-beauty.com');
      if (ogTitle) ogTitle.setAttribute('content', t('gallery.homeTitle'));
      if (ogDesc) ogDesc.setAttribute('content', t('gallery.homeDesc'));
    };
  }, [t]);

  // Image Structured Data for SEO
  useEffect(() => {
    const imageData = {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Gel-X Extensions Gallery | Athena\'s Beauty | Denton, TX',
      description: 'Browse our Gel-X extensions gallery in Denton, TX. Lightweight, natural-looking nail extensions with custom art.',
      url: 'https://athenas-beauty.com/gallery/gelx',
      inLanguage: 'en',
      about: {
        '@type': 'Thing',
        name: 'Gel-X Extensions in Denton, TX',
      },
      image: gelXGalleryImages.map((img) => ({
        '@type': 'ImageObject',
        contentUrl: `https://athenas-beauty.com${img.src}`,
        name: img.title,
        description: img.description,
        inLanguage: 'en',
        about: img.tags.map((tag) => ({ '@type': 'Thing', name: tag })),
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(imageData);
    script.id = 'gelx-gallery-schema';
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('gelx-gallery-schema');
      if (existing) existing.remove();
    };
  }, []);

  const allTags = Array.from(new Set(gelXGalleryImages.flatMap(img => img.tags)));
  
  const filteredImages = selectedTag 
    ? gelXGalleryImages.filter(img => img.tags.includes(selectedTag))
    : gelXGalleryImages;

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
            {t('gallery.gelx.title1')} <span className="text-gold">{t('gallery.gelx.title2')}</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            {t('gallery.gelx.subtitle')}
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
            {t('gallery.gelx.ctaHeadline1')} <span className="text-gold">{t('gallery.gelx.ctaHeadline2')}</span>
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            {t('gallery.gelx.ctaBody')}
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

export default GelXGalleryPage;
