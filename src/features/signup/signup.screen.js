import React from 'react'
import { KeyboardAvoidingView, View, Text} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import ConnectButton from '../../components/connect-button';
import InputComponent from '../../components/input-component';
import LittleTextComponent from '../../components/littletext-component'

import styles from './signup.styles'
import { COLORS } from '../../constants/themes'

const SignUp = ({navigation}) => {

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

                    <InputComponent type='USERNAME' placeholder='Username'/>

                    <InputComponent type='PASSWORD' placeholder='Password'/>

                    <InputComponent type='PASSWORD' placeholder='Retype Password'/>

                </View>

                <View>
                    <ConnectButton text="S'INSCRIRE" onPress={() => navigation.navigate('Landing')}/>
                    <LittleTextComponent littleText='Déjà chez Lucidity ?' clicText='Connectez-vous !' onPress={() => navigation.navigate('Login')}/>
                </View>

            </LinearGradient>
            
        </KeyboardAvoidingView>
    )
}

export default SignUp;
