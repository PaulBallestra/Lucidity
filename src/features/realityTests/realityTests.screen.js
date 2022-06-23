import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';

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

    const savePage = () => {
        //console.log(lundiState)
        //console.log(mardiState)
        //console.log(mercrediState)
        //console.log(jeudiState)
        //console.log(vendrediState)
        //console.log(samediState)
        //console.log(dimancheState)

        console.log(handState)
        console.log(noseState)
        console.log(eyeState)
        console.log(mirrorState)
        console.log(pinchState)

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