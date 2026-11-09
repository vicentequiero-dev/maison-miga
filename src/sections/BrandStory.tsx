import { Reveal } from '../components/Reveal'

export function BrandStory() {
  return <section className="brand-section"><img className="brand-image" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1500&q=88" alt="Manos preparando masa en una mesa de pastelería" loading="lazy" /><Reveal className="brand-copy"><p className="eyebrow">Nuestra manera de hacer</p><h2>Hecho a mano, desde nuestra cocina para tu mesa.</h2><p>Preparamos cada pedido en pequeñas cantidades, cuidando la textura, el sabor y los detalles. Trabajamos con ingredientes escogidos y adaptamos cada torta a la celebración que tienes en mente.</p><div className="brand-details"><span>Preparado por encargo</span><span>Ingredientes escogidos</span></div></Reveal></section>
}
