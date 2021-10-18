/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import SignIn from './src/pages/SignIn';
import Contact from './src/pages/Contact';
import ListContact from './src/pages/ListContact';

const Stack = createNativeStackNavigator();

const App: () => Node = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: "Contact App"
        }}
        component={Home}
      />
      <Stack.Screen
        name="SignIn"
        options={{
          title: 'Sign In',
        }}
        component={SignIn}
      />
      <Stack.Screen
        name="ListContact"
        options={{
          title: 'My Contact',
        }}
        component={ListContact}
      />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  </NavigationContainer>
);


export default App;
