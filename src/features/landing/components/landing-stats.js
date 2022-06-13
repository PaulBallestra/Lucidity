import * as React from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import { COLORS } from '../../../constants/themes'

const {width, height} = Dimensions.get('window');

import Svg, { G, Circle } from "react-native-svg";

class LandingStats extends React.Component {

    render(){

        const radius = 70;
        const circleCircumference = 2 * Math.PI * radius;
        const leftToSpendAmount = 60;
        const targetAmount = 100;

        const spentAmount = targetAmount - leftToSpendAmount;
        const percentage = (spentAmount / targetAmount) * 100;
        const strokeDashoffset = circleCircumference - (circleCircumference * percentage) / 100;

        return (
            <View style={styles.body}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Svg height="120" width="120" viewBox="0 0 180 180">
                                    <G rotation={-90} originX="90" originY="90">
                                        <Circle
                                            cx="50%"
                                            cy="50%"
                                            r={radius}
                                            stroke={COLORS.customDark}
                                            fill="transparent"
                                            strokeWidth="25"
                                        />
                                        <Circle
                                            cx="50%"
                                            cy="50%"
                                            r={radius}
                                            stroke={COLORS.blue}
                                            fill="transparent"
                                            strokeWidth="25"
                                            strokeDasharray={circleCircumference}
                                            strokeDashoffset={100-strokeDashoffset}
                                            strokeLinecap="round"
                                        />
                                    </G>
                                </Svg>
                                <Text style={styles.title}>DREAMS</Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Svg height="120" width="120" viewBox="0 0 180 180">
                                    <G rotation={-90} originX="90" originY="90">
                                        <Circle
                                            cx="50%"
                                            cy="50%"
                                            r={radius}
                                            stroke={COLORS.customDark}
                                            fill="transparent"
                                            strokeWidth="25"
                                        />
                                        <Circle
                                            cx="50%"
                                            cy="50%"
                                            r={radius}
                                            stroke={COLORS.purple}
                                            fill="transparent"
                                            strokeWidth="25"
                                            strokeDasharray={circleCircumference}
                                            strokeDashoffset={strokeDashoffset}
                                            strokeLinecap="round"
                                        />
                                    </G>
                                </Svg>
                                <Text style={styles.title}>LUCID DREAMS</Text>
                            </View>
                        </View>
        )
    }
};

const styles = StyleSheet.create({

    body: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        marginTop: 15, 
        marginBottom: 10
    },
    title: {
        color: COLORS.text, 
        fontFamily: 'Montserrat-Medium', 
        marginTop: 5, 
        fontSize: 17
    }

});

export default LandingStats;
