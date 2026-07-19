import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowLeft, Star, Clock, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Service {
  id: string;
  nameKey: string;
  descKey: string;
  price: string;
  duration: string;
  category: string[];
  image: string;
  popular?: boolean;
  galleryLink?: string;
}

const ServicesPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services: Service[] = [
    {
      id: '1', nameKey: 'acrylic_full_set', descKey: 'acrylic_full_set',
      price: '$55.00+', duration: '3h', category: ['Acrylic', 'Full Set', 'Extensions'],
      image: '/work1.jpg', popular: true,
    },
    {
      id: '2', nameKey: 'acrylic_fill', descKey: 'acrylic_fill',
      price: '$50.00+', duration: '2h 50min', category: ['Acrylic', 'Fill', 'Maintenance'],
      image: '/work4.jpg',
    },
    {
      id: '3', nameKey: 'acrylic_art', descKey: 'acrylic_art',
      price: '$65.00+', duration: '2h 30min', category: ['Acrylic', 'Dip', 'Art', 'Design'],
      image: '/nail-artwork.jpg', popular: true, galleryLink: '/gallery/acrylic',
    },
    {
      id: '4', nameKey: 'acrylic_toes', descKey: 'acrylic_toes',
      price: '$55.00+', duration: '1h 55min', category: ['Acrylic', 'Toes', 'Extensions'],
      image: '/acrylic-toes.jpg',
    },
    {
      id: '5', nameKey: 'acrylic_two_toes', descKey: 'acrylic_two_toes',
      price: '$28.00+', duration: '1h', category: ['Acrylic', 'Toes', 'Repair'],
      image: '/acrylic-toes.jpg',
    },
    {
      id: '6', nameKey: 'duck_nails', descKey: 'duck_nails',
      price: '$65.00+', duration: '2h 55min', category: ['Acrylic', 'Shape', 'Trendy'],
      image: '/duck-nails.jpg',
    },
    {
      id: '7', nameKey: 'gelx_small', descKey: 'gelx_small',
      price: '$65.00+', duration: '3h', category: ['Gel-X', 'Extensions', 'Soft Gel'],
      image: '/work1.jpg',
    },
    {
      id: '8', nameKey: 'gelx_medium', descKey: 'gelx_medium',
      price: '$70.00+', duration: '3h', category: ['Gel-X', 'Extensions', 'Soft Gel'],
      image: '/work3.jpg', popular: true,
    },
    {
      id: '9', nameKey: 'gelx_long', descKey: 'gelx_long',
      price: '$75.00', duration: '3h', category: ['Gel-X', 'Extensions', 'Soft Gel', 'Long'],
      image: '/gelx-long.jpg',
    },
    {
      id: '10', nameKey: 'builder_gel', descKey: 'builder_gel',
      price: '$60.00+', duration: '3h', category: ['Builder Gel', 'Structure', 'Strengthening', 'Nail Art'],
      image: '/builder-gel-hero.jpg', popular: true, galleryLink: '#builder-gel-gallery',
    },
    {
      id: '11', nameKey: 'dip_powder', descKey: 'dip_powder',
      price: '$45.00+', duration: '2h', category: ['Dip', 'Powder', 'Natural'],
      image: '/work8.jpg', galleryLink: '#dip-gallery',
    },
    {
      id: '12', nameKey: 'french_ombre', descKey: 'french_ombre',
      price: '$55.00+', duration: '2h', category: ['French', 'Ombré', 'Classic', 'Design'],
      image: '/work4.jpg', popular: true,
    },
    {
      id: '13', nameKey: 'basic_mani', descKey: 'basic_mani',
      price: '$25.00', duration: '1h', category: ['Manicure', 'Basic', 'Natural'],
      image: '/work2.jpg',
    },
    {
      id: '14', nameKey: 'spa_mani', descKey: 'spa_mani',
      price: '$40.00', duration: '1h 15min', category: ['Manicure', 'Spa', 'Relaxing'],
      image: '/work4.jpg',
    },
    {
      id: '15', nameKey: 'citrus_pedi', descKey: 'citrus_pedi',
      price: '$45.00', duration: '1h 45min', category: ['Pedicure', 'Spa', 'Feet'],
      image: '/work4.jpg',
    },
    {
      id: '16', nameKey: 'gel_pedi', descKey: 'gel_pedi',
      price: '$50.00', duration: '2h 55min', category: ['Pedicure', 'Gel', 'Luxury'],
      image: '/work6.jpg',
    },
    {
      id: '17', nameKey: 'volcano_pedi', descKey: 'volcano_pedi',
      price: '$70.00', duration: '3h', category: ['Pedicure', 'Luxury', 'Spa'],
      image: '/work4.jpg', popular: true,
    },
    {
      id: '18', nameKey: 'gel_polish', descKey: 'gel_polish',
      price: '$30.00+', duration: '45min', category: ['Gel', 'Polish', 'Natural'],
      image: '/work1.jpg',
    },
    {
      id: '19', nameKey: 'polish_change', descKey: 'polish_change',
      price: '$13.00', duration: '45min', category: ['Polish', 'Quick', 'Natural'],
      image: '/polish-change.jpg',
    },
    {
      id: '20', nameKey: 'fix_nail', descKey: 'fix_nail',
      price: '$12.00+', duration: '45min', category: ['Repair', 'Fix', 'Quick'],
      image: '/work6.jpg',
    },
    {
      id: '21', nameKey: 'removal', descKey: 'removal',
      price: '$12.00', duration: '45min', category: ['Removal', 'Prep'],
      image: '/removal.jpg',
    },
  ];

  const categories = ['All', 'Acrylic', 'Gel-X', 'Builder Gel', 'Dip', 'Manicure', 'Pedicure', 'Repair'];

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const name = t(`servicesPage.serviceNames.${service.nameKey}`);
      const desc = t(`servicesPage.serviceDescriptions.${service.descKey}`);
      const matchesSearch = 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        service.category.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, t]);

  const openBooksy = () => {
    window.open('https://nailsbyatenad.booksy.com', '_blank');
  };

  const goBack = () => {
    window.location.href = '/';
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
            <span className="font-body text-sm">{t('servicesPage.back')}</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold headline-lg text-black uppercase mb-4">
            {t('servicesPage.headline')} <span className="text-gold">{t('servicesPage.headlineAccent')}</span>
          </h1>
          <p className="font-body body-text text-text-secondary max-w-2xl mx-auto">
            {t('servicesPage.subheadline')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input
              type="text"
              placeholder={t('servicesPage.searchPlaceholder')}
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
              {t(`servicesPage.categories.${category.toLowerCase().replace(' ', '')}`) || category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="font-body text-sm text-text-secondary">
            {t('servicesPage.showing')} <span className="text-gold font-medium">{filteredServices.length}</span> {filteredServices.length !== 1 ? t('servicesPage.services') : t('servicesPage.service')}
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
                  alt={t(`servicesPage.serviceNames.${service.nameKey}`)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {service.popular && (
                  <div className="absolute top-3 left-3 bg-gold text-black text-xs font-body font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} className="fill-black" />
                    {t('servicesPage.popular')}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-black mb-2">
                  {t(`servicesPage.serviceNames.${service.nameKey}`)}
                </h3>
                <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2">
                  {t(`servicesPage.serviceDescriptions.${service.descKey}`)}
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
                {service.galleryLink && (
                  <Link
                    to={service.galleryLink}
                    className="w-full mb-2 bg-gold/20 text-gold-dark font-body font-medium text-sm py-2 rounded-full hover:bg-gold hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    {t('servicesPage.viewGallery')}
                  </Link>
                )}
                <button
                  onClick={openBooksy}
                  className="w-full bg-black text-gold font-body font-medium text-sm py-3 rounded-full btn-hover flex items-center justify-center gap-2"
                >
                  <Check size={16} />
                  {t('servicesPage.bookNow')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-text-secondary mb-4">
              {t('servicesPage.noResults')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-gold font-body text-sm hover:underline"
            >
              {t('servicesPage.clearFilters')}
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-black rounded-3xl p-8 lg:p-12">
          <h3 className="font-heading font-bold text-2xl text-white mb-4">
            {t('servicesPage.consultation.headline')}
          </h3>
          <p className="font-body text-white/70 mb-6">
            {t('servicesPage.consultation.body')}
          </p>
          <a
            href="tel:9404351332"
            className="inline-flex items-center gap-2 bg-gold text-black font-body font-medium px-8 py-4 rounded-full btn-hover"
          >
            {t('servicesPage.consultation.cta')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
