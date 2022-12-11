import { FC } from 'react';

import Card from 'antd/lib/card';
import Layout from 'antd/lib/layout/layout';
import List from 'antd/lib/list';
import Title from 'antd/lib/typography/Title';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { renderRepositoryContent } from '../../fixtures/renderRepositoryContent';
import { getRepositoryByIdSelector } from '../../store/git-company/selectors';
import { RootState } from '../../store/rootReducer';
import layoutStyles from '../home/home.module.scss';
import styles from './repository.module.scss';

export const Repository: FC = () => {
  const { repositoryId, companyName } = useParams();

  const repositoryData = useSelector((state: RootState) =>
    getRepositoryByIdSelector(state, String(repositoryId))
  );

  return (
    <Layout className={layoutStyles.layout}>
      {repositoryData && (
        <main className={layoutStyles.main}>
          <Title level={2} className={layoutStyles.title}>{`${companyName} company`}</Title>
          <Title
            level={3}
            className={layoutStyles.title}
          >{`${repositoryData.name} repository`}</Title>
          <List
            className={styles.list}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={Object.entries(repositoryData)}
            renderItem={([name, content], index) => (
              <List.Item className={styles.listItem} key={`${name}${index}`}>
                <Card title={name}>{renderRepositoryContent(content)}</Card>
              </List.Item>
            )}
          />
        </main>
      )}
      <Link to="/" className={styles.link}>
        Home page
      </Link>
    </Layout>
  );
};
