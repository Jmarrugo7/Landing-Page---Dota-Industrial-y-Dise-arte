export type DisenCategory = 'Bordados' | 'Estampados' | 'Personalizado' | 'Accesorios'
export const DISEN_CATEGORIES: ('Todos' | DisenCategory)[] = ['Todos', 'Bordados', 'Estampados', 'Personalizado', 'Accesorios']

export interface DisenProduct {
  id: string
  name: string
  price: number
  category: DisenCategory
  description: string
  features: [string, string, string]
  featured?: boolean
  inCarousel?: boolean
  alt: string
  image?: string
  has3d?: boolean
}

/** Productos de Diseñarte (demostrativos). */
export const DISEN_PRODUCTS: DisenProduct[] = [
  {
    id: 'bordado-floral',
    name: 'Bordado Floral Artesanal',
    price: 85000,
    category: 'Bordados',
    featured: true,
    inCarousel: true,
    image: '/assets/products/Bordado%20Floral%20Artesanal.png',
    has3d: true,
    description: 'Delicado bordado floral a mano sobre bastidor de madera y tela de algodón. Perfecto para cuadros decorativos o personalizar prendas.',
    features: ['100% hecho a mano', 'Bastidor de madera incluido', 'Hilos de algodón premium'],
    alt: 'Bordado floral artesanal en bastidor de madera con flores y margaritas',
  },
  {
    id: 'camiseta-estampada', name: 'Camiseta con Estampado Personalizado', price: 65000, category: 'Estampados', inCarousel: true,
    description: 'Camiseta de algodón con estampado a full color. Ideal para eventos, equipos de trabajo o regalos especiales.',
    features: ['Algodón 100%', 'Estampado sublimado', 'Tallas S a XL'], alt: 'Camiseta blanca con estampado personalizado a color',
  },
  {
    id: 'gorra-bordada', name: 'Gorra Bordada Corporativa', price: 45000, category: 'Bordados', inCarousel: true,
    description: 'Gorra de alta calidad con bordado 3D de tu logo o diseño. Perfecta para uniformes corporativos.',
    features: ['Bordado 3D en relieve', 'Ajuste regulable', 'Colores personalizables'], alt: 'Gorra negra con bordado de logo empresarial',
  },
  {
    id: 'tote-bag', name: 'Tote Bag Estampada', price: 38000, category: 'Estampados', inCarousel: true,
    description: 'Bolso de tela ecológico con diseño estampado exclusivo. Resistente y perfecto para uso diario.',
    features: ['Tela resistente', 'Asas reforzadas', 'Diseño ecológico'], alt: 'Bolso de tela con diseño estampado artístico',
  },
  {
    id: 'polo-empresarial', name: 'Polo Empresarial Bordado', price: 75000, category: 'Personalizado', inCarousel: true,
    description: 'Polo empresarial con tu logo bordado en el pecho. Ideal para uniformar a tu equipo con elegancia.',
    features: ['Tela polo premium', 'Bordado de logo', 'Variedad de colores'], alt: 'Polo azul con logo bordado en el pecho',
  },
  {
    id: 'parche-bordado', name: 'Parches Bordados a Medida', price: 12000, category: 'Accesorios', inCarousel: true,
    description: 'Parches bordados con tu diseño personalizado. Ideales para chaquetas, mochilas o gorras.',
    features: ['Borde termosellado', 'Mínimo 10 unidades', 'Diseño libre'], alt: 'Conjunto de parches bordados con diferentes diseños',
  },
  {
    id: 'cojin-personalizado', name: 'Cojín Personalizado', price: 55000, category: 'Personalizado',
    description: 'Cojín decorativo con tu foto o diseño favorito estampado en sublimación de alta definición.',
    features: ['Sublimación full HD', 'Relleno incluido', 'Lavable'], alt: 'Cojín decorativo con foto personalizada',
  },
  {
    id: 'mandil-bordado', name: 'Mandil con Bordado', price: 48000, category: 'Bordados',
    description: 'Mandil profesional con nombre o logo bordado. Perfecto para chefs, baristas y artesanos.',
    features: ['Tela resistente', 'Bolsillos funcionales', 'Bordado personalizado'], alt: 'Mandil de cocina con nombre bordado',
  },
  {
    id: 'llavero-bordado', name: 'Llavero Bordado Artesanal', price: 15000, category: 'Accesorios',
    description: 'Pequeño llavero bordado a mano con diseños exclusivos. Un detalle único para regalar.',
    features: ['Hecho a mano', 'Diseños únicos', 'Argolla metálica'], alt: 'Llavero pequeño con bordado artesanal',
  },
  {
    id: 'banner-estampado', name: 'Banner Publicitario', price: 120000, category: 'Estampados',
    description: 'Banner de tela con impresión full color para eventos, ferias y puntos de venta.',
    features: ['Impresión de alta resolución', 'Tela resistente', 'Incluye ojales'], alt: 'Banner publicitario de tela con diseño a color',
  },
]

export const DISEN_CAROUSEL = DISEN_PRODUCTS.filter((p) => p.inCarousel)

/** Devuelve la imagen del producto si está disponible, o vacío. */
export const disenImgOf = (p: Pick<DisenProduct, 'id'> & { image?: string }) => {
  if (p.image) return p.image
  if (p.id === 'bordado-floral') return '/assets/products/Bordado%20Floral%20Artesanal.png'
  return ''
}
