import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  tags: string[];
}

interface SpanishGalleryPageProps {
  title: string;
  subtitle: string;
  images: GalleryImage[];
  serviceType: string;
  backLink: string;
}

const SpanishGalleryPage = ({ title, subtitle, images, serviceType, backLink }: SpanishGalleryPageProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // SEO Meta Tags
  useEffect(() => {
    document.title = `${title} | Galería de Uñas en Denton, TX | Athena's Beauty`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `Galería de ${serviceType} en Denton, TX. Mira nuestros diseños de uñas en Athena's Beauty. Inspírate para tu próxima cita.`);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://athenas-beauty.com${backLink}`);
    
    window.scrollTo(0, 0);
    
    return () => {
      document.title = 'Salón de Uñas en Denton, TX | Athena\'s Beauty';
    };
  }, [title, serviceType, backLink]);

  const allTags = Array.from(new Set(images.flatMap(img => img.tags)));
  
  const filteredImages = selectedTag 
    ? images.filter(img => img.tags.includes(selectedTag))
    : images;

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
          <Link to={backLink} className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-4">
            <ArrowLeft size={20} />
            Volver a Servicios
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Galería de <span className="text-gold">{title}</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            {subtitle}
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
                selectedTag === null ? 'bg-gold text-black' : 'bg-gray-100 text-gray-700 hover:bg-gold/20'
              }`}
            >
              Todas
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag ? 'bg-gold text-black' : 'bg-gray-100 text-gray-700 hover:bg-gold/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-heading font-bold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm mt-1 line-clamp-2">{image.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white hover:text-gold transition-colors">
            <X size={32} />
          </button>
          <button onClick={handlePrevImage} className="absolute left-4 text-white hover:text-gold transition-colors">
            <ChevronLeft size={40} />
          </button>
          <button onClick={handleNextImage} className="absolute right-4 text-white hover:text-gold transition-colors">
            <ChevronRight size={40} />
          </button>
          <div className="max-w-4xl max-h-full">
            <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[80vh] w-auto mx-auto rounded-lg" />
            <div className="text-white mt-4 text-center">
              <h3 className="font-heading font-bold text-xl">{selectedImage.title}</h3>
              <p className="text-white/70 mt-2">{selectedImage.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {selectedImage.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpanishGalleryPage;
