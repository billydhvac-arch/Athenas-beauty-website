import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  tags: string[];
}

const acrylicGalleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/work1.jpg',
    title: 'Classic Pink Acrylic Set',
    description: 'Elegant pink acrylic full set with perfect shaping',
    tags: ['Full Set', 'Pink', 'Classic'],
  },
  {
    id: '2',
    src: '/nail-artwork.jpg',
    title: '3D Seashell Art Design',
    description: 'Intricate 3D seashell and ocean-inspired nail art on stiletto acrylics',
    tags: ['3D Art', 'Seashell', 'Stiletto', 'Custom'],
  },
  {
    id: '3',
    src: '/work4.jpg',
    title: 'French Tip Acrylic Fill',
    description: 'Classic French tip maintenance with crisp white tips',
    tags: ['Fill', 'French', 'White Tips'],
  },
  {
    id: '4',
    src: '/duck-nails.jpg',
    title: 'Black Tip Duck Nails',
    description: 'Trendy flared duck nail shape with dramatic black French tips',
    tags: ['Duck Nails', 'French', 'Black', 'Trendy'],
  },
  {
    id: '5',
    src: '/work7.jpg',
    title: 'Acrylic Art Design',
    description: 'Custom acrylic artwork with detailed design elements',
    tags: ['Art', 'Custom Design'],
  },
  // Placeholder images for future uploads
  {
    id: '6',
    src: '/work2.jpg',
    title: 'Acrylic Gallery Sample 6',
    description: 'More acrylic art coming soon - upload your work!',
    tags: ['Coming Soon'],
  },
  {
    id: '7',
    src: '/work3.jpg',
    title: 'Acrylic Gallery Sample 7',
    description: 'More acrylic art coming soon - upload your work!',
    tags: ['Coming Soon'],
  },
  {
    id: '8',
    src: '/work5.jpg',
    title: 'Acrylic Gallery Sample 8',
    description: 'More acrylic art coming soon - upload your work!',
    tags: ['Coming Soon'],
  },
];

const AcrylicGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(acrylicGalleryImages.flatMap(img => img.tags)));
  
  const filteredImages = selectedTag 
    ? acrylicGalleryImages.filter(img => img.tags.includes(selectedTag))
    : acrylicGalleryImages;

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
            onClick={() => window.location.hash = 'services-page'}
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Acrylic <span className="text-gold">Art Gallery</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Browse our collection of stunning acrylic nail designs. Find inspiration for your next appointment 
            or see the quality of work you can expect at Athena's Beauty.
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
            Ready for Your <span className="text-gold">Acrylic Set</span>?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Inspired by what you see? Book your appointment today and let's create something beautiful together.
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

export default AcrylicGalleryPage;
