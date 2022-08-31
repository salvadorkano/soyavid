import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/login';
import RegisterScreen from '../screens/Auth/register';
import VerifyCodeScreen from '../screens/Auth/verifyCount';
import RecoverScreen from '../screens/Auth/recover';
import RestardPasswordScreen from '../screens/Auth/resetPassword';

const AuthStack = createNativeStackNavigator();

function Auth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <AuthStack.Screen name="Recover" component={RecoverScreen} />
      <AuthStack.Screen
        name="RestardPassword"
        component={RestardPasswordScreen}
      />
    </AuthStack.Navigator>
  );
}

export default Auth;
