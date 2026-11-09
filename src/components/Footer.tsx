import { hours, navigation, siteConfig } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#inicio">{siteConfig.name}</a><p>{siteConfig.descriptor}<br />Quilicura, Santiago</p></div><div className="footer-column"><h3>Explora</h3><nav className="footer-nav" aria-label="Navegación del pie">{navigation.slice(1).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></nav></div><div className="footer-column"><h3>Horario</h3><div className="footer-nav">{hours.map(([day, time]) => <span key={day}>{day}: {time}</span>)}</div></div></div><div className="footer-meta"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>Demo conceptual desarrollada con fines de portafolio.</span></div></footer>
  )
}
