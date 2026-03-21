import styles from './HowItWorks.module.css'
import IPhoneMockup from './IPhoneMockup'

const steps = [
  {
    img: '/page_principale_app.png',
    title: 'Prends les commandes',
    text: 'Au lieu d\'ouvrir insta à l\'aveugle, Spark t\'intercept, et tu choisis ton but précis (Un DM, un post, une recherche,...) pour directement accéder à ta destination.',
  },
  {
    img: '/timers.png',
    title: 'Le chrono de conscience',
    text: 'Fixe ta limite avant d\'entrer. Pendant que tu es sur l\'app, des rappels discrets te remettent sur ta direction. Tu restes maître de ton temps, pas l\'inverse.',
  },
  {
    img: '/session_fini.png',
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
              <div key={s.title} className={styles.step}>
                <IPhoneMockup src={s.img} alt={s.title} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <img key={`arrow-${i}`} src="/arrow.svg" alt="" className={styles.arrow} aria-hidden="true" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
