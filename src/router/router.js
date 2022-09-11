import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import Auth from './AuthStack';
// import DrawerNavigator from './Drawer';
import {useDispatch, useSelector} from 'react-redux';
import {getInfo} from '../Functions/User/functions';
import {refreshCurrentUser} from '../Redux/user-store/actions';
import DrawerNavigator from './Drawer';
const AppStack = createNativeStackNavigator();

function App() {
  const refMounted = React.createRef();
  const [loaded, setLoaded] = useState(false);
  const {user} = useSelector(store => store);
  const [initialised, setInitialised] = useState(false);
  let token = user?.userToken ?? null;
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingApp = async () => {
      if (!initialised) {
        setInitialised(true);
        setLoaded(true);
        if (token) {
          getInfo().then(res => {
            if (res?.status === 'Ok') {
              dispatch(refreshCurrentUser(res?.object));
            }
          });
        }
      } else {
        setLoaded(true);
      }
    };
    loadingApp();
    return () => {
      refMounted.current = false;
    };
  }, []);

  return !loaded ? null : (
    <NavigationContainer
      onReady={() => {
        refMounted.current = true;
      }}>
      <View style={{flex: 1}}>
        <AppStack.Navigator
          gestureEnabled={false}
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: 'transparent'},
          }}
          // initialRouteName={token ? 'App' : 'Auth'}>
          initialRouteName={'Auth'}>
          <AppStack.Screen name="Auth" component={Auth} />
          <AppStack.Screen name="App" component={DrawerNavigator} />
        </AppStack.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;
