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

const dipGalleryImages: GalleryImage[] = [
  {
    id: 'dip-sour-apple-glitter-1',
    src: '/dip-sour-apple-glitter.jpg',
    title: 'Sour Apple Glitter Dip Powder Nails | Denton TX',
    description: 'Playful green glitter dip powder nails with solid green accent nail, inspired by sour apple candy. Fun, vibrant design created at Athena\'s Beauty in Denton, TX. Features sparkling glitter dip with a bold accent for a unique, eye-catching manicure that lasts 3-4 weeks.',
    tags: ['Dip Powder', 'Glitter', 'Green', 'Fun', 'Accent Nail', 'Denton TX'],
  },
  {
    id: 'dip-burgundy-glitter-1',
    src: '/dip-burgundy-glitter.jpg',
    title: 'Burgundy Glitter Dip Powder Nails | Denton TX',
    description: 'Elegant burgundy glitter dip powder nails with rich shimmer finish, crafted at Athena\'s Beauty in Denton, TX. Stunning deep red glitter design perfect for fall and winter seasons. Long-lasting dip powder formula maintains its sparkle for 3-4 weeks without chipping.',
    tags: ['Dip Powder', 'Glitter', 'Burgundy', 'Elegant', 'Fall', 'Winter', 'Denton TX'],
  },
  {
    id: 'dip-mommy-daughter-brown-1',
    src: '/dip-mommy-daughter-brown.jpg',
    title: 'Mommy & Daughter Matching Brown Dip Nails | Denton TX',
    description: 'Sweet mommy-daughter matching manicure featuring rich chocolate brown dip powder nails at Athena\'s Beauty in Denton, TX. Two adult almond-shaped hands with matching tiny toddler nails — perfect for a special bonding experience.',
    tags: ['Dip Powder', 'Mommy Daughter', 'Brown', 'Family', 'Matching Nails', 'Almond Shape', 'Denton TX'],
  },
  {
    id: 'dip-christmas-glitter-1',
    src: '/dip-christmas-glitter.jpg',
    title: 'Christmas Glitter Dip Powder Nails | Denton TX',
    description: 'Festive holiday dip powder nails featuring alternating red and green glitter on each nail, beautifully captured in front of a sparkling Christmas tree at Athena\'s Beauty in Denton, TX. Perfect Christmas manicure with long-lasting dip powder formula that shines throughout the holiday season.',
    tags: ['Dip Powder', 'Christmas', 'Holiday', 'Glitter', 'Red', 'Green', 'Festive', 'Winter', 'Denton TX'],
  },
  {
    id: 'dip-abstract-colorful-1',
    src: '/dip-abstract-colorful.jpg',
    title: 'Abstract Colorful Dip Powder Nails | Denton TX',
    description: 'Artistic abstract dip powder nails featuring vibrant splashes of red, blue, and yellow on a clean white base with elegant gold accents. Modern, creative nail art crafted at Athena\'s Beauty in Denton, TX. Each nail is a unique mini canvas — perfect for clients who want a bold, gallery-worthy manicure that lasts 3-4 weeks.',
    tags: ['Dip Powder', 'Abstract', 'Colorful', 'Artistic', 'Gold Accents', 'Modern', 'Creative', 'Denton TX'],
  },
  {
    id: '1',
    src: '/black-galaxy-dip.jpg',
    title: 'Black Galaxy Dip Powder Nails | Denton TX',
    description: 'Stunning black galaxy dip powder nails created at Athena\'s Beauty in Denton, TX. Features cosmic shimmer and depth with long-lasting dip powder formula that lasts 3-4 weeks without chipping.',
    tags: ['Dip Powder', 'Galaxy', 'Black', 'Shimmer', 'Denton TX'],
  },
  {
    id: '2',
    src: '/dip-nails-2.jpg',
    title: 'Custom Dip Powder Nail Art | Denton Nail Salon',
    description: 'Beautiful custom dip powder manicure by Athena\'s Beauty, the premier nail salon in Denton, TX. Odor-free dip powder application with unique custom design that maintains its shine for weeks.',
    tags: ['Dip Powder', 'Custom Design', 'Nail Art', 'Denton TX'],
  },
  {
    id: '3',
    src: '/dip-french-charms.jpg',
    title: 'French Dip Nails with Charms | Denton TX Nail Artist',
    description: 'Elegant French tip dip powder nails accented with delicate charms, crafted by Athena\'s Beauty in Denton, Texas. Classic French manicure meets modern dip powder technology for a durable, chip-free finish that lasts 3-4 weeks.',
    tags: ['Dip Powder', 'French Tips', 'Charms', 'French Manicure', 'Denton TX'],
  },
  {
    id: '4',
    src: '/dip-multicolor-shirt-scare.jpg',
    title: 'Multicolor Dip Powder Nails | Denton TX Nail Salon',
    description: 'Vibrant multicolor dip powder nails featuring shirt scare pattern, expertly applied at Athena\'s Beauty in Denton, TX. Bold dip powder design with multiple colors that stays vibrant for 3-4 weeks with no UV light needed.',
    tags: ['Dip Powder', 'Multicolor', 'Colorful', 'Pattern', 'Denton TX'],
  },
  {
    id: '5',
    src: '/dip-filter-design.jpg',
    title: 'Filter Dip Powder Nails | Denton TX Nail Salon',
    description: 'Trendy filter-style dip powder nails created at Athena\'s Beauty in Denton, TX. Features a unique filtered color effect with smooth dip powder application for a flawless, long-lasting manicure that stays chip-free for 3-4 weeks.',
    tags: ['Dip Powder', 'Filter', 'Trendy', 'Color Effect', 'Denton TX'],
  },
  {
    id: '6',
    src: '/dip-short-gold-foil.jpg',
    title: 'Short Dip Powder Nails with Gold Foil | Denton TX',
    description: 'Elegant short dip powder nails with luxurious gold foil accents, created at Athena\'s Beauty in Denton, TX. Features a sophisticated gold foil design on durable dip powder for a chic, long-lasting manicure perfect for everyday wear.',
    tags: ['Dip Powder', 'Short Nails', 'Gold Foil', 'Elegant', 'Denton TX'],
  },
];

const DipGalleryPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // SEO Meta Tags
  useEffect(() => {
    document.title = t('gallery.dip.metaTitle');
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t('gallery.dip.metaDesc'));
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/gallery/dip');
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('gallery.dip.metaTitle'));
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('gallery.dip.metaDesc'));
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = t('gallery.homeTitle');
      if (metaDescription) metaDescription.setAttribute('content', t('gallery.homeDesc'));
      if (canonical) canonical.setAttribute('href', 'https://athenas-beauty.com');
      if (ogTitle) ogTitle.setAttribute('content', t('gallery.homeTitle'));
      if (ogDesc) ogDesc.setAttribute('content', t('gallery.homeDesc'));
    };
  }, [t]);

  const allTags = Array.from(new Set(dipGalleryImages.flatMap(img => img.tags)));
  
  const filteredImages = selectedTag 
    ? dipGalleryImages.filter(img => img.tags.includes(selectedTag))
    : dipGalleryImages;

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
            {t('gallery.dip.title1')} <span className="text-gold">{t('gallery.dip.title2')}</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            {t('gallery.dip.subtitle')}
          </p>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === null 
                  ? 'bg-gold text-black' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('gallery.all')}
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag 
                    ? 'bg-gold text-black' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
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
        
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">{t('gallery.noImages')}</p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-gold hover:underline"
            >
              {t('gallery.showAll')}
            </button>
          </div>
        )}
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
            {t('gallery.dip.ctaHeadline1')} <span className="text-gold">{t('gallery.dip.ctaHeadline2')}</span>
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            {t('gallery.dip.ctaBody')}
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

export default DipGalleryPage;
