import styles from './TopProjects.module.css';

const projects = [
  { name: 'Project Alpha', progress: 85, status: 'On Track', color: '#6C47FF', members: 6, tasks: '42/50' },
  { name: 'Design System', progress: 62, status: 'In Progress', color: '#00D4FF', members: 4, tasks: '31/50' },
  { name: 'API Gateway', progress: 39, status: 'At Risk', color: '#F59E0B', members: 3, tasks: '19/49' },
  { name: 'Mobile App', progress: 91, status: 'On Track', color: '#22C55E', members: 7, tasks: '55/60' },
  { name: 'Data Pipeline', progress: 15, status: 'Delayed', color: '#EF4444', members: 2, tasks: '6/40' },
];

const statusColors: Record<string, string> = {
  'On Track': '#22C55E',
  'In Progress': '#00D4FF',
  'At Risk': '#F59E0B',
  'Delayed': '#EF4444',
};

export default function TopProjects() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Top Projects</h3>
        <button className={styles.viewAll}>View all</button>
      </div>
      <div className={styles.list}>
        {projects.map((p) => (
          <div key={p.name} className={styles.item}>
            <div className={styles.row}>
              <span className={styles.name}>{p.name}</span>
              <div className={styles.meta}>
                <span className={styles.tasks}>{p.tasks} tasks</span>
                <span
                  className={styles.status}
                  style={{ color: statusColors[p.status], background: `${statusColors[p.status]}18` }}
                >
                  {p.status}
                </span>
              </div>
            </div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressBar}
                style={{ width: `${p.progress}%`, background: p.color }}
              />
            </div>
            <div className={styles.row}>
              <span className={styles.percent}>{p.progress}%</span>
              <span className={styles.members}>{p.members} members</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
