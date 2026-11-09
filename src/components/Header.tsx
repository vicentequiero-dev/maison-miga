import { useEffect, useState } from 'react'
import { navigation, siteConfig } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
  return (
    <header className="site-header"><div className="header-inner">
      <a className="wordmark" href="#inicio" aria-label={`${siteConfig.name}, ir al inicio`}>{siteConfig.name}</a>
      <nav className="desktop-nav" aria-label="Navegación principal">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <div className="header-actions"><a className="button-link" href="#pedidos">Hacer un pedido</a><button className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /></button></div>
    </div><nav id="mobile-menu" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Navegación móvil"><div>{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</div></nav></header>
  )
}
