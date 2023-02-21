import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.svg';
import styles from '@/components/header/header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logotipo}>
        <Image src={Logo} />
      </div>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link>
        {/* <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">O que fazemos</Link>
          </li>
          <li>
            <Link href="/">Cases</Link>
          </li>
        </ul> */}
      </div>
      <div className={styles.action}>
        <button className={styles.button}>Fale conosco</button>
      </div>
    </div>
  );
};

export default Header;
