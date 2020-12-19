import React, { ChangeEvent, FC, ReactElement, useCallback } from 'react';

import Search from 'antd/lib/input/Search';
import Layout from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import { fetchRepos } from '../../store/git-company/actions';
import styles from './home.module.scss';

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchApi = useCallback(
    debounce((value: string) => {
      dispatch(fetchRepos(value));
    }, 1000),
    []
  );

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    fetchApi(value);
  };

  const onSearch = (value: string) => fetchApi(value);

  return (
    <Layout className={styles.layout}>
      <Title className={clsx(styles.title, styles.mainTitle)} level={2}>
        Welcome to Github-React app
      </Title>
      <Title className={clsx(styles.title, styles.secondaryTitle)} level={4}>
        Search for the company
      </Title>
      <Search
        className={styles.search}
        placeholder="Find company on GitHub"
        enterButton="Search"
        size="large"
        onChange={handleChange}
        onSearch={onSearch}
      />
    </Layout>
  );
};

export default Home;
