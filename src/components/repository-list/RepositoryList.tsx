import React from 'react';

import { Table } from 'antd';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { repositoryTableColumns } from '../../fixtures/repositoryTableColumns';
import {
  getCompanyLoadingStateSelector,
  getCompanyNameSelector,
  getCompanyRepositoriesSelector,
} from '../../store/git-company/selectors';
import { GitRepoItem } from '../../store/git-company/types';
import { RootState } from '../../store/rootReducer';
import styles from './repository-list.module.scss';

export type HocProps = ReturnType<typeof mapStateToProps>;

const RepositoryList: React.FC<HocProps> = ({ repositories, isLoading, companyName }) => {
  const navigate = useNavigate();

  const handleRowClick = (record: GitRepoItem) => {
    return {
      onClick: () => {
        navigate(`${companyName}/${record.id}`);
      },
    };
  };

  return (
    <div className={styles.paper}>
      <Table
        columns={repositoryTableColumns}
        dataSource={repositories}
        loading={isLoading}
        onRow={handleRowClick}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: getCompanyLoadingStateSelector(state),
  repositories: getCompanyRepositoriesSelector(state),
  companyName: getCompanyNameSelector(state),
});

export default connect(mapStateToProps)(RepositoryList);
