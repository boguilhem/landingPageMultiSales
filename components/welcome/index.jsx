import styles from './welcome.module.scss';
import Button from '../button';
import BannerWelcome from '@/public/images/bannerWelcome.svg';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Melhor plataforma de Multichannel sales</h1>
        <p>
          Somos uma empresa de performance digital em marketplaces, aceleramos vendas e
          marketing para pequenos e grandes comerciantes.
        </p>
        <Button title="Aumentar vendas" kind="secondary" />
      </div>
      <div className={styles.image}>
        <Image src={BannerWelcome} alt="Banner Welcome" priority />
      </div>
    </div>
  );
};

export default Welcome;
