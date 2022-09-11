import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {width} from '../Helpers/dimensions';
import MenuDrawerNav from '../screens/Drawer/MenuDrawer';
import {useSelector} from 'react-redux';
import HomeStack from './HomeStack';
import ProfileScreen from '../screens/Profile/Profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation, route}) {
  const [mounted, setMounted] = useState(false);
  const {app} = useSelector(store => store);
  useFocusEffect(
    React.useCallback(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []),
  );

  return (
    <Drawer.Navigator
      drawerContent={props =>
        mounted ? (
          // <MenuDrawerNav navs={props} navigation={navigation} route={route} />
          <MenuDrawerNav navs={props} navigation={navigation} route={route} />
        ) : null
      }
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
        drawerStyle: {width: width * 0.68},
      }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />

      {/* <Drawer.Screen name="MainStack" component={MainStackScreen} />
      <Drawer.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
      <Drawer.Screen name="ReservationScreen" component={ReservationScreen} />
      <Drawer.Screen name="PreOrder" component={PreOrderScreen} />
      <Drawer.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Promotions" component={PromotionsScreen} />
      <Drawer.Screen name="Availability" component={AvailabilityScreen} />
      <Drawer.Screen name="ListAwait" component={ListAwaitScreen} />
      <Drawer.Screen name="Review" component={ReviewScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} /> */}
    </Drawer.Navigator>
  );
}
