import React from 'react'
import { KeyboardAvoidingView, View, Text} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import InputComponent from '../../components/input-component';
import ConnectButton from '../../components/connect-button';
import LittleTextComponent from '../../components/littletext-component';

import styles from './login.styles'
import { COLORS } from '../../constants/themes'

const Login = ({navigation}) => {

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

                    <InputComponent type='USERNAME' placeholder='Username'/>

                    <InputComponent type='PASSWORD' placeholder='Password'/>

                </View>

                <View>
                    <ConnectButton text='CONNEXION' onPress={() => navigation.navigate('Landing')}/>
                    <LittleTextComponent littleText='Nouveau chez Lucidity ?' clicText='Inscrivez-vous !' onPress={() => navigation.navigate('SignUp')}/>
                </View>

            </LinearGradient>
            
        </KeyboardAvoidingView>
    )
}

export default Login;
