import React from 'react';

import { Table } from 'antd';
import { connect } from 'react-redux';

import { repositoryTableColumns } from '../../fixtures/repositoryTableColumns';
import { getCompanyLoadingState, getCompanyRepositories } from '../../store/git-company/selectors';
import { RootState } from '../../store/rootReducer';
import styles from './repository-list.module.scss';

export type HocProps = ReturnType<typeof mapStateToProps>;

const RepositoryList: React.FC<HocProps> = ({ repositories, isLoading }) => {
  return (
    <div className={styles.paper}>
      <Table columns={repositoryTableColumns} dataSource={repositories} loading={isLoading} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: getCompanyLoadingState(state),
  repositories: getCompanyRepositories(state),
});

export default connect(mapStateToProps)(RepositoryList);
