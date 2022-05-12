import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Separator} from '../../components';
import useAnimationsList from '../../hooks/useAnimationsList';
import {AppStackParamsList} from '../../types/navigation';

import Card from './components/Card';
import {Container} from './styles';

const Home = () => {
  const {animations} = useAnimationsList();

  const {navigate} = useNavigation();

  const handleSelectedOption = useCallback(
    (animation: AnimationType) => {
      const screenName =
        animation.navigationScreenName as keyof AppStackParamsList;

      navigate(screenName);
    },
    [navigate],
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<AnimationType>) => {
      return (
        <Card title={item.title} onPress={() => handleSelectedOption(item)} />
      );
    },
    [handleSelectedOption],
  );

  return (
    <Container>
      <FlatList
        data={animations}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
