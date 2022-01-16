export const removeEmptyFromArray = (array) => {
  return array.filter((el) => el !== null && typeof el !== 'undefined');
};
