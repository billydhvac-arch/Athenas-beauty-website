import SpanishGalleryPage from './SpanishGalleryPage';

const builderGelImages = [
  {
    id: '1',
    src: '/builder-gel-hero.jpg',
    title: 'Diseño Cat Eye Azul',
    description: 'Deslumbrante builder gel cat eye azul con acentos plateados y detalles cromados.',
    tags: ['Cat Eye', 'Azul', 'Cromado', 'Trending'],
  },
  {
    id: '2',
    src: '/work9.jpg',
    title: 'Builder Gel Cat Eye',
    description: 'Hermoso efecto cat eye sobre base de builder gel con brillo magnético.',
    tags: ['Cat Eye', 'Brillo', 'Builder Gel', 'Elegante'],
  },
  {
    id: '3',
    src: '/gelx-citrus-orange-slices.jpg',
    title: 'Arte de Naranja en Builder Gel',
    description: 'Uñas veraniegas con rodajas de naranja pintadas a mano, remolinos de mármol y base coral.',
    tags: ['Builder Gel', 'Cítrico', 'Naranja', 'Verano', 'Pintado a Mano'],
  },
];

const SpanishBuilderGelGallery = () => (
  <SpanishGalleryPage
    title="Builder Gel"
    subtitle="Fortalecimiento natural con builder gel en Denton, TX. Uñas más fuertes sin daño."
    images={builderGelImages}
    serviceType="builder gel"
    backLink="/es/servicios"
  />
);

export default SpanishBuilderGelGallery;
