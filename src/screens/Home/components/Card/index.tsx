import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {AnimationName, ArrowIcon, Container} from './styles';

interface CardProps extends TouchableOpacityProps {
  title: string;
}

const Card = ({title, ...rest}: CardProps) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <AnimationName>{title}</AnimationName>

      <ArrowIcon />
    </Container>
  );
};

export default Card;
