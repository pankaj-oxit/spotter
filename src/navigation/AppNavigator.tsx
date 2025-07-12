import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/login/Login';
import Dashboard from '../screen/dashboard/Dashboard';
import AllFlightDetails from '../screen/AllFlightDetails/AllFlightDetails';
// import AllFlightDetails from '../screen/AllFlightDetails/AllFlightDetails;

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  AllFlightDetail: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name= "AllFlightDetail" component={AllFlightDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 