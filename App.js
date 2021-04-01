import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/home";
import Subscription from "./screens/subscription";
import Message from "./screens/message";
import NewMessage from "./screens/newMessage";
import Setting from "./screens/setting";
import UserHomePage from "./screens/userHomePage";
import Comments from "./screens/comments";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import comment from "./store/reducer/comment";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomTab from "./components/bottomTab";
import CodeScan from "./screens/codeScan";

export default function App() {
  const Stack=createStackNavigator()
  const Tab=createBottomTabNavigator()

  const rootReducer=combineReducers({
    comment:comment
  })

  const store=createStore(rootReducer)

  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Tab'} screenOptions={{headerShown:false}}>
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name={'Sub'} component={Subscription}/>
            <Stack.Screen name={'Msg'} component={Message}/>
            <Stack.Screen name={'NewMsg'} component={NewMessage}/>
            <Stack.Screen name={'Setting'} component={Setting}/>
            <Stack.Screen name={'UserHome'} component={UserHomePage}/>
            <Stack.Screen name={'Comment'} component={Comments}/>
            <Stack.Screen name={'Tab'} component={BottomTab}/>
            <Stack.Screen name={'CodeScan'} component={CodeScan}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
