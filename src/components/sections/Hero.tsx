import { ArrowRight, Play, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <div className={styles.badge}>
          <Sparkles size={14} className={styles.badgeIcon} />
          <span>Introducing Luminary 2.0</span>
          <ArrowRight size={14} />
        </div>

        <h1 className={styles.headline}>
          The platform that
          <br />
          <span className={styles.gradientText}>illuminates</span> your team
        </h1>

        <p className={styles.subheadline}>
          Luminary brings your team's work, knowledge, and communication together
          in one powerful, beautiful workspace. Ship faster. Collaborate smarter.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.primaryBtn}
            onClick={() => handleScroll('#pricing')}
          >
            Start for free
            <ArrowRight size={18} />
          </button>
          <button className={styles.secondaryBtn}>
            <span className={styles.playIcon}>
              <Play size={14} fill="currentColor" />
            </span>
            Watch demo
          </button>
        </div>

        <div className={styles.social}>
          <div className={styles.avatars}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.avatar} style={{ '--i': i } as React.CSSProperties} />
            ))}
          </div>
          <p className={styles.socialText}>
            <strong>10,000+</strong> teams already on Luminary
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.dashboardMock}>
            <div className={styles.mockHeader}>
              <div className={styles.mockDots}>
                <span /><span /><span />
              </div>
              <div className={styles.mockTab}>Dashboard</div>
              <div className={styles.mockTab}>Analytics</div>
              <div className={styles.mockTab}>Team</div>
            </div>
            <div className={styles.mockBody}>
              <div className={styles.mockSidebar}>
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className={styles.mockSideItem} style={{ width: `${60 + (i % 3) * 15}%` }} />
                ))}
              </div>
              <div className={styles.mockContent}>
                <div className={styles.mockMetrics}>
                  {['2.4M', '98%', '12x'].map((val, i) => (
                    <div key={i} className={styles.mockMetric}>
                      <div className={styles.mockMetricVal}>{val}</div>
                      <div className={styles.mockMetricLabel} />
                    </div>
                  ))}
                </div>
                <div className={styles.mockChart}>
                  {[40,65,45,80,60,90,70,85,95].map((h, i) => (
                    <div key={i} className={styles.mockBar} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className={styles.mockRows}>
                  {[1,2,3].map(i => (
                    <div key={i} className={styles.mockRow}>
                      <div className={styles.mockRowIcon} />
                      <div className={styles.mockRowText} />
                      <div className={styles.mockRowBadge} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
