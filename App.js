import React from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Nav from './src/navigation'

const Stack = createStackNavigator()

import OnBoardingScreen from './src/features/onBoarding/onBoarding.screen'
import Landing from './src/features/landing/landing.screen'
import Tools from './src/features/tools/tools.screen'
import Learning from './src/features/learning/learning.screen'
import CreateDream from './src/features/createDream/createDream.screen'
import DreamBook from './src/features/dreamBook/dreambook.screen'

export default function App() {

  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null)

  React.useEffect(() => {
    async function getStorageData(){
      const appData = await AsyncStorage.getItem('isAppFirstLaunched')

      if(appData === null){
        setIsAppFirstLaunched(true)
        AsyncStorage.setItem('isAppFirstLaunched', 'false')
      }else{
        setIsAppFirstLaunched(false)
      }
    }
    getStorageData()
  }, [])

  return (
    isAppFirstLaunched !== null && (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={!isAppFirstLaunched ? 'Landing' : 'OnBoardingScreen'}
        >

          <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen}/>

          <Stack.Screen name='Learning' component={Learning}/>
          <Stack.Screen name='Landing' component={Nav}/>
          <Stack.Screen name='Tools' component={Tools}/>

          <Stack.Screen name='CreateDream' component={CreateDream}/>

          <Stack.Screen name='DreamBook' component={DreamBook}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
  )
}