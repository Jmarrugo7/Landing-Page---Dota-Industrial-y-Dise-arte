export type DisenCategory =
  | 'Ropa personalizada'
  | 'Bordados'
  | 'Artículos personalizados'
  | 'Publicidad y señalización'
  | 'Accesorios'
export const DISEN_CATEGORIES: ('Todos' | DisenCategory)[] = [
  'Todos',
  'Ropa personalizada',
  'Bordados',
  'Artículos personalizados',
  'Publicidad y señalización',
  'Accesorios',
]

export interface DisenProduct {
  id: string
  name: string
  /** Precio en COP. 0 = «Consultar precio». */
  price: number
  category: DisenCategory
  description: string
  features: string[]
  featured?: boolean
  inCarousel?: boolean
  alt: string
  image?: string
  has3d?: boolean
}

/** Catálogo de Diseñarte: un producto por foto real del cliente. */
export const DISEN_PRODUCTS: DisenProduct[] = [
  {
    id: 'camiseta-foto', name: 'Camiseta con Foto Estampada', price: 0, category: 'Ropa personalizada', featured: true,
    image: '/assets/products/disenarte-camiseta-foto.png?v=2',
    description: 'Camiseta con tus fotos favoritas estampadas a todo color, ideal para cumpleaños, familias y regalos.',
    features: ['Estampado fotográfico a todo color', 'Se imprime a partir de tus fotos', 'Disponible en varias tallas y colores'], alt: 'Camiseta negra con un collage de fotos estampado en la espalda',
  },
  {
    id: 'bordado-camisa-construccion', name: 'Bordado en Camisa de Dotación (Construcción)', price: 0, category: 'Bordados', inCarousel: true,
    image: '/assets/products/disenarte-bordado-camisa-construccion.png?v=2',
    description: 'Logo de empresa constructora con edificio, casa y monograma bordados en tonos azules.',
    features: ['Degradados en tonos azules', 'Monograma en trazo fino', 'Para uniformes de constructoras'], alt: 'Logo de construcciones con edificio y casa bordado sobre tela azul clara',
  },
  {
    id: 'bordado-logo-maquinaria', name: 'Bordado de Logo con Maquinaria Pesada', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-logo-maquinaria.png?v=2',
    description: 'Logo con excavadora y engranaje bordado en amarillo y negro sobre polo gris.',
    features: ['Amarillo intenso con contornos negros', 'Detalle fino en engranaje y orugas', 'Para empresas de movimiento de tierra y obra'], alt: 'Logo con excavadora amarilla y engranaje bordado sobre tela gris',
  },
  {
    id: 'bordado-texto-monograma', name: 'Bordado de Texto y Monograma en Polo Gris', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-texto-monograma.png?v=2',
    description: 'Nombre de marca en letras blancas y cursiva dorada con monograma en forma de corazón.',
    features: ['Combina hilo blanco y dorado', 'Letras con relieve', 'Para tiendas, emprendimientos y marcas personales'], alt: 'Texto Sisters Shop y monograma dorado bordados sobre polo gris',
  },
  {
    id: 'parche-bordado-institucional', name: 'Parche Bordado Institucional', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-parche-bordado-institucional.png?v=2',
    description: 'Parche bordado con borde, símbolo y texto, para uniformes de instituciones, brigadas y equipos.',
    features: ['Borde rojo y símbolo en relieve', 'Fondo y letras con hilo de alta densidad', 'Se cose o se adhiere al uniforme'], alt: 'Parche bordado con cruz blanca y el texto Misión Médica',
  },
  {
    id: 'bordado-suete-negro-proceso', name: 'Bordado de Logo en Suéter Negro Tipo Polo', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-suete-negro-proceso.png?v=2',
    description: 'Logo empresarial en hilo naranja bordado sobre suéter negro tipo polo, visto en la máquina.',
    features: ['Bordado en máquina multiaguja', 'Hilo naranja sobre prenda oscura', 'Logo completo con nombre de la empresa'], alt: 'Máquina bordando un logo naranja sobre suéter negro',
  },
  {
    id: 'bordado-suete-gris-proceso', name: 'Bordado de Logo en Suéter Gris Tipo Polo', price: 0, category: 'Bordados', inCarousel: true,
    image: '/assets/products/disenarte-bordado-suete-gris-proceso.png?v=2',
    description: 'Logo empresarial bordándose en hilo rojo sobre suéter tipo polo.',
    features: ['Bordado en máquina multiaguja', 'Hilo rojo sobre prenda gris', 'Para uniformes de empresas y equipos'], alt: 'Máquina bordando un logo rojo sobre suéter tipo polo',
  },
  {
    id: 'camiseta-dia-del-padre', name: 'Camiseta Estampada Día del Padre', price: 0, category: 'Ropa personalizada',
    image: '/assets/products/disenarte-camiseta-dia-del-padre.png?v=2',
    description: 'Camiseta con diseño especial para papá y abuelo, lista para regalar en fechas especiales.',
    features: ['Diseño a todo color de alto detalle', 'Texto y frase personalizables', 'Estampado resistente al lavado'], alt: 'Camiseta negra con estampado «Ser papá es un honor, ser abuelo no tiene precio»',
  },
  {
    id: 'camiseta-ilustrada', name: 'Camiseta con Ilustración y Frase', price: 0, category: 'Ropa personalizada',
    image: '/assets/products/disenarte-camiseta-ilustrada.png?v=2',
    description: 'Camiseta de color con ilustración y mensaje, perfecta para grupos de iglesia, familia y eventos.',
    features: ['Ilustración a todo color', 'Frase o versículo personalizable', 'Colores claros y oscuros'], alt: 'Camiseta lila con ilustración y la frase «Te prometí que estaría contigo todos los días»',
  },
  {
    id: 'banda-reina', name: 'Banda o Fajín Personalizado', price: 0, category: 'Accesorios', inCarousel: true,
    image: '/assets/products/disenarte-banda-reina.png?v=2',
    description: 'Banda de satén con letras y corona en dorado para reinados, grados y eventos.',
    features: ['Satén blanco con letras doradas', 'Texto y diseño a tu elección', 'Para reinados, grados y fiestas'], alt: 'Persona con banda blanca de satén con la palabra «Humildad» y una corona dorada',
  },
  {
    id: 'bordado-logo-hilo-dorado', name: 'Bordado de Logo en Hilo Dorado', price: 0, category: 'Bordados', inCarousel: true,
    image: '/assets/products/disenarte-bordado-logo-hilo-dorado.png?v=2',
    description: 'Bordado de logos y monogramas con hilo dorado, relieve y acabado premium.',
    features: ['Hilo dorado con brillo y relieve', 'Fiel a tu logo, escudo o monograma', 'Para uniformes, gorras, polos y más'], alt: 'Logo DIY Diseñarte bordado en hilo dorado sobre tela negra',
  },
  {
    id: 'toallas-bordadas-bodas', name: 'Juego de Toallas Bordadas para Bodas', price: 0, category: 'Bordados', inCarousel: true,
    image: '/assets/products/disenarte-toallas-bordadas-bodas.png?v=2',
    description: 'Juego de toallas para pareja con nombres, fecha y argollas bordadas en dorado.',
    features: ['Nombres de la pareja y fecha bordados', 'Argollas en hilo dorado', 'Perfectas para regalo de matrimonio'], alt: 'Dos toallas blancas bordadas con nombres, fecha y argollas doradas',
  },
  {
    id: 'mug-foto-jugador', name: 'Mug Sublimado con Foto', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-mug-foto-jugador.png?v=2',
    description: 'Mug de cerámica con tu imagen favorita impresa a todo color por sublimación.',
    features: ['Cerámica blanca de 11 oz', 'Sublimación de alta definición', 'Imagen a tu elección, apta para microondas'], alt: 'Mug blanco sublimado con la foto de un jugador de fútbol',
  },
  {
    id: 'mug-escudo-club', name: 'Mug con Escudo de Club', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-mug-escudo-club.png?v=2',
    description: 'Mug sublimado con el escudo de tu club favorito sobre un fondo de colores.',
    features: ['Escudo y fondo a todo color', 'Cerámica de 11 oz', 'Colores que no se borran con el lavado'], alt: 'Mug sublimado con escudo de club de fútbol en fondo naranja y morado',
  },
  {
    id: 'termo-metalico-rosado', name: 'Termo Metálico Rosado', price: 0, category: 'Artículos personalizados', inCarousel: true,
    image: '/assets/products/disenarte-termo-metalico-rosado.png?v=2',
    description: 'Termo pequeño de acero con tapa de pico, listo para personalizar con nombre o diseño.',
    features: ['Acero inoxidable con tapa de seguridad', 'Tamaño compacto', 'Personalizable con nombre o frase'], alt: 'Termo metálico rosado con tapa de pico',
  },
  {
    id: 'termo-metalico-verde', name: 'Termo Metálico con Diseño', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-termo-metalico-verde.png?v=2',
    description: 'Termo pequeño de acero con tapa y correa, para llevar tu bebida a todas partes.',
    features: ['Acero inoxidable', 'Tapa con correa para colgar', 'Diseño y colores a elección'], alt: 'Termo metálico verde con ilustración y correa',
  },
  {
    id: 'toalla-bordada-bano', name: 'Toalla de Baño Bordada', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-toalla-bordada-bano.png?v=2',
    description: 'Toalla blanca con detalle floral y nombre bordado, un obsequio con presencia.',
    features: ['Toalla 100 % algodón', 'Bordado de nombre o palabra', 'Detalle floral en hilo azul'], alt: 'Toalla blanca bordada con la palabra «Baño» y detalle floral',
  },
  {
    id: 'toalla-bordada-girasol', name: 'Toalla Bordada con Nombre y Girasol', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-toalla-bordada-girasol.png?v=2',
    description: 'Toalla con nombre y figura bordados, para regalo personal o de cumpleaños.',
    features: ['Nombre bordado en hilo negro', 'Figura de girasol en relieve', 'Otras figuras a elección'], alt: 'Toalla blanca bordada con el nombre Juan Duran y un girasol',
  },
  {
    id: 'mug-seleccion', name: 'Mug de Selección Colombia', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-mug-seleccion.png?v=2',
    description: 'Mug para los hinchas de la selección, con frase y balón en los colores patrios.',
    features: ['Frase de aliento personalizable', 'Colores amarillo, azul y rojo', 'Cerámica de 11 oz'], alt: 'Mug sublimado amarillo con balón y la frase «Vamos mi Selección Colombia»',
  },
  {
    id: 'mug-anime', name: 'Mug con Diseño de Anime', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-mug-anime.png?v=2',
    description: 'Mug con tus personajes de anime preferidos impresos a todo color.',
    features: ['Impresión nítida a todo color', 'Cerámica blanca de 11 oz', 'Cualquier diseño que elijas'], alt: 'Mug blanco sublimado con personajes de anime',
  },
  {
    id: 'mug-caricatura', name: 'Mug con Diseño de Caricatura', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-mug-caricatura.png?v=2',
    description: 'Mug divertido con tu personaje animado, para niños y grandes.',
    features: ['Colores vivos y brillantes', 'Cerámica blanca de 11 oz', 'Diseño personalizado a tu elección'], alt: 'Mug sublimado amarillo con diseño de caricatura',
  },
  {
    id: 'mug-futbol-rayas', name: 'Mug de Fútbol con Escudo', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-mug-futbol-rayas.png?v=2',
    description: 'Mug con los colores y el escudo de tu equipo, de borde a borde.',
    features: ['Estampado envolvente', 'Colores del equipo a elección', 'Cerámica de 11 oz'], alt: 'Mug sublimado con escudo y franjas azul grana',
  },
  {
    id: 'mug-panoramico', name: 'Mug Panorámico con Fotos', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-mug-panoramico.png?v=2',
    description: 'Mug con collage de fotos que cubre toda la superficie.',
    features: ['Impresión panorámica envolvente', 'Varias fotos en un mismo mug', 'Cerámica de 11 oz'], alt: 'Mug sublimado con collage de fotos de jugadores en amarillo',
  },
  {
    id: 'mug-escudo-equipo-local', name: 'Mug con Escudo Personalizado', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-mug-escudo-equipo-local.png?v=2',
    description: 'Mug con el escudo de tu equipo, club o institución.',
    features: ['Tu escudo o logo a todo color', 'Cerámica de 11 oz', 'Ideal para equipos y colegios'], alt: 'Mug con escudo Real Cartagena',
  },
  {
    id: 'botella-aluminio-sublimable', name: 'Botella de Aluminio Sublimable', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-botella-aluminio-sublimable.png?v=2',
    description: 'Botella deportiva blanca para sublimar tu diseño, nombre o logo.',
    features: ['Aluminio liviano', 'Superficie blanca apta para sublimación', 'Tapa rosca con argolla'], alt: 'Botella de aluminio blanca con tapa negra',
  },
  {
    id: 'vaso-termico-pitillo', name: 'Vaso Térmico con Pitillo', price: 0, category: 'Artículos personalizados',
    image: '/assets/products/disenarte-vaso-termico-pitillo.png?v=2',
    description: 'Vaso térmico con tapa, pitillo y accesorios decorativos, para niños y adultos.',
    features: ['Con pitillo y tapa de seguridad', 'Correa para colgar', 'Decorado a elección'], alt: 'Vaso térmico café con pitillo y decoración de animalitos',
  },
  {
    id: 'toalla-bordada-escudo', name: 'Toalla Bordada con Escudo y Nombre', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-toalla-bordada-escudo.png?v=2',
    description: 'Toalla con escudo de tu equipo favorito y tu nombre bordados.',
    features: ['Escudo bordado de tu equipo o institución', 'Nombre bordado a un costado', 'Hilos de colores firmes'], alt: 'Toalla blanca con escudo bordado y el nombre Isaac Martínez',
  },
  {
    id: 'bordado-polo-gris-dorado', name: 'Bordado de Logo en Polo Gris (Hilo Dorado)', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-polo-gris-dorado.png?v=2',
    description: 'Logo con figura geométrica y texto bordados en hilo dorado sobre polo gris, un acabado sobrio para marcas con estilo.',
    features: ['Hilo dorado con relieve y brillo', 'Líneas finas y texto nítido', 'Para polos, suéteres y chaquetas corporativas'], alt: 'Logo geométrico con texto bordado en hilo dorado sobre tela gris',
  },
  {
    id: 'bordado-camisa-agropecuario', name: 'Bordado en Camisa de Dotación (Sector Agropecuario)', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-camisa-agropecuario.png?v=2',
    description: 'Logo de ganadería y criadero bordado en hilo verde sobre camisa azul clara de dotación.',
    features: ['Dibujo detallado de animales en hilo', 'Texto y logo en un solo bordado', 'Para camisas de dotación y overoles'], alt: 'Logo de ganadería bordado en verde sobre tela azul clara en bastidor',
  },
  {
    id: 'bordado-circular-ambiental', name: 'Bordado Circular a Todo Color (Sector Ambiental)', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-circular-ambiental.png?v=2',
    description: 'Logo circular a varios colores con texto en arco, bordado con precisión.',
    features: ['Varios colores de hilo en un mismo logo', 'Texto en arco y en línea', 'Relleno con relieve en el árbol y el globo'], alt: 'Logo circular con árbol y globo terráqueo bordado sobre tela azul',
  },
  {
    id: 'camiseta-vinilo-textil', name: 'Camiseta con Letras en Vinilo Textil', price: 0, category: 'Ropa personalizada',
    image: '/assets/products/disenarte-camiseta-vinilo-textil.png?v=2',
    description: 'Camiseta oscura con letras en vinilo para nombres, frases, equipos y marcas.',
    features: ['Letras en vinilo textil de alto contraste', 'Logo pequeño en el pecho', 'Ideal para nombres, equipos y marcas'], alt: 'Camiseta negra con letras grandes en vinilo rojo y blanco',
  },
  {
    id: 'bordado-polo-azul-texto', name: 'Bordado de Texto y Logo en Polo Azul Oscuro', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-polo-azul-texto.png?v=2',
    description: 'Logo con figura verde y nombre de la entidad en hilo claro sobre polo oscuro.',
    features: ['Hilo claro con alto contraste sobre fondo oscuro', 'Degradado de verdes en la figura', 'Ideal para entidades y consorcios'], alt: 'Logo con edificios verdes y texto bordado sobre polo azul oscuro',
  },
  {
    id: 'bordado-logo-contacto', name: 'Bordado de Logo con Datos de Contacto', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-logo-contacto.png?v=2',
    description: 'Logo de negocio con nombre y número de contacto bordados sobre polo gris.',
    features: ['Incluye el teléfono o datos de contacto', 'Colores rojo, azul y amarillo', 'Perfecto para uniformes de ferreterías y comercios'], alt: 'Logo de ferretería con casa roja y número de contacto bordado sobre tela gris',
  },
  {
    id: 'bordado-camisa-electrico', name: 'Bordado en Camisa de Dotación (Sector Eléctrico)', price: 0, category: 'Bordados',
    image: '/assets/products/disenarte-bordado-camisa-electrico.png?v=2',
    description: 'Logo con rayo, iniciales y razón social bordados en hilo azul y amarillo.',
    features: ['Combinación de hilos azul y amarillo', 'Letra pequeña legible', 'Para camisas, chalecos y gorras de dotación'], alt: 'Logo con rayo y círculo amarillo bordado sobre tela azul clara',
  },
]

export const DISEN_CAROUSEL = DISEN_PRODUCTS.filter((p) => p.inCarousel)

/** Devuelve la imagen del producto si está disponible, o vacío. */
export const disenImgOf = (p: Pick<DisenProduct, 'id'> & { image?: string }) => p.image ?? ''
