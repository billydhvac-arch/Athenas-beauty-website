import SpanishGalleryPage from './SpanishGalleryPage';

const acrylicImages = [
  {
    id: '1',
    src: '/acrylic-green-nude-heart-valentine.jpg',
    title: 'Acrílico Verde & Nude con Corazones',
    description: 'Diseño romántico de San Valentín con corazones pintados a mano en tonos verde y nude.',
    tags: ['Verde', 'Nude', 'Corazones', 'San Valentín', 'Almendra'],
  },
  {
    id: '2',
    src: '/acrylic-pink-white-gold-bow-french.jpg',
    title: 'Francés Rosa con Lazos Dorados',
    description: 'Elegante manicura francesa con tips rosas, detalles dorados y lazos dorados.',
    tags: ['Rosa', 'Francés', 'Dorado', 'Lazos', 'Elegante'],
  },
  {
    id: '3',
    src: '/chrome-french-acrylic.jpg',
    title: 'Francés Cromado Cobre',
    description: 'Trending francés cromado con tips metálicos cobre sobre base rosa natural.',
    tags: ['Cromado', 'Francés', 'Cobre', 'Trending', 'Cuadrado'],
  },
  {
    id: '4',
    src: '/long-french-cherry-crystals.jpg',
    title: 'Francés Largo con Cerezas y Cristales',
    description: 'Uñas largas estilo francés con tips blancos, cristales rojos y dijes de cerezas 3D.',
    tags: ['Francés', 'Cristales', 'Dijes', 'Largo', 'Coquette'],
  },
  {
    id: '5',
    src: '/short-white-gold-chrome.jpg',
    title: 'Blanco Corto con Detalles Dorados Cromados',
    description: 'Uñas cortas elegantes en blanco lechoso con detalles dorados cromados y tachuelas doradas.',
    tags: ['Corto', 'Dorado Cromado', 'Minimalista', 'Blanco'],
  },
  {
    id: '6',
    src: '/acrylic-blue-french-coffin.jpg',
    title: 'Francés Azul en Forma Coffin',
    description: 'Uñas coffin con tips azules clásicos sobre base nude natural.',
    tags: ['Azul', 'Francés', 'Coffin', 'Clásico'],
  },
];

const SpanishAcrylicGallery = () => (
  <SpanishGalleryPage
    title="Uñas Acrílicas"
    subtitle="Diseños de uñas acrílicas personalizados en Denton, TX. Desde francés clásico hasta arte 3D."
    images={acrylicImages}
    serviceType="acrílico"
    backLink="/es/servicios"
  />
);

export default SpanishAcrylicGallery;
