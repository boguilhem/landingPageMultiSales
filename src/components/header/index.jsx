import Image from 'next/image';
import SigmaSails from '@/public/images/SigmaSails.png';
import styles from './header.module.scss';
import Button from '../button';
import { scrollTo } from '@/src/utils/scrollTo';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logotipo}>
        <Image src={SigmaSails} alt="Logo" />
      </div>
      <div className={styles.menu}></div>
      <div className={styles.action}>
        <Button
          title="Fale conosco"
          kind="primary"
          type="button"
          onClick={() => scrollTo('contato')}
        />
      </div>
    </div>
  );
};

export default Header;
