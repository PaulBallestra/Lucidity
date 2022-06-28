import React, {useEffect, useState, useContext} from 'react'
import { View, FlatList } from 'react-native'

import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../context/AxiosContext';

import LinearGradient from 'react-native-linear-gradient';

import styles from './dreambook.styles'
import { COLORS } from '../../constants/themes'

import DreamComponent from './components/dream-component';
import SubHeaderComponent from '../../components/subheader-component';
import HeaderComponent from '../../components/header-component'
import ErrorComponent from '../../components/error-component';

const DreamBook = () => {

    const [dreams, setDreams] = useState()

    const [errorState, setErrorState] = useState('')
    const {authAxios} = useContext(AxiosContext);

    //DREAMBOOK ALL DREAMS PAGE
    useEffect(() => {

        async function getAllDreams(){

            const value = await Keychain.getGenericPassword();
            const jwt = JSON.parse(value.username)
            const token = jwt.accessToken;

            const config = {
                headers: { 
                    "Authorization": `Bearer ${token}`
                }
            };

            try{
                const dreams = await authAxios.get('/dreams',
                    config
                )
                
                if(dreams.data.dreams.length !== 0){

                    setErrorState('')
                    setDreams(dreams.data.dreams)

                }else {
                    setErrorState("Vous n'avez aucun rêve noté pour le moment.")
                }
            }catch(error){
                setErrorState('Non Authentifié.')
                console.log(error.response.status)
            }
        }
        getAllDreams()
    }, []) 

    return (
        <View style={styles.body}>

            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                {/* HEADER */}
                <HeaderComponent/>

                <SubHeaderComponent subtitle='DREAMBOOK' />

                {/* View des errors Si il a des errors*/}
                {
                    errorState !== '' && 
                    <ErrorComponent errorText={errorState} errorImage={errorState === 'Non Authentifié.' ? 'profile_error' : 'no_dreams_error'}/>
                }

                {/* CONTENT DES REVES POUR USER CONNECTED */}
                {
                    errorState === '' &&
                    <FlatList
                        data={dreams}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({item}) => (
                            <DreamComponent type={item.isLucid} date={item.date} title={item.title} subtitle={item.subtitle} content={item.content}/>
                        )}
                    />
                }

            </LinearGradient>
        </View>
    );
}

export default DreamBook;