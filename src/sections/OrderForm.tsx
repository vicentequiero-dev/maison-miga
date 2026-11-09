import { useState, type FormEvent } from 'react'
import { siteConfig } from '../data/site'

type OrderFields = { celebration: string; people: string; flavor: string; date: string; idea: string; name: string; phone: string }
const initialValues: OrderFields = { celebration: '', people: '', flavor: '', date: '', idea: '', name: '', phone: '' }

export function OrderForm() {
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState('')
  const update = (field: keyof OrderFields, value: string) => setValues((current) => ({ ...current, [field]: value }))
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const required = [values.celebration, values.people, values.flavor, values.date, values.name, values.phone]
    if (required.some((value) => !value.trim())) { setError('Completa los campos obligatorios para continuar con tu pedido.'); return }
    setError('')
    const message = ['Hola Maison Miga 👋', 'Quiero cotizar una torta.', '', `Celebración: ${values.celebration}`, `Personas: ${values.people}`, `Sabor: ${values.flavor}`, `Fecha: ${values.date.split('-').reverse().join('/')}`, `Idea: ${values.idea || 'Por definir'}`, '', `Nombre: ${values.name}`, `Teléfono: ${values.phone}`].join('\n')
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }
  return <section id="pedidos" className="section order-section"><div className="order-layout"><div className="order-intro"><p className="eyebrow">Pedido personalizado</p><h2>Cuéntanos qué tienes en mente</h2><p>Comparte los datos principales y continuaremos la conversación por WhatsApp. Te responderemos con disponibilidad y una cotización.</p><p className="order-note">Cada torta se prepara por encargo.</p></div><form className="order-form" onSubmit={submit} noValidate>
    <div className="field"><label htmlFor="celebration">Tipo de celebración *</label><select id="celebration" value={values.celebration} onChange={(e) => update('celebration', e.target.value)} required><option value="">Selecciona una opción</option><option>Cumpleaños</option><option>Matrimonio</option><option>Baby shower</option><option>Otra celebración</option></select></div>
    <div className="field"><label htmlFor="people">Cantidad de personas *</label><input id="people" type="number" min="4" placeholder="Ej. 20" value={values.people} onChange={(e) => update('people', e.target.value)} required /></div>
    <div className="field"><label htmlFor="flavor">Sabor preferido *</label><select id="flavor" value={values.flavor} onChange={(e) => update('flavor', e.target.value)} required><option value="">Selecciona un sabor</option><option>Chocolate</option><option>Manjar nuez</option><option>Frutos rojos</option><option>Vainilla</option><option>Quiero una recomendación</option></select></div>
    <div className="field"><label htmlFor="date">Fecha requerida *</label><input id="date" type="date" value={values.date} onChange={(e) => update('date', e.target.value)} required /></div>
    <div className="field field--wide"><label htmlFor="idea">Idea o mensaje</label><textarea id="idea" placeholder="Cuéntanos sobre colores, estilo o una referencia…" value={values.idea} onChange={(e) => update('idea', e.target.value)} /></div>
    <div className="field"><label htmlFor="name">Nombre *</label><input id="name" autoComplete="name" value={values.name} onChange={(e) => update('name', e.target.value)} required /></div>
    <div className="field"><label htmlFor="phone">Teléfono *</label><input id="phone" type="tel" autoComplete="tel" placeholder="+56 9…" value={values.phone} onChange={(e) => update('phone', e.target.value)} required /></div>
    {error && <p className="form-error" role="alert">{error}</p>}<div className="form-actions"><button className="button button--full" type="submit">Continuar pedido por WhatsApp</button></div>
  </form></div></section>
}
