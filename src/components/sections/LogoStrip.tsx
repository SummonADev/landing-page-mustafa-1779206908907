import styles from './LogoStrip.module.css';

const logos = [
  'Vercel', 'Stripe', 'Notion', 'Linear', 'Figma', 'GitHub', 'Slack', 'Atlassian',
];

export default function LogoStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by teams at world-class companies</p>
        <div className={styles.logos}>
          {logos.map((name) => (
            <div key={name} className={styles.logo}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
