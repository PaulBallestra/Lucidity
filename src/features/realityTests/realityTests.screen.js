import React, {useState} from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import styles from './realityTests.styles'
import { COLORS } from '../../constants/themes'

import RealityTestComponent from './components/realityTest-component';
import HoraireDayComponent from './components/horaireDay-component';
import HeaderComponent from '../../components/header-component';
import SubHeaderComponent from '../../components/subheader-component';

const RealityTests = ({navigation}) => {

    const [lundiState, setLundiState] = useState(AsyncStorage.getItem('lundi').then((value) => value));
    const [mardiState, setMardiState] = useState(AsyncStorage.getItem('mardi').then((value) => value));
    const [mercrediState, setMercrediState] = useState(AsyncStorage.getItem('mercredi').then((value) => value));
    const [jeudiState, setJeudiState] = useState(AsyncStorage.getItem('jeudi').then((value) => value));
    const [vendrediState, setVendrediState] = useState(AsyncStorage.getItem('vendredi').then((value) => value));
    const [samediState, setSamediState] = useState(AsyncStorage.getItem('samedi').then((value) => value));
    const [dimancheState, setDimancheState] = useState(AsyncStorage.getItem('dimanche').then((value) => value));

    const [handState, setHandState] = useState(AsyncStorage.getItem('hand').then((value) => value));
    const [noseState, setNoseState] = useState(AsyncStorage.getItem('nose').then((value) => value));
    const [eyeState, setEyeState] = useState(AsyncStorage.getItem('eye').then((value) => value));
    const [mirrorState, setMirrorState] = useState(AsyncStorage.getItem('mirror').then((value) => value));
    const [pinchState, setPinchState] = useState(AsyncStorage.getItem('pinch').then((value) => value));

    //Function qui va ajouter les valeurs des jours et des tests
    const add = async () => {
        try {
            await AsyncStorage.setItem('lundi', JSON.stringify(lundiState))
            await AsyncStorage.setItem('mardi', JSON.stringify(mardiState))
            await AsyncStorage.setItem('mercredi', JSON.stringify(mercrediState))
        }catch (e){
            console.error(e);
        }
    }

    //Function qui va save la page et save les valeurs
    const savePage = async () => {

        add()

        const value = await AsyncStorage.getItem('lundi').then((value) => value)

        if(value)
            setData(value)

        console.log(value)

        var numberOfTestsChecked = 0

        if(handState)
            numberOfTestsChecked++
        if(noseState)
            numberOfTestsChecked++
        if(eyeState)
            numberOfTestsChecked++
        if(mirrorState)
            numberOfTestsChecked++
        if(pinchState)
            numberOfTestsChecked++

        //AsyncStorage.setItem('numberOfTestsChecked', {numberOfTestsChecked})
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