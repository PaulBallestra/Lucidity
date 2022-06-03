import { View, Text, ScrollView } from 'react-native'
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
        const sliceColor = [COLORS.blue, COLORS.purple]

        return (
            <View style={styles.body}>

                <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                {/* HEADER */}
                <View style={styles.headerView}>
                    <Text style={styles.headerTitle}> LUCIDITY </Text>
                    <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                </View>
                
                {/* SubHeader */}
                {/*<View style={styles.subHeaderView}>
                    <Text style={styles.subHeaderText}>APPRENDRE</Text>
                    <Text style={styles.subHeaderTextOnPage}>CALENDRIER</Text>
                    <Text style={styles.subHeaderText}>OUTILS</Text>
                </View>*/}
                
                {/* CONTENT */}
                <ScrollView style={{flex: 5, flexDirection: 'column',}}>

                    <CalendarComponent />

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: 75, marginHorizontal: 'auto'}}>

                        {/*STATS LUCID DREAMS
                        <View style={{transform: [{ rotate: '90deg'}]}}>
                            <LinearGradient colors={[COLORS.purple, COLORS.purple]} style={styles.horizontalBreak}>
                            </LinearGradient>
                        </View>*/}
                    
                        <PieChart
                            widthAndHeight={96}
                            series={[50,50]}
                            sliceColor={['#2BB7F7', '#B56CFF']}
                            doughnut={true}
                            coverRadius={0.70}
                            coverFill={COLORS.backgroundBottom}
                        />                                   

                        {/*STATS DREAMS*/}
                        {/* <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', marginLeft: 27}}>
                            <View style={{transform: [{ rotate: '90deg'}]}}>
                                <LinearGradient colors={[COLORS.blue, COLORS.blue]} style={styles.horizontalBreak}>
                                </LinearGradient>
                            </View>
                            <View style={{transform: [{ rotate: '35deg'}, {translateY: -24}, {translateX: 34}]}}>
                                <LinearGradient colors={[COLORS.blue, COLORS.blue]} style={styles.verticalBreak}>
                                </LinearGradient>
                            </View>
                        </View>*/}

                    </View> 

                </ScrollView>           

                </LinearGradient>
            </View>
        );
    }
}

export default Landing;