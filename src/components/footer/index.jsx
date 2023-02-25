import Image from 'next/image';
// import Logo from '@/public/images/logo.svg';
import SigmaSails from '@/public/images/SigmaSails1.png';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.columnPrincipal}`}>
        {/* <Image width={200} height={60} src={Logo} alt="Logo" /> */}
        <Image src={SigmaSails} alt="Logo" />
      </div>
      <div className={styles.column}>
        <h1>Contato</h1>
        <p>multichannel.sales.lp@gmail.com</p>
      </div>
      <div className={styles.allRightsReserved}>
        <p>©2023 SigmaSails - Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
