import React, {useState, useContext} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'

import * as Keychain from 'react-native-keychain';
import { AxiosContext } from '../../context/AxiosContext';

import icons from '../../constants/icons';

import LinearGradient from 'react-native-linear-gradient';
import { format } from 'date-fns'

import styles from './createDream.styles'
import { COLORS } from '../../constants/themes'
import SubHeaderComponent from '../../components/subheader-component';
import HeaderComponent from '../../components/header-component';
import SaveButton from '../../components/save-button';

const CreateDream = ({navigation, route}) => {

    const [isLucidDream, setIsLucidDream] = useState(false)
    const [titleDream, setTitleDream] = useState('')
    const [subtitleDream, setSubtitleDream] = useState('')
    const [contentDream, setContentDream] = useState('')

    const [errorAllChamps, setErrorAllChamps] = useState(false)

    const {authAxios} = useContext(AxiosContext);

    //Date
    const {dateString} = route.params;
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

        //console.log(isLucidDream)

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

            const dreamUploaded = await authAxios.post('/dream/create', 
                body,
                config
            )

            //console.log(dreamUploaded)
            navigation.goBack()

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
                        <Image source={icons.dreambook_picto} style={styles.dreamWritingHeaderImage}/>
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

                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 3}}>
                            <TouchableOpacity style={[styles.dreamClassicBtn, !isLucidDream ? {borderColor: COLORS.blue} : {borderColor: COLORS.customDark}]} onPress={() => setIsLucidDream(!isLucidDream)}>
                                <Text style={[styles.dreamTypeBtnText, !isLucidDream ? {color: COLORS.blue} : {color: COLORS.customDark}]}> RÊVE NORMAL </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.dreamLucidBtn, isLucidDream ? {borderColor: COLORS.purple} : {borderColor: COLORS.customDark}]} onPress={() => setIsLucidDream(!isLucidDream)}>
                                <Text style={[styles.dreamTypeBtnText, isLucidDream ? {color: COLORS.purple} : {color: COLORS.customDark}]}> RÊVE LUCIDE </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>

                    <SaveButton onLoading={false} text='SAUVEGARDER' onPress={sendNewDream}/>

                </View>

            </ScrollView>


            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

export default CreateDream;