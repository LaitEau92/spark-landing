import { Wind, Timer, Lock } from 'lucide-react'
import styles from './Problem.module.css'

const cards = [
  {
    icon: Timer,
    title: 'Le piège de l\'algorithme',
    text: 'Tu ouvres Insta par automatisme ou avec une intention et tu finis par te perdre',
    highlight: true,
  },
  {
    icon: Wind,
    title: '«\u202fTrop facile à contourner\u202f»',
    text: 'Les apps de blocage classiques ? Un clic et c\'est désactivé. En quelques secondes tu es de retour sur le fil infini.',
    highlight: true,
  },
  {
    icon: Lock,
    title: 'Les apps de blocage',
    text: 'Trop facile à contourner, elles finissent toutes désinstallées après une semaine.',
    highlight: true,
  },
]

export default function Problem() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.container}>
        <p className={styles.eyebrow}>La réalité</p>
        <h2 className={styles.title}>
          Tu voulais juste regarder<br />
          <em className={styles.gradientText}>une story…</em>
        </h2>
        <div className={styles.grid}>
          {cards.map(c => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className={`${styles.card} ${c.highlight ? styles.highlight : ''}`}
              >
                <span className={styles.icon}><Icon size={24} strokeWidth={1.75} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
