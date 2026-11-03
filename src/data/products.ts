import type { ProductKind } from '../three/builders'

export type Category = 'Herramientas' | 'Soldadura' | 'Seguridad' | 'Dotación' | 'Vial y emergencia'
export const CATEGORIES: ('Todos' | Category)[] = ['Todos', 'Herramientas', 'Soldadura', 'Seguridad', 'Dotación', 'Vial y emergencia']

export interface Product {
  /** Identificador único. */
  id: string
  /** Ruta explícita de la imagen (ej: /assets/products/pulidora-ranger-pro.png). */
  image?: string
  /** Modelo 3D opcional. Solo los productos que lo tengan muestran «Vista 3D». */
  model?: ProductKind
  name: string
  price: number
  category: Category
  description: string
  features: [string, string, string]
  featured?: boolean
  inCarousel?: boolean
  alt: string
}

/** Catálogo real de DOTA Industrial. Precio 0 = «Consultar precio» (ver formatPrice). */
export const PRODUCTS: Product[] = [
  // ───────── Herramientas ─────────
  {
    id: 'pulidora-ranger-pro', image: '/assets/products/pulidora-ranger-pro.png', name: 'Pulidora Inalámbrica 20V Ranger Pro', price: 0, category: 'Herramientas', featured: true, inCarousel: true,
    description: 'Pulidora angular a batería: potencia y libertad de movimiento, sin cables.',
    features: ['20V de potencia', 'Disco de 4-1/2"', 'Hasta 7000 RPM'], alt: 'Caja de la pulidora inalámbrica Ranger Pro de 20 voltios',
  },
  {
    id: 'esmeriladora-dewalt', image: '/assets/products/esmeriladora-dewalt.png', model: 'esmeriladora', name: 'Esmeriladora Angular DeWalt', price: 0, category: 'Herramientas',
    description: 'Esmeriladora angular DeWalt de uso profesional para cortar, desbastar y pulir metal.',
    features: ['Marca DeWalt, reconocida en herramienta profesional', 'Para corte, desbaste y pulido de metal', 'Referencia DWE4120'], alt: 'Cajas de esmeriladoras angulares DeWalt apiladas',
  },
  {
    id: 'hidrolavadora-1800w', image: '/assets/products/hidrolavadora-1800w.png', name: 'Hidrolavadora de Alta Presión 1800W', price: 0, category: 'Herramientas',
    description: 'Limpieza a alta presión de vehículos, pisos, fachadas y maquinaria.',
    features: ['Motor de 1800 W', 'Chorro de alta presión', 'Para uso doméstico e industrial'], alt: 'Caja de la hidrolavadora de alta presión de 1800 vatios',
  },
  {
    id: 'mototool-rectificador', image: '/assets/products/mototool-rectificador.png', name: 'Mototool Rectificador Eléctrico Profesional', price: 0, category: 'Herramientas',
    description: 'Herramienta rotativa de precisión para rectificar, pulir, cortar y dar acabados.',
    features: ['Motor eléctrico de uso profesional', 'Ideal para trabajos de detalle', 'Se usa con distintos accesorios de corte y pulido'], alt: 'Mototool rectificador eléctrico sostenido en la mano',
  },
  {
    id: 'escobilla-circular', image: '/assets/products/escobilla-circular.png', name: 'Escobilla Circular de Acero 6"', price: 0, category: 'Herramientas',
    description: 'Cepillo de alambre de acero para quitar óxido, pintura y residuos de soldadura en superficies metálicas.',
    features: ['Diámetro de 6 pulgadas', 'Alambre de acero resistente', 'Acabado uniforme en metal'], alt: 'Escobilla circular de alambre de acero de 6 pulgadas',
  },
  {
    id: 'guadanadora-manual', image: '/assets/products/guadanadora-manual.png', name: 'Guadañadora Manual con Arnés Profesional', price: 0, category: 'Herramientas',
    description: 'Guadañadora con arnés para desmalezar con más comodidad y control durante toda la jornada.',
    features: ['Arnés de hombros incluido', 'Reparte mejor el peso al trabajar', 'Para corte de maleza y mantenimiento de zonas verdes'], alt: 'Arnés profesional de guadañadora puesto sobre un overol blanco',
  },
  {
    id: 'protector-hombro-guadanadora', image: '/assets/products/protector-hombro-guadanadora.png', name: 'Protector Ergonómico para Hombro de Guadañadora', price: 0, category: 'Herramientas',
    description: 'Almohadilla que reduce la presión del arnés sobre el hombro y mejora la comodidad al guadañar.',
    features: ['Diseño ergonómico', 'Disminuye la fatiga y la presión en el hombro', 'Se ajusta al arnés de la guadañadora'], alt: 'Hombre con protector ergonómico de hombro y correa cruzada',
  },
  {
    id: 'pala-redonda', image: '/assets/products/pala-redonda.png', name: 'Pala Redonda para Construcción y Jardinería', price: 0, category: 'Herramientas',
    description: 'Pala de punta redonda con mango de madera, ideal para excavar, mover tierra y sembrar.',
    features: ['Hoja de acero de punta redonda', 'Mango de madera con empuñadura en D', 'Para obra, huerta y jardín'], alt: 'Pala redonda de acero con mango de madera sobre el piso',
  },
  {
    id: 'ventosa-doble', image: '/assets/products/ventosa-doble.png', name: 'Ventosa Doble para Manipulación de Vidrio', price: 0, category: 'Herramientas', inCarousel: true,
    description: 'Ventosa de succión doble para levantar y mover vidrio, cerámica y láminas lisas con agarre firme.',
    features: ['Doble copa de succión', 'Mango para un agarre cómodo', 'Para vidrio, baldosas y superficies lisas'], alt: 'Ventosa doble amarilla para cargar vidrio',
  },
  {
    id: 'linternas-led', image: '/assets/products/linternas-led.png', name: 'Linternas y Lámparas de Trabajo LED', price: 0, category: 'Herramientas',
    description: 'Iluminación portátil para trabajo, mantenimiento y emergencias, en varios tamaños y modelos.',
    features: ['Luz LED de alto rendimiento', 'Diseños compactos y fáciles de llevar', 'Varios modelos disponibles'], alt: 'Cuatro linternas LED de distintos tamaños sobre una mesa de madera',
  },
  {
    id: 'bascula-colgante', image: '/assets/products/bascula-colgante.png', name: 'Báscula Electrónica Colgante Industrial', price: 0, category: 'Herramientas',
    description: 'Báscula digital de gancho para pesar cargas pesadas, sacos y mercancía.',
    features: ['Pantalla digital', 'Diseño colgante con gancho', 'Para uso industrial, agrícola y comercial'], alt: 'Báscula electrónica colgante pesando un animal de granja',
  },

  // ───────── Soldadura ─────────
  {
    id: 'careta-soldadura-decorada', image: '/assets/products/careta-soldadura-decorada.png', name: 'Careta para Soldadura Decorada', price: 0, category: 'Soldadura',
    description: 'La misma protección de una careta profesional, con diseño llamativo para soldadores con estilo.',
    features: ['Diseño gráfico decorado', 'Filtro protector incluido', 'Banda ajustable'], alt: 'Careta de soldadura con diseño gráfico de colores',
  },
  {
    id: 'careta-soldadura-filtro', image: '/assets/products/careta-soldadura-filtro.png', name: 'Careta para Soldadura con Filtro Protector', price: 0, category: 'Soldadura',
    description: 'Careta de soldador con filtro que protege rostro y ojos del arco, las chispas y la radiación.',
    features: ['Filtro protector para el arco de soldadura', 'Cubre rostro y cuello', 'Banda ajustable para un uso cómodo'], alt: 'Careta de soldadura azul con filtro protector',
  },
  {
    id: 'chaqueta-soldador-carnaza', image: '/assets/products/chaqueta-soldador-carnaza.png', name: 'Chaqueta para Soldador en Carnaza', price: 0, category: 'Soldadura',
    description: 'Chaqueta de carnaza que protege torso y brazos de chispas, salpicaduras y calor en trabajos de soldadura.',
    features: ['Carnaza resistente al calor y a las chispas', 'Manga larga', 'Protege torso y brazos'], alt: 'Hombre con chaqueta amarilla de carnaza para soldador',
  },
  {
    id: 'kit-soldadura-profesional', image: '/assets/products/kit-soldadura-profesional.png', name: 'Kit Profesional para Soldadura y Oxicorte', price: 0, category: 'Soldadura', inCarousel: true,
    description: 'Equipo en maletín para soldar y cortar con oxicorte, listo para llevar a obra o taller.',
    features: ['Maletín rígido de transporte', 'Reguladores con manómetros y mangueras', 'Para soldadura y oxicorte'], alt: 'Maletín abierto con kit de soldadura y oxicorte, manómetros y mangueras',
  },
  {
    id: 'kit-soldadura-completo', image: '/assets/products/kit-soldadura-completo.png', name: 'Kit Completo para Soldadura y Oxicorte', price: 0, category: 'Soldadura',
    description: 'Kit ampliado que suma accesorios y elementos de protección para el soldador.',
    features: ['Equipo de soldadura y oxicorte', 'Accesorios de protección incluidos', 'Todo en un solo kit'], alt: 'Caretas de soldadura, guantes y accesorios de protección del kit completo',
  },
  {
    id: 'horno-secado-electrodos', image: '/assets/products/horno-secado-electrodos.png', name: 'Horno Portátil para Secado de Electrodos', price: 0, category: 'Soldadura',
    description: 'Horno portátil que mantiene los electrodos secos y listos para usar, evitando que la humedad dañe la soldadura.',
    features: ['Conserva los electrodos libres de humedad', 'Portátil, fácil de mover', 'Ayuda a evitar poros en la soldadura'], alt: 'Horno portátil amarillo para secar electrodos de soldadura',
  },

  // ───────── Seguridad ─────────
  {
    id: 'casco-naranja', image: '/assets/products/casco-naranja.png', name: 'Casco de Seguridad Industrial Naranja', price: 0, category: 'Seguridad', inCarousel: true,
    description: 'Casco naranja de alta visibilidad para proteger la cabeza en obra, industria y mantenimiento.',
    features: ['Color naranja de alta visibilidad', 'Casquete resistente a impactos', 'Suspensión interna ajustable'], alt: 'Mano sosteniendo un casco de seguridad naranja',
  },
  {
    id: 'respirador-3m', image: '/assets/products/respirador-3m.png', name: 'Respirador Reutilizable 3M con Filtros P100', price: 0, category: 'Seguridad',
    description: 'Respirador de media cara 3M con filtros P100 para trabajar con polvo, humos y partículas.',
    features: ['Marca 3M', 'Filtros P100 incluidos', 'Reutilizable, con filtros reemplazables'], alt: 'Respirador de media cara 3M con dos filtros rosados P100',
  },
  {
    id: 'casco-reflectivo', image: '/assets/products/casco-reflectivo.png', model: 'casco', name: 'Casco de Seguridad Industrial con Reflectivo', price: 0, category: 'Seguridad',
    description: 'Casco amarillo con cinta reflectiva que protege la cabeza y mejora la visibilidad en obra y en trabajos nocturnos.',
    features: ['Cinta reflectiva visible', 'Casquete resistente a impactos', 'Suspensión interna ajustable'], alt: 'Casco de seguridad amarillo con cinta reflectiva',
  },
  {
    id: 'guantes-antigolpes', image: '/assets/products/guantes-antigolpes.png', name: 'Guantes Antigolpes de Alta Protección', price: 0, category: 'Seguridad',
    description: 'Guantes con refuerzos que amortiguan golpes y aplastamientos en trabajos pesados.',
    features: ['Protecciones antigolpes en dorso y dedos', 'Agarre firme en la palma', 'Para trabajos pesados y manejo de herramientas'], alt: 'Mano con guante antigolpes morado con refuerzos en los dedos',
  },
  {
    id: 'guante-anticorte', image: '/assets/products/guante-anticorte.png', name: 'Guante de Seguridad Anticorte Nivel Profesional', price: 0, category: 'Seguridad',
    description: 'Guante liviano que protege las manos de cortes al manipular objetos filosos.',
    features: ['Resistente al corte', 'Ajuste cómodo y flexible', 'Para vidrio, láminas y piezas metálicas'], alt: 'Mano con guante anticorte gris y puño azul',
  },
  {
    id: 'guantes-nitrilo', image: '/assets/products/guantes-nitrilo.png', name: 'Guantes de Nitrilo Desechables', price: 0, category: 'Seguridad',
    description: 'Guantes desechables de nitrilo para limpieza, salud, alimentos y mecánica, con buen tacto y sin látex.',
    features: ['Nitrilo libre de látex', 'Caja de 100 unidades', 'Ajuste cómodo y buena sensibilidad'], alt: 'Cajas de guantes de nitrilo desechables azules y negros',
  },
  {
    id: 'guante-tupsafe', image: '/assets/products/guante-tupsafe.png', name: 'Guante de Seguridad Premium Multipropósito TUPSAFE', price: 0, category: 'Seguridad',
    description: 'Guante de uso general que combina protección, agarre y comodidad para distintas labores.',
    features: ['Material resistente y flexible', 'Agarre firme', 'Uso multipropósito: obra, taller y logística'], alt: 'Mano con guante negro de seguridad multipropósito TUPSAFE',
  },
  {
    id: 'bota-industrial', image: '/assets/products/bota-industrial.png', name: 'Bota de Seguridad Industrial', price: 0, category: 'Seguridad',
    description: 'Bota de trabajo con suela antideslizante, para obra, taller y planta.',
    features: ['Construcción resistente para uso diario', 'Suela antideslizante', 'Diseño cómodo para jornadas largas'], alt: 'Mano sosteniendo una bota de seguridad industrial gris con detalles amarillos',
  },
  {
    id: 'bota-caterpillar', image: '/assets/products/bota-caterpillar.png', name: 'Bota de Seguridad Caterpillar Industrial', price: 0, category: 'Seguridad',
    description: 'Bota de la marca Caterpillar, reconocida por su durabilidad en trabajos exigentes.',
    features: ['Marca Caterpillar', 'Diseño resistente para uso rudo', 'Comodidad y soporte en todo el pie'], alt: 'Bota de seguridad Caterpillar color miel sostenida en la mano',
  },
  {
    id: 'bota-steel-worker', image: '/assets/products/bota-steel-worker.png', name: 'Bota de Seguridad Steel Worker', price: 0, category: 'Seguridad',
    description: 'Bota de cuero café con diseño robusto para obra, mantenimiento y trabajo pesado.',
    features: ['Cuero resistente', 'Diseño robusto de media caña', 'Para obra, mantenimiento y trabajo pesado'], alt: 'Bota de seguridad Steel Worker de cuero café',
  },
  {
    id: 'protector-solar-cuello', image: '/assets/products/protector-solar-cuello.png', name: 'Protector Solar para Cuello y Nuca', price: 0, category: 'Seguridad',
    description: 'Protector de tela que cubre cuello y nuca del sol en trabajos al aire libre.',
    features: ['Cubre cuello y nuca', 'Tela liviana, pensada para usar con casco o gorra', 'Para obra, campo y trabajo a la intemperie'], alt: 'Persona con protector amarillo que cubre cuello y nuca',
  },
  {
    id: 'sombrilla-industrial', image: '/assets/products/sombrilla-industrial.png', name: 'Sombrilla Industrial para Sol y Lluvia', price: 0, category: 'Seguridad',
    description: 'Sombrilla de gran tamaño para trabajar a la sombra y que la lluvia no pare la producción.',
    features: ['Cubre del sol y de la lluvia', 'Gran cobertura para puestos de trabajo', 'Colores vivos y visibles'], alt: 'Sombrilla industrial grande de colores abierta',
  },

  // ───────── Dotación ─────────
  {
    id: 'polo-alta-visibilidad', image: '/assets/products/polo-alta-visibilidad.png', name: 'Polo Industrial de Alta Visibilidad', price: 0, category: 'Dotación',
    description: 'Polo de color vivo para que el trabajador sea visto fácilmente en obra, vías y zonas de operación.',
    features: ['Color naranja de alta visibilidad', 'Cuello tipo polo', 'Para obra, cuadrillas y trabajo en vía'], alt: 'Mujer con polo industrial naranja de alta visibilidad y casco',
  },
  {
    id: 'bata-industrial', image: '/assets/products/bata-industrial.png', name: 'Bata Industrial de Protección', price: 0, category: 'Dotación',
    description: 'Bata blanca de manga larga para laboratorio, planta y talleres donde se necesita protección y buena presentación.',
    features: ['Manga larga con cierre frontal', 'Tela cómoda y resistente', 'Para laboratorios, talleres y plantas'], alt: 'Hombre con bata blanca industrial dentro de la tienda',
  },
  {
    id: 'polo-manga-larga', image: '/assets/products/polo-manga-larga.png', name: 'Camisa Polo Industrial de Manga Larga', price: 0, category: 'Dotación',
    description: 'Polo de manga larga para jornadas en obra, taller o campo, con más cobertura en los brazos.',
    features: ['Manga larga', 'Cuello tipo polo', 'Tela cómoda para uso diario'], alt: 'Hombre con camisa polo industrial azul oscuro de manga larga',
  },
  {
    id: 'uniforme-medico', image: '/assets/products/uniforme-medico.png', name: 'Uniforme Médico Antifluido (Scrub)', price: 0, category: 'Dotación',
    description: 'Conjunto de scrub antifluido para personal de salud, odontología y estética, fácil de lavar y de usar.',
    features: ['Tela antifluido', 'Conjunto de blusa y pantalón', 'Varios colores disponibles'], alt: 'Mujer con uniforme médico scrub rosado',
  },
  {
    id: 'delantal-industrial', image: '/assets/products/delantal-industrial.png', name: 'Delantal Industrial de Protección', price: 0, category: 'Dotación',
    description: 'Delantal de cuerpo completo para proteger la ropa en talleres, soldadura y trabajos con suciedad o salpicaduras.',
    features: ['Cubre del pecho a las rodillas', 'Material resistente al uso rudo', 'Se ajusta al cuerpo'], alt: 'Persona con delantal industrial blanco sobre camisa azul',
  },
  {
    id: 'camisa-denim', image: '/assets/products/camisa-denim.png', name: 'Camisa Industrial de Trabajo en Denim', price: 0, category: 'Dotación',
    description: 'Camisa de denim para trabajo pesado: dura más y mantiene buena presentación.',
    features: ['Tela denim resistente', 'Manga larga', 'Ideal para uso rudo en taller y obra'], alt: 'Hombre con camisa de trabajo azul en denim y casco verde',
  },
  {
    id: 'camiseta-manga-larga', image: '/assets/products/camiseta-manga-larga.png', name: 'Camiseta Industrial Manga Larga', price: 0, category: 'Dotación',
    description: 'Camiseta de manga larga para dotación de personal, cómoda para toda la jornada.',
    features: ['Manga larga', 'Ajuste cómodo', 'Práctica para dotación de equipos de trabajo'], alt: 'Hombre con camiseta industrial azul oscuro de manga larga',
  },
  {
    id: 'camisa-trabajo', image: '/assets/products/camisa-trabajo.png', name: 'Camisa de Trabajo Industrial Manga Larga', price: 0, category: 'Dotación', inCarousel: true,
    description: 'Camisa de manga larga, con cuello clásico, para dotación de empresas y trabajos de planta o campo.',
    features: ['Manga larga', 'Cuello clásico', 'Cómoda y duradera'], alt: 'Hombre con camisa de trabajo blanca de manga larga',
  },

  // ───────── Vial y emergencia ─────────
  {
    id: 'chaleco-tipo-iii', image: '/assets/products/chaleco-tipo-iii.png', name: 'Chaleco Salvavidas Tipo III', price: 0, category: 'Vial y emergencia', inCarousel: true,
    description: 'Chaleco salvavidas Tipo III, cómodo y de colores visibles, para aguas tranquilas y trabajo cerca del agua.',
    features: ['Flotación Tipo III para aguas tranquilas', 'Colores naranja y azul, fáciles de ubicar', 'Ajustable con cierres y correas'], alt: 'Chaleco salvavidas Tipo III naranja y azul sobre una embarcación',
  },
  {
    id: 'salvavidas-aro', image: '/assets/products/salvavidas-aro.png', name: 'Salvavidas Tipo Aro', price: 0, category: 'Vial y emergencia',
    description: 'Aro flotante con cuerda perimetral para lanzar a una persona en el agua durante un rescate.',
    features: ['Aro flotante rojo con bandas reflectivas', 'Cuerda perimetral para agarrarse', 'Fácil de lanzar en emergencias'], alt: 'Aro salvavidas rojo con bandas reflectivas y dos remos',
  },
  {
    id: 'remo-madera', image: '/assets/products/remo-madera.png', name: 'Remo de Madera para Embarcaciones', price: 0, category: 'Vial y emergencia',
    description: 'Remo de madera para botes y lanchas pequeñas, resistente y de buen agarre.',
    features: ['Madera resistente', 'Pala ancha para mejor impulso', 'Para botes y embarcaciones pequeñas'], alt: 'Dos remos de madera cruzados frente a un aro salvavidas',
  },
  {
    id: 'extintores', image: '/assets/products/extintores.png', name: 'Extintores y Equipos Contra Incendios', price: 0, category: 'Vial y emergencia',
    description: 'Extintores y equipos para prevenir y atender conatos de incendio en empresas, obras y vehículos.',
    features: ['Extintores de distintos tipos y capacidades', 'Equipos para prevención y control de incendios', 'Para empresas, obras y vehículos'], alt: 'Extintores rojos, verde, amarillo y plateado junto a una manguera',
  },
  {
    id: 'brazalete-brigadista', image: '/assets/products/brazalete-brigadista.png', name: 'Brazalete Reflectivo para Brigadistas', price: 0, category: 'Vial y emergencia',
    description: 'Brazalete que identifica al brigadista y lo hace visible en cualquier momento de la jornada.',
    features: ['Material reflectivo', 'Identifica al brigadista', 'Fácil de poner y quitar'], alt: 'Mano sosteniendo un brazalete reflectivo con la palabra Brigadista',
  },
  {
    id: 'silbato-emergencia', image: '/assets/products/silbato-emergencia.png', name: 'Silbato de Emergencia Profesional', price: 0, category: 'Vial y emergencia',
    description: 'Silbato de sonido fuerte para dar alertas, coordinar evacuaciones y señalizar en emergencias.',
    features: ['Sonido fuerte y agudo', 'Liviano, con cordón para colgar', 'Para brigadas, evacuaciones y deporte'], alt: 'Mano sosteniendo un silbato de emergencia amarillo con cordón',
  },
  {
    id: 'senal-vial-atril', image: '/assets/products/senal-vial-atril.png', name: 'Señal Vial Preventiva con Atril', price: 0, category: 'Vial y emergencia',
    description: 'Señal naranja de trabajos en la vía, con atril de soporte, para avisar a conductores y peatones.',
    features: ['Rombo naranja de alta visibilidad', 'Atril de soporte incluido', 'Para obras y trabajos en vía'], alt: 'Señal vial naranja en forma de rombo con símbolo de maquinaria y atril',
  },
  {
    id: 'tambor-vial', image: '/assets/products/tambor-vial.png', name: 'Tambor Vial Reflectivo', price: 0, category: 'Vial y emergencia',
    description: 'Tambor naranja y blanco con bandas reflectivas para delimitar zonas de obra y canalizar el tránsito.',
    features: ['Bandas reflectivas', 'Cuerpo plástico resistente', 'Para canalizar tránsito y demarcar obras'], alt: 'Tambor vial plástico naranja y blanco con bandas reflectivas',
  },
  {
    id: 'conos-viales', image: '/assets/products/conos-viales.png', name: 'Conos Viales', price: 0, category: 'Vial y emergencia',
    description: 'Conos de tráfico con banda reflectiva para demarcar áreas de trabajo, parqueaderos y vías.',
    features: ['Banda reflectiva', 'Base estable', 'Varios colores disponibles'], alt: 'Cono vial naranja con bandas reflectivas blancas',
  },
  {
    id: 'barrera-vial', image: '/assets/products/barrera-vial.png', name: 'Barrera Vial Plástica', price: 0, category: 'Vial y emergencia',
    description: 'Barrera plástica roja para cerrar carriles, áreas de obra y espacios de eventos.',
    features: ['Estructura plástica resistente', 'Fácil de instalar y mover', 'Para cierres de vía, obras y eventos'], alt: 'Barrera vial plástica roja junto a un delineador naranja',
  },
  {
    id: 'delineador-vial', image: '/assets/products/delineador-vial.png', name: 'Delineador Vial con Base', price: 0, category: 'Vial y emergencia',
    description: 'Poste delineador naranja con base para separar carriles y marcar zonas de circulación.',
    features: ['Poste flexible de alta visibilidad', 'Base estable', 'Para separar carriles y áreas'], alt: 'Poste delineador vial naranja con bandas reflectivas y base',
  },
  {
    id: 'malla-seguridad', image: '/assets/products/malla-seguridad.png', name: 'Malla de Seguridad', price: 0, category: 'Vial y emergencia',
    description: 'Malla plástica en rollo para cercar y avisar zonas de obra o excavación.',
    features: ['Colores vivos de alta visibilidad', 'Liviana y fácil de instalar', 'Presentación en rollo'], alt: 'Rollos de malla de seguridad plástica verde y roja',
  },
]

