const colors = {
  background: '#ECF0F2',
  primary: '#6F4DBF',
  secondary: '#36C4D6',
  text: '#627179',

  success: '#26AF46',
  error: '#CF1E2A',
  warning: '#E78F0B',

  gray1: '#A7ADBA',
  gray2: '#8C8C8C',
  gray3: '#343A40',

  black: '#000000',
  white: '#FFFFFF',
};

type Keys = keyof typeof colors;

export type Color = typeof colors[Keys];

export default colors;
