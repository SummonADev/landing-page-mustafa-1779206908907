import { GitCommit, UserPlus, CheckCheck, AlertCircle, FileText } from 'lucide-react';
import styles from './RecentActivity.module.css';

const activities = [
  {
    icon: CheckCheck,
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.12)',
    title: 'Task completed',
    desc: 'Design system v2 — Sarah K.',
    time: '2 min ago',
  },
  {
    icon: UserPlus,
    color: '#00D4FF',
    bg: 'rgba(0,212,255,0.12)',
    title: 'New member joined',
    desc: 'Marcus Lee joined the team',
    time: '28 min ago',
  },
  {
    icon: GitCommit,
    color: '#6C47FF',
    bg: 'rgba(108,71,255,0.12)',
    title: 'Code pushed',
    desc: 'feat: auth module — James R.',
    time: '1 hr ago',
  },
  {
    icon: AlertCircle,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
    title: 'Deadline approaching',
    desc: 'API integration due in 2 days',
    time: '3 hr ago',
  },
  {
    icon: FileText,
    color: '#FF6B9D',
    bg: 'rgba(255,107,157,0.12)',
    title: 'Report generated',
    desc: 'Monthly analytics ready',
    time: '5 hr ago',
  },
  {
    icon: CheckCheck,
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.12)',
    title: 'Milestone reached',
    desc: 'Beta launch complete 🎉',
    time: 'Yesterday',
  },
];

export default function RecentActivity() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Activity</h3>
        <button className={styles.viewAll}>View all</button>
      </div>
      <ul className={styles.list}>
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <li key={i} className={styles.item}>
              <div className={styles.iconWrap} style={{ background: a.bg }}>
                <Icon size={15} style={{ color: a.color }} />
              </div>
              <div className={styles.body}>
                <p className={styles.itemTitle}>{a.title}</p>
                <p className={styles.itemDesc}>{a.desc}</p>
              </div>
              <span className={styles.time}>{a.time}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
