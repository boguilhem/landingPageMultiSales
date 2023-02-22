import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.svg';
import styles from './header.module.scss';
import Button from '../button';
import { scrollTo } from '@/src/utils/scrollTo';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logotipo}>
        <Image width={200} height={60} src={Logo} alt="Logo" />
      </div>
      <div className={styles.menu}>
        {/* <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link> */}
      </div>
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
