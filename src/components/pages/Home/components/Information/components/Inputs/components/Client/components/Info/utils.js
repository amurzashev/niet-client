/* eslint-disable import/prefer-default-export */
export const nameFormatting = name => {
  const arr = name.split(' ');
  arr[1] = `${arr[1].charAt(0)}.`;
  arr[2] = `${arr[2].charAt(0)}.`;
  return arr.join(' ');
};
