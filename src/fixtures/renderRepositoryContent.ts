/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderRepositoryContent = (content: any) => {
  if (content !== null && typeof content === 'object') {
    return Object.entries(content).map(([title, value]) => `${title}: ${value}, `);
  }

  if (typeof content === 'boolean') {
    return content.toString();
  }

  return content;
};
