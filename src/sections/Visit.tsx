import { hours, siteConfig } from '../data/site'

export function Visit() {
  return <section id="visitanos" className="visit-section"><div className="visit-copy"><p className="eyebrow">Visítanos</p><h2>Ven por algo rico.</h2><p className="visit-place">{siteConfig.name}<br />{siteConfig.location}</p><table className="hours"><tbody>{hours.map(([day, time]) => <tr key={day}><td>{day}</td><td>{time}</td></tr>)}</tbody></table><a className="button-link button--ghost" href={siteConfig.mapUrl} target="_blank" rel="noreferrer">Cómo llegar</a></div><div className="map-placeholder" role="img" aria-label="Mapa referencial de Quilicura"><div className="map-label"><div className="map-pin"><span>M</span></div><strong>Quilicura</strong><small>Ubicación referencial · demo</small></div></div></section>
}
