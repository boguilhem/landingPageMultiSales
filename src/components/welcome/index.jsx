import { useState, useEffect } from 'react';
import styles from './welcome.module.scss';
import Button from '../button';
import { scrollTo } from '@/src/utils/scrollTo';
import { salesCounter } from '@/src/utils/salesCounter';

const Welcome = () => {
  const [vendas, setVendas] = useState(1223);

  const updateSales = (vendas) => {
    salesCounter(vendas);
    setVendas(vendas + 1);
  };

  useEffect(() => {
    const sales = setInterval(() => updateSales(vendas), 1500);
    return () => clearInterval(sales);
  }, [vendas]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Melhor plataforma de Multichannel sales nacional</h1>
        {/* <svg height="30" width="200">
          <text id="Vendas" x="0" y="15" fill="red">
            I love SVG!
          </text>
          Sorry, your browser does not support inline SVG.
        </svg> */}
        <p>
          Somos uma empresa de performance digital em marketplaces, facilitamos marketing
          e vendas para pequenos e grandes comerciantes.
        </p>
        <Button
          title="Aumentar vendas"
          kind="secondary"
          type="button"
          onClick={() => scrollTo('contato')}
          // onClick={() => updateSales2(vendas)}
        />
      </div>
      <div className={styles.image}>
        {/* <Image
          id="banner"
          width={535}
          height={383}
          src={BannerWelcome}
          alt="Banner Welcome"
          priority
        /> */}
        <svg width="535" height="383" viewBox="40 40 545 393">
          <defs>
            <filter
              id="Retângulo_5364"
              x="26"
              y="217"
              width="574"
              height="256"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feFlood floodOpacity="0.11" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#0fce33" />
              <stop offset="1" stopColor="#0ef83b" />
            </linearGradient>
            <filter
              id="Retângulo_5362"
              x="0"
              y="0"
              width="625"
              height="364"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="15" result="blur-2" />
              <feFlood floodOpacity="0.11" />
              <feComposite operator="in" in2="blur-2" />
              <feComposite in="SourceGraphic" />
            </filter>
            <linearGradient
              id="linear-gradient-7"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#0fce33" />
              <stop offset="1" stopColor="#07b4a7" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-8"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#0fce33" />
              <stop offset="1" stopColor="#22ff4c" />
            </linearGradient>
          </defs>
          <g id="Grupo_2098" data-name="Grupo 2098" transform="translate(-1160 -313)">
            <g transform="matrix(1, 0, 0, 1, 1160, 313)" filter="url(#Retângulo_5364)">
              <rect
                id="Retângulo_5364-2"
                data-name="Retângulo 5364"
                width="484"
                height="166"
                rx="20"
                transform="translate(71 259)"
                fill="#fff"
              />
            </g>
            <text
              id="Vendas"
              transform="translate(1268 699)"
              fill="#350053"
              fontSize="40"
              fontFamily="'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Open Sans', 'Helvetica Neue', sans-serif"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                Vendas
              </tspan>
            </text>
            <text
              id="salesNumber"
              data-name="salesNumber"
              transform="translate(1556 702)"
              fill="#350053"
              fontSize="50"
              fontFamily="'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Open Sans', 'Helvetica Neue', sans-serif"
              fontWeight="500"
            >
              <tspan x="0" y="0">
                1.223
              </tspan>
            </text>
            <g id="Grupo_2097" data-name="Grupo 2097" transform="translate(1486.087 656)">
              <path
                id="Caminho_3535"
                data-name="Caminho 3535"
                d="M26.826,19.017a.867.867,0,0,0,.956-.769l.495-4.537a1.675,1.675,0,0,1,1.668-1.5h6.027v2.908a.867.867,0,1,0,1.735,0V12.217H52.622v2.908a.868.868,0,0,0,1.735,0V12.217h6.027a1.675,1.675,0,0,1,1.668,1.5l1.19,10.9a.867.867,0,0,0,.861.773c.031,0,.063,0,.095,0a.867.867,0,0,0,.769-.956l-1.19-10.9a3.408,3.408,0,0,0-3.392-3.042H54.356V9.192a9.192,9.192,0,0,0-18.385,0v1.289H29.945a3.408,3.408,0,0,0-3.392,3.042l-.495,4.537A.867.867,0,0,0,26.826,19.017ZM37.707,9.192a7.457,7.457,0,0,1,14.915,0v1.289H37.707Zm0,0"
                transform="translate(-23.04)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Caminho_3536"
                data-name="Caminho 3536"
                d="M386.483,270.253a2.724,2.724,0,1,0,3.853,0A2.728,2.728,0,0,0,386.483,270.253Zm2.626,2.626a.99.99,0,1,1,0-1.4A.991.991,0,0,1,389.109,272.879Zm0,0"
                transform="translate(-341.078 -238.291)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Caminho_3537"
                data-name="Caminho 3537"
                d="M54.109,199.359l-.4-9.969a3.6,3.6,0,0,0-3.431-3.431l-9.97-.4a3.587,3.587,0,0,0-2.676,1.045L23.12,201.109A3.808,3.808,0,0,0,22,203.742H1.792l2.576-23.615a.867.867,0,1,0-1.725-.188l-2.6,23.848a7.092,7.092,0,0,0,7.05,7.861H28.255l4.9,4.9a3.824,3.824,0,0,0,5.4,0l14.509-14.509A3.587,3.587,0,0,0,54.109,199.359ZM7.092,209.912a5.356,5.356,0,0,1-5.277-4.436H22.383a3.8,3.8,0,0,0,.736,1.035l3.4,3.4Zm44.745-9.1L37.328,215.317a2.088,2.088,0,0,1-2.949,0L24.346,205.285a2.088,2.088,0,0,1,0-2.949l14.51-14.509a1.849,1.849,0,0,1,1.3-.54h.074l9.969.4a1.854,1.854,0,0,1,1.768,1.767l.4,9.969A1.849,1.849,0,0,1,51.837,200.808Zm0,0"
                transform="translate(0 -158.443)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Caminho_3538"
                data-name="Caminho 3538"
                d="M282.724,316.688a3.014,3.014,0,1,0-3.014-3.013A3.018,3.018,0,0,0,282.724,316.688Zm0-4.292a1.279,1.279,0,1,1-1.279,1.279A1.28,1.28,0,0,1,282.724,312.4Zm0,0"
                transform="translate(-247.359 -274.729)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Caminho_3539"
                data-name="Caminho 3539"
                d="M329.26,383.625a3.014,3.014,0,1,0,3.014,3.014A3.017,3.017,0,0,0,329.26,383.625Zm0,4.292a1.279,1.279,0,1,1,1.279-1.279A1.28,1.28,0,0,1,329.26,387.917Zm0,0"
                transform="translate(-288.512 -339.255)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Caminho_3540"
                data-name="Caminho 3540"
                d="M293.619,327.709a.867.867,0,0,0-1.227,0l-8.847,8.847a.867.867,0,1,0,1.227,1.227l8.847-8.847A.867.867,0,0,0,293.619,327.709Zm0,0"
                transform="translate(-250.525 -289.581)"
                fill="url(#linear-gradient)"
              />
            </g>
            <g id="Grupo_2094" data-name="Grupo 2094" transform="translate(1205 355)">
              <g transform="matrix(1, 0, 0, 1, -45, -42)" filter="url(#Retângulo_5362)">
                <rect
                  id="Retângulo_5362-2"
                  data-name="Retângulo 5362"
                  width="535"
                  height="274"
                  rx="20"
                  transform="translate(45 42)"
                  fill="#fff"
                />
              </g>
              <rect
                id="Retângulo_5363"
                data-name="Retângulo 5363"
                width="109"
                height="75"
                rx="20"
                transform="translate(412 15)"
                fill="url(#linear-gradient-7)"
              />
              <text
                id="_43_"
                data-name="43%"
                transform="translate(452 61)"
                fill="#fff"
                fontSize="29"
                fontFamily="'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Open Sans', 'Helvetica Neue', sans-serif"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  43%
                </tspan>
              </text>
              <g
                id="Icon_feather-arrow-up"
                data-name="Icon feather-arrow-up"
                transform="translate(426.704 45.431)"
              >
                <path
                  id="Caminho_3532"
                  data-name="Caminho 3532"
                  d="M18,22.071V7.5"
                  transform="translate(-10.714 -7.5)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
                <path
                  id="Caminho_3533"
                  data-name="Caminho 3533"
                  d="M7.5,14.786,14.786,7.5l7.286,7.286"
                  transform="translate(-7.5 -7.5)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </g>
              <text
                id="Leads"
                transform="translate(35 75)"
                fill="#350053"
                fontSize="45"
                fontFamily="'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Open Sans', 'Helvetica Neue', sans-serif"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  Alcance
                </tspan>
              </text>
              <text
                id="_10.102"
                data-name="10.102"
                transform="translate(138 229)"
                fill="#350053"
                fontSize="55"
                fontFamily="'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Open Sans', 'Helvetica Neue', sans-serif"
                fontWeight="500"
              >
                <tspan x="0" y="0">
                  10.102
                </tspan>
              </text>
              <text
                id="Pessoas_impactadas_pela_campanha_que_converteram_em_cadastros."
                data-name="Pessoas impactadas pela campanha que 
converteram em cadastros."
                transform="translate(35 105)"
                fill="#350053"
                fontSize="20"
                fontFamily="'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Open Sans', 'Helvetica Neue', sans-serif"
                fontWeight="300"
              >
                <tspan x="0" y="18">
                  27 sites e +500 grupos de
                </tspan>
                <tspan x="0" y="48">
                  whatsapp e facebook
                </tspan>
              </text>
              <g id="group" transform="translate(35.173 185.474)">
                <g id="Grupo_2092" data-name="Grupo 2092" transform="translate(0 0)">
                  <path
                    id="Caminho_3534"
                    data-name="Caminho 3534"
                    d="M72.446,115.653a9.563,9.563,0,1,0-10.972,0,16.57,16.57,0,0,0-5.652,3.315,21.441,21.441,0,0,0-7.757-4.226,12.116,12.116,0,1,0-12.53,0,21.62,21.62,0,0,0-7.674,4.177,16.7,16.7,0,0,0-5.586-3.249,9.563,9.563,0,1,0-10.972,0A16.787,16.787,0,0,0,0,131.531v1.094a.071.071,0,0,0,.066.066h20.27a22.292,22.292,0,0,0-.182,2.8v1.127a8.814,8.814,0,0,0,8.818,8.818h25.69a8.814,8.814,0,0,0,8.818-8.818v-1.127a22.29,22.29,0,0,0-.182-2.8H83.7a.071.071,0,0,0,.066-.066v-1.094A16.851,16.851,0,0,0,72.446,115.653Zm-12.4-7.84a6.911,6.911,0,1,1,7.044,6.911h-.265A6.9,6.9,0,0,1,60.049,107.813ZM32.3,104.366a9.464,9.464,0,1,1,10.011,9.447H41.22A9.478,9.478,0,0,1,32.3,104.366ZM9.829,107.813a6.911,6.911,0,1,1,7.044,6.911h-.265A6.912,6.912,0,0,1,9.829,107.813ZM20.8,130.023H2.685a14.162,14.162,0,0,1,13.956-12.646h.2a14.014,14.014,0,0,1,9.033,3.365A21.762,21.762,0,0,0,20.8,130.023Zm39.994,6.6a6.175,6.175,0,0,1-6.166,6.166H28.939a6.175,6.175,0,0,1-6.166-6.166v-1.127A19.039,19.039,0,0,1,41.22,116.482c.182.017.381.017.564.017s.381,0,.564-.017a19.039,19.039,0,0,1,18.447,19.011Zm1.972-6.6a21.7,21.7,0,0,0-5.022-9.215,14.082,14.082,0,0,1,9.116-3.431h.2a14.162,14.162,0,0,1,13.956,12.646Z"
                    transform="translate(0 -92.25)"
                    fill="url(#linear-gradient-8)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Welcome;
