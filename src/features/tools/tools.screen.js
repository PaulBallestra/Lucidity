import React, {useContext, useEffect, useState} from 'react'
import { View, ScrollView } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useIsFocused } from '@react-navigation/native';

import * as Keychain from 'react-native-keychain';
import { AxiosContext } from '../../context/AxiosContext';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'

//Components
import ToolsComponent from './components/tools-component';
import HeaderComponent from '../../components/header-component';
import SubTitlePageComponent from '../../components/subheader-component';


const Tools = ({navigation}) => {

  const IsFocused = useIsFocused();

  const [numberOfTestsChecked, setNumberOfTestsChecked] = useState(0)
  const [numberOfLucidDreams, setNumberOfLucidDreams] = useState(0)
  const [numberOfClassicDreams, setNumberOfClassicDreams] = useState(0)
  const {authAxios} = useContext(AxiosContext);

  useEffect(() => {

    const getNumbers = async () =>{

          //LOAD NUMBER OF TESTS ACTIVATED
          const nbTests = await AsyncStorage.getItem('numberOfTestsChecked')
          setNumberOfTestsChecked(nbTests)

          const value = await Keychain.getGenericPassword();
          const jwt = JSON.parse(value.username)
          const token = jwt.accessToken;

          const config = {
              headers: { 
                  "Authorization": `Bearer ${token}`
              }
          };

          try{

              const numbers = await authAxios.get('/dreams/count', config)
              
              setNumberOfClassicDreams(numbers.data.numberOfClassicDreams)
              setNumberOfLucidDreams(numbers.data.numberOfLucidDreams)
          }catch(error){
              console.log(error.response.status)
          }
    }

    getNumbers().catch(console.error)
  }, [IsFocused])

  return (
    <View style={styles.body}>

      <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

        <HeaderComponent />

        <SubTitlePageComponent subtitle='OUTILS' />

        <ScrollView style={{paddingBottom: 25}}>

          {/*REVEILS*/}
          <ToolsComponent type="reveil" valueLeftSide={0} valueRightSide={0} onPress={() => navigation.navigate('AlarmClocks')} />

          {/*DREAMBOOK*/}
          <ToolsComponent type="dreambook" valueLeftSide={numberOfClassicDreams + numberOfLucidDreams} valueRightSide={numberOfLucidDreams} onPress={() => navigation.navigate('DreamBook')}/>

          {/*TESTS*/}
          <ToolsComponent type="tests" valueLeftSide={5} valueRightSide={numberOfTestsChecked} onPress={() => navigation.navigate('RealityTests')}/>

          {/* PROFILE */}
          {/*<ToolsComponent type="profile" />*/}

        </ScrollView>

      </LinearGradient>
    </View>
  );
}

export default Tools;