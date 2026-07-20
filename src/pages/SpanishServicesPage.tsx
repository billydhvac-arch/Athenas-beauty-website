import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  galleryLink?: string;
}

const services: Service[] = [
  {
    id: '1', name: 'Acrílico Full Set', description: 'Extensiones de acrílico con diseño personalizado',
    price: '$55.00+', duration: '3h', category: ['Acrílico', 'Extensiones'],
    image: '/work1.jpg', popular: true,
  },
  {
    id: '2', name: 'Acrílico Fill', description: 'Relleno y mantenimiento de uñas acrílicas',
    price: '$50.00+', duration: '2h 50min', category: ['Acrílico', 'Mantenimiento'],
    image: '/work4.jpg',
  },
  {
    id: '3', name: 'Arte en Acrílico', description: 'Diseños artísticos personalizados en acrílico',
    price: '$65.00+', duration: '2h 30min', category: ['Acrílico', 'Arte', 'Diseño'],
    image: '/nail-artwork.jpg', popular: true, galleryLink: '/es/galeria/acrilico',
  },
  {
    id: '4', name: 'Gel-X Mediano', description: 'Extensiones ligeras de gel suave, look natural',
    price: '$70.00+', duration: '3h', category: ['Gel-X', 'Extensiones'],
    image: '/work1.jpg', popular: true,
  },
  {
    id: '5', name: 'Builder Gel', description: 'Fortalecimiento natural con acabado elegante',
    price: '$60.00+', duration: '2h 30min', category: ['Builder Gel', 'Fortalecimiento'],
    image: '/builder-gel-hero.jpg', popular: true, galleryLink: '/es/galeria/builder-gel',
  },
  {
    id: '6', name: 'Dip Powder', description: 'Uñas duraderas sin olor, fórmula de inmersión',
    price: '$55.00+', duration: '2h', category: ['Dip Powder', 'Sin Olor'],
    image: '/dip-nails-2.jpg', galleryLink: '/es/galeria/dip',
  },
  {
    id: '7', name: 'Manicura Spa', description: 'Manicura relajante con tratamiento de spa',
    price: '$35.00+', duration: '1h 30min', category: ['Manicura', 'Spa'],
    image: '/work4.jpg',
  },
  {
    id: '8', name: 'Pedicura Spa', description: 'Pedicura completa con masaje y tratamiento',
    price: '$45.00+', duration: '1h 45min', category: ['Pedicura', 'Spa'],
    image: '/pedicure.jpg',
  },
  {
    id: '9', name: 'Acrílico para Pies', description: 'Extensiones acrílicas para uñas de los pies',
    price: '$55.00+', duration: '1h 55min', category: ['Acrílico', 'Pies'],
    image: '/acrylic-toes.jpg',
  },
  {
    id: '10', name: 'Diseño de Uñas 3D', description: 'Esculturas y arte tridimensional en uñas',
    price: '$75.00+', duration: '3h+', category: ['3D', 'Arte', 'Diseño'],
    image: '/nail-artwork.jpg',
  },
];

const categories = ['Todos', 'Acrílico', 'Gel-X', 'Builder Gel', 'Dip Powder', 'Manicura', 'Pedicura'];

const SpanishServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch = 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'Todos' || 
        service.category.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const openBooksy = () => {
    import('../utils/pixelTracking').then(({ trackBookingClick }) => {
      trackBookingClick();
    });
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-off-white pt-28 pb-16">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/es/" className="flex items-center gap-2 text-black hover:text-gold transition-colors">
            <ArrowLeft size={20} />
            <span className="font-body text-sm">Volver al Inicio</span>
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold headline-lg text-black uppercase mb-4">
            Nuestros <span className="text-gold">Servicios</span>
          </h1>
          <p className="font-body body-text text-text-secondary max-w-2xl mx-auto">
            Descubre nuestra gama completa de servicios de uñas premium en Denton, TX. 
            Desde acrílico hasta Gel-X, tenemos el servicio perfecto para ti.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input
              type="text"
              placeholder="Buscar servicios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-full bg-white border border-black/10 font-body text-black focus:outline-none focus:border-gold transition-colors shadow-card"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-gold">
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
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

        {/* Results */}
        <div className="mb-6">
          <p className="font-body text-sm text-text-secondary">
            Mostrando <span className="text-gold font-medium">{filteredServices.length}</span> servicios
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl shadow-card card-border overflow-hidden group card-hover">
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {service.popular && (
                  <div className="absolute top-3 left-3 bg-gold text-black text-xs font-body font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} className="fill-black" />
                    Popular
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-black mb-2">{service.name}</h3>
                <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2">{service.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.category.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs font-body text-text-secondary bg-off-white px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold text-xl text-gold">{service.price}</span>
                  <div className="flex items-center gap-1 text-text-secondary">
                    <Clock size={14} />
                    <span className="font-body text-xs">{service.duration}</span>
                  </div>
                </div>
                {service.galleryLink && (
                  <Link to={service.galleryLink} className="w-full mb-2 bg-gold/20 text-gold-dark font-body font-medium text-sm py-2 rounded-full hover:bg-gold hover:text-black transition-colors flex items-center justify-center gap-2">
                    Ver Galería
                  </Link>
                )}
                <button onClick={openBooksy} className="w-full bg-black text-gold font-body font-medium text-sm py-3 rounded-full btn-hover flex items-center justify-center gap-2">
                  <Check size={16} />
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpanishServicesPage;
