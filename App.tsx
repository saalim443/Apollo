// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Anc from './Screen/Anc';
import Dashboard from './Screen/Dashboard';
import SalesFunelMaster from './Screen/SalesFunelMaster';
import SalesFunelMasterSalesExecutiveObservation from './Screen/SalesFunelMasterSalesExecutiveObservation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Anc">
        <Stack.Screen name="Anc" component={Anc} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="SalesFunelMaster" component={SalesFunelMaster} options={{ headerShown: true }} />
        <Stack.Screen 
  name="SalesFunelMasterSalesExecutiveObservation" 
  component={SalesFunelMasterSalesExecutiveObservation} 
  options={{ 
    headerShown: true,
    title: 'SalesFunelMaster'
  }} 
/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
