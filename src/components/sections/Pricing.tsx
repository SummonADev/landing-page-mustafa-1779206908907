import { Check } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    period: '/mo',
    description: 'Perfect for individuals and small projects getting started.',
    features: [
      'Up to 5 team members',
      '3 active projects',
      '5GB storage',
      'Basic analytics',
      'Community support',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: '$29',
    yearlyPrice: '$19',
    period: '/mo',
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Up to 50 team members',
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Audit logs',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$99',
    yearlyPrice: '$79',
    period: '/mo',
    description: 'For large organizations with advanced security and compliance needs.',
    features: [
      'Unlimited team members',
      'Unlimited everything',
      '1TB storage',
      'Custom analytics',
      'Dedicated support',
      'SSO & SAML',
      'SLA guarantee',
      'Custom contracts',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Pricing</p>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>
            No hidden fees. No surprises. Start free and scale as you grow.
          </p>

          <div className={styles.toggle}>
            <span className={clsx(styles.toggleLabel, !yearly && styles.active)}>Monthly</span>
            <button
              className={clsx(styles.toggleSwitch, yearly && styles.toggled)}
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle billing period"
            >
              <span className={styles.toggleThumb} />
            </button>
            <span className={clsx(styles.toggleLabel, yearly && styles.active)}>
              Yearly
              <span className={styles.saveBadge}>Save 35%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(styles.card, plan.highlighted && styles.highlighted)}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>
                  <span className={styles.price}>
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <Check size={16} className={styles.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={clsx(styles.planBtn, plan.highlighted && styles.planBtnHighlighted)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
