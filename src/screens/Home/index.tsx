import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Separator} from '../../components';
import useAnimationsList from '../../hooks/useAnimationsList';

import Card from './components/Card';
import {Container} from './styles';

const Home = () => {
  const {animations} = useAnimationsList();
  console.log(animations);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<AnimationType>) => {
      return <Card title={item.title} />;
    },
    [],
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
