import { useState, useMemo } from 'react';
import { Search, X, ArrowLeft, Star, Clock, Check } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string[];
  image: string;
  popular?: boolean;
}

const services: Service[] = [
  // ACRYLIC SERVICES
  {
    id: '1',
    name: 'Acrylic Full Set (One Color)',
    description: 'Classic acrylic extensions with your choice of one solid color. Includes shaping and finishing.',
    price: '$55.00+',
    duration: '3h',
    category: ['Acrylic', 'Full Set', 'Extensions'],
    image: '/work1.jpg',
    popular: true,
  },
  {
    id: '2',
    name: 'Acrylic Fill',
    description: 'Maintenance for existing acrylics. Fill in the growth area and refresh your look.',
    price: '$50.00+',
    duration: '2h 50min',
    category: ['Acrylic', 'Fill', 'Maintenance'],
    image: '/work4.jpg',
  },
  {
    id: '3',
    name: 'Acrylic/Dip/Gel with Art Work',
    description: 'Full set with custom nail art, designs, and creative details included.',
    price: '$65.00+',
    duration: '2h 30min',
    category: ['Acrylic', 'Dip', 'Art', 'Design'],
    image: '/work5.jpg',
    popular: true,
  },
  {
    id: '4',
    name: 'Acrylic Full Set for Toes',
    description: 'Beautiful acrylic extensions for toes. Perfect for sandal season.',
    price: '$55.00+',
    duration: '1h 55min',
    category: ['Acrylic', 'Toes', 'Extensions'],
    image: '/acrylic-toes.jpg',
  },
  {
    id: '5',
    name: 'Acrylic (Two) Toes Only',
    description: 'Acrylic enhancement for two toes only. Great for correcting or enhancing specific nails.',
    price: '$28.00+',
    duration: '1h',
    category: ['Acrylic', 'Toes', 'Repair'],
    image: '/work3.jpg',
  },
  {
    id: '6',
    name: 'Duck Nails',
    description: 'Trendy flared nail shape with a wide, dramatic tip. Statement-making style.',
    price: '$65.00+',
    duration: '2h 55min',
    category: ['Acrylic', 'Shape', 'Trendy'],
    image: '/work7.jpg',
  },
  // GEL-X SERVICES
  {
    id: '7',
    name: 'Gel-X Small',
    description: 'Soft gel extensions in small/short length. Gentle on natural nails, flexible and natural-looking.',
    price: '$65.00+',
    duration: '3h',
    category: ['Gel-X', 'Extensions', 'Soft Gel'],
    image: '/work1.jpg',
  },
  {
    id: '8',
    name: 'Gel-X Medium',
    description: 'Soft gel extensions in medium length. The perfect balance of style and practicality.',
    price: '$70.00+',
    duration: '3h',
    category: ['Gel-X', 'Extensions', 'Soft Gel'],
    image: '/work3.jpg',
    popular: true,
  },
  {
    id: '9',
    name: 'Gel-X Long',
    description: 'Soft gel extensions in long length. Dramatic, eye-catching nails.',
    price: '$75.00',
    duration: '3h',
    category: ['Gel-X', 'Extensions', 'Soft Gel', 'Long'],
    image: '/gelx-long.jpg',
  },
  // BUILDER GEL
  {
    id: '10',
    name: 'Builder Gel',
    description: 'Strong, lightweight nail enhancement that builds natural nail strength without bulk. Perfect for growing healthy nails with custom art options.',
    price: '$60.00+',
    duration: '3h',
    category: ['Builder Gel', 'Structure', 'Strengthening', 'Nail Art'],
    image: '/builder-gel-hero.jpg',
    popular: true,
  },
  // DIP POWDER
  {
    id: '11',
    name: 'Dipping Powder Nails (NexGen)',
    description: 'Odour-free, lightweight powder manicure that lasts 3-4 weeks. No UV light needed.',
    price: '$45.00+',
    duration: '2h',
    category: ['Dip', 'Powder', 'Natural'],
    image: '/work8.jpg',
  },
  // FRENCH & OMBRE
  {
    id: '12',
    name: 'French Nails or Ombré Nails',
    description: 'Classic French tips or beautiful pink-to-white ombré gradient. Timeless elegance.',
    price: '$55.00+',
    duration: '2h',
    category: ['French', 'Ombré', 'Classic', 'Design'],
    image: '/work4.jpg',
    popular: true,
  },
  // MANICURES
  {
    id: '13',
    name: 'Basic Manicure',
    description: 'Nail and cuticle trimming, shaping and buffing, polish of your choice. Add Gel polish for extra $20.',
    price: '$25.00',
    duration: '1h',
    category: ['Manicure', 'Basic', 'Natural'],
    image: '/work2.jpg',
  },
  {
    id: '14',
    name: 'Spa Manicure',
    description: 'Nail and cuticle trimming, shaping, exfoliating scrub, hydrating mask, hot towel, polish. Add Gel for $20.',
    price: '$40.00',
    duration: '1h 15min',
    category: ['Manicure', 'Spa', 'Relaxing'],
    image: '/work4.jpg',
  },
  // PEDICURES
  {
    id: '15',
    name: 'Citrus Pedicure',
    description: 'Nail trimming, shaping, cuticle cleaning, callus treatment, warm towel, moisturizing lotion. Add Gel for $20.',
    price: '$45.00',
    duration: '1h 45min',
    category: ['Pedicure', 'Spa', 'Feet'],
    image: '/work4.jpg',
  },
  {
    id: '16',
    name: 'Gel OHH Pedicure (Jelly Bath)',
    description: 'Jelly texture bath, nail care, callus treatment, paraffin wax, hydrating mask, warm towel. Add Gel for $20.',
    price: '$50.00',
    duration: '2h 55min',
    category: ['Pedicure', 'Gel', 'Luxury'],
    image: '/work6.jpg',
  },
  {
    id: '17',
    name: 'Volcano Pedicure',
    description: 'Bubbling & fizzing bath, exfoliating scrub, collagen mask, hot stone massage, collagen socks. Add Gel for $20.',
    price: '$70.00',
    duration: '3h',
    category: ['Pedicure', 'Luxury', 'Spa'],
    image: '/work4.jpg',
    popular: true,
  },
  // POLISH & REMOVAL
  {
    id: '18',
    name: 'Gel Polish Only',
    description: 'Gel polish application on natural nails. Long-lasting shine without extensions.',
    price: '$30.00+',
    duration: '45min',
    category: ['Gel', 'Polish', 'Natural'],
    image: '/work1.jpg',
  },
  {
    id: '19',
    name: 'Nail Polish Change',
    description: 'Quick polish change on natural nails. Perfect for a fresh color between full services.',
    price: '$13.00',
    duration: '45min',
    category: ['Polish', 'Quick', 'Natural'],
    image: '/work3.jpg',
  },
  // REPAIR
  {
    id: '20',
    name: 'Fixing of a Nail',
    description: 'Repair a broken or damaged nail. Quick fix to keep your set looking perfect.',
    price: '$12.00+',
    duration: '45min',
    category: ['Repair', 'Fix', 'Quick'],
    image: '/work6.jpg',
  },
  {
    id: '21',
    name: 'Acrylic/Dip/Gel Removal',
    description: 'Safe removal of existing product without damaging natural nails.',
    price: '$12.00',
    duration: '45min',
    category: ['Removal', 'Prep'],
    image: '/work3.jpg',
  },
];

