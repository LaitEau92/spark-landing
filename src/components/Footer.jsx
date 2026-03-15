import sparkLogo from '../assets/spark-logo.svg'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={sparkLogo} alt="Spark" className={styles.flame} />
          <span className={styles.wordmark}>Spark</span>
        </div>
        <p className={styles.tagline}>Vis ta vie. Pas celle des autres.</p>
        <div className={styles.links}>
          <a href="#">Confidentialité</a>
          <a href="#">Conditions d'utilisation</a>
          <a href="mailto:contact@sparkapp.fr">Contact</a>
        </div>
        <p className={styles.copy}>© 2026 Spark. Fait avec ❤️ à Lille.</p>
      </div>
    </footer>
  )
}
