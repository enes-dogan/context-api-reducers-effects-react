import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import styles from './Home.module.css';

const Home = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
