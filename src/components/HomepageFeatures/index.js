import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Aprende en Español',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Este proyecto open-source en español te brinda una <b>guía clara y fácil de seguir</b>  para gestionar tus esfuerzos de búsqueda de trabajo
      </>
    ),
  },
  {
    title: 'Nuestra Filosofía',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        CodeHispano es un <b>proyecto vivo</b>, sustentado en una comunidad de Tech People comprometida en impulsar el éxito profesional de sus miembros.
      </>
    ),
  },
  {
    title: 'Aprovéchalo al máximo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Fija tiempos en tu agenda, participa con la comunidad y sobre todo... <b>!Aplica lo aprendido!</b>
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
        <h3>{title}</h3>
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
