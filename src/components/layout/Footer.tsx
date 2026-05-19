import { Zap, Github, Twitter, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies'],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <Zap size={22} className={styles.logoIcon} />
              <span>Luminary</span>
            </a>
            <p className={styles.tagline}>
              Illuminate your potential with the most powerful collaboration platform on the planet.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            {footerLinks.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul className={styles.linkList}>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.link}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Luminary Inc. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with ❤️ for teams everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
