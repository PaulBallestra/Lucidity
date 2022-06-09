import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Nav from './src/navigation'

const Stack = createStackNavigator()

import Landing from './src/features/landing/landing.screen'
import Tools from './src/features/tools/tools.screen'
import Learning from './src/features/learning/learning.screen'

import CreateDream from './src/features/createDream/createDream.screen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Landing'}
      >
        <Stack.Screen name='Learning' component={Learning}/>
        <Stack.Screen name='Landing' component={Nav}/>
        <Stack.Screen name='Tools' component={Tools}/>

        <Stack.Screen name='CreateDream' component={CreateDream}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}