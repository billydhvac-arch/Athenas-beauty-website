import { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  tags: string[];
}

// Cache-bust: v2 - 2 cat eye images only
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
];

const BuilderGelGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // SEO Meta Tags
  useEffect(() => {
    document.title = 'Builder Gel Nail Art Gallery | Athena\'s Beauty | Denton, TX';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'View our builder gel nail gallery in Denton, TX. Strong, lightweight enhancements with cat eye, shimmer & custom art. Perfect for healthy nail growth at Athena\'s Beauty.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/#builder-gel-gallery');
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Builder Gel Nail Art Gallery | Athena\'s Beauty | Denton, TX');
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Discover builder gel nail designs. Strong yet lightweight, perfect for nail art & healthy growth in Denton, TX.');
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = 'Athena\'s Beauty | Premium Nail Salon in Denton, TX | Builder Gel, Acrylics & Custom Nail Art';
      if (metaDescription) metaDescription.setAttribute('content', 'Award-winning nail salon in Denton, TX specializing in builder gel nails, acrylic full sets, Gel-X extensions, and custom nail art. Book your appointment today for luxury nail services near UNT.');
      if (canonical) canonical.setAttribute('href', 'https://athenas-beauty.com');
      if (ogTitle) ogTitle.setAttribute('content', 'Athena\'s Beauty | Premium Nail Salon in Denton, TX');
      if (ogDesc) ogDesc.setAttribute('content', 'Luxury nail artistry in Denton, TX. Specializing in builder gel, acrylics, Gel-X extensions & custom nail art. Book online via Booksy.');
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
          <button 
            onClick={() => window.location.hash = 'services'}
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Builder Gel <span className="text-gold">Art Gallery</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Discover the versatility of builder gel. Strong yet lightweight, perfect for 
            natural nail strengthening and stunning nail art creations.
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
              All
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
            Ready for <span className="text-gold">Builder Gel</span>?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Strong, lightweight, and perfect for growing healthy nails. Book your builder gel appointment today!
          </p>
          <a 
            href="#book" 
            className="inline-block bg-gold text-black px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuilderGelGalleryPage;
