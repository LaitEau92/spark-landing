import styles from './Problem.module.css'

const cards = [
  {
    icon: '😮‍💨',
    title: '«\u202fTrop facile à contourner\u202f»',
    text: 'Les apps de blocage classiques ? Un clic et c\'est désactivé. En quelques secondes tu es de retour sur le fil infini.',
  },
  {
    icon: '⏱️',
    title: '2h16 par jour',
    text: 'C\'est le temps moyen passé sur Instagram par les 15-25 ans. Sur un an, ça représente presque un mois entier de vie.',
    highlight: true,
  },
  {
    icon: '🔒',
    title: '«\u202fTrop punitif\u202f»',
    text: 'Les apps qui bloquent tout finissent à la poubelle après une semaine. Tu as besoin d\'Instagram — pas de le subir.',
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
          {cards.map(c => (
            <div
              key={c.title}
              className={`${styles.card} ${c.highlight ? styles.highlight : ''}`}
            >
              <span className={styles.icon}>{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
