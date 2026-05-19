import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Engineering',
    company: 'Vercel',
    initials: 'SC',
    color: '#6C47FF',
    content: 'Luminary transformed how our entire engineering org operates. We cut our planning overhead by 60% in the first month and actually enjoy our standups now.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'CEO',
    company: 'Stripe',
    initials: 'MJ',
    color: '#FF6B9D',
    content: 'The real-time collaboration features are genuinely magical. Our remote team of 200 feels closer than ever. I can\'t imagine going back to how we worked before.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Product Lead',
    company: 'Linear',
    initials: 'PP',
    color: '#00D4FF',
    content: 'We evaluated 12 tools before choosing Luminary. Nothing else came close in terms of speed, design quality, and depth of features. It\'s in a class of its own.',
    rating: 5,
  },
  {
    name: 'Alex Rivera',
    role: 'CTO',
    company: 'Figma',
    initials: 'AR',
    color: '#22C55E',
    content: 'Migration was painless and adoption was instant. Our team asked for more seats before we even finished the trial. That\'s never happened with any other tool.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'VP of Design',
    company: 'Notion',
    initials: 'ET',
    color: '#F59E0B',
    content: 'As a design team, aesthetics matter to us deeply. Luminary is the first productivity tool that we actually enjoy opening. The attention to detail is extraordinary.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Engineering Manager',
    company: 'GitHub',
    initials: 'DK',
    color: '#8B6FFF',
    content: 'The analytics alone are worth it. Finally I have real data about how my team spends their time and where the bottlenecks are. Hugely impactful decisions made possible.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Testimonials</p>
          <h2 className={styles.title}>Loved by teams everywhere</h2>
          <p className={styles.subtitle}>
            Don't take our word for it. Here's what industry leaders have to say.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className={styles.content}>"{t.content}"</p>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
