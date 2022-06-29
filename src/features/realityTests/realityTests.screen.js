import React, {useEffect, useState} from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import PushNotification from 'react-native-push-notification';

import styles from './realityTests.styles'
import { COLORS } from '../../constants/themes'

import RealityTestComponent from './components/realityTest-component';
import HoraireDayComponent from './components/horaireDay-component';
import HeaderComponent from '../../components/header-component';
import SubHeaderComponent from '../../components/subheader-component';

const RealityTests = ({navigation}) => {

    const [lundiState, setLundiState] = useState(false);
    const [mardiState, setMardiState] = useState(false);
    const [mercrediState, setMercrediState] = useState(false);
    const [jeudiState, setJeudiState] = useState(false);
    const [vendrediState, setVendrediState] = useState(false);
    const [samediState, setSamediState] = useState(false);
    const [dimancheState, setDimancheState] = useState(false);

    const [handState, setHandState] = useState(false);
    const [noseState, setNoseState] = useState(false);
    const [eyeState, setEyeState] = useState(false);
    const [mirrorState, setMirrorState] = useState(false);
    const [pinchState, setPinchState] = useState(false);

    useEffect(() => {

        const loadValues = async () =>{

            //LOAD TEST INFOS
            const hand = await AsyncStorage.getItem('hand')
            if(hand === 'true')
                setHandState(true)
            else
                setHandState(false)

            const nose = await AsyncStorage.getItem('nose')
                if(nose === 'true')
                    setNoseState(true)
                else
                    setNoseState(false)

            const eye = await AsyncStorage.getItem('eye')
            if(eye === 'true')
                setEyeState(true)
            else
                setEyeState(false)

            const mirror = await AsyncStorage.getItem('mirror')
            if(mirror === 'true')
                setMirrorState(true)
            else
                setMirrorState(false)

            const pinch = await AsyncStorage.getItem('pinch')
            if(pinch === 'true')
                setPinchState(true)
            else
                setPinchState(false)

            //LOAD WEEK INFOS
            const lundi = await AsyncStorage.getItem('lundi')
            if(lundi === 'true')
                setLundiState(true)
            else
                setLundiState(false)

            const mardi = await AsyncStorage.getItem('mardi')
            if(mardi === 'true')
                setMardiState(true)
            else
                setMardiState(false)

            const mercredi = await AsyncStorage.getItem('mercredi')
            if(mercredi === 'true')
                setMercrediState(true)
            else
                setMercrediState(false)

            const jeudi = await AsyncStorage.getItem('jeudi')
            if(jeudi === 'true')
                setJeudiState(true)
            else
                setJeudiState(false)

            const vendredi = await AsyncStorage.getItem('vendredi')
            if(vendredi === 'true')
                setVendrediState(true)
            else
                setVendrediState(false)

            const samedi = await AsyncStorage.getItem('samedi')
            if(samedi === 'true')
                setSamediState(true)
            else
                setSamediState(false)

            const dimanche = await AsyncStorage.getItem('dimanche')
            if(dimanche === 'true')
                setDimancheState(true)
            else
                setDimancheState(false)
        }

        loadValues()
    }, [])

    //Notifications
    const testPush = () => {

        const allInfos = []

        if(handState)
            allInfos.push('Regardez votre main, est-elle normale ? Avez vous tout vos doigts ?')
        if(noseState)
            allInfos.push('Bouchez vous le nez, arrivez vous a respirer ? Si oui, vous êtes dans un rêve !')
        if(eyeState)
            allInfos.push('Fermez un oeil, voyez vous votre nez ? Si non, vous êtes dans un rêve !')
        if(mirrorState)
            allInfos.push('Regardez votre reflet dans un mirroir, si quelque chose ne va pas, vous êtes dans un rêve !')
        if(pinchState)
            allInfos.push('Pincez-vous ! Si vous ne ressentez rien, vous êtes dans un rêve !')

        PushNotification.localNotificationSchedule({
            title: 'TEST DE RÉALITÉ',
            message: allInfos[Math.floor(Math.random() * allInfos.length)], // (required)
            date: new Date(Date.now() + 10 * 1000), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

            /* Android Only Properties  */
            repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
        });
    }

    //Function qui va save la page et save les valeurs
    const savePage = async () => {

        let numberOfTestsChecked = 0

        //Tests save
        if(handState){
            await AsyncStorage.setItem('hand', 'true')
            numberOfTestsChecked++
        }else
            await AsyncStorage.setItem('hand', 'false')

        if(noseState){
            await AsyncStorage.setItem('nose', 'true')
            numberOfTestsChecked++
        }else
            await AsyncStorage.setItem('nose', 'false')
        
        if(eyeState){
            await AsyncStorage.setItem('eye', 'true')
            numberOfTestsChecked++
        }else
            await AsyncStorage.setItem('eye', 'false')

        if(mirrorState){
            await AsyncStorage.setItem('mirror', 'true')
            numberOfTestsChecked++
        }else
            await AsyncStorage.setItem('mirror', 'false')

        if(pinchState){
            await AsyncStorage.setItem('pinch', 'true')
            numberOfTestsChecked++
        }else
            await AsyncStorage.setItem('pinch', 'false')

        //Week SAVE
        if(lundiState)
            await AsyncStorage.setItem('lundi', 'true')
        else
            await AsyncStorage.setItem('lundi', 'false')

        if(mardiState)
            await AsyncStorage.setItem('mardi', 'true')
        else
            await AsyncStorage.setItem('mardi', 'false')

        if(mercrediState)
            await AsyncStorage.setItem('mercredi', 'true')
        else
            await AsyncStorage.setItem('mercredi', 'false')

        if(jeudiState)
            await AsyncStorage.setItem('jeudi', 'true')
        else
            await AsyncStorage.setItem('jeudi', 'false')

        if(vendrediState)
            await AsyncStorage.setItem('vendredi', 'true')
        else
            await AsyncStorage.setItem('vendredi', 'false')

        if(samediState)
            await AsyncStorage.setItem('samedi', 'true')
        else
            await AsyncStorage.setItem('samedi', 'false')
    
        if(dimancheState)
            await AsyncStorage.setItem('dimanche', 'true')
        else
            await AsyncStorage.setItem('dimanche', 'false')

        await AsyncStorage.setItem('numberOfTestsChecked', numberOfTestsChecked.toString())

        if(numberOfTestsChecked !== 0)
            testPush()

        navigation.goBack()
    }

    //Reality Tests
    return (
        <View style={styles.body}>

            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

            {/* HEADER */}
            <HeaderComponent />

            {/* SUBTITLE PAGE */}
            <SubHeaderComponent subtitle='TESTS DE RÉALITÉ' />


            <ScrollView>

                {/* ALL TESTS */}
                <View style={styles.allTests}>

                    <View style={styles.allTestsHeader}>
                        <Text style={styles.allTestsHeaderTitle}> TESTS DE RÉALITÉ </Text>
                        <Image source={require('../../assets/icons/realitytests_picto.png')} style={styles.allTestsHeaderImage}/>
                    </View>
                    <View style={styles.allTestsContent}>

                        <ScrollView>

                            <RealityTestComponent type='hand' title='Main' subtitle='est-elle normale ?' onPress={() => setHandState(!handState)} isChecked={handState}/>

                            <RealityTestComponent type='nose' title='Nez' subtitle="est ce que j'arrive à respirer ?" onPress={() => setNoseState(!noseState)} isChecked={noseState}/>

                            <RealityTestComponent type='eye' title='Oeil' subtitle="lorsque je ferme un oeil, puis-je voir mon nez ?" onPress={() => setEyeState(!eyeState)} isChecked={eyeState}/>

                            <RealityTestComponent type='mirror' title='Mirroir' subtitle="mon reflet est-il normal ?" onPress={() => setMirrorState(!mirrorState)} isChecked={mirrorState}/>

                            <RealityTestComponent type='pinch' title='Pincement' subtitle="pince moi, je rêve ?" onPress={() => setPinchState(!pinchState)} isChecked={pinchState}/>

                        </ScrollView>

                    </View>
                </View>

                {/* HORAIRES */}
                <View style={[styles.allTests, {marginTop: 15}]}>

                    <View style={styles.allTestsHeader}>
                        <Text style={styles.allTestsHeaderTitle}> HORAIRES </Text>
                        <Image source={require('../../assets/icons/clock_picto.png')} style={styles.allTestsHeaderImage}/>
                    </View>
                    <View style={styles.allTestsContent}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 25, paddingVertical: 20}}>
                            
                            <HoraireDayComponent onPress={() => setLundiState(!lundiState)} dayLetter='L' isChecked={lundiState}/>
                            <HoraireDayComponent onPress={() => setMardiState(!mardiState)} dayLetter='M' isChecked={mardiState}/>
                            <HoraireDayComponent onPress={() => setMercrediState(!mercrediState)} dayLetter='M' isChecked={mercrediState}/>
                            <HoraireDayComponent onPress={() => setJeudiState(!jeudiState)} dayLetter='J' isChecked={jeudiState}/>
                            <HoraireDayComponent onPress={() => setVendrediState(!vendrediState)} dayLetter='V' isChecked={vendrediState}/>
                            <HoraireDayComponent onPress={() => setSamediState(!samediState)} dayLetter='S' isChecked={samediState}/>
                            <HoraireDayComponent onPress={() => setDimancheState(!dimancheState)} dayLetter='D' isChecked={dimancheState}/>

                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>

                    <TouchableOpacity onPress={savePage} style={{backgroundColor: COLORS.blue, width: '90%', borderRadius: 5}}> 
                        <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 20, fontWeight: 'bold', textAlign: 'center', padding: 7.5, color: COLORS.customDark}}> SAUVEGARDER </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

            </LinearGradient>
        </View>
    );
}

export default RealityTests;