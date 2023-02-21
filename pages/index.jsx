// import { Inter } from '@next/font/google';
import Header from '@/components/header';
import styles from '@/pages/Home.module.scss';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
    </>
  );
}
