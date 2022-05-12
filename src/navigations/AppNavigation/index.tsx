import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoadingScreen} from '../../screens';
import {useTheme} from 'styled-components/native';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigation = () => {
  const {colors, fonts} = useTheme();

  const options = useCallback(
    (title: string) => {
      return {
        title,
        headerTitleStyle: {
          color: colors.primary,
          fontFamily: fonts.PoppinsBold,
        },
      };
    },
    [colors.primary, fonts.PoppinsBold],
  );

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Screen
        name="Home"
        component={HomeScreen}
        options={() => options('Animations')}
      />

      <Screen
        name="Loading"
        component={LoadingScreen}
        options={() => options('Loading')}
      />
    </Navigator>
  );
};

export default AppNavigation;
