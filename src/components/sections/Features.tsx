import { Zap, Shield, BarChart3, Users, Globe, Lock } from 'lucide-react';
import styles from './Features.module.css';
import clsx from 'clsx';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built on cutting-edge infrastructure that delivers sub-100ms response times globally. Your team never waits.',
    accent: 'purple',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description: 'Work together simultaneously with live cursors, instant syncing, and conflict-free editing across your entire team.',
    accent: 'pink',
  },
  {
    icon: BarChart3,
    title: 'Powerful Analytics',
    description: 'Deep insights into team productivity, project health, and performance with beautiful, actionable dashboards.',
    accent: 'blue',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified, GDPR compliant, with end-to-end encryption and granular permission controls.',
    accent: 'green',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Deployed across 30+ regions worldwide. Your data stays close to your team, wherever they are.',
    accent: 'orange',
  },
  {
    icon: Lock,
    title: 'Advanced Permissions',
    description: 'Granular role-based access control that scales from small teams to complex enterprise organizations.',
    accent: 'cyan',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Features</p>
          <h2 className={styles.title}>Everything your team needs</h2>
          <p className={styles.subtitle}>
            Luminary packs every tool you need into one cohesive, delightful experience — no more juggling a dozen apps.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className={clsx(styles.card, styles[`accent-${feature.accent}`])}>
                <div className={clsx(styles.iconWrap, styles[`icon-${feature.accent}`])}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
