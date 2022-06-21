import React, {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { KeyboardAvoidingView, View, Text} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import axios from 'axios'

import InputComponent from '../../components/input-component';
import ConnectButton from '../../components/connect-button';
import LittleTextComponent from '../../components/littletext-component';

import styles from './login.styles'
import { COLORS } from '../../constants/themes'

const Login = ({navigation}) => {

    const [isUserConnected, setIsUserConnected] = useState(false)
    const [userToken, setUserToken] = useState(null)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorAllChamps, setErrorAllChamps] = useState(false)


    //Login function
    const login = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:8000/api/auth/login', {
                username,
                password
            });
            if (response.status === 200) {

                setErrorPassword(false)
                setErrorUsername(false)
                setErrorAllChamps(false)

                //Save des valeurs perennes

                console.log(JSON.stringify(response.data))
                navigation.navigate('Landing')

                setUsername('');
                setPassword('');
            } else {
                throw new Error();
            }
        }catch(error){
            //Errors
            switch(error.response.status){
                case 401:
                    setErrorUsername(true)
                    setErrorAllChamps(false)
                    setErrorPassword(false)

                    setUsername('');
                    setPassword('');
                    break;
                case 422:
                    setErrorUsername(false)
                    setErrorAllChamps(true)
                    setErrorPassword(false)

                    setUsername('');
                    setPassword('');
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
                <View>

                    {/* PAGE NAME */}
                    <View style={styles.pageNameView}>
                        <Text style={styles.pageNameText}> Connexion </Text>
                    </View>

                    {
                        errorAllChamps &&
                        <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Tous les champs sont obligatoires. </Text>
                    }
                    {
                        errorUsername &&
                        <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Identifiants inconnus ou erronés. </Text>
                    }
                    <InputComponent type='USERNAME' placeholder='Username' value={username} onChangeText={(value) => setUsername(value)}/>

                    {
                        errorPassword &&
                        <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Les mots de passe ne correspondent pas. </Text>
                    }
                    <InputComponent type='PASSWORD' placeholder='Password' value={password} onChangeText={(value) => setPassword(value)}/>

                </View>

                <View>
                    <ConnectButton text='CONNEXION' onPress={login}/>
                    <LittleTextComponent littleText='Nouveau chez Lucidity ?' clicText='Inscrivez-vous !' onPress={() => navigation.navigate('SignUp')}/>
                </View>

            </LinearGradient>
            
        </KeyboardAvoidingView>
    )
}

export default Login;
