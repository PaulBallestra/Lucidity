import React, {useCallback, useContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { AuthContext } from './src/context/AuthContext'
import * as Keychain from 'react-native-keychain';

import Nav from './src/navigation'

const Stack = createStackNavigator()

import OnBoardingScreen from './src/features/onBoarding/onBoarding.screen'
import Landing from './src/features/landing/landing.screen'
import Tools from './src/features/tools/tools.screen'
import Learning from './src/features/learning/learning.screen'
import CreateDream from './src/features/createDream/createDream.screen'
import DreamBook from './src/features/dreamBook/dreambook.screen'
import SignUp from './src/features/signup/signup.screen'
import Login from './src/features/login/login.screen'
import RealityTests from './src/features/realityTests/realityTests.screen'

export default function App() {

const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null)
const authContext = useContext(AuthContext);
const [status, setStatus] = useState('loading');

const loadJWT = useCallback(async () => {
  try {
    const value = await Keychain.getGenericPassword();
    const jwt = JSON.parse(value.password);

    //console.log(value)
    //console.log(jwt)

    authContext.setAuthState({
      accessToken: jwt.accessToken || null,
      refreshToken: jwt.refreshToken || null,
      authenticated: jwt.accessToken !== null,
    });
    setStatus('success');
  } catch (error) {
    setStatus('error');
    console.log(`Keychain Error: ${error.message}`);
    authContext.setAuthState({
      accessToken: null,
      refreshToken: null,
      authenticated: false,
    });
  }
}, []);


useEffect(() => {
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
  loadJWT()
}, [loadJWT])

return (
  isAppFirstLaunched !== null && (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={!isAppFirstLaunched ? 'Login' : 'OnBoardingScreen'}
      >

        <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen}/>

        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Login' component={Login} />

        <Stack.Screen name='Learning' component={Learning}/>
        <Stack.Screen name='Landing' component={Nav}/>
        <Stack.Screen name='Tools' component={Tools}/>

        <Stack.Screen name='CreateDream' component={CreateDream}/>

        <Stack.Screen name='DreamBook' component={DreamBook}/>
        <Stack.Screen name='RealityTests' component={RealityTests}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
)
}