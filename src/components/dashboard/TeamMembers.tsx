import styles from './TeamMembers.module.css';

const members = [
  { name: 'Sarah Kim', role: 'Design Lead', initial: 'S', color: '#6C47FF', online: true, tasks: 12 },
  { name: 'James Rivera', role: 'Backend Dev', initial: 'J', color: '#00D4FF', online: true, tasks: 8 },
  { name: 'Marcus Lee', role: 'Frontend Dev', initial: 'M', color: '#FF6B9D', online: false, tasks: 5 },
  { name: 'Priya Patel', role: 'Product Manager', initial: 'P', color: '#22C55E', online: true, tasks: 15 },
  { name: 'Tom Chen', role: 'DevOps', initial: 'T', color: '#F59E0B', online: false, tasks: 3 },
];

export default function TeamMembers() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Team Members</h3>
        <button className={styles.invite}>+ Invite</button>
      </div>
      <ul className={styles.list}>
        {members.map((m) => (
          <li key={m.name} className={styles.item}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar} style={{ background: m.color }}>{m.initial}</div>
              <span className={m.online ? styles.onlineDot : styles.offlineDot} />
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{m.name}</span>
              <span className={styles.role}>{m.role}</span>
            </div>
            <div className={styles.tasks}>
              <span className={styles.taskCount}>{m.tasks}</span>
              <span className={styles.taskLabel}>tasks</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
