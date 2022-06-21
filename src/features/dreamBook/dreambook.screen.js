import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

import axios from 'axios'

import LinearGradient from 'react-native-linear-gradient';

import styles from './dreambook.styles'
import { COLORS } from '../../constants/themes'

import DreamComponent from './components/dream-component';

const DreamBook = () => {

    const [errorState, setErrorState] = useState(false)
    const [contentErrorState, setContentErrorState] = useState('')

    //DREAMBOOK ALL DREAMS PAGE
    useEffect(() => {
        async function getAllDreams(){
            try{
                const dreams = await axios.get('http://10.0.2.2:8000/api/dreams')
                setDreams(dreams.data)
                console.log(dreams.data)
            }catch(error){
                
                setErrorState(true)
                setContentErrorState(error.response.data.message)
                console.log(error.response.data.message)

            }
        }
        getAllDreams()
    }, []) 

    return (
        <View style={styles.body}>

            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                {/* HEADER */}
                <View style={styles.headerView}>
                    <Text style={styles.headerTitle}> LUCIDITY </Text>
                    <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                </View>
            
                <View style={{marginTop: 10, borderBottomWidth: 3, borderBottomColor: COLORS.customLightDark, }}>
                    <Text style={{textAlign: 'center', color: COLORS.text, fontSize: 20, fontFamily: 'Montserrat-Medium', marginBottom: 10}}> DreamBook </Text>
                </View>

                {/* View des errors Si il a des errors*/}
                {
                    errorState && 
                    <View style={styles.contentErrors}>
                        
                        <Image source={require('../../assets/icons/profile_picto.png')} style={{width: 55, height: 55}}/>
                        <Text style={styles.textErrors}> {contentErrorState} </Text>

                    </View>
                }

                {/* CONTENT DES REVES POUR USER CONNECTED */}
                {
                    !errorState && 
                    <ScrollView>
                        <DreamComponent type='LUCID'/>
                        <DreamComponent type='CLASSIC'/>
                    </ScrollView>
                }
                

                
                
                {/*<FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({item}) => (
                        <DreamComponent type='LUCID' />
                    )}
                    />*/}

            </LinearGradient>
        </View>
    );
}

export default DreamBook;