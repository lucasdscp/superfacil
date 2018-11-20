/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/components/home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);