import React, {useState, useContext} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'

import * as Keychain from 'react-native-keychain';
import { AxiosContext } from '../../context/AxiosContext';

import LinearGradient from 'react-native-linear-gradient';
import { format } from 'date-fns'

import styles from './createDream.styles'
import { COLORS } from '../../constants/themes'
import SubHeaderComponent from '../../components/subheader-component';

const CreateDream = (props) => {

    const [isLucidDream, setIsLucidDream] = useState(false)
    const [titleDream, setTitleDream] = useState('')
    const [subtitleDream, setSubtitleDream] = useState('')
    const [contentDream, setContentDream] = useState('')

    const {publicAxios} = useContext(AxiosContext);

    //Date
    const {dateString} = props.route.params;
    const date = new Date(dateString);
    var dateToString = format(date, 'dd-MM-yyyy');

    async function sendNewDream(){

        const value = await Keychain.getInternetCredentials();
        const user = JSON.parse(value.username)
        const user_id = user.id;

        console.log(user)

        const body = {
            'title': titleDream,
            'subtitle': subtitleDream,
            'content': contentDream,
            'date': dateToString,
            'isLucid': isLucidDream,
            'user_id': user_id
        }

        const config = {
            headers: { 
                "Authorization": `Bearer ${token}`
            }
        };

        try{

            const dreamsUploaded = await publicAxios.post('/dreams',
                body,
                config
            )
            
            if(dreamsUploaded){

                console.log(dreamsUploaded.data)

            }else {
                //setErrorState("Vous n'avez aucun rêve noté pour le moment.")
            }
        }catch(error){
            //setErrorState('Non Authentifié.')
            console.log(error.response.status)
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

            <SubHeaderComponent subtitle='Notez votre rêve' />

            <ScrollView>

                <View style={styles.dreamWriting}>

                    <View style={styles.dreamWritingHeader}>
                        <Text style={styles.dreamWritingHeaderTitle}> {dateToString} </Text>
                        <Image source={require('../../assets/icons/dreambook_picto.png')} style={styles.dreamWritingHeaderImage}/>
                    </View>
                    <View style={styles.dreamWritingContent}>
                        <View>
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