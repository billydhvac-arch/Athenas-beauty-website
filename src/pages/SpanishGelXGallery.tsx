import SpanishGalleryPage from './SpanishGalleryPage';

const gelxImages = [
  {
    id: '1',
    src: '/gelx-pepper-ann-character-art.jpg',
    title: 'Arte de Personajes Pepper Ann en Gel-X',
    description: 'Extensiones largas Gel-X con personajes de la serie animada Pepper Ann pintados a mano.',
    tags: ['Gel-X', 'Arte de Personajes', 'Pintado a Mano', 'Cultura Pop'],
  },
  {
    id: '2',
    src: '/work8.jpg',
    title: 'Arte 3D Personalizado en Gel-X',
    description: 'Extensiones Gel-X largas con arte personalizado y elementos 3D hechos a mano.',
    tags: ['Gel-X', 'Arte 3D', 'Largo', 'Personalizado'],
  },
  {
    id: '3',
    src: '/gelx-nude-gold-foil.jpg',
    title: 'Nude con Detalles de Lámina Dorada',
    description: 'Extensiones Gel-X medianas en nude suave con detalles de lámina dorada.',
    tags: ['Gel-X', 'Lámina Dorada', 'Nude', 'Elegante'],
  },
  {
    id: '4',
    src: '/gelx-stained-glass-cherry.jpg',
    title: 'Vidriera con Cerezos en Flor',
    description: 'Extensiones Gel-X con arte estilo vidriera y cerezos en flor geométricos.',
    tags: ['Gel-X', 'Vidriera', 'Cerezo', 'Geométrico', 'Primavera'],
  },
];

const SpanishGelXGallery = () => (
  <SpanishGalleryPage
    title="Gel-X"
    subtitle="Extensiones ligeras Gel-X en Denton, TX. Look natural, sin daño a tus uñas."
    images={gelxImages}
    serviceType="Gel-X"
    backLink="/es/servicios"
  />
);

export default SpanishGelXGallery;
