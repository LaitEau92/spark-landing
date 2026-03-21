import styles from './IPhoneMockup.module.css'

export default function IPhoneMockup({ src, alt }) {
  return (
    <div className={styles.phone}>
      <div className={styles.island} />
      <div className={styles.screen}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}
