import { UserPlus, Settings, Rocket } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Create your workspace',
    description: 'Sign up in seconds and invite your team. No credit card required. Set up your workspace with your brand, roles, and preferences.',
  },
  {
    step: '02',
    icon: Settings,
    title: 'Configure your workflow',
    description: 'Connect your existing tools, set up automations, and customize your dashboard. Luminary adapts to how your team works — not the other way around.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Ship with confidence',
    description: 'Collaborate in real-time, track progress, and ship faster than ever before. Watch your team\'s productivity soar from day one.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2 className={styles.title}>Up and running in minutes</h2>
          <p className={styles.subtitle}>
            Getting started with Luminary is incredibly simple. Three steps and you're shipping.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className={styles.step}>
                {index < steps.length - 1 && (
                  <div className={styles.connector} />
                )}
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepIcon}>
                  <Icon size={28} />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
