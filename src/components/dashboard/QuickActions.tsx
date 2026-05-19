import { Plus, Upload, UserPlus } from 'lucide-react';
import styles from './QuickActions.module.css';

const actions = [
  { label: 'New Project', icon: Plus, primary: true },
  { label: 'Upload', icon: Upload, primary: false },
  { label: 'Invite', icon: UserPlus, primary: false },
];

export default function QuickActions() {
  return (
    <div className={styles.actions}>
      {actions.map(({ label, icon: Icon, primary }) => (
        <button
          key={label}
          className={primary ? styles.primaryBtn : styles.secondaryBtn}
        >
          <Icon size={15} />
          {label}
        </button>
      ))}
    </div>
  );
}
