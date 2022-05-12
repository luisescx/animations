import React, {useEffect, useRef} from 'react';
import LoadingImage from '../../assets/images/load.png';
import {Container} from './styles';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const Loading = () => {
  const wasStarted = useRef(false);

  const loadingAnim = useSharedValue(0);

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${loadingAnim.value}deg`,
        },
      ],
    };
  });

  useEffect(() => {
    wasStarted.current = true;

    loadingAnim.value = withRepeat(
      withTiming(360, {duration: 1000, easing: Easing.linear}),
      -1,
    );
  }, [loadingAnim]);

  return (
    <Container>
      <Animated.Image style={imageStyle} source={LoadingImage} />
    </Container>
  );
};

export default Loading;
