import sparkLogo from '../assets/spark-logo.svg'
import iphone from '/iPhone 15 Pro.png'
import GradientText from './reactbits/GradientText/GradientText'
import styles from './Hero.module.css'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Bientôt disponible sur iOS
          </div>

          <h1 className={styles.headline}>
            <GradientText
              colors={["#FFECAC", "#EB4A00", "#920000", "#EB4A00", "#FFECAC"]}
              animationSpeed={6}
              showBorder={false}
              className={styles.headlineGradient}
            >
              Vis ta vie.<br />Pas celle des autres.
            </GradientText>
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
              <span className={styles.btnLabel}>Rejoindre la liste d'attente</span>
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
          <img src={iphone} alt="Aperçu de l'app Spark" className={styles.phoneImage} />
        </div>
      </div>
    </section>
  )
}
