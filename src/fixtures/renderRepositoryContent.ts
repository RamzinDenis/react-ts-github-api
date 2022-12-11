export const renderRepositoryContent = (content: object | boolean) => {
  if (content !== null && typeof content === 'object') {
    return Object.entries(content).map(([title, value]) => `${title}: ${value}, `);
  }

  if (typeof content === 'boolean') {
    return content.toString();
  }

  return content;
};
