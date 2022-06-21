import React, {useEffect, useState, useContext} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../context/AxiosContext';

import LinearGradient from 'react-native-linear-gradient';

import styles from './dreambook.styles'
import { COLORS } from '../../constants/themes'

import DreamComponent from './components/dream-component';
import SubTitlePageComponent from '../../components/subtitlepage-component';
import HeaderComponent from '../../components/header-component'

const DreamBook = () => {

    const [errorState, setErrorState] = useState(false)
    const [contentErrorState, setContentErrorState] = useState('')

    const {publicAxios} = useContext(AxiosContext);

    //DREAMBOOK ALL DREAMS PAGE
    useEffect(() => {

        async function getAllDreams(){

            const value = await Keychain.getGenericPassword();
            const jwt = JSON.parse(value.password)
        
            console.log(jwt)

            try{
                const dreams = await publicAxios.get('/dreams')
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
                <HeaderComponent/>


                <SubTitlePageComponent subtitle='DREAMBOOK' />
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