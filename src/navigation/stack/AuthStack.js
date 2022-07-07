import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
import LoginScreen from '../../pages/auth/login/Login';
import RegisterScreen from '../../pages/auth/register/Register';

const Stack = createNativeStackNavigator();

const authStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default authStack;
