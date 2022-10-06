import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';

const HomeNav = createNativeStackNavigator();

function HomeStack() {
  return (
    <HomeNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <HomeNav.Screen name="HomeScreen" component={Home} />
      {/* <HomeNav.Screen name="Profile" component={ProfileScreen} />
      <HomeNav.Screen name="Promotions" component={PromotionsScreen} /> */}
    </HomeNav.Navigator>
  );
}

export default HomeStack;
