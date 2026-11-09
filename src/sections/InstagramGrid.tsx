import { gallery, siteConfig } from '../data/site'

export function InstagramGrid() {
  return <section className="section instagram-section"><div className="instagram-heading"><h2>Síguenos y mira lo que estamos preparando</h2><a className="instagram-handle" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">{siteConfig.instagramHandle} ↗</a></div><div className="instagram-grid">{gallery.map((image) => <a key={image.src} href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="Ver Instagram de Maison Miga"><img src={image.src} alt={image.alt} loading="lazy" /></a>)}</div></section>
}
