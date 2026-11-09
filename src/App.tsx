import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrandStory } from './sections/BrandStory'
import { Celebrations } from './sections/Celebrations'
import { FeaturedProducts } from './sections/FeaturedProducts'
import { Hero } from './sections/Hero'
import { InstagramGrid } from './sections/InstagramGrid'
import { MiniCatalog } from './sections/MiniCatalog'
import { OrderForm } from './sections/OrderForm'
import { Testimonials } from './sections/Testimonials'
import { Visit } from './sections/Visit'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <section className="info-strip" aria-label="Información práctica">
          <span>Pedidos personalizados</span>
          <span>Retiro en Quilicura</span>
          <span>Lunes a sábado</span>
        </section>
        <FeaturedProducts />
        <MiniCatalog />
        <Celebrations />
        <OrderForm />
        <BrandStory />
        <Testimonials />
        <Visit />
        <InstagramGrid />
      </main>
      <Footer />
      <a className="mobile-order" href="#pedidos">Hacer un pedido</a>
    </>
  )
}

export default App
