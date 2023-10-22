import Navigation from './Navigation';
import styles from './MainHeader.module.css';

interface MainHeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const MainHeader = ({ isAuthenticated, onLogout }: MainHeaderProps) => {
  return (
    <header className={styles['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
