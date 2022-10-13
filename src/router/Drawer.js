import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {width} from '../Helpers/dimensions';
import MenuDrawerNav from '../screens/Drawer/MenuDrawer';
import {useSelector} from 'react-redux';
import HomeStack from './HomeStack';
import ProfileScreen from '../screens/Profile/Profile';
import ShoppingScreen from '../screens/Shopping/Shopping';

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
      <Drawer.Screen name="Shopping" component={ShoppingScreen} />
    </Drawer.Navigator>
  );
}
