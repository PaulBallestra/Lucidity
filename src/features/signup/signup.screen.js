import React, {useContext, useState} from 'react'
import { KeyboardAvoidingView, View, Text} from 'react-native'

import { AuthContext } from '../../context/AuthContext';
import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../context/AxiosContext';

import LinearGradient from 'react-native-linear-gradient';

import axios from "axios";

import ConnectButton from '../../components/connect-button';
import InputComponent from '../../components/input-component';
import LittleTextComponent from '../../components/littletext-component'

import styles from './signup.styles'
import { COLORS } from '../../constants/themes'

const SignUp = ({navigation}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassord] = useState()

    const authContext = useContext(AuthContext);
    const {publicAxios} = useContext(AxiosContext);

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
    const [errorAllChamps, setErrorAllChamps] = useState(false)

    //FUNCTION SIGNUP
    const onSignUp = async () => {
        try {

            if(password === confirmPassword){

                const response = await publicAxios.post('/auth/signup', {
                    username,
                    password,
                    'confirm_password': confirmPassword
                });
                if (response.status === 201) {

                    setErrorAllChamps(false)
                    setErrorPassword(false)
                    setErrorConfirmPassword(false)
                    setErrorUsername(false)

                    setUsername('');
                    setPassword('');
                    setConfirmPassord('');

                    //Save des valeurs perennes
                    const accessToken = response.data.token
                    const refreshToken = response.data;
                    authContext.setAuthState({
                        accessToken,
                        refreshToken,
                        authenticated: true,
                    });
                    
                    //Save du token et de l'user
                    const token = JSON.stringify({accessToken, refreshToken,})
                    const user = JSON.stringify(response.data.user)

                    await Keychain.setGenericPassword(
                        token,
                        user
                    );

                    console.log(response.data)

                    //REDIRECTION
                    navigation.navigate('Landing')

                } else {
                    throw new Error();
                }
            }else {
                //PASSWORD NOT IDENTICAL
                setErrorAllChamps(false)
                setErrorPassword(true)
                setErrorConfirmPassword(true)
                setErrorUsername(false)
            }
        } catch (error) {
            //Errors
            switch(error.response.status){
                case 409:
                    //USER ALREADY TAKEN
                    setErrorAllChamps(false)
                    setErrorPassword(false)
                    setErrorConfirmPassword(false)
                    setErrorUsername(true)
                    break;
                case 422:
                    //CHAMPS OBLIGATOIRES
                    setErrorAllChamps(true)
                    setErrorPassword(false)
                    setErrorConfirmPassword(false)
                    setErrorUsername(false)
                    break;
            }
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.body}>
            
            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                {/* HEADER */}
                <View style={styles.headerView}>
                    <Text style={styles.headerTitle}> LUCIDITY </Text>
                    <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                </View>

                {/* INPUTS */}
                <View style={{marginBottom: 10}}>

                    {/* PAGE NAME */}
                    <View style={styles.pageNameView}>
                        <Text style={styles.pageNameText}> Inscription </Text>
                    </View>

                    {
                        errorAllChamps &&
                        <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Tous les champs sont obligatoires. </Text>
                    }
                    {
                        errorUsername &&
                        <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Utilisateur déjà inscrit. </Text>
                    }
                    <InputComponent type='USERNAME' placeholder='Username' value={username} onChangeText={(value) => setUsername(value)} />

                    {
                        errorPassword &&
                        <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Les mots de passe ne correspondent pas. </Text>
                    }
                    <InputComponent type='PASSWORD' placeholder='Password' value={password} onChangeText={(value) => setPassword(value)}/>

                    {
                        errorConfirmPassword &&
                        <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Les mots de passe ne correspondent pas. </Text>
                    }
                    <InputComponent type='PASSWORD' placeholder='Confirm Password' value={confirmPassword} onChangeText={(value) => setConfirmPassord(value)}/>

                </View>

                <View>
                    <ConnectButton text="S'INSCRIRE" onPress={onSignUp}/>
                    <LittleTextComponent littleText='Déjà chez Lucidity ?' clicText='Connectez-vous !' onPress={() => navigation.navigate('Login')}/>
                </View>

            </LinearGradient>
            
        </KeyboardAvoidingView>
    )
}

export default SignUp;
