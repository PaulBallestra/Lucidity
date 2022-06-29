import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Dimensions, Animated, Easing, Text} from 'react-native';

import Lottie from 'lottie-react-native';

import { useIsFocused } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
import { COLORS } from '../../../constants/themes'


const LandingStats = ({nbLucid, nbClassic}) =>  {

    const IsFocused = useIsFocused();

    const classicAnimation = useRef(new Animated.Value(0))
    const lucidAnimation = useRef(new Animated.Value(0))

    const numberOfLucidDreams = nbLucid
    const numberOfClassicDreams = nbClassic
    
    const maxValue = 0.8
    
    useEffect(() => {

        let valueAnimeClassicDreams = (maxValue * (numberOfClassicDreams/(numberOfClassicDreams+numberOfLucidDreams)))
        let valueAnimeLucidDreams = (maxValue * (numberOfLucidDreams/(numberOfClassicDreams+numberOfLucidDreams)))    
    
        Animated.timing(classicAnimation.current, {
            toValue: valueAnimeClassicDreams,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();

        Animated.timing(lucidAnimation.current, {
            toValue: valueAnimeLucidDreams,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
        
        //getNumberOfDreams()
    }, [IsFocused]);

    return (
        <View style={styles.body}>
            <View style={styles.dividedView}>
                <Text style={[styles.dividedText,{color: COLORS.blue}]}> CLASSIQUES </Text>
                <Lottie 
                    progress={classicAnimation.current} 
                    source={require('../../../assets/animations/anim_StatsClassicDreams.json')} 
                    style={{width: width*0.25}}
                />
            </View>
            <View style={styles.dividedView}>
                <Text style={[styles.dividedText,{color: COLORS.purple}]}> LUCIDES </Text>
                <Lottie 
                    progress={lucidAnimation.current}
                    source={require('../../../assets/animations/anim_StatsLucidDreams.json')}
                    style={{width: width*0.25}}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width,
    height: height*0.25,
},
dividedView: {
    width: width*0.33, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
},
dividedText: {
    marginTop: -10,
    marginBottom: 5,
    fontFamily: 'Montserrat-ExtraBold',  
    textAlign: 'center'
}
});

export default LandingStats;
