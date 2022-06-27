import React, {useState, useContext} from 'react'
import { KeyboardAvoidingView, View, Text} from 'react-native'

import { AuthContext } from '../../context/AuthContext';
import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../context/AxiosContext';

import PushNotification from 'react-native-push-notification';

import LinearGradient from 'react-native-linear-gradient';

import InputComponent from '../../components/input-component';
import ConnectButton from '../../components/connect-button';
import LittleTextComponent from '../../components/littletext-component';

import styles from './login.styles'
import { COLORS } from '../../constants/themes'


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            canGo: true,
        };
    }

    onChangeUsername = username => {
        const password = this.state.password
        let canGo = false

        this.setState({username})

        if(password.length > 3 && username.length > 3)
            canGo = true
        else 
            canGo = false

        this.setState({canGo})
    }

    onChangePassword = password => {
        const username = this.state.username
        let canGo = false

        this.setState({password})

        if(password.length > 3 && username.length > 3)
            canGo = true

        this.setState({canGo})
    }

    //const [errorUsername, setErrorUsername] = useState(false)
    //const [errorPassword, setErrorPassword] = useState(false)
    //const [errorAllChamps, setErrorAllChamps] = useState(false)

    //const authContext = useContext(AuthContext);
    //const {publicAxios} = useContext(AxiosContext);

    testPush = () => {
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            title: 'TITRE',
            message: "MESSAGE", // (required)
            date: new Date(Date.now() + 60 * 1000), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

            /* Android Only Properties  */
            repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
        });
    }

    //FUNCTION LOGIN
    Login = async () => {

        /*try {

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

                //console.log(JSON.stringify(response.data))
                testPush()

                //REDIRECTION
                navigation.navigate('Landing')
            } else {
                throw new Error();
            }
        } catch (error) {

            console.log(error)

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
        }*/
    };

    render() {
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
                            this.state.canGo &&
                            <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Tous les champs sont obligatoires. </Text>
                        }
                        {
                            this.state.canGo &&
                            <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Identifiants inconnus ou erronés. </Text>
                        }
                        <InputComponent type='USERNAME' placeholder='Username' value={this.state.username} onChangeText={value => this.onChangeUsername(value)}/>
    
                        {
                            this.state.canGo &&
                            <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Les mots de passe ne correspondent pas. </Text>
                        }
                        <InputComponent type='PASSWORD' placeholder='Password' value={this.state.password} onChangeText={value => this.onChangePassword(value)}/>
    
                    </View>
    
                    <View>
                        <ConnectButton canGo={this.state.canGo} text='CONNEXION' onPress={this.Login}/>
                        <LittleTextComponent littleText='Nouveau chez Lucidity ?' clicText='Inscrivez-vous !' onPress={() => this.props.navigation.navigate('SignUp')}/>
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>
        );
    }
}

export default Login;