const categories = ['All', 'Acrylic', 'Gel-X', 'Builder Gel', 'Dip', 'Manicure', 'Pedicure', 'Repair'];

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch = 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        service.category.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const openBooksy = () => {
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  const goBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-off-white pt-28 pb-16">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-black hover:text-gold transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-body text-sm">Back to Home</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold headline-lg text-black uppercase mb-4">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="font-body body-text text-text-secondary max-w-2xl mx-auto">
            Browse our complete menu of nail services. Find your perfect look and book your appointment today.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-full bg-white border border-black/10 font-body text-black focus:outline-none focus:border-gold transition-colors shadow-card"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-gold transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-body text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-black text-gold'
                  : 'bg-white text-black hover:bg-gold/10 border border-black/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="font-body text-sm text-text-secondary">
            Showing <span className="text-gold font-medium">{filteredServices.length}</span> service{filteredServices.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl shadow-card card-border overflow-hidden group card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.popular && (
                  <div className="absolute top-3 left-3 bg-gold text-black text-xs font-body font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} className="fill-black" />
                    Popular
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-black mb-2">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.category.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body text-text-secondary bg-off-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold text-xl text-gold">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1 text-text-secondary">
                    <Clock size={14} />
                    <span className="font-body text-xs">{service.duration}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={openBooksy}
                  className="w-full bg-black text-gold font-body font-medium text-sm py-3 rounded-full btn-hover flex items-center justify-center gap-2"
                >
                  <Check size={16} />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-text-secondary mb-4">
              No services found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-gold font-body text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-black rounded-3xl p-8 lg:p-12">
          <h3 className="font-heading font-bold text-2xl text-white mb-4">
            Not sure which service is right for you?
          </h3>
          <p className="font-body text-white/70 mb-6">
            Message us for a free consultation. We'll help you choose the perfect service for your nails.
          </p>
          <a
            href="tel:9404351332"
            className="inline-flex items-center gap-2 bg-gold text-black font-body font-medium px-8 py-4 rounded-full btn-hover"
          >
            Call (940) 435-1332
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
