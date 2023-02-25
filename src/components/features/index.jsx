import Image from 'next/image';
import styles from './features.module.scss';
import Automation from '@/public/images/icon-automation.png';
import Estrategia from '@/public/images/icon-estrategia.png';
import Centralizacao from '@/public/images/icon-centralizacao.png';
import Americanas from '@/public/images/icon-americanas.png';
import Magalu from '@/public/images/icon-magalu.png';
import MercadoLivre from '@/public/images/icon-mercado-livre.png';
import Facebook from '@/public/images/icon-facebook.png';

const Features = () => {
  return (
    <div className={styles.container}>
      <h1>No Brasil, não há plataforma melhor. Garantimos.</h1>
      <p>
        Expanda seu negócio para todos os cantos do Brasil colocando apenas 30 minutos do
        seu tempo por produto!
      </p>

      <div className={styles.features}>
        <div className={styles.feature}>
          <Image width={80} height={80} src={Automation} alt="Icon" />
          <h1>Automatização</h1>
          <p>
            Preenchendo apenas um formulário com informações sobre seu produto,
            conseguimos recriar seu anúncio em diversos sites de forma eficiente e
            customizável.
          </p>
        </div>
        <div className={styles.feature}>
          <Image width={80} height={80} src={Estrategia} alt="Icon" />
          <h1>Estratégia digital</h1>
          <p>
            Ofereça seu produto em sites ainda não alcançados por seus competidores, se
            torne onipresente.
          </p>
        </div>
        <div className={styles.feature}>
          <Image width={80} height={80} src={Centralizacao} alt="Icon" />
          <h1>Centralização</h1>
          <p>
            Organize e observe todos os seus estoques e seus anúncios de forma
            centralizada através da nossa plataforma.
          </p>
        </div>
        <div className={styles.feature}>
          <Image width={80} height={80} src={Americanas} alt="Icon" />
          <Image width={80} height={80} src={Magalu} alt="Icon" />
          <Image width={80} height={80} src={MercadoLivre} alt="Icon" />
          <Image width={80} height={80} src={Facebook} alt="Icon" />
          <h1>Alcance Nacional</h1>
          <p>
            Nossa plataforma se destaca no mercado brasileiro ao ser atualmente a única
            opção de marketplace com alcance nacional existente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
