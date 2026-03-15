import styles from './Features.module.css'

const features = [
  {
    icon: '🎯',
    title: 'Raccourcis intentionnels',
    text: 'Crée des raccourcis précis pour les seules actions que tu veux faire. Rien de superflu.',
  },
  {
    icon: '📊',
    title: 'Tableau de bord hebdomadaire',
    text: 'Visualise ton temps passé, compare-le à ton objectif, mesure ce que tu as récupéré.',
    accent: true,
  },
  {
    icon: '🛡️',
    title: 'Blocage vraiment efficace',
    text: 'Basé sur les API FamilyControls d\'Apple. Pas de raccourci pour tout désactiver en 3 clics.',
  },
  {
    icon: '🔐',
    title: '100\u202f% privé',
    text: 'Spark ne lit pas tes messages ni ton contenu. Conformité RGPD stricte. Tout reste sur ton iPhone.',
  },
  {
    icon: '⚡',
    title: 'Natif iOS',
    text: 'Écrit en Swift pur pour une intégration parfaite et un accès aux API système les plus puissantes.',
  },
  {
    icon: '🌍',
    title: 'Mode communautaire',
    text: 'Rejoins ta communauté pour vous motiver ensemble à reprendre le contrôle. Bientôt disponible.',
    soon: true,
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Fonctionnalités</p>
        <h2 className={styles.title}>
          Tout ce dont<br />
          <em className={styles.gradientText}>tu as besoin</em>
        </h2>
        <div className={styles.grid}>
          {features.map(f => (
            <div
              key={f.title}
              className={`${styles.card} ${f.accent ? styles.accent : ''} ${f.soon ? styles.soon : ''}`}
            >
              <span className={styles.icon}>{f.icon}</span>
              <h3>
                {f.title}
                {f.soon && <span className={styles.tag}>Bientôt</span>}
              </h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
