import React from 'react'
import { KeyboardAvoidingView, Dimensions, View, Text, TextInput, Image, TouchableOpacity} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window')

import styles from './signup.styles'
import { COLORS } from '../../constants/themes'

const SignUp = () => {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.body}>
            
            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                {/* HEADER */}
                <View style={styles.headerView}>
                    <Text style={styles.headerTitle}> LUCIDITY </Text>
                    <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                </View>

                {/* PAGE NAME */}
                <View style={styles.pageNameView}>
                    <Text style={styles.pageNameText}> Inscription </Text>
                </View>

                {/* INPUTS */}
                <View style={{height: height*0.33}}>
                    <View style={styles.textinput}>

                        <Image source={require('../../assets/icons/profile_picto.png')} style={styles.textinputImage}></Image>
                        <TextInput
                            style={styles.textinputUsername}
                            placeholder="Username"
                            placeholderTextColor={COLORS.customDisabledDark}    
                        />

                    </View>

                    <View style={styles.textinput}>

                        <Image source={require('../../assets/icons/password_picto.png')} style={styles.textinputImage}></Image>
                        <TextInput
                            style={styles.textinputUsername}
                            placeholder="Password"
                            placeholderTextColor={COLORS.customDisabledDark} 
                            secureTextEntry={true}
                        />

                    </View>

                    <View style={styles.textinput}>

                        <Image source={require('../../assets/icons/password_picto.png')} style={styles.textinputImage}></Image>
                        <TextInput
                            style={styles.textinputUsername}
                            placeholder="Password"
                            placeholderTextColor={COLORS.customDisabledDark} 
                            secureTextEntry={true}
                        />

                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonConnect}>
                        <Text style={styles.buttonConnectText}> S'INSCRIRE </Text>
                    </TouchableOpacity>
                    <View style={styles.littletextView}>
                        <Text style={styles.textLittleText}> Déjà un compte ? <Text style={styles.textLittleColoredText}> Connectez Vous ! </Text></Text>
                    </View>
                </View>

            </LinearGradient>
            
        </KeyboardAvoidingView>
    )
}

export default SignUp;
