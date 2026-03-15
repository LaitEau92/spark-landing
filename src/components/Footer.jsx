import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/spark-original-logo.png" alt="Spark" className={styles.logoImg} />
            <p className={styles.tagline}>Vis ta vie.<br />Pas celle des autres.</p>
          </div>
          <div className={styles.linksCol}>
            <span className={styles.colTitle}>Légal</span>
            <a href="#">Confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
          </div>
          <div className={styles.linksCol}>
            <span className={styles.colTitle}>Contact</span>
            <a href="mailto:contact@sparkapp.fr">contact@sparkapp.fr</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Spark. Fait avec ❤️ à Lille.</span>
        </div>
      </div>
    </footer>
  )
}
