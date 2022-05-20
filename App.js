import React from 'react'
import { View, Text } from 'react-native'


import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Nav from './src/navigation'

const Stack = createStackNavigator()

import Calendar from './src/features/calendar/calendar.screen'
import Tools from './src/features/tools/tools.screen'
import Learning from './src/features/learning/learning.screen'

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerShown :false
        }}
        initialRouteName={'Calendar'}
     >
       <Stack.Screen name='Learning' component={Nav}/>
       <Stack.Screen name='Calendar' component={Nav}/>
       <Stack.Screen name='Tools' component={Nav}/>

     </Stack.Navigator>
   </NavigationContainer>
  )
}