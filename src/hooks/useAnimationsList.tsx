import {useContext} from 'react';
import {AnimationsListContext} from '../contexts/AnimationsListContext';

const useAnimationsList = () => {
  const context = useContext(AnimationsListContext);

  if (context) {
    return context;
  }

  throw new Error('Animations provider must be setter');
};

export default useAnimationsList;
