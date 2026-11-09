export type Product = {
  name: string
  description: string
  price: string
  image: string
  alt: string
}

export const siteConfig = {
  name: 'Maison Miga', descriptor: 'Pastelería artesanal', whatsappNumber: '56912345678',
  instagramHandle: '@maisonmiga.cl', instagramUrl: 'https://www.instagram.com/',
  location: 'Quilicura, Santiago', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Quilicura%2C%20Santiago',
}

export const navigation = [
  { label: 'Inicio', href: '#inicio' }, { label: 'Tortas', href: '#tortas' },
  { label: 'Celebraciones', href: '#celebraciones' }, { label: 'Pedidos', href: '#pedidos' },
  { label: 'Visítanos', href: '#visitanos' },
]

export const products: Product[] = [
  { name: 'Torta Chocolate Frambuesa', description: 'Bizcocho húmedo, ganache de chocolate y frambuesa.', price: 'Desde $24.990', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=88', alt: 'Torta de chocolate decorada artesanalmente' },
  { name: 'Kuchen de frutos rojos', description: 'Masa artesanal, crema suave y frutos de temporada.', price: 'Desde $12.990', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=85', alt: 'Kuchen con frutos rojos frescos' },
  { name: 'Torta Manjar Nuez', description: 'Un clásico chileno hecho para compartir.', price: 'Desde $22.990', image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=1000&q=85', alt: 'Torta en capas con crema y nueces' },
]

export const catalogCategories = [
  { name: 'Tortas clásicas', description: 'Sabores conocidos, hechos con una mirada propia.', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=85', alt: 'Torta clásica decorada artesanalmente' },
  { name: 'Tortas personalizadas', description: 'Diseños pensados alrededor de tu celebración.', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1000&q=85', alt: 'Torta personalizada con decoración delicada' },
  { name: 'Kuchen y tartas', description: 'Fruta, crema y masas preparadas en casa.', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1000&q=85', alt: 'Tarta artesanal servida en una mesa' },
  { name: 'Dulces y porciones', description: 'Pequeños antojos para compartir o regalar.', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1000&q=85', alt: 'Selección de dulces y cupcakes' },
  { name: 'Celebraciones', description: 'Una pieza especial para acompañar cada historia.', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=85', alt: 'Torta preparada para una celebración' },
]

export const celebrations = [
  { name: 'Cumpleaños', detail: 'Tortas para compartir', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=85', alt: 'Torta de cumpleaños con velas' },
  { name: 'Matrimonios', detail: 'Diseños a tu medida', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=85', alt: 'Torta elegante para matrimonio' },
  { name: 'Baby shower', detail: 'Detalles delicados', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=85', alt: 'Torta en tonos suaves para celebración' },
  { name: 'Tortas temáticas', detail: 'Hechas para sorprender', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=85', alt: 'Torta decorada de forma creativa' },
]

export const testimonials = [
  { quote: 'La torta quedó preciosa y el sabor a chocolate con frambuesa fue el favorito de todos.', author: 'Camila · Cumpleaños' },
  { quote: 'Entendieron la idea desde el primer mensaje y cada detalle se sintió hecho con cariño.', author: 'Fernanda · Baby shower' },
  { quote: 'El kuchen llegó impecable y se notaba la fruta fresca. Lo volvería a pedir.', author: 'María José · Pedido familiar' },
]

export const hours = [['Lunes a viernes', '10:00 – 19:00'], ['Sábado', '10:00 – 17:00'], ['Domingo', 'Cerrado']]

export const gallery = [
  { src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=82', alt: 'Cupcakes recién preparados' },
  { src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=700&q=82', alt: 'Torta decorada con flores' },
  { src: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=700&q=82', alt: 'Porción de tarta artesanal' },
  { src: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=700&q=82', alt: 'Mesa con dulces de la casa' },
  { src: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=82', alt: 'Torta de chocolate en preparación' },
]
