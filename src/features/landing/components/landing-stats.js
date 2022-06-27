import React, {useEffect, useState, useContext, useRef} from 'react';
import {StyleSheet, View, Dimensions, Animated, Easing} from 'react-native';

import Lottie from 'lottie-react-native';

import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../../context/AxiosContext/'; 

const {width, height} = Dimensions.get('window');
import { COLORS } from '../../../constants/themes'


const LandingStats = ({nbClassicDreams, nbLucidDreams}) =>  {

    const [numberOfLucidDreams, setNumberOfLucidDreams] = useState()
    const [numberOfClassicDreams, setNumberOfClassicDreams] = useState()

    const {publicAxios} = useContext(AxiosContext);

    const classicAnimation = useRef(new Animated.Value(0))
    const lucidAnimation = useRef(new Animated.Value(0))
    const animationRef = useRef<Lottie>(null)
    
    const maxValue = 0.8

    let valueAnimeClassicDreams = (maxValue * (nbClassicDreams/(nbClassicDreams+nbLucidDreams)))
    let valueAnimeLucidDreams = (maxValue * (nbLucidDreams/(nbClassicDreams+nbLucidDreams)))
    
    useEffect(() => {

        {/*async function getNumberOfDreams(){
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
        } */}

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

    //getNumberOfDreams()
    }, []);


    const numberOfAllDream = numberOfClassicDreams + numberOfLucidDreams;

    return (
        <View style={styles.body}>
            <View style={{width: width*0.25}}>
                <Lottie refs={animationRef} progress={classicAnimation.current} source={require('../../../assets/animations/anim_StatsClassicDreams.json')} />
            </View>
            <View style={{width: width*0.25}}>
                <Lottie 
                    progress={lucidAnimation.current} 
                    source={require('../../../assets/animations/anim_StatsLucidDreams.json')}
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
    height: height*0.22,
},
});

export default LandingStats;
