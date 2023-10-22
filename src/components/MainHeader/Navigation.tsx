import styles from './Navigation.module.css';

interface NavigationProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navigation = ({ isLoggedIn, onLogout }: NavigationProps) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
