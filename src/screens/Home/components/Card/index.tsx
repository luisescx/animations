import React from 'react';
import {AnimationName, ArrowIcon, Container} from './styles';

interface CardProps {
  title: string;
}

const Card = ({title}: CardProps) => {
  return (
    <Container activeOpacity={0.7}>
      <AnimationName>{title}</AnimationName>

      <ArrowIcon />
    </Container>
  );
};

export default Card;
