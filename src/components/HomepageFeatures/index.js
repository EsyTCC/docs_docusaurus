import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Eventos Bosch',
    Svg: require('@site/static/img/event.svg').default,
    description: (
      <>
        Os Esy Bosch são a solução ideal para organizar e gerenciar eventos de forma simples e eficaz. 
        Com o nosso sistema BoschEsy, você pode criar e controlar eventos com facilidade.
      </>
    ),
  },
  {
    title: 'Sistema Bosch',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        BoschEsy oferece uma solução completa para organização de eventos, com o sistema BoschEsy, integrado ao SSO 
        (Single Sign-On) da Bosch, garantindo segurança e praticidade incomparáveis na gestão de eventos.
      </>
    ),
  },
  {
    title: 'Ticket para eventos',
    Svg: require('@site/static/img/ticket.svg').default,
    description: (
      <>
        Para participar de um evento, é muito simples,
        basta apenas resgatar um ticket, que receberá no seu e-mail corporativo a foto do ticket, para autenticar no nosso sitema (BoschEsy)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
