import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
  justify-content: center;
`;
