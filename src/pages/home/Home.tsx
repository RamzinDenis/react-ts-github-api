import { ChangeEvent, FC, ReactElement, useCallback } from 'react';

import { Layout } from 'antd';
import Search from 'antd/es/input/Search';
import Title from 'antd/es/typography/Title';
import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import RepositoryList from '../../components/repository-list';
import { fetchRepos } from '../../store/git-company/actions';
import styles from './home.module.scss';

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const fetchApi = useCallback(
    debounce((value: string) => {
      dispatch(fetchRepos(value));
    }, 1500),
    []
  );

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    fetchApi(value);
  };

  const onSearch = (value: string) => fetchApi(value);

  return (
    <Layout className={styles.layout}>
      <main className={styles.main}>
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

        <RepositoryList />
      </main>
    </Layout>
  );
};

export default Home;
