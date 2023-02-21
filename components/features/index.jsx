import Image from 'next/image';
import styles from './features.module.scss';
import Icon from '@/public/images/icon.svg';

const Features = () => {
  return (
    <div className={styles.container}>
      <h1>No Brasil, não há plataforma melhor. Garantimos.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      <div className={styles.features}>
        <div className={styles.feature}>
          <Image src={Icon} alt="Icon" />
          <h1>Automatização</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={Icon} alt="Icon" />
          <h1>Estratégia digital</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={Icon} alt="Icon" />
          <h1>Feature 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={Icon} alt="Icon" />
          <h1>Feature 4</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
