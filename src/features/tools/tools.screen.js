import React, { useEffect, useState, useContext } from 'react'
import { View, ScrollView } from 'react-native'
import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../context/AxiosContext';

import LinearGradient from 'react-native-linear-gradient';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'

//Components
import ToolsComponent from './components/tools-component';
import HeaderComponent from '../../components/header-component';
import SubTitlePageComponent from '../../components/subtitlepage-component';

const Tools = ({navigation}) => {

  const [numberOfLucidDreams, setNumberOfLucidDreams] = useState()
  const [numberOfClassicDreams, setNumberOfClassicDreams] = useState()

  const {publicAxios} = useContext(AxiosContext);

  useEffect(() => {

    async function getNumberOfDreams(){
      const value = await Keychain.getGenericPassword();
      const jwt = JSON.parse(value.password)
      const token = jwt.accessToken;

      const config = {
        headers: { 
          "Authorization": `Bearer ${token}`
        }
      };

      try{
        const numbers = await publicAxios.get('/dreams/count',
            config
        )

        setNumberOfClassicDreams(numbers.data.numberOfClassicDreams)
        setNumberOfLucidDreams(numbers.data.numberOfLucidDreams)
        
      }catch(error){
        console.log(error.response.status)
      }
    }
    getNumberOfDreams()
  }, []);

  return (
    <View style={styles.body}>

      <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

        <HeaderComponent />

        <SubTitlePageComponent subtitle='OUTILS' />

        <ScrollView style={{marginTop: 4}}>

          {/*REVEILS*/}
          <ToolsComponent type="reveil" />

          {/*DREAMBOOK*/}
          <ToolsComponent type="dreambook" numberClassic={numberOfClassicDreams} numberLucid={numberOfLucidDreams} onPress={() => navigation.navigate('DreamBook')}/>

          {/*TESTS*/}
          <ToolsComponent type="tests" onPress={() => navigation.navigate('RealityTests')}/>

        </ScrollView>

      </LinearGradient>
    </View>
  );
  }

export default Tools;