const CAROUSEL_IDS = [
  'pulidora-ranger-pro',
  'kit-soldadura-profesional',
  'casco-naranja',
  'camisa-trabajo',
  'chaleco-tipo-iii',
  'ventosa-doble',
]

export const CAROUSEL = CAROUSEL_IDS
  .map((id) => PRODUCTS.find((p) => p.id === id)!)
  .filter(Boolean)

const PNG_PRODUCT_IDS = new Set([
  // Herramientas
  'pulidora-ranger-pro',
  'esmeriladora-dewalt',
  'hidrolavadora-1800w',
  'mototool-rectificador',
  'escobilla-circular',
  'guadanadora-manual',
  'protector-hombro-guadanadora',
  'pala-redonda',
  'ventosa-doble',
  'linternas-led',
  'bascula-colgante',
  // Soldadura
  'careta-soldadura-decorada',
  'careta-soldadura-filtro',
  'chaqueta-soldador-carnaza',
  'kit-soldadura-profesional',
  'kit-soldadura-completo',
  'horno-secado-electrodos',
  // Seguridad
  'casco-naranja',
  'respirador-3m',
  'casco-reflectivo',
  'guantes-antigolpes',
  'guante-anticorte',
  'guantes-nitrilo',
  'guante-tupsafe',
  'bota-industrial',
  'bota-caterpillar',
  'bota-steel-worker',
  'protector-solar-cuello',
  'sombrilla-industrial',
  // Dotación
  'polo-alta-visibilidad',
  'bata-industrial',
  'polo-manga-larga',
  'uniforme-medico',
  'delantal-industrial',
  'camisa-denim',
  'camiseta-manga-larga',
  'camisa-trabajo',
  // Vial y emergencia
  'chaleco-tipo-iii',
  'salvavidas-aro',
  'remo-madera',
  'extintores',
  'brazalete-brigadista',
  'silbato-emergencia',
  'senal-vial-atril',
  'tambor-vial',
  'conos-viales',
  'barrera-vial',
  'delineador-vial',
  'malla-seguridad',
])

export const imgOf = (p: Pick<Product, 'id'> & { image?: string }) => {
  if (p.image) return p.image
  const ext = PNG_PRODUCT_IDS.has(p.id) ? 'png' : 'webp'
  return `/assets/products/${p.id}.${ext}?v=4`
}

const cop = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
/** Precio en pesos colombianos; con 0 (o sin precio definido) muestra «Consultar precio». */
export const formatPrice = (n: number) => (n > 0 ? cop.format(n) : 'Consultar precio')
