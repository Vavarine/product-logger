import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from './pages/home';
import Detail from './pages/product';

const AppStack = createStackNavigator();

const Routes = () => {
   return (
      <NavigationContainer>
         <AppStack.Navigator
            screenOptions={{
               headerTitleAlign: 'center',
               headerStyle: {
                  backgroundColor: '#DA552F'
               },
               headerTintColor: '#fff',
               gestureEnabled: true,
               cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
         >
            <AppStack.Screen 
               name="Home"
               component={Home} 
               options={{ title: 'Product Logger' }} 
            />
            <AppStack.Screen 
               name="Product" 
               component={Detail} 
               screenOptions
            />
         </AppStack.Navigator>
      </NavigationContainer>
   )
}

export default Routes;