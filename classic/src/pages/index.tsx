import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { planets } from "@site/docs/code";
import { CodeEditor } from "@site/docs/CodeEditor";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.leftContent}>
            <h1 className="hero__title">
              Bluefish:
              <br />
              {siteConfig.title}
            </h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs/get-started/run">
                Get Started →
              </Link>
            </div>
          </div>
          <div className={styles.rightContent}>
            <CodeEditor code={planets} hideCode />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
