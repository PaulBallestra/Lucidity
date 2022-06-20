import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, View, Text} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import axios from "axios";

import ConnectButton from '../../components/connect-button';
import InputComponent from '../../components/input-component';
import LittleTextComponent from '../../components/littletext-component'

import styles from './signup.styles'
import { COLORS } from '../../constants/themes'
import { API } from '../../constants/constants'

const SignUp = ({navigation}) => {

    var confirmPassword;

    const {dreams, setDreams} = useState([])
    const {username, setUsername} = useState('')
    const {password, setPassword} = useState('')

    useEffect(() => {
        async function getAllDreams(){
            try{
                const dreams = await axios.get('http://10.0.2.2:8000/api/dreams')
                setDreams(dreams.data)
                console.log(dreams.data)
            }catch(error){
                console.log(error)
            }
        }
        getAllDreams()
    }, [])

    const signUp = () => {
        if(this.state.username!=""){
            alert(this.state.username)
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

                    <InputComponent type='USERNAME' placeholder='Username' value={username} setValue={setUsername}/>

                    <InputComponent type='PASSWORD' placeholder='Password' value={password} setValue={setPassword}/>

                    <InputComponent type='PASSWORD' placeholder='Confirm Password' value={confirmPassword} />

                </View>

                <View>
                    <ConnectButton text="S'INSCRIRE" onPress={signUp}/>
                    <LittleTextComponent littleText='Déjà chez Lucidity ?' clicText='Connectez-vous !' onPress={() => navigation.navigate('Login')}/>
                </View>

            </LinearGradient>
            
        </KeyboardAvoidingView>
    )
}

export default SignUp;
