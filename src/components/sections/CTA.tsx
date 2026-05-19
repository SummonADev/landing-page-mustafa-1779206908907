import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.glow} />
          <div className={styles.content}>
            <div className={styles.badge}>
              <Sparkles size={14} />
              <span>Start for free today</span>
            </div>
            <h2 className={styles.title}>
              Ready to illuminate
              <br />
              your team's potential?
            </h2>
            <p className={styles.subtitle}>
              Join 10,000+ teams already using Luminary to ship faster, collaborate smarter, and build something amazing.
            </p>
            <div className={styles.actions}>
              <button
                className={styles.primaryBtn}
                onClick={() => handleScroll('#pricing')}
              >
                Get started free
                <ArrowRight size={18} />
              </button>
              <p className={styles.note}>No credit card required · Free forever plan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
