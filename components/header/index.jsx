import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.svg';
import styles from './header.module.scss';
import Button from '../button';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logotipo}>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={styles.menu}>
        {/* <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link> */}
      </div>
      <div className={styles.action}>
        <Button title="Fale conosco" kind="primary" />
      </div>
    </div>
  );
};

export default Header;
