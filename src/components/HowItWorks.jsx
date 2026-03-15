import styles from './HowItWorks.module.css'

const steps = [
  {
    n: '1',
    title: 'Choisis ton intention',
    text: 'Avant d\'ouvrir Instagram, tu définis pourquoi : voir les stories d\'un ami, poster une photo, consulter un profil.',
  },
  {
    n: '2',
    title: 'Spark filtre le reste',
    text: 'Le fil infini, les Reels en boucle, les suggestions algorithmiques. Tout ce qui n\'est pas ton intention est bloqué — vraiment.',
  },
  {
    n: '3',
    title: 'Tu reprends le contrôle',
    text: 'Ton tableau de bord te montre chaque minute économisée. Semaine après semaine, tu vois la vie que tu as récupérée.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.container}>
        <p className={styles.eyebrow}>La solution</p>
        <h2 className={styles.title}>
          Utilise Insta<br />
          <em className={styles.gradientText}>avec intention</em>
        </h2>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <>
              <div key={s.n} className={styles.step}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} className={styles.arrow} aria-hidden="true">→</div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
