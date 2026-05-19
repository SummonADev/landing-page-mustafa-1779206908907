import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Zap, LayoutDashboard, FolderKanban, Users, BarChart3,
  Settings, Bell, Search, ChevronLeft, ChevronRight,
  LogOut, HelpCircle, Moon
} from 'lucide-react';
import clsx from 'clsx';
import styles from './DashboardLayout.module.css';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
  { label: 'Team', href: '/dashboard/team', icon: Users },
  { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const bottomNavItems = [
  { label: 'Help', href: '#', icon: HelpCircle },
  { label: 'Appearance', href: '#', icon: Moon },
  { label: 'Log out', href: '/', icon: LogOut },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={clsx(styles.shell, collapsed && styles.collapsed)}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link to="/" className={styles.logo}>
            <Zap size={22} className={styles.logoIcon} />
            {!collapsed && <span className={styles.logoText}>Luminary</span>}
          </Link>
          <button
            className={styles.collapseBtn}
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  to={href}
                  className={clsx(styles.navItem, location.pathname === href && styles.active)}
                >
                  <Icon size={18} className={styles.navIcon} />
                  {!collapsed && <span className={styles.navLabel}>{label}</span>}
                  {collapsed && <span className={styles.tooltip}>{label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.sidebarBottom}>
          <ul className={styles.navList}>
            {bottomNavItems.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link to={href} className={styles.navItem}>
                  <Icon size={18} className={styles.navIcon} />
                  {!collapsed && <span className={styles.navLabel}>{label}</span>}
                  {collapsed && <span className={styles.tooltip}>{label}</span>}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.userCard}>
            <div className={styles.avatar}>A</div>
            {!collapsed && (
              <div className={styles.userInfo}>
                <span className={styles.userName}>Alex Johnson</span>
                <span className={styles.userRole}>Admin</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className={styles.main}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search projects, people..."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.topbarActions}>
            <div className={styles.notifWrapper}>
              <button
                className={styles.iconBtn}
                onClick={() => setNotifOpen(!notifOpen)}
                aria-label="Notifications"
              >
                <Bell size={18} />
                <span className={styles.badge}>3</span>
              </button>
              {notifOpen && (
                <div className={styles.notifDropdown}>
                  <h4 className={styles.notifTitle}>Notifications</h4>
                  {[
                    { text: 'New comment on Project Alpha', time: '2m ago' },
                    { text: 'Sarah invited you to a project', time: '1h ago' },
                    { text: 'Monthly report is ready', time: '3h ago' },
                  ].map((n, i) => (
                    <div key={i} className={styles.notifItem}>
                      <span className={styles.notifDot} />
                      <div>
                        <p className={styles.notifText}>{n.text}</p>
                        <p className={styles.notifTime}>{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.topbarAvatar}>A</div>
          </div>
        </header>

        {/* Page content */}
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
