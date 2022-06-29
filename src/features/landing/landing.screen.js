import React, {useEffect, useState, useContext} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'

import { useIsFocused } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import { Calendar, LocaleConfig } from 'react-native-calendars'

import * as Keychain from 'react-native-keychain';
import {AxiosContext} from '../../context/AxiosContext';

import styles from './landing.styles'
import { COLORS } from '../../constants/themes'

import LandingStats from './components/landing-stats'
import HeaderComponent from '../../components/header-component'
import SubHeaderComponent from '../../components/subheader-component'

//French language
LocaleConfig.locales['fr'] = {
monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
monthNamesShort: ['Janv', 'Févr', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
dayNamesShort: ['Di.', 'Lu.', 'Ma.', 'Me.', 'Je.', 'Ve.', 'Sa.']
};

LocaleConfig.defaultLocale = 'fr';

const Landing = ({navigation}) => {

    const IsFocused = useIsFocused();

    const {authAxios} = useContext(AxiosContext);

    const [customDates, setCustomDates] = useState([])
    const [customDay, setCustomDay] = useState()

    const [numberOfLucidDreams, setNumberOfLucidDreams] = useState(1)
    const [numberOfClassicDreams, setNumberOfClassicDreams] = useState(1)

    useEffect(() => {

        async function getNumberOfDreams(){
            const value = await Keychain.getGenericPassword();
            const jwt = JSON.parse(value.username)
            const token = jwt.accessToken;

            const config = {
                headers: { 
                    "Authorization": `Bearer ${token}`
                }
            };
            try{
                const numbers = await authAxios.get('/dreams/count', config)

                if(numbers.data.numberOfClassicDreams !== 0 || numbers.data.numberOfLucidDreams !== 0){
                    setNumberOfClassicDreams(numbers.data.numberOfClassicDreams)
                    setNumberOfLucidDreams(numbers.data.numberOfLucidDreams)
                }else{
                    setNumberOfClassicDreams(1)
                    setNumberOfLucidDreams(1)
                }
                
            }catch(error){
                console.log(error.response.status)
            }
        }

        getNumberOfDreams()
    }, [IsFocused])

    //Fonction qui gere la couleur custom des jours du calendrier
    const changeColor = (date) => {
        customDates.forEach(customDate => {

            //Si c'est le meme jour
            if(customDate.date === date){
                //On vérifie si il est lucide ou non
                if(customDate.isLucid){
                    setCustomDay('lucid')
                }else{
                    setCustomDay('classic')
                }
            }else{
                setCustomDay('')
            }

        });
    }

    //LANDING CALENDAR PAGE
    return (
        <View style={styles.body}>

            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                {/* HEADER */}
                <HeaderComponent />

                {/* SubHeader */}
                <SubHeaderComponent subtitle='CALENDRIER' />
                
                {/* CONTENT */}
                <ScrollView style={{flex: 1, flexDirection: 'column'}}>

                    <View style={styles.calendar}>

                        <View style={styles.calendarHeader}>
                            <Text style={styles.calendarHeaderTitle}> CALENDRIER </Text>
                            <Image source={require('../../assets/icons/calendar_picto.png')} style={styles.calendarHeaderImage}/>
                        </View>
                        <View style={styles.calendarContent}>
                            <Calendar 
                                theme={{
                                    arrowColor: COLORS.text, //ARROWS COLOR
                                    calendarBackground: 'rgba(0, 0, 0, 0)', //BACKGROUND COLOR NONE
                                    monthTextColor: COLORS.text, //MONTH NAMES COLOR
                                    textSectionTitleColor: COLORS.text, //WEEK NAMES COLOR
                                    dayTextColor: COLORS.text, //DAYS MONTH COLOR
                                    todayTextColor: COLORS.text, //TODAY COLOR
                                    textDisabledColor: COLORS.textDisabled, //NO MONTH TEXT COLOR
                                    textDayFontFamily: 'Montserrat-Medium', //FONT DAYS NUMBER
                                    textMonthFontFamily: 'Montserrat-Medium', //FONT MONTH & YEAR
                                    textDayHeaderFontFamily: 'Montserrat-Medium', //FONT DAYS NAME
                                    'stylesheet.calendar.header': {
                                        header: {
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginVertical: 10,
                                            backgroundColor: COLORS.customDark,
                                        },
                                        week: {
                                            flexDirection: 'row',
                                            justifyContent: 'space-around',
                                            alignItems: 'center',
                                            backgroundColor: COLORS.customDark,
                                            paddingTop: 5,
                                        },
                                    },
                                }}
                                enableSwipeMonths={true}
                                dayComponent={({date, state}) => {
                                    
                                    //changeColor(date.dateString)
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate('CreateDream', {
                                                dateString: date.dateString,
                                                timestamp: date.timestamp
                                            })}>
                                            <View style={[styles.dayDotCustom, state === 'disabled' ? styles.dayDisabled : styles.dayIdle]}>
                                                <Text style={[{color: state === 'disabled' ? COLORS.customDisabledDark : COLORS.text}, styles.dayTextCustom]}>
                                                    {date.day}
                                                </Text>
                                            </View> 
                                        </TouchableOpacity>
                                    );
                                }}
                                onDayPress={(date) => {
                                    console.log(date)
                                }}
                            />
                        </View>
                    </View>

                    <LandingStats nbLucid={numberOfLucidDreams} nbClassic={numberOfClassicDreams} />

                </ScrollView>
                
            </LinearGradient>
        </View>
    );
}

export default Landing;