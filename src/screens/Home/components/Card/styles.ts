import {TouchableOpacity} from 'react-native';
import styled, {DefaultTheme} from 'styled-components/native';
import Arrow from '../../../../assets/icons/right_arrow.svg';

export const Container = styled(TouchableOpacity)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: ${({theme}) => theme.colors.primary};
`;

export const AnimationName = styled.Text`
  font-family: ${({theme}) => theme.fonts.PoppinsSemiBold};
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
`;

const ArrowIconAttrs = ({theme}: {theme: DefaultTheme}) => ({
  fill: theme.colors.white,
});

export const ArrowIcon = styled(Arrow).attrs(ArrowIconAttrs)`
  width: 24px;
  height: 24px;
`;
