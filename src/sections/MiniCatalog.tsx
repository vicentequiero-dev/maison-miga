import { Reveal } from '../components/Reveal'
import { catalogCategories } from '../data/site'

export function MiniCatalog() {
  return (
    <section className="section catalog-section" aria-labelledby="catalog-title">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">Nuestro catálogo</p>
          <h2 id="catalog-title">Explora nuestra pastelería</h2>
        </div>
        <p>Encuentra inspiración para tu próxima celebración.</p>
      </Reveal>

      <div className="catalog-grid">
        {catalogCategories.map((category) => (
          <Reveal className="catalog-item" key={category.name}>
            <article>
              <div className="catalog-image-wrap">
                <img src={category.image} alt={category.alt} loading="lazy" />
              </div>
              <div className="catalog-copy">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="catalog-cta">
        <h3>¿Tienes algo distinto en mente?</h3>
        <p>Cuéntanos tu idea y preparamos algo especial para tu celebración.</p>
        <a className="button-link" href="#pedidos">Cotizar por WhatsApp</a>
      </Reveal>
    </section>
  )
}
