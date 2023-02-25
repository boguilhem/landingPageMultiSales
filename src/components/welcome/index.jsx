import styles from './welcome.module.scss';
import Button from '../button';
import BannerWelcome from '@/public/images/bannerWelcome.svg';
import Image from 'next/image';
import { scrollTo } from '@/src/utils/scrollTo';

const Welcome = () => {
  const updateSales = () => {
    const initialNumber = 1200;
    let salesNumber = initialNumber;
    let timeleft = 10;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        salesNumber++;
      }
      document.getElementById('progressBar').value = 10 - timeleft;
      timeleft -= 1;
    }, 1000);
  };

  // var timeleft = 10;
  // var downloadTimer = setInterval(function () {
  //   if (timeleft <= 0) {
  //     clearInterval(downloadTimer);
  //   }
  //   document.getElementById('progressBar').value = 10 - timeleft;
  //   timeleft -= 1;
  // }, 1000);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Melhor plataforma de Multichannel sales nacional</h1>
        <p>
          Somos uma empresa de performance digital em marketplaces, facilitamos marketing
          e vendas para pequenos e grandes comerciantes.
        </p>
        <Button
          title="Aumentar vendas"
          kind="secondary"
          type="button"
          onClick={() => scrollTo('contato')}
        />
      </div>
      <div className={styles.image}>
        <Image
          width={535}
          height={383}
          src={BannerWelcome}
          alt="Banner Welcome"
          priority
        />
      </div>
    </div>
  );
};

export default Welcome;
