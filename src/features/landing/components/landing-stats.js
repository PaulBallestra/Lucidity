import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../../context/AxiosContext/';

import { COLORS } from '../../../constants/themes'

import Svg, { G, Circle } from "react-native-svg";

const LandingStats = () =>  {

    const [numberOfLucidDreams, setNumberOfLucidDreams] = useState()
    const [numberOfClassicDreams, setNumberOfClassicDreams] = useState()

    const {publicAxios} = useContext(AxiosContext);

    useEffect(() => {

    async function getNumberOfDreams(){
        const value = await Keychain.getGenericPassword();
        const jwt = JSON.parse(value.username)
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

    const radius = 70;
    const circleCircumference = 2 * Math.PI * radius;
    const leftToSpendAmount = 60;

    const numberOfAllDream = numberOfClassicDreams + numberOfLucidDreams;

    const spentAmount = numberOfAllDream - numberOfClassicDreams;
    const percentage = (spentAmount / numberOfAllDream) * 100;
    //console.log(percentage)
    const strokeDashoffset = circleCircumference - (circleCircumference * percentage) / 100;
    //console.log(strokeDashoffset)

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
