import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import ElectricBorder from './reactbits/ElectricBorder/ElectricBorder'
import GradientText from './reactbits/GradientText/GradientText'
import styles from './Pricing.module.css'

const plans = [
  {
    id: 'free',
    name: 'Spark Free',
    price: '0\u202f€',
    period: 'pour toujours',
    features: [
      'Blocage de base',
      '3 raccourcis intentionnels',
      'Tableau de bord simplifié',
      '100\u202f% privé',
    ],
    cta: 'Commencer gratuitement',
  },
  {
    id: 'plus',
    name: 'Spark +',
    nameGradient: true,
    price: '4,99\u202f€',
    period: '/ mois',
    popular: true,
    features: [
      'Tout de Spark Free',
      'Raccourcis illimités',
      'Tableau de bord avancé + comparatif',
      'Objectifs hebdomadaires personnalisés',
      'Statistiques détaillées',
      'Accès prioritaire aux nouveautés',
    ],
    cta: 'Démarrer Spark +',
  },
  {
    id: 'lifetime',
    name: 'Pass Lifetime',
    price: '79,99\u202f€',
    period: 'une seule fois',
    note: '≈ 1,33\u202f€/mois sur 5 ans',
    features: [
      'Tout de Spark +',
      'Mises à jour à vie',
      'Accès aux fonctionnalités beta',
      'Support prioritaire',
    ],
    cta: 'Obtenir le Pass Lifetime',
  },
]

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const handleScroll = (e) => {
    e.preventDefault()
    document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Tarifs</p>
        <h2 className={styles.title}>
          Simple.<br />
          <em className={styles.gradientText}>Honnête.</em>
        </h2>
        <div className={styles.grid}>
          {plans.map(p => {
            const cardContent = (
              <div className={`${styles.plan} ${p.popular ? styles.popular : ''}`}>
                <div className={styles.header}>
                  <span className={`${styles.planName} ${p.nameGradient ? styles.gradientText : ''}`}>
                    {p.name}
                  </span>
                  <div className={styles.priceRow}>
                    <span className={styles.amount}>{p.price}</span>
                    <span className={styles.period}>{p.period}</span>
                  </div>
                </div>
                <ul className={styles.features}>
                  {p.features.map(f => (
                    <li key={f}><span className={styles.check}><Check size={14} strokeWidth={2.5} /></span>{f}</li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  onClick={handleScroll}
                  className={`${styles.cta} ${p.popular ? styles.ctaPrimary : styles.ctaOutline}`}
                >
                  {p.popular ? (
                    <GradientText
                      colors={["#FFECAC", "#EB4A00", "#920000", "#EB4A00", "#FFECAC"]}
                      animationSpeed={5}
                      showBorder={false}
                      className={styles.btnGradient}
                    >
                      {p.cta}
                    </GradientText>
                  ) : p.cta}
                </a>
                {p.note && <p className={styles.note}>{p.note}</p>}
              </div>
            )

            return p.popular ? (
              <div key={p.id} className={styles.popularWrapper}>
                <div className={styles.badge}>Le plus populaire</div>
                {!isMobile ? (
                  <ElectricBorder
                    color="#eb4a00"
                    speed={0.7}
                    chaos={0.09}
                    borderRadius={20}
                    className={styles.electricWrapper}
                  >
                    {cardContent}
                  </ElectricBorder>
                ) : cardContent}
              </div>
            ) : (
              <div key={p.id}>{cardContent}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
