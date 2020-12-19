import React, { FC, ReactElement } from 'react';

import Search from 'antd/lib/input/Search';
import Layout from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';

import styles from './home.module.scss';

const Home: FC = (): ReactElement => {
  return (
    <Layout className={styles.layout}>
      <Title className={styles.title} level={3}>
        Welcome to Github-React app
      </Title>
      <Title className={styles.title} level={5}>
        Search for the company
      </Title>
      <Search
        className={styles.search}
        placeholder="Find company on GitHub"
        enterButton="Search"
        size="large"
        // loading
      />
    </Layout>
  );
};

export default Home;
