import { useState, useEffect } from 'react';
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
    id: 'acrylic-red-french-rhinestone-matching-1',
    src: '/acrylic-red-french-rhinestone-matching-set.jpg',
    title: 'Red French Tip Acrylic Nails & Matching Pedicure with Rhinestones | Denton, TX',
    description: 'Classic red French tip acrylic nails paired with a matching red French pedicure, featuring sparkling rhinestone accents on select nails for a touch of glamour. This cohesive hand-and-toe set delivers timeless elegance with a bold summer twist — perfect for clients seeking matching mani-pedi combos in Denton, TX. Crafted with precise shaping and long-lasting acrylic for durability and shine.',
    tags: ['Red', 'French Tips', 'Rhinestones', 'Pedicure', 'Matching Set', 'Acrylic', 'Classic', 'Summer', 'Denton TX'],
  },
  {
    id: 'acrylic-coral-floral-pedicure-1',
    src: '/acrylic-coral-floral-pedicure.jpg',
    title: 'Coral Acrylic Nails & Acrylic Pedicure with Floral Nail Art | Denton, TX',
    description: 'Bold and vibrant coral coffin acrylic nails paired with a matching acrylic pedicure finished in high-gloss gel polish. This custom set features hand-painted floral nail art accents on both hands and toes, delivering a cohesive, head-to-toe look. Designed with precise shaping, clean cuticle work, and long-lasting durability—perfect for clients seeking custom acrylic nails and pedicures in Denton, TX.',
    tags: ['Coral', 'Coffin Shape', 'Floral', 'Hand Painted', 'Pedicure', 'Matching Set', 'Gel Polish', 'Acrylic', 'Denton TX'],
  },
  {
    id: 'acrylic-rainbow-gold-foil-1',
    src: '/acrylic-rainbow-gold-foil.jpg',
    title: 'Rainbow Stiletto Acrylic Nails with Gold Foil | Denton TX',
    description: 'Vibrant stiletto acrylic nails featuring a nude base with diagonal rainbow color blocking in orange, purple, blue, green, yellow, and pink. Each colorful section is edged with luxury gold foil accents for a high-end finish. Custom nail art created at Athena\'s Beauty in Denton, TX — perfect for clients who love bold, artistic manicures with a touch of glamour.',
    tags: ['Stiletto', 'Rainbow', 'Gold Foil', 'Color Block', 'Bold', 'Artistic', 'Acrylic', 'Denton TX'],
  },
  {
    id: 'acrylic-almond-rhinestone-1',
    src: '/acrylic-almond-rhinestone.jpg',
    title: 'Almond Acrylic with Rhinestone Accents',
    description: 'Elegant almond-shaped acrylic nails with nude base and scattered rhinestone embellishments. Delicate crystal accents create a sophisticated, sparkling look perfect for any occasion at Athena\'s Beauty in Denton, TX.',
    tags: ['Almond Shape', 'Rhinestones', 'Nude', 'Elegant', 'Crystals', 'Acrylic'],
  },
  {
    id: 'acrylic-almond-candy-cane-1',
    src: '/acrylic-almond-candy-cane.jpg',
    title: 'Almond Candy Cane Acrylic Nails | Denton TX',
    description: 'Festive almond-shaped acrylic nails featuring hand-painted candy cane swirl design in classic red and white. Perfect holiday nail art created at Athena\'s Beauty in Denton, TX. Custom hand-drawn pattern on durable acrylic for a seasonal, eye-catching manicure.',
    tags: ['Almond Shape', 'Candy Cane', 'Holiday', 'Hand Drawn', 'Red', 'White', 'Festive'],
  },
  {
    id: 'acrylic-square-french-blue-1',
    src: '/acrylic-square-french-blue.jpg',
    title: 'Square French Acrylic Nails with Blue Tips | Denton TX',
    description: 'Classic square-shaped acrylic nails with elegant French tip design featuring crisp light blue tips on a natural nude base. Clean, timeless manicure crafted at Athena\'s Beauty in Denton, TX. Perfect for everyday wear or special occasions with a modern twist on the traditional French.',
    tags: ['Square Shape', 'French Tips', 'Blue', 'Classic', 'Elegant', 'Everyday', 'Acrylic'],
  },
  {
    id: 'acrylic-french-charms-1',
    src: '/acrylic-french-charms.jpg',
    title: 'Acrylic Custom French with Charms',
    description: 'Elegant acrylic French tips adorned with delicate 3D charms and embellishments. Custom nail art perfect for special occasions at Athena\'s Beauty in Denton, TX.',
    tags: ['French Tips', 'Charms', '3D Art', 'Custom', 'Elegant', 'Acrylic'],
  },
  {
    id: 'long-french-charms-1',
    src: '/long-acrylic-french-charms.jpg',
    title: 'Long Pink French with 3D Bows',
    description: 'Stunning long acrylic French tips with pink glitter accents, 3D bow charms, and rhinestone details. The perfect coquette manicure for spring 2026.',
    tags: ['French Tips', '3D Art', 'Charms', 'Long Nails', 'Coquette', 'Trending'],
  },
  {
    id: 'long-french-cherry-crystals',
    src: '/long-french-cherry-crystals.jpg',
    title: 'Long French Cherry Charms with Red Crystals',
    description: 'Luxury long acrylic French nails featuring classic white tips, vibrant red crystal embellishments, and 3D cherry charms. Trending coquette nail art perfect for summer in Denton, TX.',
    tags: ['French Tips', 'Crystals', 'Charms', 'Long Nails', 'Coquette', 'Red', 'Summer', 'Trending'],
  },
  {
    id: 'short-white-gold-chrome',
    src: '/short-white-gold-chrome.jpg',
    title: 'Short White Acrylic with Gold Chrome Accents',
    description: 'Elegant short acrylic nails in milky white with luxury gold chrome detailing and delicate gold studs. Minimalist nail art perfect for everyday wear in Denton, TX.',
    tags: ['Short Nails', 'Gold Chrome', 'Minimalist', 'White', 'Elegant', 'Everyday'],
  },
  {
    id: 'short-french-zebra',
    src: '/short-french-zebra.jpg',
    title: 'Short French Tips with Zebra Print',
    description: 'Playful short acrylic French nails featuring classic white tips with bold zebra print accents. Fun animal print nail art for trendy clients in Denton, TX.',
    tags: ['French Tips', 'Zebra Print', 'Animal Print', 'Short Nails', 'Trendy', 'Fun'],
  },
  {
    id: 'chrome-french-1',
    src: '/chrome-french-acrylic.jpg',
    title: 'Copper Chrome French Tips',
    description: 'Trending chrome French acrylic overlay with stunning copper metallic tips on natural pink base. Short square shape perfect for everyday wear.',
    tags: ['Chrome', 'French Tips', 'Trending', 'Acrylic Overlay', 'Short Nails'],
  },
  {
    id: 'clear-acrylic-marble-1',
    src: '/clear-acrylic-marble.jpg',
    title: 'Clear Acrylic Marble Nails | Denton TX Nail Salon',
    description: 'Stunning clear acrylic nails with elegant marble design, expertly crafted at Athena\'s Beauty in Denton, TX. Features translucent acrylic with beautiful marble veining for a sophisticated, modern look that lasts.',
    tags: ['Clear Acrylic', 'Marble', 'Elegant', 'Modern', 'Translucent', 'Denton TX'],
  },
  {
    id: 'acrylic-halloween-1',
    src: '/acrylic-halloween.jpg',
    title: 'Halloween Acrylic Nails | Denton TX Nail Salon',
    description: 'Spooky Halloween-themed acrylic nail design created at Athena\'s Beauty in Denton, TX. Features festive Halloween art on durable acrylic nails perfect for the season.',
    tags: ['Acrylic', 'Halloween', 'Seasonal', 'Festive', 'Denton TX'],
  },
  {
    id: 'acrylic-halloween-custom-1',
    src: '/acrylic-halloween-custom.jpg',
    title: 'Halloween Custom Acrylic Design | Denton TX',
    description: 'Custom Halloween-themed acrylic nail art created at Athena\'s Beauty in Denton, TX. Features unique spooky designs on long-lasting acrylic nails, perfect for Halloween celebrations.',
    tags: ['Acrylic', 'Halloween', 'Custom Design', 'Seasonal', 'Denton TX'],
  },
  {
    id: 'acrylic-halloween-custom-2',
    src: '/acrylic-halloween-custom-2.jpg',
    title: 'Halloween Custom Acrylic Design | Denton TX',
    description: 'Another stunning custom Halloween-themed acrylic nail design from Athena\'s Beauty in Denton, TX. Features intricate spooky art on durable acrylic nails, ideal for Halloween festivities.',
    tags: ['Acrylic', 'Halloween', 'Custom Design', 'Seasonal', 'Denton TX'],
  },
  {
    id: 'acrylic-custom-design-1',
    src: '/acrylic-custom-design.jpg',
    title: 'Custom Acrylic Nail Design | Denton TX Nail Artist',
    description: 'Beautiful custom acrylic nail design crafted at Athena\'s Beauty in Denton, TX. Features unique artistic details on durable acrylic nails for a stunning, long-lasting manicure.',
    tags: ['Acrylic', 'Custom Design', 'Nail Art', 'Denton TX'],
  },
  {
    id: 'acrylic-custom-design-2',
    src: '/acrylic-custom-design-2.jpg',
    title: 'Custom Acrylic Nail Design | Denton TX Nail Salon',
    description: 'Another stunning custom acrylic nail design from Athena\'s Beauty in Denton, TX. Features intricate artistic details on durable acrylic nails for a unique, long-lasting manicure.',
    tags: ['Acrylic', 'Custom Design', 'Nail Art', 'Denton TX'],
  },
  {
    id: 'acrylic-3d-flower-charm-1',
    src: '/acrylic-3d-flower-charm.jpg',
    title: '3D Acrylic Flower Charm Nails | Denton TX',
    description: 'Stunning acrylic nails with intricate 3D flower charms created at Athena\'s Beauty in Denton, TX. Features delicate hand-sculpted floral 3D art on durable acrylic nails for a beautiful, dimensional manicure.',
    tags: ['Acrylic', '3D Art', 'Flower', 'Charms', 'Floral', 'Denton TX'],
  },
  {
    id: 'acrylic-hand-drawn-bubble-1',
    src: '/acrylic-hand-drawn-bubble.jpg',
    title: 'Hand Drawn Bubble Acrylic Nails | Denton TX Nail Artist',
    description: 'Unique hand drawn bubble design acrylic nails crafted at Athena\'s Beauty in Denton, TX. Features artistic bubble patterns hand-painted on durable acrylic nails for a playful, creative manicure that lasts.',
    tags: ['Acrylic', 'Hand Drawn', 'Bubble Design', 'Artistic', 'Denton TX'],
  },
  {
    id: 'acrylic-christmas-green-poinsettia-1',
    src: '/acrylic-christmas-green-poinsettia.jpg',
    title: 'Christmas Green Acrylic with Poinsettia & Snowflakes',
    description: 'Festive almond-shaped acrylic nails featuring deep emerald green with hand-painted white snowflakes, silver glitter accents, and delicate red poinsettia designs on shimmering white base. Perfect holiday nail art for the season.',
    tags: ['Acrylic', 'Christmas', 'Holiday', 'Green', 'Snowflakes', 'Poinsettia', 'Glitter', 'Hand Drawn'],
  },
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
    title: 'Acrylic Ocean Custom Art with 3D',
    description: 'Intricate 3D seashell and ocean-inspired nail art on stiletto acrylics. Custom hand-made 3D elements.',
    tags: ['3D Art', 'Seashell', 'Stiletto', 'Custom', 'Ocean'],
  },
  {
    id: '3',
    src: '/work5.jpg',
    title: 'Acrylic with 3D Work & Chrome Design',
    description: 'Stunning acrylic set featuring 3D embellishments and chrome detailing for a bold, modern look',
    tags: ['3D Art', 'Chrome', 'Embellished', 'Modern'],
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
];

const AcrylicGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // SEO Meta Tags
  useEffect(() => {
    document.title = 'Acrylic Nail Art Gallery | Athena\'s Beauty | Denton, TX';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Browse our acrylic nail art gallery in Denton, TX. 3D designs, French tips, custom artwork & more. Find inspiration for your next nail appointment at Athena\'s Beauty.');
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://athenas-beauty.com/#acrylic-gallery');
    
    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Acrylic Nail Art Gallery | Athena\'s Beauty | Denton, TX');
    
    // Update Open Graph description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Browse stunning acrylic nail designs from our Denton studio. 3D art, French tips, custom designs & more.');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    return () => {
      // Reset to home page meta when leaving
      document.title = 'Athena\'s Beauty | Premium Nail Salon in Denton, TX | Builder Gel, Acrylics & Custom Nail Art';
      if (metaDescription) metaDescription.setAttribute('content', 'Premium nail salon in Denton, TX specializing in builder gel nails, acrylic full sets, Gel-X extensions, and custom nail art. Book your appointment today for luxury nail services near UNT.');
      if (canonical) canonical.setAttribute('href', 'https://athenas-beauty.com');
      if (ogTitle) ogTitle.setAttribute('content', 'Athena\'s Beauty | Premium Nail Salon in Denton, TX');
      if (ogDesc) ogDesc.setAttribute('content', 'Luxury nail artistry in Denton, TX. Specializing in builder gel, acrylics, Gel-X extensions & custom nail art. Book online via Booksy.');
    };
  }, []);

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
            onClick={() => window.location.hash = 'services'}
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
