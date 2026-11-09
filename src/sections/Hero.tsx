import { Reveal } from '../components/Reveal'

export function Hero() {
  return <section id="inicio" className="hero-section"><Reveal className="hero-copy"><p className="eyebrow">Pastelería artesanal · Quilicura</p><h1 className="hero-title">Tortas hechas para<br />quedarse en el recuerdo.</h1><p className="hero-intro">Pastelería artesanal en Quilicura.<br />Tortas, kuchen y dulces preparados por encargo.</p><div className="hero-actions"><a className="button-link" href="#pedidos">Hacer un pedido</a><a className="button-link button--ghost" href="#tortas">Ver catálogo</a></div></Reveal><Reveal className="hero-visual"><img className="hero-image" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=90" alt="Torta artesanal de chocolate decorada con frutos" /><p className="hero-caption">Capas de sabor,<br />hechas sin apuro.</p><div className="hero-stamp" aria-hidden="true">Hecho<br />a mano<br />en casa</div></Reveal></section>
}
