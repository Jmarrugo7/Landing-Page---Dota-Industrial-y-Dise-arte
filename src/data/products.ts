import type { ProductKind } from '../three/builders'

export type Category = 'Herramientas' | 'Eléctricos' | 'Construcción' | 'Seguridad'
export const CATEGORIES: ('Todos' | Category)[] = ['Todos', 'Herramientas', 'Eléctricos', 'Construcción', 'Seguridad']

export interface Product {
  id: ProductKind
  name: string
  price: number
  category: Category
  description: string
  features: [string, string, string]
  featured?: boolean
  inCarousel?: boolean
  alt: string
}

/** Datos de ejemplo (demostrativos). Nombres genéricos, sin marcas comerciales. */
export const PRODUCTS: Product[] = [
  {
    id: 'taladro', name: 'Taladro inalámbrico 20V', price: 450000, category: 'Herramientas', featured: true, inCarousel: true,
    description: 'Potente, ligero y con gran autonomía. Ideal para trabajos en madera, metal y concreto.',
    features: ['20V de potencia', 'Batería de litio', 'Mandril de 13 mm'], alt: 'Taladro inalámbrico amarillo y negro con batería de 20 voltios',
  },
  {
    id: 'tablero', name: 'Tablero eléctrico 12 circuitos', price: 320000, category: 'Eléctricos', inCarousel: true,
    description: 'Distribución segura de energía para vivienda y local, con espacio para doce interruptores.',
    features: ['12 circuitos', 'Barra de tierra incluida', 'Montaje de sobreponer'], alt: 'Tablero eléctrico metálico con doce interruptores',
  },
  {
    id: 'esmeriladora', name: 'Esmeriladora angular 4 1/2"', price: 280000, category: 'Herramientas', inCarousel: true,
    description: 'Corta, desbasta y pule metal y mampostería con buen control y poco peso.',
    features: ['Disco de 4 1/2"', 'Motor de 850 W', 'Mango lateral ajustable'], alt: 'Esmeriladora angular con disco y mango lateral',
  },
  {
    id: 'cinta', name: 'Cinta métrica 5 metros', price: 65000, category: 'Construcción', inCarousel: true,
    description: 'Cinta de lectura clara con carcasa resistente a golpes y freno para fijar la medida.',
    features: ['Cinta de 5 m', 'Carcasa antigolpes', 'Freno de bloqueo'], alt: 'Cinta métrica amarilla de cinco metros extendida',
  },
  {
    id: 'casco', name: 'Casco de seguridad', price: 55000, category: 'Seguridad', inCarousel: true,
    description: 'Protección liviana para obra y taller, con ajuste cómodo para jornadas largas.',
    features: ['Ajuste de matraca', 'Banda antisudor', 'Ranuras de ventilación'], alt: 'Casco de seguridad amarillo',
  },
  {
    id: 'alicates', name: 'Juego de alicates 3 piezas', price: 120000, category: 'Herramientas', inCarousel: true,
    description: 'Tres alicates para el trabajo diario: universal, de punta y de corte.',
    features: ['Acero al carbono', 'Mangos antideslizantes', '3 piezas'], alt: 'Juego de tres alicates con mangos amarillos y negros',
  },
  {
    id: 'cable', name: 'Rollo de cable calibre 12', price: 185000, category: 'Eléctricos',
    description: 'Cable de cobre aislado para instalaciones de iluminación y tomas de uso residencial.',
    features: ['Rollo de 100 m', 'Aislamiento termoplástico', 'Uso residencial'], alt: 'Rollo de cable eléctrico amarillo',
  },
  {
    id: 'tomacorriente', name: 'Tomacorriente doble con tierra', price: 14000, category: 'Eléctricos',
    description: 'Toma doble con polo a tierra para instalaciones nuevas o reposición.',
    features: ['Doble con polo a tierra', 'Placa incluida', 'Instalación empotrada'], alt: 'Tomacorriente doble blanco',
  },
  {
    id: 'nivel', name: 'Nivel de burbuja 60 cm', price: 48000, category: 'Construcción',
    description: 'Nivel de perfil resistente para verificar horizontales y verticales con precisión.',
    features: ['Tres burbujas', 'Perfil reforzado', 'Largo de 60 cm'], alt: 'Nivel de burbuja amarillo con extremos negros',
  },
  {
    id: 'gafas', name: 'Gafas de protección', price: 28000, category: 'Seguridad',
    description: 'Lentes transparentes con protección lateral para cortar, lijar o perforar.',
    features: ['Lente transparente', 'Protección lateral', 'Patillas ajustables'], alt: 'Gafas de protección de lente transparente',
  },
]

export const CAROUSEL = PRODUCTS.filter((p) => p.inCarousel)
export const imgOf = (p: Pick<Product, 'id'>) => `/assets/products/${p.id}.webp?v=2`

const cop = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
export const formatPrice = (n: number) => cop.format(n)
