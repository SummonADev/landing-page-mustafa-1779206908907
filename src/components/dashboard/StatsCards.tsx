import { TrendingUp, TrendingDown, DollarSign, Users, FolderKanban, CheckCircle } from 'lucide-react';
import styles from './StatsCards.module.css';

const stats = [
  {
    label: 'Total Revenue',
    value: '$84,320',
    change: '+12.5%',
    positive: true,
    icon: DollarSign,
    color: '#6C47FF',
    bg: 'rgba(108, 71, 255, 0.12)',
  },
  {
    label: 'Active Users',
    value: '3,492',
    change: '+8.1%',
    positive: true,
    icon: Users,
    color: '#00D4FF',
    bg: 'rgba(0, 212, 255, 0.12)',
  },
  {
    label: 'Projects',
    value: '128',
    change: '-2.3%',
    positive: false,
    icon: FolderKanban,
    color: '#FF6B9D',
    bg: 'rgba(255, 107, 157, 0.12)',
  },
  {
    label: 'Tasks Completed',
    value: '1,873',
    change: '+19.4%',
    positive: true,
    icon: CheckCircle,
    color: '#22C55E',
    bg: 'rgba(34, 197, 94, 0.12)',
  },
];

export default function StatsCards() {
  return (
    <div className={styles.grid}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        const Trend = stat.positive ? TrendingUp : TrendingDown;
        return (
          <div key={stat.label} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.label}>{stat.label}</span>
              <div className={styles.iconWrap} style={{ background: stat.bg }}>
                <Icon size={18} style={{ color: stat.color }} />
              </div>
            </div>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.footer}>
              <span className={stat.positive ? styles.positive : styles.negative}>
                <Trend size={13} />
                {stat.change}
              </span>
              <span className={styles.period}>vs last month</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
