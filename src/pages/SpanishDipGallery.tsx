import SpanishGalleryPage from './SpanishGalleryPage';

const dipImages = [
  {
    id: '1',
    src: '/dip-sour-apple-glitter.jpg',
    title: 'Dip Powder Manzana Verde con Brillo',
    description: 'Diseño divertido en verde con brillo, inspirado en dulces de manzana verde.',
    tags: ['Verde', 'Brillo', 'Diverso', 'Dip Powder'],
  },
  {
    id: '2',
    src: '/dip-burgundy-glitter.jpg',
    title: 'Dip Powder Borgoña con Brillo',
    description: 'Elegante dip powder en borgoña con acabado brillante.',
    tags: ['Borgoña', 'Brillo', 'Elegante', 'Otoño'],
  },
  {
    id: '3',
    src: '/dip-christmas-glitter.jpg',
    title: 'Dip Powder Navideño con Brillo',
    description: 'Manicura festiva con brillo rojo y verde alternando en cada uña.',
    tags: ['Navidad', 'Festivo', 'Brillo', 'Rojo', 'Verde'],
  },
  {
    id: '4',
    src: '/dip-abstract-colorful.jpg',
    title: 'Dip Powder Abstracto Colorido',
    description: 'Arte abstracto con salpicaduras de rojo, azul y amarillo sobre base blanca.',
    tags: ['Abstracto', 'Colorido', 'Artístico', 'Moderno'],
  },
  {
    id: '5',
    src: '/dip-short-gold-foil.jpg',
    title: 'Dip Powder Corto con Lámina Dorada',
    description: 'Elegante dip powder corto con acentos de lámina dorada.',
    tags: ['Corto', 'Lámina Dorada', 'Elegante'],
  },
];

const SpanishDipGallery = () => (
  <SpanishGalleryPage
    title="Dip Powder"
    subtitle="Uñas duraderas con dip powder en Denton, TX. Sin olor, sin luz UV, resultados impecables."
    images={dipImages}
    serviceType="dip powder"
    backLink="/es/servicios"
  />
);

export default SpanishDipGallery;
