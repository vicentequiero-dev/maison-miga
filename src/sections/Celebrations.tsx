import { Reveal } from '../components/Reveal'
import { celebrations } from '../data/site'

export function Celebrations() {
  return <section id="celebraciones" className="section celebrations-section"><Reveal className="section-heading"><div><p className="eyebrow">Celebraciones</p><h2>Una torta para cada historia</h2></div><p>Cada pedido comienza con una idea. La llevamos a sabores, colores y detalles que se sientan tuyos.</p></Reveal><div className="celebration-grid">{celebrations.map((item, index) => <Reveal className="celebration-item" key={item.name}><img src={item.image} alt={item.alt} loading="lazy" /><h3>{item.name}</h3><span>0{index + 1} · {item.detail}</span></Reveal>)}</div></section>
}
