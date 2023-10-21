import Head from 'next/head';
import { Menu } from '../../componentes/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main style={styles.main}>
        <h1 style= {styles.title}>Bem Vindos</h1>
      </main>
    </div>
  );
};

const styles = {
  main: {
    paddingTop: '50px',
  },
  title: {
    fontSize: '2rem',
  },
};

export default Home;