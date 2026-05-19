import styles from './Stats.module.css';

const stats = [
  { value: '10,000+', label: 'Teams worldwide' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '2M+', label: 'Tasks completed daily' },
  { value: '4.9/5', label: 'Average rating' },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
