import Header from '@/src/components/header';
import Welcome from '@/src/components/welcome';
import Features from '@/src/components/features';
import Contato from '@/src/components/contato';
import Footer from '@/src/components/footer';
import styles from '@/src/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Welcome />
        <Features />
        <Contato />
        <Footer />
      </div>
    </>
  );
}
