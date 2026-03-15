import { useState } from 'react'
import { PartyPopper } from 'lucide-react'
import sparkLogo from '../assets/spark-logo.svg'
import GradientText from './reactbits/GradientText/GradientText'
import styles from './Waitlist.module.css'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className={styles.section} id="waitlist">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <img src={sparkLogo} alt="Spark" className={styles.flame} />
        <h2 className={styles.title}>
          Prêt à récupérer<br />
          <em className={styles.gradientText}>ton temps&nbsp;?</em>
        </h2>
        <p className={styles.sub}>
          Spark arrive sur iOS en juillet 2026. Rejoins la liste d'attente et sois
          parmi les premiers à tester l'app.
        </p>

        {!submitted ? (
          <>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="ton@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.input}
                required
              />
              <button type="submit" className={styles.btn}>
                <img src={sparkLogo} alt="" className={styles.btnIcon} />
                <GradientText
                  colors={["#FFECAC", "#EB4A00", "#920000", "#EB4A00", "#FFECAC"]}
                  animationSpeed={5}
                  showBorder={false}
                  className={styles.btnGradient}
                >
                  Me prévenir
                </GradientText>
              </button>
            </form>
            <p className={styles.privacy}>Pas de spam. Désabonnement en un clic. RGPD.</p>
          </>
        ) : (
          <div className={styles.success}>
            <PartyPopper size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.4rem' }} />
            Tu es sur la liste ! On te contacte dès que Spark est prêt.
          </div>
        )}
      </div>
    </section>
  )
}
