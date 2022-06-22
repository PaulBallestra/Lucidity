import React, {useState, useContext} from 'react'
import { KeyboardAvoidingView, View, Text} from 'react-native'

import { AuthContext } from '../../context/AuthContext';
import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../context/AxiosContext';

import LinearGradient from 'react-native-linear-gradient';

import InputComponent from '../../components/input-component';
import ConnectButton from '../../components/connect-button';
import LittleTextComponent from '../../components/littletext-component';

import styles from './login.styles'
import { COLORS } from '../../constants/themes'

const Login = ({navigation}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorAllChamps, setErrorAllChamps] = useState(false)


    const authContext = useContext(AuthContext);
    const {publicAxios} = useContext(AxiosContext);

    //FUNCTION LOGIN
    const onLogin = async () => {
        try {

            const response = await publicAxios.post('/auth/login', {
                username,
                password,
            });
            if (response.status === 200) {

                setUsername('');
                setPassword('');

                setErrorPassword(false)
                setErrorUsername(false)
                setErrorAllChamps(false)

                //Save des valeurs perennes
                const accessToken = response.data.token
                const refreshToken = response.data.token;

                authContext.setAuthState({
                    accessToken,
                    refreshToken,
                    authenticated: true,
                });

                const token = JSON.stringify({accessToken})
                const user = JSON.stringify(response.data.user)

                await Keychain.setGenericPassword(
                    token,
                    user
                );

                console.log(JSON.stringify(response.data))

                //REDIRECTION
                navigation.navigate('Landing')
            } else {
                throw new Error();
            }
        } catch (error) {

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
                    <ConnectButton text='CONNEXION' onPress={onLogin}/>
                    <LittleTextComponent littleText='Nouveau chez Lucidity ?' clicText='Inscrivez-vous !' onPress={() => navigation.navigate('SignUp')}/>
                </View>

            </LinearGradient>
            
        </KeyboardAvoidingView>
    )
}

export default Login;
