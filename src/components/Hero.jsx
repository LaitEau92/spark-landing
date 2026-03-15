import { useEffect, useRef } from 'react'
import sparkLogo from '../assets/spark-logo.svg'
import styles from './Hero.module.css'

function PhoneMockup() {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneNotch} />
      <div className={styles.phoneScreen}>
        <div className={styles.mockHeader}>
          <span className={styles.mockTitle}>Bonjour, Jean 👋</span>
          <span className={styles.mockTime}>14:32</span>
        </div>

        <div className={styles.mockCard}>
          <span className={styles.mockLabel}>Cette semaine</span>
          <span className={`${styles.mockValue} ${styles.gradientText}`}>1h 12min</span>
          <span className={styles.mockSub}>sur Instagram</span>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: '48%' }} />
          </div>
          <span className={styles.mockGoal}>✓ Objectif 2h30 atteint</span>
        </div>

        <div className={styles.mockSection}>
          <span className={styles.mockSectionTitle}>Mes raccourcis</span>
          <div className={styles.chips}>
            <span className={styles.chip}>DM</span>
            <span className={styles.chip}>Poster</span>
            <span className={styles.chip}>Scroller</span>
          </div>
        </div>

        <div className={styles.mockSection}>
          <span className={styles.mockSectionTitle}>Temps récupéré</span>
          <span className={`${styles.mockBig} ${styles.gradientText}`}>+6h 44min</span>
          <span className={styles.mockSub}>cette semaine</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Bientôt disponible sur iOS
          </div>

          <h1 className={styles.headline}>
            Vis ta vie.<br />
            <em className={styles.gradientText}>Pas celle des autres.</em>
          </h1>

          <p className={styles.sub}>
            Spark te permet d'utiliser Instagram pour ce qui compte vraiment&nbsp;—
            sans finir à scroller pendant des heures sans t'en rendre compte.
          </p>

          <div className={styles.actions}>
            <a
              href="#waitlist"
              className={styles.btnPrimary}
              onClick={e => handleScroll(e, '#waitlist')}
            >
              <img src={sparkLogo} alt="" className={styles.btnIcon} />
              Rejoindre la liste d'attente
            </a>
            <a
              href="#how"
              className={styles.btnGhost}
              onClick={e => handleScroll(e, '#how')}
            >
              Comment ça marche ↓
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={`${styles.statNum} ${styles.gradientText}`}>3 ans</span>
              <span className={styles.statLabel}>de vie rendus<br />à une génération</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={`${styles.statNum} ${styles.gradientText}`}>2h+</span>
              <span className={styles.statLabel}>économisées<br />par jour</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={`${styles.statNum} ${styles.gradientText}`}>100%</span>
              <span className={styles.statLabel}>privé — RGPD<br />strictement respecté</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
