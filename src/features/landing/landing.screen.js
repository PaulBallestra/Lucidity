import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import styles from './landing.styles'
import { COLORS } from '../../constants/themes'

import PieChart from 'react-native-pie-chart';

//Components
import CalendarComponent from './components/calendar-component';

class Landing extends React.Component {

  //LANDING CALENDAR PAGE
    render(){

        const widthAndHeight = 250
        const series = [123, 321, 123, 789, 537]
        const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

        return (
            <View style={styles.body}>
              
              <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundBottom]} style={styles.linearGradient}>

                <View style={styles.headerView}>
                  <Text style={styles.headerTitle}> LUCIDITY </Text>
                  <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                </View>
                
                <ScrollView style={{flex: 1}}>

                    <CalendarComponent/>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 75}}>
                        <PieChart
                            widthAndHeight={96}
                            series={[50,50]}
                            sliceColor={['#2BB7F7', '#B56CFF']}
                            doughnut={true}
                            coverRadius={0.70}
                            coverFill={'#0A172D'}
                        />                                   
                    </View>     

                </ScrollView>           

              </LinearGradient>
              
            </View>
          );
    }

}

export default Landing;