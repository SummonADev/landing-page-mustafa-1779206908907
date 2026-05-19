import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'How does the free plan work?',
    answer: 'The free plan gives you full access to Luminary for up to 5 team members and 3 projects — forever. No credit card required. Upgrade only when you need more.',
  },
  {
    question: 'Can I migrate from other tools?',
    answer: 'Yes! We offer one-click imports from Notion, Asana, Jira, Linear, and more. Our migration team can assist with complex setups at no extra cost.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We\'re SOC 2 Type II certified, GDPR compliant, and use AES-256 encryption at rest and in transit. Your data is yours — we never share or sell it.',
  },
  {
    question: 'What happens when I exceed my plan limits?',
    answer: 'We\'ll notify you as you approach your limits and give you a grace period. We never cut off access suddenly. You can upgrade at any time from your dashboard.',
  },
  {
    question: 'Do you offer discounts for nonprofits or education?',
    answer: 'Yes — we offer 50% off for registered nonprofits and free Pro plans for educational institutions. Contact our team with proof of status to apply.',
  },
  {
    question: 'What integrations do you support?',
    answer: 'We integrate with 200+ tools including Slack, GitHub, Figma, Google Workspace, Zoom, Zapier, and more. Our public API also lets you build custom integrations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know about Luminary. Can't find an answer? Chat with our team.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={clsx(styles.item, openIndex === index && styles.open)}
            >
              <button
                className={styles.question}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={clsx(styles.chevron, openIndex === index && styles.chevronOpen)}
                />
              </button>
              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
