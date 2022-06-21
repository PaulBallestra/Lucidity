import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, View, Text} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import axios from "axios";

import ConnectButton from '../../components/connect-button';
import InputComponent from '../../components/input-component';
import LittleTextComponent from '../../components/littletext-component'

import client from '../../api/client';

import styles from './signup.styles'
import { COLORS } from '../../constants/themes'

const SignUp = ({navigation}) => {

    const {dreams, setDreams} = useState([])
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassord] = useState()

    const [errorUsername, setErrorUsername] = useState(false)

    {/* useEffect(() => {
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
    }, []) */}

    //SignUp function
    const signUp = async (event) => {
        
        const errorMessage = null;

        try {

            if(password === confirmPassword){

                const response = await axios.post('http://10.0.2.2:8000/api/auth/signup', {
                    username,
                    password,
                    'confirm_password': confirmPassword
                });
                if (response.status === 201) {
                    alert(` You have created: ${JSON.stringify(response.data)}`);
                    setUsername('');
                    setPassword('');
                    setConfirmPassord('');
                } else {
                    throw new Error();
                }

            }else {
                alert('Les mots de passe ne correspondent pas.')
            }
        } catch (error) {

            //Errors
            switch(error.response.status){
                case 409:
                    alert('Conflit, utilisateur ou mot de passe erroné.')
                    break;
                case 422:
                    alert('Tous les champs sont obligatoires.')
                    break;
            }
        }

    };

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
                        errorUsername &&
                        <Text style={{color: '#F00'}}> Utilisateur déjà inscrit </Text>
                    }

                    <InputComponent type='USERNAME' placeholder='Username' value={username} onChangeText={(value) => setUsername(value)} />

                    <InputComponent type='PASSWORD' placeholder='Password' value={password} onChangeText={(value) => setPassword(value)}/>

                    <InputComponent type='PASSWORD' placeholder='Confirm Password' value={confirmPassword} onChangeText={(value) => setConfirmPassord(value)}/>

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
