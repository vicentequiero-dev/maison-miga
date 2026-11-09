import { Reveal } from '../components/Reveal'
import { testimonials } from '../data/site'

export function Testimonials() {
  return <section className="section testimonials-section"><Reveal className="section-heading"><div><p className="eyebrow">Palabras dulces</p><h2>Quienes ya compartieron la mesa</h2></div><p>Testimonios ilustrativos para esta demo conceptual de portafolio.</p></Reveal><div className="testimonial-list">{testimonials.map((item, index) => <Reveal className="testimonial" key={item.author}><span className="testimonial-number">0{index + 1}</span><blockquote>“{item.quote}”</blockquote><cite>{item.author}</cite></Reveal>)}</div></section>
}
