import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Overlapping Layout',
    Svg: require('@site/static/img/bluefish logo transparent - no bubbles.svg').default,
    description: (
      <>
        Break free from the tree hierarchy! Bluefish lets you write components that belong to multiple layouts.
        Easily create labels, highlights, and other annotations. Specify x and y layouts separately.
      </>
    ),
  },
  {
    title: 'Reactive Layout',
    Svg: require('@site/static/img/bluefish logo transparent - no bubbles.svg').default,
    description: (
      <>
        Bluefish layouts are reactive. They automatically update when the data changes or the view is resized.
        Push view size constraints down the layout hierarchy, and push measurements up from the leaves.
      </>
    ),
  },
  {
    title: 'Modular Layout',
    Svg: require('@site/static/img/bluefish logo transparent - no bubbles.svg').default,
    description: (
      <>
        With Bluefish's modular layout API, it's easy to mix, match, and nest your favorite layout techniques
        for math notation, pretty printers, labeling, and more.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
