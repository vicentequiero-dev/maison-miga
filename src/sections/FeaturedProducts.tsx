import { Reveal } from '../components/Reveal'
import { products, type Product } from '../data/site'

function ProductCopy({ product }: { product: Product }) {
  return (
    <div className="product-copy">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="product-price">{product.price}</span>
    </div>
  )
}

export function FeaturedProducts() {
  const [featured, ...rest] = products
  return (
    <section id="tortas" className="section products-section">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">Favoritos de la casa</p>
          <h2>Lo que sale de nuestro horno</h2>
        </div>
        <p>Recetas conocidas, ingredientes escogidos y terminaciones que dejan ver la mano de quien las prepara.</p>
      </Reveal>

      <div className="product-layout">
        <Reveal className="featured-product">
          <article className="product-card">
            <img src={featured.image} alt={featured.alt} />
            <ProductCopy product={featured} />
          </article>
        </Reveal>

        <div className="product-side">
          {rest.map((product) => (
            <Reveal className="small-product" key={product.name}>
              <article className="product-card">
                <img src={product.image} alt={product.alt} loading="lazy" />
                <ProductCopy product={product} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
