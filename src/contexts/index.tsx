import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from '../styles/themes';
import AnimationsListContext, {ReactNodeProps} from './AnimationsListContext';

const Contexts: React.FC<ReactNodeProps> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />

      <AnimationsListContext>{children}</AnimationsListContext>
    </ThemeProvider>
  );
};

export default Contexts;
