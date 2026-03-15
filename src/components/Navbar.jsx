import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Comment ça marche', href: '#how' },
  { label: 'Tarifs', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={e => handleLink(e, '#')}>
          <img src="/spark-original-logo.png" alt="Spark" className={styles.logoImg} />
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="#waitlist"
          className={styles.cta}
          onClick={e => handleLink(e, '#waitlist')}
        >
          Rejoindre la liste d'attente
        </a>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={open ? styles.burgerOpen : ''}></span>
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleLink(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className={styles.mobileCta}
            onClick={e => handleLink(e, '#waitlist')}
          >
            Rejoindre la liste d'attente
          </a>
        </div>
      )}
    </nav>
  )
}
