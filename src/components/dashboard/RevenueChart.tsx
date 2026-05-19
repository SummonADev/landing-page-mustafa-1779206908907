import { useState } from 'react';
import styles from './RevenueChart.module.css';

const data = [
  { month: 'Jan', revenue: 42000, expenses: 28000 },
  { month: 'Feb', revenue: 38000, expenses: 25000 },
  { month: 'Mar', revenue: 55000, expenses: 32000 },
  { month: 'Apr', revenue: 47000, expenses: 29000 },
  { month: 'May', revenue: 63000, expenses: 35000 },
  { month: 'Jun', revenue: 58000, expenses: 33000 },
  { month: 'Jul', revenue: 72000, expenses: 40000 },
  { month: 'Aug', revenue: 68000, expenses: 38000 },
  { month: 'Sep', revenue: 84000, expenses: 44000 },
  { month: 'Oct', revenue: 79000, expenses: 42000 },
  { month: 'Nov', revenue: 91000, expenses: 48000 },
  { month: 'Dec', revenue: 88000, expenses: 46000 },
];

const maxVal = Math.max(...data.flatMap((d) => [d.revenue, d.expenses]));

function formatK(n: number) {
  return `$${(n / 1000).toFixed(0)}k`;
}

export default function RevenueChart() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Revenue vs Expenses</h3>
          <p className={styles.subtitle}>Full year overview</p>
        </div>
        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#6C47FF' }} />
            Revenue
          </span>
          <span className={styles.legendItem}>
            <span className={styles.dot} style={{ background: 'rgba(255,107,157,0.7)' }} />
            Expenses
          </span>
        </div>
      </div>

      <div className={styles.chartWrap}>
        {/* Y axis labels */}
        <div className={styles.yAxis}>
          {[100, 75, 50, 25, 0].map((p) => (
            <span key={p} className={styles.yLabel}>{formatK((p / 100) * maxVal)}</span>
          ))}
        </div>

        {/* Bars */}
        <div className={styles.bars}>
          {data.map((d, i) => (
            <div
              key={d.month}
              className={styles.barGroup}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === i && (
                <div className={styles.tooltip}>
                  <p className={styles.tooltipMonth}>{d.month}</p>
                  <p className={styles.tooltipRevenue}>Rev: {formatK(d.revenue)}</p>
                  <p className={styles.tooltipExpense}>Exp: {formatK(d.expenses)}</p>
                </div>
              )}
              <div className={styles.barPair}>
                <div
                  className={styles.bar}
                  style={{
                    height: `${(d.revenue / maxVal) * 100}%`,
                    background: 'linear-gradient(180deg, #6C47FF 0%, #8B6FFF 100%)',
                  }}
                />
                <div
                  className={styles.bar}
                  style={{
                    height: `${(d.expenses / maxVal) * 100}%`,
                    background: 'linear-gradient(180deg, #FF6B9D 0%, rgba(255,107,157,0.5) 100%)',
                  }}
                />
              </div>
              <span className={styles.xLabel}>{d.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
