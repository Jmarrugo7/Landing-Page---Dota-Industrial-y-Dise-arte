import type { ProductKind } from '../three/builders'

export type Category =
  | 'Herramientas'
  | 'Soldadura'
  | 'Seguridad'
  | 'Dotación'
  | 'Vial y emergencia'
  | 'Salud y primeros auxilios'
  | 'Alturas e izaje'
  | 'Aseo y almacenamiento'
export const CATEGORIES: ('Todos' | Category)[] = [
  'Todos',
  'Herramientas',
  'Soldadura',
  'Seguridad',
  'Dotación',
  'Vial y emergencia',
  'Salud y primeros auxilios',
  'Alturas e izaje',
  'Aseo y almacenamiento',
]

export interface Product {
  /** Identificador único. También es el nombre de la imagen: /assets/products/<id>.webp */
  id: string
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
    id: 'pulidora-ranger-pro', name: 'Pulidora Inalámbrica 20V Ranger Pro', price: 0, category: 'Herramientas', featured: true, inCarousel: true,
    description: 'Pulidora angular a batería: potencia y libertad de movimiento, sin cables.',
    features: ['20V de potencia', 'Disco de 4-1/2"', 'Hasta 7000 RPM'], alt: 'Caja de la pulidora inalámbrica Ranger Pro de 20 voltios',
  },
  {
    id: 'esmeriladora-dewalt', model: 'esmeriladora', name: 'Esmeriladora Angular DeWalt', price: 0, category: 'Herramientas',
    description: 'Esmeriladora angular DeWalt de uso profesional para cortar, desbastar y pulir metal.',
    features: ['Marca DeWalt, reconocida en herramienta profesional', 'Para corte, desbaste y pulido de metal', 'Referencia DWE4120'], alt: 'Cajas de esmeriladoras angulares DeWalt apiladas',
  },
  {
    id: 'hidrolavadora-1800w', name: 'Hidrolavadora de Alta Presión 1800W', price: 0, category: 'Herramientas',
    description: 'Limpieza a alta presión de vehículos, pisos, fachadas y maquinaria.',
    features: ['Motor de 1800 W', 'Chorro de alta presión', 'Para uso doméstico e industrial'], alt: 'Caja de la hidrolavadora de alta presión de 1800 vatios',
  },
  {
    id: 'mototool-rectificador', name: 'Mototool Rectificador Eléctrico Profesional', price: 0, category: 'Herramientas',
    description: 'Herramienta rotativa de precisión para rectificar, pulir, cortar y dar acabados.',
    features: ['Motor eléctrico de uso profesional', 'Ideal para trabajos de detalle', 'Se usa con distintos accesorios de corte y pulido'], alt: 'Mototool rectificador eléctrico sostenido en la mano',
  },
  {
    id: 'escobilla-circular', name: 'Escobilla Circular de Acero 6"', price: 0, category: 'Herramientas',
    description: 'Cepillo de alambre de acero para quitar óxido, pintura y residuos de soldadura en superficies metálicas.',
    features: ['Diámetro de 6 pulgadas', 'Alambre de acero resistente', 'Acabado uniforme en metal'], alt: 'Escobilla circular de alambre de acero de 6 pulgadas',
  },
  {
    id: 'guadanadora-manual', name: 'Guadañadora Manual con Arnés Profesional', price: 0, category: 'Herramientas',
    description: 'Guadañadora con arnés para desmalezar con más comodidad y control durante toda la jornada.',
    features: ['Arnés de hombros incluido', 'Reparte mejor el peso al trabajar', 'Para corte de maleza y mantenimiento de zonas verdes'], alt: 'Arnés profesional de guadañadora puesto sobre un overol blanco',
  },
  {
    id: 'protector-hombro-guadanadora', name: 'Protector Ergonómico para Hombro de Guadañadora', price: 0, category: 'Herramientas',
    description: 'Almohadilla que reduce la presión del arnés sobre el hombro y mejora la comodidad al guadañar.',
    features: ['Diseño ergonómico', 'Disminuye la fatiga y la presión en el hombro', 'Se ajusta al arnés de la guadañadora'], alt: 'Hombre con protector ergonómico de hombro y correa cruzada',
  },
  {
    id: 'pala-redonda', name: 'Pala Redonda para Construcción y Jardinería', price: 0, category: 'Herramientas',
    description: 'Pala de punta redonda con mango de madera, ideal para excavar, mover tierra y sembrar.',
    features: ['Hoja de acero de punta redonda', 'Mango de madera con empuñadura en D', 'Para obra, huerta y jardín'], alt: 'Pala redonda de acero con mango de madera sobre el piso',
  },
  {
    id: 'ventosa-doble', name: 'Ventosa Doble para Manipulación de Vidrio', price: 0, category: 'Herramientas',
    description: 'Ventosa de succión doble para levantar y mover vidrio, cerámica y láminas lisas con agarre firme.',
    features: ['Doble copa de succión', 'Mango para un agarre cómodo', 'Para vidrio, baldosas y superficies lisas'], alt: 'Ventosa doble amarilla para cargar vidrio',
  },
  {
    id: 'linternas-led', name: 'Linternas y Lámparas de Trabajo LED', price: 0, category: 'Herramientas',
    description: 'Iluminación portátil para trabajo, mantenimiento y emergencias, en varios tamaños y modelos.',
    features: ['Luz LED de alto rendimiento', 'Diseños compactos y fáciles de llevar', 'Varios modelos disponibles'], alt: 'Cuatro linternas LED de distintos tamaños sobre una mesa de madera',
  },
  {
    id: 'bascula-colgante', name: 'Báscula Electrónica Colgante Industrial', price: 0, category: 'Herramientas',
    description: 'Báscula digital de gancho para pesar cargas pesadas, sacos y mercancía.',
    features: ['Pantalla digital', 'Diseño colgante con gancho', 'Para uso industrial, agrícola y comercial'], alt: 'Báscula electrónica colgante pesando un animal de granja',
  },

  // ───────── Soldadura ─────────
  {
    id: 'careta-soldadura-decorada', name: 'Careta para Soldadura Decorada', price: 0, category: 'Soldadura', inCarousel: true,
    description: 'La misma protección de una careta profesional, con diseño llamativo para soldadores con estilo.',
    features: ['Diseño gráfico decorado', 'Filtro protector incluido', 'Banda ajustable'], alt: 'Careta de soldadura con diseño gráfico de colores',
  },
  {
    id: 'careta-soldadura-filtro', name: 'Careta para Soldadura con Filtro Protector', price: 0, category: 'Soldadura',
    description: 'Careta de soldador con filtro que protege rostro y ojos del arco, las chispas y la radiación.',
    features: ['Filtro protector para el arco de soldadura', 'Cubre rostro y cuello', 'Banda ajustable para un uso cómodo'], alt: 'Careta de soldadura azul con filtro protector',
  },
  {
    id: 'chaqueta-soldador-carnaza', name: 'Chaqueta para Soldador en Carnaza', price: 0, category: 'Soldadura',
    description: 'Chaqueta de carnaza que protege torso y brazos de chispas, salpicaduras y calor en trabajos de soldadura.',
    features: ['Carnaza resistente al calor y a las chispas', 'Manga larga', 'Protege torso y brazos'], alt: 'Hombre con chaqueta amarilla de carnaza para soldador',
  },
  {
    id: 'kit-soldadura-profesional', name: 'Kit Profesional para Soldadura y Oxicorte', price: 0, category: 'Soldadura',
    description: 'Equipo en maletín para soldar y cortar con oxicorte, listo para llevar a obra o taller.',
    features: ['Maletín rígido de transporte', 'Reguladores con manómetros y mangueras', 'Para soldadura y oxicorte'], alt: 'Maletín abierto con kit de soldadura y oxicorte, manómetros y mangueras',
  },
  {
    id: 'kit-soldadura-completo', name: 'Kit Completo para Soldadura y Oxicorte', price: 0, category: 'Soldadura',
    description: 'Kit ampliado que suma accesorios y elementos de protección para el soldador.',
    features: ['Equipo de soldadura y oxicorte', 'Accesorios de protección incluidos', 'Todo en un solo kit'], alt: 'Caretas de soldadura, guantes y accesorios de protección del kit completo',
  },
  {
    id: 'horno-secado-electrodos', name: 'Horno Portátil para Secado de Electrodos', price: 0, category: 'Soldadura',
    description: 'Horno portátil que mantiene los electrodos secos y listos para usar, evitando que la humedad dañe la soldadura.',
    features: ['Conserva los electrodos libres de humedad', 'Portátil, fácil de mover', 'Ayuda a evitar poros en la soldadura'], alt: 'Horno portátil amarillo para secar electrodos de soldadura',
  },

  // ───────── Seguridad ─────────
  {
    id: 'casco-naranja', name: 'Casco de Seguridad Industrial Naranja', price: 0, category: 'Seguridad', inCarousel: true,
    description: 'Casco naranja de alta visibilidad para proteger la cabeza en obra, industria y mantenimiento.',
    features: ['Color naranja de alta visibilidad', 'Casquete resistente a impactos', 'Suspensión interna ajustable'], alt: 'Mano sosteniendo un casco de seguridad naranja',
  },
  {
    id: 'respirador-3m', name: 'Respirador Reutilizable 3M con Filtros P100', price: 0, category: 'Seguridad', inCarousel: true,
    description: 'Respirador de media cara 3M con filtros P100 para trabajar con polvo, humos y partículas.',
    features: ['Marca 3M', 'Filtros P100 incluidos', 'Reutilizable, con filtros reemplazables'], alt: 'Respirador de media cara 3M con dos filtros rosados P100',
  },
  {
    id: 'casco-reflectivo', model: 'casco', name: 'Casco de Seguridad Industrial con Reflectivo', price: 0, category: 'Seguridad',
    description: 'Casco amarillo con cinta reflectiva que protege la cabeza y mejora la visibilidad en obra y en trabajos nocturnos.',
    features: ['Cinta reflectiva visible', 'Casquete resistente a impactos', 'Suspensión interna ajustable'], alt: 'Casco de seguridad amarillo con cinta reflectiva',
  },
  {
    id: 'guantes-antigolpes', name: 'Guantes Antigolpes de Alta Protección', price: 0, category: 'Seguridad',
    description: 'Guantes con refuerzos que amortiguan golpes y aplastamientos en trabajos pesados.',
    features: ['Protecciones antigolpes en dorso y dedos', 'Agarre firme en la palma', 'Para trabajos pesados y manejo de herramientas'], alt: 'Mano con guante antigolpes morado con refuerzos en los dedos',
  },
  {
    id: 'guante-anticorte', name: 'Guante de Seguridad Anticorte Nivel Profesional', price: 0, category: 'Seguridad',
    description: 'Guante liviano que protege las manos de cortes al manipular objetos filosos.',
    features: ['Resistente al corte', 'Ajuste cómodo y flexible', 'Para vidrio, láminas y piezas metálicas'], alt: 'Mano con guante anticorte gris y puño azul',
  },
  {
    id: 'guantes-nitrilo', name: 'Guantes de Nitrilo Desechables', price: 0, category: 'Seguridad',
    description: 'Guantes desechables de nitrilo para limpieza, salud, alimentos y mecánica, con buen tacto y sin látex.',
    features: ['Nitrilo libre de látex', 'Caja de 100 unidades', 'Ajuste cómodo y buena sensibilidad'], alt: 'Cajas de guantes de nitrilo desechables azules y negros',
  },
  {
    id: 'guante-tupsafe', name: 'Guante de Seguridad Premium Multipropósito TUPSAFE', price: 0, category: 'Seguridad',
    description: 'Guante de uso general que combina protección, agarre y comodidad para distintas labores.',
    features: ['Material resistente y flexible', 'Agarre firme', 'Uso multipropósito: obra, taller y logística'], alt: 'Mano con guante negro de seguridad multipropósito TUPSAFE',
  },
  {
    id: 'bota-industrial', name: 'Bota de Seguridad Industrial', price: 0, category: 'Seguridad',
    description: 'Bota de trabajo con suela antideslizante, para obra, taller y planta.',
    features: ['Construcción resistente para uso diario', 'Suela antideslizante', 'Diseño cómodo para jornadas largas'], alt: 'Mano sosteniendo una bota de seguridad industrial gris con detalles amarillos',
  },
  {
    id: 'bota-caterpillar', name: 'Bota de Seguridad Caterpillar Industrial', price: 0, category: 'Seguridad',
    description: 'Bota de la marca Caterpillar, reconocida por su durabilidad en trabajos exigentes.',
    features: ['Marca Caterpillar', 'Diseño resistente para uso rudo', 'Comodidad y soporte en todo el pie'], alt: 'Bota de seguridad Caterpillar color miel sostenida en la mano',
  },
  {
    id: 'bota-steel-worker', name: 'Bota de Seguridad Steel Worker', price: 0, category: 'Seguridad',
    description: 'Bota de cuero café con diseño robusto para obra, mantenimiento y trabajo pesado.',
    features: ['Cuero resistente', 'Diseño robusto de media caña', 'Para obra, mantenimiento y trabajo pesado'], alt: 'Bota de seguridad Steel Worker de cuero café',
  },
  {
    id: 'protector-solar-cuello', name: 'Protector Solar para Cuello y Nuca', price: 0, category: 'Seguridad',
    description: 'Protector de tela que cubre cuello y nuca del sol en trabajos al aire libre.',
    features: ['Cubre cuello y nuca', 'Tela liviana, pensada para usar con casco o gorra', 'Para obra, campo y trabajo a la intemperie'], alt: 'Persona con protector amarillo que cubre cuello y nuca',
  },
  {
    id: 'sombrilla-industrial', name: 'Sombrilla Industrial para Sol y Lluvia', price: 0, category: 'Seguridad',
    description: 'Sombrilla de gran tamaño para trabajar a la sombra y que la lluvia no pare la producción.',
    features: ['Cubre del sol y de la lluvia', 'Gran cobertura para puestos de trabajo', 'Colores vivos y visibles'], alt: 'Sombrilla industrial grande de colores abierta',
  },

  // ───────── Dotación ─────────
  {
    id: 'polo-alta-visibilidad', name: 'Polo Industrial de Alta Visibilidad', price: 0, category: 'Dotación', inCarousel: true,
    description: 'Polo de color vivo para que el trabajador sea visto fácilmente en obra, vías y zonas de operación.',
    features: ['Color naranja de alta visibilidad', 'Cuello tipo polo', 'Para obra, cuadrillas y trabajo en vía'], alt: 'Mujer con polo industrial naranja de alta visibilidad y casco',
  },
  {
    id: 'bata-industrial', name: 'Bata Industrial de Protección', price: 0, category: 'Dotación',
    description: 'Bata blanca de manga larga para laboratorio, planta y talleres donde se necesita protección y buena presentación.',
    features: ['Manga larga con cierre frontal', 'Tela cómoda y resistente', 'Para laboratorios, talleres y plantas'], alt: 'Hombre con bata blanca industrial dentro de la tienda',
  },
  {
    id: 'polo-manga-larga', name: 'Camisa Polo Industrial de Manga Larga', price: 0, category: 'Dotación',
    description: 'Polo de manga larga para jornadas en obra, taller o campo, con más cobertura en los brazos.',
    features: ['Manga larga', 'Cuello tipo polo', 'Tela cómoda para uso diario'], alt: 'Hombre con camisa polo industrial azul oscuro de manga larga',
  },
  {
    id: 'uniforme-medico', name: 'Uniforme Médico Antifluido (Scrub)', price: 0, category: 'Dotación',
    description: 'Conjunto de scrub antifluido para personal de salud, odontología y estética, fácil de lavar y de usar.',
    features: ['Tela antifluido', 'Conjunto de blusa y pantalón', 'Varios colores disponibles'], alt: 'Mujer con uniforme médico scrub rosado',
  },
  {
    id: 'delantal-industrial', name: 'Delantal Industrial de Protección', price: 0, category: 'Dotación',
    description: 'Delantal de cuerpo completo para proteger la ropa en talleres, soldadura y trabajos con suciedad o salpicaduras.',
    features: ['Cubre del pecho a las rodillas', 'Material resistente al uso rudo', 'Se ajusta al cuerpo'], alt: 'Persona con delantal industrial blanco sobre camisa azul',
  },
  {
    id: 'camisa-denim', name: 'Camisa Industrial de Trabajo en Denim', price: 0, category: 'Dotación',
    description: 'Camisa de denim para trabajo pesado: dura más y mantiene buena presentación.',
    features: ['Tela denim resistente', 'Manga larga', 'Ideal para uso rudo en taller y obra'], alt: 'Hombre con camisa de trabajo azul en denim y casco verde',
  },
  {
    id: 'camiseta-manga-larga', name: 'Camiseta Industrial Manga Larga', price: 0, category: 'Dotación',
    description: 'Camiseta de manga larga para dotación de personal, cómoda para toda la jornada.',
    features: ['Manga larga', 'Ajuste cómodo', 'Práctica para dotación de equipos de trabajo'], alt: 'Hombre con camiseta industrial azul oscuro de manga larga',
  },
  {
    id: 'camisa-trabajo', name: 'Camisa de Trabajo Industrial Manga Larga', price: 0, category: 'Dotación',
    description: 'Camisa de manga larga, con cuello clásico, para dotación de empresas y trabajos de planta o campo.',
    features: ['Manga larga', 'Cuello clásico', 'Cómoda y duradera'], alt: 'Hombre con camisa de trabajo blanca de manga larga',
  },

  // ───────── Vial y emergencia ─────────
  {
    id: 'chaleco-tipo-iii', name: 'Chaleco Salvavidas Tipo III', price: 0, category: 'Vial y emergencia', inCarousel: true,
    description: 'Chaleco salvavidas Tipo III, cómodo y de colores visibles, para aguas tranquilas y trabajo cerca del agua.',
    features: ['Flotación Tipo III para aguas tranquilas', 'Colores naranja y azul, fáciles de ubicar', 'Ajustable con cierres y correas'], alt: 'Chaleco salvavidas Tipo III naranja y azul sobre una embarcación',
  },
  {
    id: 'chaleco-salvavidas', name: 'Chaleco Salvavidas Industrial', price: 0, category: 'Vial y emergencia',
    description: 'Chaleco salvavidas de trabajo, con bandas reflectivas, para personal que opera cerca del agua.',
    features: ['Color naranja con bandas reflectivas', 'Ajustable con correas y cierres', 'Para trabajo en embarcaciones y cerca del agua'], alt: 'Chaleco salvavidas industrial naranja con bandas reflectivas',
  },
  {
    id: 'salvavidas-aro', name: 'Salvavidas Tipo Aro', price: 0, category: 'Vial y emergencia',
    description: 'Aro flotante con cuerda perimetral para lanzar a una persona en el agua durante un rescate.',
    features: ['Aro flotante rojo con bandas reflectivas', 'Cuerda perimetral para agarrarse', 'Fácil de lanzar en emergencias'], alt: 'Aro salvavidas rojo con bandas reflectivas y dos remos',
  },
  {
    id: 'remo-madera', name: 'Remo de Madera para Embarcaciones', price: 0, category: 'Vial y emergencia',
    description: 'Remo de madera para botes y lanchas pequeñas, resistente y de buen agarre.',
    features: ['Madera resistente', 'Pala ancha para mejor impulso', 'Para botes y embarcaciones pequeñas'], alt: 'Dos remos de madera cruzados frente a un aro salvavidas',
  },
  {
    id: 'extintores', name: 'Extintores y Equipos Contra Incendios', price: 0, category: 'Vial y emergencia',
    description: 'Extintores y equipos para prevenir y atender conatos de incendio en empresas, obras y vehículos.',
    features: ['Extintores de distintos tipos y capacidades', 'Equipos para prevención y control de incendios', 'Para empresas, obras y vehículos'], alt: 'Extintores rojos, verde, amarillo y plateado junto a una manguera',
  },
  {
    id: 'brazalete-brigadista', name: 'Brazalete Reflectivo para Brigadistas', price: 0, category: 'Vial y emergencia',
    description: 'Brazalete que identifica al brigadista y lo hace visible en cualquier momento de la jornada.',
    features: ['Material reflectivo', 'Identifica al brigadista', 'Fácil de poner y quitar'], alt: 'Mano sosteniendo un brazalete reflectivo con la palabra Brigadista',
  },
  {
    id: 'silbato-emergencia', name: 'Silbato de Emergencia Profesional', price: 0, category: 'Vial y emergencia',
    description: 'Silbato de sonido fuerte para dar alertas, coordinar evacuaciones y señalizar en emergencias.',
    features: ['Sonido fuerte y agudo', 'Liviano, con cordón para colgar', 'Para brigadas, evacuaciones y deporte'], alt: 'Mano sosteniendo un silbato de emergencia amarillo con cordón',
  },
  {
    id: 'senal-vial-atril', name: 'Señal Vial Preventiva con Atril', price: 0, category: 'Vial y emergencia',
    description: 'Señal naranja de trabajos en la vía, con atril de soporte, para avisar a conductores y peatones.',
    features: ['Rombo naranja de alta visibilidad', 'Atril de soporte incluido', 'Para obras y trabajos en vía'], alt: 'Señal vial naranja en forma de rombo con símbolo de maquinaria y atril',
  },
  {
    id: 'tambor-vial', name: 'Tambor Vial Reflectivo', price: 0, category: 'Vial y emergencia',
    description: 'Tambor naranja y blanco con bandas reflectivas para delimitar zonas de obra y canalizar el tránsito.',
    features: ['Bandas reflectivas', 'Cuerpo plástico resistente', 'Para canalizar tránsito y demarcar obras'], alt: 'Tambor vial plástico naranja y blanco con bandas reflectivas',
  },
  {
    id: 'conos-viales', name: 'Conos Viales', price: 0, category: 'Vial y emergencia',
    description: 'Conos de tráfico con banda reflectiva para demarcar áreas de trabajo, parqueaderos y vías.',
    features: ['Banda reflectiva', 'Base estable', 'Varios colores disponibles'], alt: 'Cono vial naranja con bandas reflectivas blancas',
  },
  {
    id: 'barrera-vial', name: 'Barrera Vial Plástica', price: 0, category: 'Vial y emergencia',
    description: 'Barrera plástica roja para cerrar carriles, áreas de obra y espacios de eventos.',
    features: ['Estructura plástica resistente', 'Fácil de instalar y mover', 'Para cierres de vía, obras y eventos'], alt: 'Barrera vial plástica roja junto a un delineador naranja',
  },
  {
    id: 'delineador-vial', name: 'Delineador Vial con Base', price: 0, category: 'Vial y emergencia',
    description: 'Poste delineador naranja con base para separar carriles y marcar zonas de circulación.',
    features: ['Poste flexible de alta visibilidad', 'Base estable', 'Para separar carriles y áreas'], alt: 'Poste delineador vial naranja con bandas reflectivas y base',
  },
  {
    id: 'malla-seguridad', name: 'Malla de Seguridad', price: 0, category: 'Vial y emergencia',
    description: 'Malla plástica en rollo para cercar y avisar zonas de obra o excavación.',
    features: ['Colores vivos de alta visibilidad', 'Liviana y fácil de instalar', 'Presentación en rollo'], alt: 'Rollos de malla de seguridad plástica verde y roja',
  },

  // ───────── Herramientas (actualización V2/V3) ─────────
  {
    id: 'carretilla-espaldar', name: 'Carretilla Ángulo Plana con Espaldar', price: 0, category: 'Herramientas',
    description: 'Carretilla de carga en ángulo de acero, plana o curva, para mover mercancía, bultos y materiales pesados.',
    features: ['Capacidad de 400 kilos', 'Ruedas de 8" en poliuretano con balinera sellada', 'Sin mantenimiento ni engrase'], alt: 'Dos carretillas rojas de carga con espaldar y ruedas azules',
  },
  {
    id: 'pala-corta-mango-d', name: 'Pala Corta con Mango de Madera', price: 0, category: 'Herramientas',
    description: 'Pala de punta redonda con mango corto y empuñadura en D, práctica para cavar en espacios reducidos.',
    features: ['Hoja de acero de punta redonda', 'Mango de madera con empuñadura en D', 'Fácil de guardar y transportar'], alt: 'Pala corta de punta redonda con mango de madera y empuñadura en D',
  },
  {
    id: 'terrajas-tuberia', name: 'Juego de Terrajas para Tubería', price: 0, category: 'Herramientas',
    description: 'Juego de dados roscadores para hacer rosca en tubería, en maletín rígido listo para llevar.',
    features: ['Varios dados para distintos diámetros', 'Incluye maletín rígido de transporte', 'Para obra, taller y plomería'], alt: 'Maletín rojo con juego de terrajas y dados roscadores para tubería',
  },
  {
    id: 'lijadora-orbital', name: 'Lijadora Orbital 5" Ranger Pro', price: 0, category: 'Herramientas',
    description: 'Lijadora eléctrica orbital para dejar madera, pintura y superficies con un acabado parejo.',
    features: ['Plato orbital de 5 pulgadas', 'Marca Ranger Pro', 'Cuerpo ergonómico fácil de sostener'], alt: 'Mano sosteniendo una lijadora orbital Ranger Pro de 5 pulgadas',
  },
  {
    id: 'calibrador-digital', name: 'Calibrador Digital (Pie de Rey)', price: 0, category: 'Herramientas',
    description: 'Calibrador con pantalla digital para medir con precisión espesores, diámetros y profundidades.',
    features: ['Pantalla digital de lectura clara', 'Cuerpo en acero inoxidable', 'Mide exteriores, interiores y profundidad'], alt: 'Mano sosteniendo un calibrador digital Ranger',
  },
  {
    id: 'rotomartillo-ranger', name: 'Rotomartillo Inalámbrico 1" 20V Ranger Pro', price: 0, category: 'Herramientas',
    description: 'Rotomartillo a batería para perforar y demoler en concreto y mampostería, sin depender de un cable.',
    features: ['20V con batería de litio', 'Marca Ranger Pro', 'Para concreto, ladrillo y mampostería'], alt: 'Rotomartillo inalámbrico amarillo y negro sobre un bloque de concreto',
  },
  {
    id: 'mezclador-inalambrico', name: 'Mezclador Inalámbrico 20V', price: 0, category: 'Herramientas',
    description: 'Mezclador a batería para preparar pintura, estuco, mortero y resinas con buena potencia.',
    features: ['20V con batería de litio', 'Doble batería', 'Velocidad de 850 RPM'], alt: 'Mezclador inalámbrico amarillo con paleta de mezcla',
  },
  {
    id: 'flexometro-stanley', name: 'Flexómetros Stanley', price: 0, category: 'Herramientas',
    description: 'Flexómetros Stanley con cinta retráctil para medir con rapidez en obra, taller y hogar.',
    features: ['Marca Stanley', 'Cinta retráctil con carcasa resistente', 'Disponibles en varias medidas'], alt: 'Seis flexómetros Stanley amarillos en su empaque',
  },
  {
    id: 'esmeriladora-stanley', name: 'Esmeriladora Angular Stanley', price: 0, category: 'Herramientas',
    description: 'Esmeriladora angular compacta para cortar, desbastar y pulir metal.',
    features: ['Marca Stanley', 'Mango lateral para mayor control', 'Para corte y desbaste de metal'], alt: 'Esmeriladora angular Stanley amarilla con disco',
  },
  {
    id: 'tronzadora-14', name: 'Tronzadora 14" Ranger Pro', price: 0, category: 'Herramientas',
    description: 'Tronzadora de disco para cortar perfiles, tubos y varilla de forma rápida y recta.',
    features: ['Disco de 14 pulgadas', 'Marca Ranger Pro', 'Para perfiles, tubería y varilla'], alt: 'Caja y tronzadora de 14 pulgadas Ranger Pro amarilla',
  },
  {
    id: 'compresor-20l', name: 'Compresor de Aire 20 Litros', price: 0, category: 'Herramientas',
    description: 'Compresor de aire de acople directo para taller, pintura, llantas y limpieza.',
    features: ['Motor de 2.0 HP', 'Tanque de 20 litros, hasta 125 PSI', 'Caudal de 6.0 CFM, 110 V, incluye aceite'], alt: 'Compresor de aire rojo de 20 litros con manómetros',
  },
  {
    id: 'manguera-compresor-15m', name: 'Manguera para Compresor de 15 m', price: 0, category: 'Herramientas',
    description: 'Manguera de PVC reforzada para compresor, con conectores listos para usar.',
    features: ['Longitud de 15 metros', 'Presión de trabajo de hasta 300 PSI', 'Conectores de 1/4" NPT'], alt: 'Rollo de manguera amarilla de 15 metros para compresor',
  },
  {
    id: 'kit-aerografo', name: 'Kit de Aerógrafo', price: 0, category: 'Herramientas',
    description: 'Aerógrafo con frascos y accesorios para pintura de detalle, manualidades y retoques.',
    features: ['Incluye frascos de pintura', 'Accesorios en estuche', 'Para trabajos de detalle y acabados'], alt: 'Estuche transparente con aerógrafo, frascos y accesorios',
  },
  {
    id: 'fumigadora-20l', name: 'Fumigadora de 20 Litros', price: 0, category: 'Herramientas',
    description: 'Fumigadora de espalda para aplicar agua, fertilizantes, herbicidas y plaguicidas en jardín y cultivo.',
    features: ['Capacidad de 20 litros, tipo espalda', 'Boquilla ajustable y bloqueo del gatillo', 'Lanza de 60 cm y manguera de 1,2 m'], alt: 'Fumigadora roja de espalda de 20 litros',
  },
  {
    id: 'alicate-presion', name: 'Alicate de Presión', price: 0, category: 'Herramientas',
    description: 'Alicate de mordaza regulable que sujeta la pieza con firmeza, ideal para soldar, aflojar o fijar.',
    features: ['Mordaza de presión regulable', 'Acero resistente', 'Para sujetar, soldar y aflojar piezas'], alt: 'Mano sosteniendo un alicate de presión de acero',
  },
  {
    id: 'balde-caucho', name: 'Balde de Caucho para Construcción', price: 0, category: 'Herramientas',
    description: 'Balde flexible de caucho con asa metálica para cargar mezcla, escombro y materiales en obra.',
    features: ['Caucho flexible y resistente', 'Asa metálica para cargar', 'Para mezcla, escombro y materiales'], alt: 'Balde de caucho negro con asa metálica',
  },
  {
    id: 'rastrillo-metalico', name: 'Rastrillo Metálico', price: 0, category: 'Herramientas',
    description: 'Rastrillo de dientes metálicos con mango de madera para nivelar tierra, arena y mezcla.',
    features: ['Cabezal metálico de dientes', 'Mango largo de madera', 'Para nivelar tierra, arena y mezcla'], alt: 'Rastrillo metálico con mango de madera',
  },
  {
    id: 'pico-mango', name: 'Pico con Mango de Madera', price: 0, category: 'Herramientas',
    description: 'Pico de acero con mango de madera para romper tierra dura, piedra y concreto.',
    features: ['Cabeza de acero resistente', 'Mango de madera', 'Para romper tierra dura, piedra y concreto'], alt: 'Pico de acero con mango de madera',
  },
  {
    id: 'pala-recta', name: 'Pala Recta de Corte', price: 0, category: 'Herramientas',
    description: 'Pala de hoja plana y borde recto para limpiar zanjas, cortar terreno y recoger material.',
    features: ['Hoja plana de acero', 'Borde recto de corte', 'Para zanjas y limpieza de terreno'], alt: 'Pala de hoja plana y borde recto',
  },
  {
    id: 'machete', name: 'Machete', price: 0, category: 'Herramientas',
    description: 'Machete de hoja larga para desmalezar y trabajos de corte en campo.',
    features: ['Hoja larga de acero', 'Mango negro con buen agarre', 'Para desmalezar y corte de monte'], alt: 'Machete de hoja larga con mango negro',
  },
  {
    id: 'lima-plana', name: 'Lima Plana', price: 0, category: 'Herramientas',
    description: 'Lima plana de acero para desbastar, afilar y dar acabado a metal y herramientas.',
    features: ['Acero templado', 'Superficie dentada para desbaste', 'Para afilar y dar acabado'], alt: 'Lima plana de acero',
  },
  {
    id: 'hacha-mango', name: 'Hacha con Mango de Madera', price: 0, category: 'Herramientas',
    description: 'Hacha de cabeza de acero y mango de madera para cortar leña y madera.',
    features: ['Cabeza de acero', 'Mango de madera', 'Para cortar leña y madera'], alt: 'Hacha con cabeza de acero y mango de madera',
  },
  {
    id: 'funda-machete', name: 'Funda de Cuero para Machete', price: 0, category: 'Herramientas',
    description: 'Funda de cuero para guardar y transportar el machete con seguridad.',
    features: ['Cuero resistente', 'Cordones de amarre', 'Protege la hoja y a quien lo carga'], alt: 'Funda de cuero naranja con cordones para machete',
  },
  {
    id: 'cuchillo-mango-madera', name: 'Cuchillo de Hoja Fija con Mango de Madera', price: 0, category: 'Herramientas',
    description: 'Cuchillo de hoja de acero con mango de madera para uso en campo y cocina.',
    features: ['Hoja de acero', 'Mango de madera rojo', 'Para uso en campo y cocina'], alt: 'Mano sosteniendo un cuchillo de mango de madera rojo',
  },
  {
    id: 'tuercas-laton', name: 'Tuercas y Racores de Latón', price: 0, category: 'Herramientas',
    description: 'Tuercas y racores de latón para conexiones de gas y fluidos en instalaciones.',
    features: ['Latón resistente a la corrosión', 'Varios tamaños de rosca', 'Para conexiones de gas y fluidos'], alt: 'Tres tuercas de latón de distintos tamaños',
  },

  // ───────── Soldadura (actualización V2/V3) ─────────
  {
    id: 'valvula-cavagna', name: 'Válvulas de Alta Presión Cavagna', price: 0, category: 'Soldadura',
    description: 'Válvulas de alta presión para cilindros de gases industriales, con cuerpo de latón forjado.',
    features: ['Entrada de 3/4"-14 NGT', 'CO2 (CGA-320), oxígeno (CGA-540) y argón, nitrógeno y helio (CGA-580)', 'Cuerpo en latón forjado'], alt: 'Válvula de latón de alta presión Cavagna para cilindros de gas',
  },
  {
    id: 'regulador-oxigeno', name: 'Regulador de Oxígeno Oxyweld', price: 0, category: 'Soldadura',
    description: 'Regulador con doble manómetro para oxígeno, en empaque de fábrica.',
    features: ['Doble manómetro', 'Perilla verde, conexión CGA 540', 'Marca Oxyweld'], alt: 'Regulador de oxígeno Oxyweld con perilla verde en su empaque',
  },
  {
    id: 'regulador-acetileno', name: 'Regulador de Acetileno Oxyweld', price: 0, category: 'Soldadura',
    description: 'Regulador con doble manómetro para acetileno, en empaque de fábrica.',
    features: ['Doble manómetro', 'Perilla roja, conexión CGA 510', 'Marca Oxyweld'], alt: 'Regulador de acetileno Oxyweld con perilla roja en su empaque',
  },
  {
    id: 'regulador-nitrogeno', name: 'Regulador de Nitrógeno Oxyweld', price: 0, category: 'Soldadura',
    description: 'Regulador con doble manómetro para nitrógeno, en empaque de fábrica.',
    features: ['Doble manómetro', 'Perilla negra, conexión CGA 580', 'Marca Oxyweld'], alt: 'Regulador de nitrógeno Oxyweld con perilla negra en su empaque',
  },
  {
    id: 'regulador-argon-flujometro', name: 'Regulador de Argón con Flujómetro', price: 0, category: 'Soldadura',
    description: 'Regulador de argón con flujómetro para controlar el caudal en soldadura TIG y MIG.',
    features: ['Flujómetro de tubo para leer el caudal', 'Manómetro de presión', 'Cuerpo en latón'], alt: 'Regulador de argón de latón con flujómetro y manómetro',
  },
  {
    id: 'soplete-corte', name: 'Soplete de Corte para Oxicorte', price: 0, category: 'Soldadura',
    description: 'Soplete en latón para cortar acero con oxígeno y gas combustible.',
    features: ['Cuerpo de latón', 'Mango largo para trabajar a distancia', 'Para oxicorte'], alt: 'Mano sosteniendo un soplete de corte de latón',
  },
  {
    id: 'conectores-cable-soldar', name: 'Conectores Rápidos para Cable de Soldadura', price: 0, category: 'Soldadura',
    description: 'Conectores de conexión rápida para unir cables de soldadura a la máquina.',
    features: ['Cuerpo aislante de caucho', 'Bornes de latón', 'Conexión y desconexión rápida'], alt: 'Dos conectores negros con bornes de latón para cable de soldadura',
  },
  {
    id: 'portaelectrodo', name: 'Portaelectrodo (Pinza) para Soldadura', price: 0, category: 'Soldadura',
    description: 'Pinza portaelectrodo de cobre con mango aislado, para sujetar el electrodo con firmeza.',
    features: ['Cuerpo de cobre', 'Mango aislado', 'Agarre firme del electrodo'], alt: 'Pinza portaelectrodo de cobre con mango negro',
  },
  {
    id: 'cable-pinza-tierra', name: 'Cable con Pinza de Tierra WeldPro', price: 0, category: 'Soldadura',
    description: 'Cable con pinza de tierra para equipos de soldadura de arco.',
    features: ['Cable flexible de soldadura', 'Pinza con mango rojo', 'Marca WeldPro'], alt: 'Cable de soldadura con pinza roja junto a su caja azul WeldPro',
  },
  {
    id: 'electrodos-tubo', name: 'Electrodos para Soldadura en Tubo', price: 0, category: 'Soldadura',
    description: 'Electrodos para soldadura de arco, empacados en tubo para conservarlos secos.',
    features: ['Para soldadura de arco con electrodo revestido', 'Tubo protector con tapa', 'Fáciles de transportar'], alt: 'Electrodos de soldadura saliendo de un tubo protector naranja',
  },
  {
    id: 'cortadora-plasma-cut45', name: 'Cortadora de Plasma CUT 45A', price: 0, category: 'Soldadura',
    description: 'Inversor de corte por plasma para cortar acero, acero inoxidable y aluminio de forma rápida y limpia.',
    features: ['45 A con tecnología IGBT y pantalla digital', 'Funciona a 110 V y 220 V, ciclo de trabajo del 60 %', 'Modos 2T/4T, incluye manguera y manómetro'], alt: 'Cortadora de plasma inversora CUT 45A roja y negra',
  },
  {
    id: 'soldadora-mig-200', name: 'Soldadora Inversora MIG-200 Ranger Pro', price: 0, category: 'Soldadura',
    description: 'Soldadora inversora MIG con panel de control para ajustar voltaje y amperaje.',
    features: ['Soldadura MIG tipo inversor', 'Marca Ranger Pro', 'Panel con perillas y pantalla'], alt: 'Soldadora inversora MIG-200 Ranger Pro con panel de control',
  },
  {
    id: 'soldadora-masso-msi200', name: 'Soldador Inversor Masso MSI-200A Digital', price: 0, category: 'Soldadura',
    description: 'Soldador inversor digital para soldadura con electrodo revestido, en caja de fábrica.',
    features: ['Referencia MSI-200A', 'Control digital', 'Para soldadura con electrodo'], alt: 'Caja del soldador inversor Masso MSI-200A digital',
  },
  {
    id: 'careta-fotosensible-rayos', name: 'Careta Fotosensible para Soldadura (Diseño Rayos)', price: 0, category: 'Soldadura',
    description: 'Careta con filtro que se oscurece solo al encender el arco, con diseño de rayos azules.',
    features: ['Filtro fotosensible de oscurecimiento automático', 'Diseño gráfico de rayos', 'Banda ajustable'], alt: 'Careta de soldar fotosensible negra con diseño de rayos azules',
  },
  {
    id: 'careta-auto-darkening', name: 'Careta de Soldar Auto-oscurecible', price: 0, category: 'Soldadura',
    description: 'Careta de soldar con filtro auto-oscurecible, empacada de forma individual.',
    features: ['Filtro de oscurecimiento automático (Auto Darkening)', 'Banda ajustable', 'Caja individual'], alt: 'Pila de cajas con caretas de soldar auto-oscurecibles',
  },
  {
    id: 'careta-pantalla-stickers', name: 'Careta de Soldar con Visor Fijo Personalizada', price: 0, category: 'Soldadura',
    description: 'Careta de soldar con visor fijo, personalizada con stickers, disponible en negro y azul.',
    features: ['Visor fijo con vidrio oscuro', 'Personalizada con stickers', 'Disponible en negro y azul'], alt: 'Careta de soldar azul con visor fijo decorada con stickers',
  },
  {
    id: 'gafas-soldar-goggles', name: 'Gafas para Soldadura (Goggles)', price: 0, category: 'Soldadura',
    description: 'Gafas tipo goggles con lente oscuro para proteger los ojos en soldadura y oxicorte.',
    features: ['Lente oscuro de protección', 'Banda elástica ajustable', 'Para soldadura y oxicorte'], alt: 'Mano sosteniendo gafas de soldadura Saco en su empaque',
  },
  {
    id: 'arnes-repuesto-careta', name: 'Arnés de Repuesto para Careta de Soldar', price: 0, category: 'Soldadura',
    description: 'Suspensión de repuesto para careta de soldar, con ajuste de perilla.',
    features: ['Ajuste con perilla trasera', 'Banda acolchada', 'Referencia Jackson 20696'], alt: 'Arnés de repuesto gris con perilla roja para careta de soldar',
  },
  {
    id: 'codera-cuero', name: 'Codera Forrada en Cuero', price: 0, category: 'Soldadura',
    description: 'Codera de cuero y neopreno que aísla el brazo de la temperatura del tubo al soldar.',
    features: ['Forrada en cuero y neopreno', 'Aísla el brazo de la temperatura', 'Correas de resorte con velcro o hebilla'], alt: 'Dos coderas de cuero con malla acolchada',
  },
  {
    id: 'kit-soldador-careta', name: 'Kit del Soldador con Careta Inteligente', price: 0, category: 'Soldadura',
    description: 'Combo con careta inteligente y herramientas de medición y marcación para el soldador.',
    features: ['Careta de soldar inteligente y gafas para corte', 'Flexómetro de 5 m, porta tiza y nivel torpedo', 'Incluye chispero'], alt: 'Kit del soldador con careta, gafas, flexómetro y nivel sobre una mesa',
  },

  // ───────── Seguridad (actualización V2/V3) ─────────
  {
    id: 'gafas-seguridad-banda', name: 'Gafas de Seguridad con Banda Elástica', price: 0, category: 'Seguridad',
    description: 'Gafas de lente oscuro con banda elástica que ajusta alrededor de la cabeza.',
    features: ['Lente oscuro', 'Banda elástica ajustable', 'Ajuste cómodo al rostro'], alt: 'Gafas de seguridad negras con banda elástica',
  },
  {
    id: 'gafas-deportivas', name: 'Gafas de Seguridad Deportivas', price: 0, category: 'Seguridad',
    description: 'Gafas de seguridad de estilo deportivo, con lentes espejados en varios colores.',
    features: ['Lentes espejados de varios colores', 'Montura liviana tipo deportivo', 'Varios modelos disponibles'], alt: 'Seis modelos de gafas de seguridad deportivas con lentes espejados',
  },
  {
    id: 'visor-malla-metalica', name: 'Visor de Malla Metálica con Casquete', price: 0, category: 'Seguridad',
    description: 'Protección facial con malla metálica y casquete, ideal para guadañar y trabajos forestales.',
    features: ['Visor de malla metálica', 'Casquete amarillo', 'Banda ajustable con matraca'], alt: 'Visor de malla metálica con casquete amarillo y banda ajustable',
  },
  {
    id: 'gorra-casquete', name: 'Gorra con Casquete Protector', price: 0, category: 'Seguridad',
    description: 'Gorra con casquete rígido interno que protege la cabeza de golpes leves.',
    features: ['Casquete rígido interno', 'Protege de golpes leves', 'Ajuste cómodo'], alt: 'Gorra negra con casquete protector blanco en su bolsa',
  },
  {
    id: 'rodilleras-espuma', name: 'Rodilleras de Espuma Antideslizantes', price: 0, category: 'Seguridad',
    description: 'Rodilleras de espuma texturizada para trabajar de rodillas con comodidad.',
    features: ['Espuma texturizada antideslizante', 'Correa ajustable con velcro', 'Colores lima, azul y rojo'], alt: 'Rodillera de espuma verde lima con correa ajustable',
  },
  {
    id: 'rodillera-lona', name: 'Rodillera de Lona con Almohadilla', price: 0, category: 'Seguridad',
    description: 'Rodillera de lona resistente con almohadilla de tacos antideslizantes.',
    features: ['Cubierta de lona resistente', 'Almohadilla con tacos', 'Ajuste con correas'], alt: 'Rodillera de lona marrón con almohadilla de tacos',
  },
  {
    id: 'mangas-anticorte', name: 'Mangas Anticorte Nivel 5 (18")', price: 0, category: 'Seguridad',
    description: 'Mangas de protección para el brazo contra cortes y raspones, delgadas y flexibles.',
    features: ['Resistencia al corte nivel 5', 'Largo de 18 pulgadas', 'Certificación EN 388'], alt: 'Manga negra anticorte nivel 5 en el antebrazo',
  },
  {
    id: 'polainas-viboreras', name: 'Polainas Viboreras Antiofídicas', price: 0, category: 'Seguridad',
    description: 'Polainas de protección antiofídica con refuerzo en policarbonato de alto impacto.',
    features: ['Protección contra corte, punzonado y mordedura de serpientes', 'Costura en meta-aramida', 'Talla universal, normas NTC 427 y NTC 230'], alt: 'Mujer con polainas viboreras negras de protección antiofídica',
  },
  {
    id: 'canillera-proteccion', name: 'Canillera de Protección', price: 0, category: 'Seguridad',
    description: 'Canillera rígida amarilla que protege la espinilla de golpes e impactos.',
    features: ['Coraza rígida amarilla', 'Extremos acolchados', 'Protege la espinilla de golpes'], alt: 'Mano sosteniendo una canillera rígida amarilla',
  },
  {
    id: 'protector-metatarsal', name: 'Protector Metatarsal', price: 0, category: 'Seguridad',
    description: 'Protector metatarsal amarillo que se ajusta sobre el calzado para proteger el empeine.',
    features: ['Coraza amarilla rígida', 'Se ajusta sobre el calzado', 'Protege el empeine de impactos'], alt: 'Protector metatarsal amarillo colocado sobre botas',
  },
  {
    id: 'guantes-surtidos', name: 'Guantes de Seguridad Surtidos', price: 0, category: 'Seguridad',
    description: 'Guantes para cada tarea: cuero, carnaza, nitrilo, PVC, anticorte e hilo con puntos.',
    features: ['Cuero, carnaza e hilo con puntos', 'Nitrilo, PVC y anticorte', 'Consulta el tipo que necesitas'], alt: 'Variedad de guantes de seguridad de cuero, PVC, nitrilo y anticorte',
  },
  {
    id: 'pasamontanas', name: 'Pasamontañas de Protección', price: 0, category: 'Seguridad',
    description: 'Pasamontañas de tela elástica que cubre cabeza, cuello y rostro del sol, el polvo y el frío.',
    features: ['Tela negra elástica', 'Cubre cabeza, cuello y rostro', 'Para sol, polvo y frío'], alt: 'Persona con pasamontañas negro y gafas espejadas',
  },
  {
    id: 'gorra-legionaria', name: 'Gorra Legionaria con Cubrenuca', price: 0, category: 'Seguridad',
    description: 'Gorra con orejeras y cubrenuca para proteger del sol y del frío.',
    features: ['Cubrenuca y orejeras', 'Tela resistente', 'Protege del sol y del frío'], alt: 'Persona con gorra legionaria negra con cubrenuca y orejeras',
  },
  {
    id: 'sombrero-cubrenuca', name: 'Sombrero con Cubrenuca', price: 0, category: 'Seguridad',
    description: 'Sombrero de ala con cubrenuca para trabajar al sol, en colores beige y azul.',
    features: ['Ala que protege del sol', 'Cubrenuca desmontable', 'Colores beige y azul'], alt: 'Sombrero beige de ala con cubrenuca',
  },
  {
    id: 'puntera-visitantes', name: 'Puntera de Seguridad para Visitantes', price: 0, category: 'Seguridad',
    description: 'Puntera que se coloca sobre el zapato para que los visitantes ingresen a planta con protección.',
    features: ['Cuero negro con puntera metálica de recubrimiento dieléctrico', 'Ajuste con elástico, talla única', 'Suela de crepé'], alt: 'Mano sosteniendo una puntera de seguridad negra para visitantes',
  },
  {
    id: 'zueco-antideslizante', name: 'Zueco Antideslizante Negro', price: 0, category: 'Seguridad',
    description: 'Zueco cómodo y liviano para trabajo en cocina, salud y servicios.',
    features: ['Material liviano', 'Suela con buen agarre', 'Tira de ajuste trasera'], alt: 'Mano sosteniendo un zueco negro con suela antideslizante',
  },
  {
    id: 'caja-bloqueo', name: 'Caja de Bloqueo y Etiquetado (Lockout)', price: 0, category: 'Seguridad',
    description: 'Cubierta rígida con candado para bloquear equipos mientras se hace mantenimiento.',
    features: ['Cubierta rígida roja', 'Se asegura con candado', 'Evita el encendido accidental'], alt: 'Caja de bloqueo roja con candado y la leyenda Danger',
  },
  {
    id: 'bota-rodeo-miel', name: 'Bota Rodeo de Cuero Miel', price: 0, category: 'Seguridad',
    description: 'Bota de caña alta en cuero color miel, cómoda y resistente, para obra y campo.',
    features: ['Cuero color miel', 'Caña alta sin cordones', 'Para obra, campo y trabajo pesado'], alt: 'Bota rodeo de cuero color miel',
  },
  {
    id: 'bota-caucho-negra', name: 'Bota de Caucho Negra de Caña Alta', price: 0, category: 'Seguridad',
    description: 'Bota de caucho de caña alta para trabajo con agua, barro y humedad.',
    features: ['Caucho impermeable', 'Caña alta', 'Para agua, barro y humedad'], alt: 'Bota de caucho negra de caña alta',
  },
  {
    id: 'bota-caucho-amarilla', name: 'Bota de Caucho Amarilla', price: 0, category: 'Seguridad',
    description: 'Bota de caucho amarilla de caña alta, fácil de ver y de lavar.',
    features: ['Caucho impermeable', 'Color amarillo de alta visibilidad', 'Fácil de lavar'], alt: 'Bota de caucho amarilla de caña alta',
  },

  // ───────── Dotación (actualización V2/V3) ─────────
  {
    id: 'bata-oxford', name: 'Bata Oxford de Trabajo', price: 0, category: 'Dotación',
    description: 'Bata de tela Oxford de manga larga para planta, laboratorio y tienda, disponible hasta talla 4XL.',
    features: ['Tela Oxford', 'Manga larga, hasta talla 4XL', 'Color azul claro'], alt: 'Hombre con bata azul clara de tela Oxford',
  },
  {
    id: 'camisa-reflectivo', name: 'Camisa Industrial con Reflectivo', price: 0, category: 'Dotación',
    description: 'Camisa de dotación con cintas reflectivas y bolsillos, en color beige con detalles azul oscuro.',
    features: ['Cintas reflectivas', 'Dos bolsillos frontales con tapa', 'Beige con detalles azul oscuro'], alt: 'Camisa industrial beige y azul oscuro con cintas reflectivas',
  },
  {
    id: 'overol-azul', name: 'Overol Industrial Azul', price: 0, category: 'Dotación',
    description: 'Overol enterizo de manga larga con cierre frontal para taller, mecánica y planta.',
    features: ['Enterizo de manga larga', 'Cierre frontal', 'Para taller, mecánica y planta'], alt: 'Hombre con overol industrial azul oscuro',
  },
  {
    id: 'chaleco-brigadista', name: 'Chaleco Brigadista Rojo', price: 0, category: 'Dotación',
    description: 'Chaleco rojo con la palabra Brigadista, para identificar a los equipos de emergencia.',
    features: ['Color rojo de alta visibilidad', 'Leyenda «Brigadista» en la espalda', 'Para brigadas de emergencia'], alt: 'Dos mujeres con chaleco rojo de brigadista y gorra roja',
  },
  {
    id: 'chaleco-multibolsillos', name: 'Chaleco Multibolsillos Verde', price: 0, category: 'Dotación',
    description: 'Chaleco de trabajo con varios bolsillos para llevar herramientas y documentos a la mano.',
    features: ['Varios bolsillos con tapa', 'Cierre frontal', 'Para campo, obra y técnicos'], alt: 'Hombre con chaleco verde multibolsillos y camisa roja',
  },
  {
    id: 'chaleco-alta-visibilidad', name: 'Chaleco de Alta Visibilidad', price: 0, category: 'Dotación',
    description: 'Chaleco color verde lima con bandas reflectivas para trabajar a la vista en obra y vías.',
    features: ['Verde lima de alta visibilidad', 'Bandas reflectivas', 'Cierre frontal'], alt: 'Mujer con chaleco de alta visibilidad verde lima y gafas',
  },
  {
    id: 'camisa-outdoor', name: 'Camisa Outdoor Manga Larga', price: 0, category: 'Dotación',
    description: 'Camisa de estilo outdoor, cómoda y ligera, en corte para mujer y para hombre.',
    features: ['Corte para mujer y para hombre', 'Colores: blanco, celeste, azul y verde', 'Manga larga con bolsillos'], alt: 'Camisa outdoor verde en modelo y colores disponibles',
  },
  {
    id: 'blusa-oxford-mujer', name: 'Camisa Oxford para Mujer', price: 0, category: 'Dotación',
    description: 'Camisa de manga larga color celeste, con cuello clásico, para dotación administrativa.',
    features: ['Manga larga', 'Cuello clásico', 'Color celeste'], alt: 'Mujer con camisa de manga larga color celeste',
  },
  {
    id: 'delantal-pvc', name: 'Delantal de PVC Amarillo', price: 0, category: 'Dotación',
    description: 'Delantal amarillo impermeable para lavado, planta y trabajos húmedos.',
    features: ['PVC amarillo impermeable', 'Cubre pecho y piernas', 'Se limpia fácil'], alt: 'Delantal de PVC amarillo',
  },
  {
    id: 'mochila-wadfow', name: 'Mochila Wadfow con Reflectivo', price: 0, category: 'Dotación',
    description: 'Mochila azul con franja reflectiva naranja, con compartimentos para llevar herramientas y dotación.',
    features: ['Franja reflectiva naranja', 'Compartimentos y bolsillo lateral', 'Marca Wadfow'], alt: 'Mochila azul Wadfow con franja reflectiva naranja',
  },
  {
    id: 'gorras-parche', name: 'Gorras Trucker con Parche', price: 0, category: 'Dotación',
    description: 'Gorras tipo trucker con parche en diferentes diseños y colores.',
    features: ['Estilo trucker con malla trasera', 'Parche en la frente', 'Varios diseños y colores'], alt: 'Gorra trucker beige con parche sostenida en la mano',
  },

  // ───────── Vial y emergencia (actualización V2/V3) ─────────
  {
    id: 'paleta-pare-siga', name: 'Paleta Pare y Siga', price: 0, category: 'Vial y emergencia',
    description: 'Paleta de doble cara para controlar el tráfico en obras, vías y zonas de alto tránsito.',
    features: ['Doble cara: PARE rojo y SIGA verde', 'Película retrorreflectiva de alta intensidad, disco de 30 cm', 'Polietileno de alta densidad con mango ergonómico'], alt: 'Paleta Pare y Siga de doble cara con mango blanco',
  },
  {
    id: 'baston-luminoso', name: 'Bastón Luminoso de Tránsito', price: 0, category: 'Vial y emergencia',
    description: 'Bastón con luz LED roja y verde para dirigir el tráfico y señalizar de noche.',
    features: ['Luz LED de alto brillo, rojo y verde', '54 cm de alto y 4 cm de diámetro', 'Material PVC y ABS, incluye adaptador de recarga'], alt: 'Bastones luminosos de tránsito rojo, blanco y verde',
  },
  {
    id: 'canaleta-protector-cable', name: 'Canaleta Protectora de Cables (2 Canales)', price: 0, category: 'Vial y emergencia',
    description: 'Canaleta de caucho y plástico que protege cables y mangueras en el piso al paso de personas y vehículos.',
    features: ['Dos canales para cables', 'Tapa amarilla y base negra', 'Resiste el paso de personas y vehículos'], alt: 'Canaleta protectora de cables amarilla y negra de dos canales',
  },
  {
    id: 'cinta-demarcacion-negro-amarillo', name: 'Cinta de Demarcación Negro y Amarillo', price: 0, category: 'Vial y emergencia',
    description: 'Cinta adhesiva de franjas negras y amarillas para demarcar zonas de riesgo y bordes.',
    features: ['Franjas diagonales negro y amarillo', 'Adhesivo para pegar en piso', 'Para zonas de riesgo y bordes'], alt: 'Mano sosteniendo un rollo de cinta de demarcación negro y amarillo',
  },
  {
    id: 'cinta-antideslizante-fotoluminiscente', name: 'Cinta Antideslizante Fotoluminiscente', price: 0, category: 'Vial y emergencia',
    description: 'Cinta antideslizante con franja fotoluminiscente que se ve en la oscuridad, ideal para escaleras.',
    features: ['Superficie antideslizante', 'Franja fotoluminiscente visible en la oscuridad', 'Para escaleras y rampas'], alt: 'Mano sosteniendo un rollo de cinta antideslizante negra con franja luminiscente',
  },
  {
    id: 'cinta-verde-fluorescente', name: 'Cinta Adhesiva Verde Fluorescente', price: 0, category: 'Vial y emergencia',
    description: 'Cinta adhesiva verde fluorescente de alta visibilidad para marcar y señalizar.',
    features: ['Verde fluorescente de alta visibilidad', 'Fácil de rasgar y aplicar', 'Para marcar, rotular y señalizar'], alt: 'Mano sosteniendo un rollo de cinta adhesiva verde fluorescente',
  },
  {
    id: 'aro-salvavidas-naranja', name: 'Aro Salvavidas Naranja', price: 0, category: 'Vial y emergencia',
    description: 'Aro salvavidas naranja con bandas reflectivas y cuerda perimetral para rescate en el agua.',
    features: ['Color naranja con bandas reflectivas', 'Cuerda perimetral para agarrarse', 'Flotación para rescate'], alt: 'Dos aros salvavidas naranja con bandas reflectivas',
  },
  {
    id: 'torpedo-salvavidas', name: 'Torpedo Salvavidas', price: 0, category: 'Vial y emergencia',
    description: 'Boya de rescate tipo torpedo, liviana y resistente, para asistir a una persona en el agua.',
    features: ['Liviano: 1,5 kg, resistente a corrosión y rayos UV', 'Medidas de 84 x 24 x 14 cm', 'Cuerda de 2 m con lazo de agarre'], alt: 'Torpedo salvavidas rojo sostenido en la mano',
  },
  {
    id: 'gabinete-contra-incendio', name: 'Gabinete Contra Incendio con Manguera', price: 0, category: 'Vial y emergencia',
    description: 'Gabinete rojo con manguera, extintor y hacha, listo para atender una emergencia.',
    features: ['Incluye manguera contra incendio', 'Con extintor y hacha', 'Gabinete rojo para pared'], alt: 'Gabinete rojo contra incendio con manguera, extintor y hacha',
  },
  {
    id: 'senal-obra-atril', name: 'Señal de Obra con Atril', price: 0, category: 'Vial y emergencia',
    description: 'Señal «Hombres trabajando» con aviso «Fin de obra» sobre atril plegable.',
    features: ['Señal naranja de hombres trabajando', 'Aviso inferior «Fin de obra»', 'Atril plegable'], alt: 'Señal naranja de hombres trabajando con aviso fin de obra sobre un atril',
  },
  {
    id: 'caballete-piso-mojado', name: 'Caballete de Piso Mojado', price: 0, category: 'Vial y emergencia',
    description: 'Señal amarilla plegable que avisa de pisos mojados para prevenir caídas.',
    features: ['Color amarillo de alta visibilidad', 'Plegable y fácil de guardar', 'Mensaje en español e inglés'], alt: 'Caballete amarillo de piso mojado',
  },

  // ───────── Salud y primeros auxilios (actualización V2/V3) ─────────
  {
    id: 'botiquin-tipo-a', name: 'Botiquín Tipo A (Morral)', price: 0, category: 'Salud y primeros auxilios',
    description: 'Botiquín de primeros auxilios en morral de lona, con vendas, antisépticos y elementos de curación.',
    features: ['Morral de lona de 37 x 30 x 7 cm con tira reflectiva', 'Vendas, gasas, alcohol, yodopovidona y guantes', 'Incluye termómetro digital'], alt: 'Morral rojo de botiquín tipo A con su contenido',
  },
  {
    id: 'botiquin-tipo-b', name: 'Botiquín Tipo B (Bolso Ambulancia)', price: 0, category: 'Salud y primeros auxilios',
    description: 'Botiquín completo en bolso ambulancia para empresas, obras y brigadas.',
    features: ['Bolso de lona de 53 x 33 x 30 cm', 'Collares, kits de férula, tijeras de trauma y linterna', 'Incluye tensiómetro y fonendoscopio'], alt: 'Bolso rojo de botiquín tipo B con su contenido',
  },
  {
    id: 'tensiometro-manual', name: 'Tensiómetro Manual con Fonendoscopio', price: 0, category: 'Salud y primeros auxilios',
    description: 'Kit de tensiómetro aneroide con fonendoscopio y estuche, para tomar la presión arterial.',
    features: ['Tensiómetro aneroide con brazalete', 'Incluye fonendoscopio', 'Estuche de transporte'], alt: 'Tensiómetro manual, fonendoscopio y estuche',
  },
  {
    id: 'tensiometro-digital', name: 'Tensiómetro Digital', price: 0, category: 'Salud y primeros auxilios',
    description: 'Tensiómetro digital con pantalla grande para medir presión arterial y pulso.',
    features: ['Pantalla digital con presión sistólica, diastólica y pulso', 'Brazalete ajustable', 'Muestra fecha y hora'], alt: 'Tensiómetro digital con brazalete y pantalla',
  },

  // ───────── Alturas e izaje (actualización V2/V3) ─────────
  {
    id: 'arnes-silla', name: 'Arnés con Silla para Trabajo en Alturas', price: 0, category: 'Alturas e izaje',
    description: 'Arnés con asiento acolchado para trabajar suspendido con más comodidad.',
    features: ['Argollas en D de acero', 'Costuras reforzadas y hebillas de acero', 'Asiento con lámina de polipropileno y espuma'], alt: 'Arnés con silla y asiento acolchado para trabajo en alturas',
  },
  {
    id: 'linea-vida', name: 'Línea de Vida para Trabajo en Alturas', price: 0, category: 'Alturas e izaje',
    description: 'Cuerda trenzada de línea de vida para sistemas de protección contra caídas.',
    features: ['Cuerda trenzada de 15 mm', 'Color rojo y negro, con terminales', 'Para sistemas de protección contra caídas'], alt: 'Rollo de línea de vida roja y negra en su empaque',
  },
  {
    id: 'polea-gancho', name: 'Polea con Gancho', price: 0, category: 'Alturas e izaje',
    description: 'Polea cerrada de acero con gancho, pintada en verde, para izar cargas con cuerda.',
    features: ['Cuerpo de acero pintado en verde', 'Gancho de seguridad', 'Para izar cargas con cuerda'], alt: 'Polea verde de acero con gancho sostenida en la mano',
  },
  {
    id: 'polea-aluminio', name: 'Poleas de Aluminio', price: 0, category: 'Alturas e izaje',
    description: 'Poleas de aluminio livianas para cuerdas y maniobras de izaje.',
    features: ['Aluminio liviano', 'Rodamiento giratorio', 'Para cuerdas y maniobras'], alt: 'Dos poleas de aluminio',
  },
  {
    id: 'grilletes', name: 'Grilletes Forjados', price: 0, category: 'Alturas e izaje',
    description: 'Grilletes forjados con pasador roscado para izaje y amarre de cargas.',
    features: ['Acero forjado galvanizado', 'Pasador roscado', 'Medidas: 1", 3/4" y 1/2"'], alt: 'Tres grilletes forjados de distintos tamaños con pasador rojo',
  },
  {
    id: 'tensores-forjados', name: 'Tensores Forjados', price: 0, category: 'Alturas e izaje',
    description: 'Tensores con ojo y gancho para tensar cables, cadenas y cuerdas.',
    features: ['Acero forjado', 'Terminales con ojo y gancho', 'Medidas: 1/2" y 5/8"'], alt: 'Dos tensores forjados con ojo y gancho',
  },
  {
    id: 'polipasto-electrico', name: 'Polipasto Eléctrico 400 kg', price: 0, category: 'Alturas e izaje',
    description: 'Polipasto eléctrico para izar cargas en taller, obra y bodega, en caja de fábrica.',
    features: ['Capacidad de 400 kg', 'Motor eléctrico', 'Para izar cargas con menos esfuerzo'], alt: 'Caja del polipasto eléctrico de 400 kg Truper',
  },

  // ───────── Aseo y almacenamiento (actualización V2/V3) ─────────
  {
    id: 'canecas-punto-ecologico', name: 'Canecas de Reciclaje (Punto Ecológico)', price: 0, category: 'Aseo y almacenamiento',
    description: 'Canecas de colores con tapa basculante para separar residuos en empresas, colegios y obras.',
    features: ['Verde, negra, roja y blanca', 'Tapa basculante', 'Para separar residuos en la fuente'], alt: 'Cuatro canecas de reciclaje de colores en un punto ecológico',
  },
  {
    id: 'canecas-plasticas', name: 'Canecas y Cestos Plásticos', price: 0, category: 'Aseo y almacenamiento',
    description: 'Canecas y cestos plásticos de varios tamaños para oficinas, cocinas y obras.',
    features: ['Con o sin tapa', 'Colores blanco, verde y rojo', 'Plástico resistente y fácil de lavar'], alt: 'Pila de canecas y cestos plásticos de colores',
  },
  {
    id: 'termos-cooler', name: 'Termos Dispensadores de Agua (Cooler)', price: 0, category: 'Aseo y almacenamiento',
    description: 'Termos cilíndricos con llave dispensadora para tener agua o bebida fría a mano en la obra y la oficina.',
    features: ['Llave dispensadora', 'Aislamiento térmico', 'Colores rojo y azul'], alt: 'Termos dispensadores de agua tipo cooler azules apilados',
  },
  {
    id: 'bidon-combustible', name: 'Bidón de Combustible 20 L', price: 0, category: 'Aseo y almacenamiento',
    description: 'Bidón plástico amarillo de 5,3 galones con pico vertedor para almacenar y trasvasar combustible.',
    features: ['Capacidad de 20 litros (5,3 galones)', 'Pico vertedor flexible', 'Plástico resistente para diésel'], alt: 'Bidón de combustible amarillo de 20 litros con pico vertedor',
  },
]

export const CAROUSEL = PRODUCTS.filter((p) => p.inCarousel)
export const imgOf = (p: Pick<Product, 'id'>) => `/assets/products/${p.id}.png`

const cop = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
/** Precio en pesos colombianos; con 0 (o sin precio definido) muestra «Consultar precio». */
export const formatPrice = (n: number) => (n > 0 ? cop.format(n) : 'Consultar precio')
