import React, {useEffect, useRef, useState, useContext} from 'react';
import {StyleSheet, View, Dimensions, Animated, Easing, Text} from 'react-native';

import Lottie from 'lottie-react-native';

import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../../context/AxiosContext';

const {width, height} = Dimensions.get('window');
import { COLORS } from '../../../constants/themes'


const LandingStats = () =>  {

    const {authAxios} = useContext(AxiosContext);

    const classicAnimation = useRef(new Animated.Value(0))
    const lucidAnimation = useRef(new Animated.Value(0))
    const animationRef = useRef<Lottie>(null)

    const [numberOfLucidDreams, setNumberOfLucidDreams] = useState(6)
    const [numberOfClassicDreams, setNumberOfClassicDreams] = useState(4)
    
    const maxValue = 0.8
    
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
                const numbers = await authAxios.get('/dreams/count', config)
                setNumberOfClassicDreams(numbers.data.numberOfClassicDreams)
                setNumberOfLucidDreams(numbers.data.numberOfLucidDreams)
            }catch(error){
            console.log(error.response.status)
            }
        }

        let valueAnimeClassicDreams = (maxValue * (numberOfClassicDreams/(numberOfClassicDreams+numberOfLucidDreams)))
        let valueAnimeLucidDreams = (maxValue * (numberOfLucidDreams/(numberOfClassicDreams+numberOfLucidDreams)))

        Animated.timing(classicAnimation.current, {
            toValue: valueAnimeClassicDreams,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();

        animationRef.current?.play(30, 120);

        Animated.timing(lucidAnimation.current, {
            toValue: valueAnimeLucidDreams,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
        getNumberOfDreams
    }, []);

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
