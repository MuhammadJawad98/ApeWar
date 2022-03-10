import React from 'react';
import {SafeAreaView} from 'react-native';
import Screen1 from './src/app/views/screen1';
import Screen2 from './src/app/views/Screen2';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/native-stack';
// import MyStack from './src/app/naviagtions/stacks';
// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Screen1 />
        {/* <Screen2 /> */}
      </SafeAreaView>
    </NavigationContainer>
    // <MyStack />
  );
};

export default App;
