import styles from './App.module.css';
import CardList from './modules/CardList/CardList';

const App = () => {
  return (
    <div className={styles.container}>
      <CardList />
    </div>
  );
};

export default App;
