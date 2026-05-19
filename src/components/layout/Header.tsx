import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import clsx from 'clsx';
import styles from './Header.module.css';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <Zap size={24} className={styles.logoIcon} />
          <span>Luminary</span>
        </a>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={styles.navLink}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.loginBtn}>Log in</button>
          <button className={styles.ctaBtn}>Get Started Free</button>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={styles.mobileNavLink}
            >
              {item.label}
            </button>
          ))}
          <div className={styles.mobileActions}>
            <button className={styles.loginBtn}>Log in</button>
            <button className={styles.ctaBtn}>Get Started Free</button>
          </div>
        </div>
      )}
    </header>
  );
}
