import React, {useState, useContext} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'

import * as Keychain from 'react-native-keychain';
import { AxiosContext } from '../../context/AxiosContext';

import LinearGradient from 'react-native-linear-gradient';
import { format } from 'date-fns'

import styles from './createDream.styles'
import { COLORS } from '../../constants/themes'
import SubHeaderComponent from '../../components/subheader-component';
import HeaderComponent from '../../components/header-component';

const CreateDream = (props) => {

    const [isLucidDream, setIsLucidDream] = useState(false)
    const [titleDream, setTitleDream] = useState('')
    const [subtitleDream, setSubtitleDream] = useState('')
    const [contentDream, setContentDream] = useState('')

    const [errorAllChamps, setErrorAllChamps] = useState(false)

    const {authAxios} = useContext(AxiosContext);

    //Date
    const {dateString} = props.route.params;
    const date = new Date(dateString);
    var dateToString = format(date, 'dd-MM-yyyy');
    var dateToSend = format(date, 'yyyy-MM-dd')

    const sendNewDream = async () => {

        if (!titleDream.trim() || !subtitleDream.trim() || !contentDream.trim()) {
            setErrorAllChamps(true)
            return;
        }

        setErrorAllChamps(false)

        const value = await Keychain.getGenericPassword();
        const jwt = JSON.parse(value.username)
        const token = jwt.accessToken;

        const user = JSON.parse(value.password)

        //console.log(dateToSend)

        const body = {
            'user_id': user.id,
            'title': titleDream,
            'subtitle': subtitleDream,
            'content': contentDream,
            'date': dateToSend,
            'isLucid': isLucidDream,
        }

        const config = {
            headers: { 
                "Authorization": `Bearer ${token}`
            }
        };

        try{

            const dreamsUploaded = await authAxios.post('/dreams/create', 
                body,
                config
            )

            props.navigation.goBack()
            //console.log(dreamsUploaded)

        }catch(error){
            //setErrorState('Non Authentifié.')
            console.log(error)
        }

    }

    return (

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.body}>

            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

            {/* HEADER */}
            <HeaderComponent />

            <SubHeaderComponent subtitle='Notez votre rêve' />

            <ScrollView>

                <View style={styles.dreamWriting}>

                    <View style={styles.dreamWritingHeader}>
                        <Text style={styles.dreamWritingHeaderTitle}> {dateToString} </Text>
                        <Image source={require('../../assets/icons/dreambook_picto.png')} style={styles.dreamWritingHeaderImage}/>
                    </View>
                    <View style={styles.dreamWritingContent}>
                        <View>
                            {
                                errorAllChamps &&
                                <Text style={{color: '#F00', fontFamily: 'Montserrat-Medium'}}> Tous les champs sont obligatoires. </Text>
                            }
                            <TextInput
                                style={[styles.textInputs, {maxHeight: 'auto'}]}
                                placeholder='Nommez,'
                                placeholderTextColor={COLORS.customDisabledDark}
                                maxLength={40}
                                onChangeText={(value) => setTitleDream(value)}
                            ></TextInput>
                            <TextInput 
                                style={[styles.textInputs, {maxHeight: 'auto'}]}
                                placeholder='Aguichez,'
                                placeholderTextColor={COLORS.customDisabledDark}
                                maxLength={60}
                                onChangeText={(value) => setSubtitleDream(value)}
                            ></TextInput>
                            <TextInput
                                style={styles.textInputs}
                                placeholder='Racontez !'
                                placeholderTextColor={COLORS.customDisabledDark}
                                multiline={true}
                                onChangeText={(value) => setContentDream(value)}
                                height={200}
                            ></TextInput>
                        </View>

                        <View style={{marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => setIsLucidDream(!isLucidDream)} style={[styles.btnSave, isLucidDream ? {backgroundColor: COLORS.purple, borderWidth: 1, borderColor: COLORS.purple} : {backgroundColor: COLORS.customLightDark, borderWidth: 1, borderColor: COLORS.blue} ]}>
                                    <Text style={[styles.btnText, isLucidDream ? {color: COLORS.customDark} : {color: COLORS.blue}]}> {isLucidDream ? 'RÊVE LUCIDE' : 'RÊVE NORMAL'} </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnSave} onPress={sendNewDream}>
                                    <Text style={styles.btnText}> SAUVEGARDER </Text>
                                </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>

                {/* LISTE DES REVES DU JOURS SI IL Y EN A */}
                <View>
                    
                </View>

            </ScrollView>


            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

export default CreateDream;