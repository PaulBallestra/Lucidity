import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'

//Components
import ToolsComponent from './components/tools-component';

class Tools extends React.Component {

    //Function qui ouvre la page dreambook avec tous les rêves
    openCreateDreamBookPage = () => {
      this.props.navigation.navigate('DreamBook');
    };

    //Function qui ouvre la page reality tests avec tous les tests de realités
    openRealityTestsPage = () => {
      this.props.navigation.navigate('RealityTests');
    };
  
    render(){
        return (
          <View style={styles.body}>
              
          <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

              <View style={styles.headerView}>
                <Text style={styles.headerTitle}> LUCIDITY </Text>
                <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
              </View>

            <ScrollView style={{marginTop: 4}}>

              {/*REVEILS*/}
              <ToolsComponent type="reveil" />

              {/*DREAMBOOK*/}
              <ToolsComponent type="dreambook" onPress={this.openCreateDreamBookPage}/>

              {/*TESTS*/}
              <ToolsComponent type="tests" onPress={this.openRealityTestsPage}/>

            </ScrollView>

          </LinearGradient>
        </View>
      );
    }
}

export default Tools;