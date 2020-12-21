enum AlignTypes {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left',
}

const repositoryColumnsData = [
  {
    title: 'Name of the repository',
    key: 'name',
  },
  {
    title: 'Github url',
    key: 'git_url',
  },
  {
    title: 'Amount of stars',
    key: 'stargazers_count',
  },
  {
    title: 'Amount of forks',
    key: 'forks_count',
  },

  {
    title: 'Watchers',
    key: 'watchers_count',
  },
];

export const repositoryTableColumns = repositoryColumnsData.map(({ title, key }) => ({
  title,
  key,
  dataIndex: key,
  align: AlignTypes.CENTER,
}));
