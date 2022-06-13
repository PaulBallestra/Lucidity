import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import { Calendar, LocaleConfig } from 'react-native-calendars'

import styles from './landing.styles'
import { COLORS } from '../../constants/themes'

import LandingStats from './components/landing-stats'

//French language
LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv', 'Févr', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Di.', 'Lu.', 'Ma.', 'Me.', 'Je.', 'Ve.', 'Sa.']
};

LocaleConfig.defaultLocale = 'fr';

class Landing extends React.Component {

    //Function qui ouvre la page dreambook pour la date selectionnée
    openCreateDreamPage = (dateString, timestamp) => () => {
        this.props.navigation.navigate('CreateDream', {
            dateString: dateString,
            timestamp: timestamp
        });
    };

    //LANDING CALENDAR PAGE
    render(){

        return (
            <View style={styles.body}>

                <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                    {/* HEADER */}
                    <View style={styles.headerView}>
                        <Text style={styles.headerTitle}> LUCIDITY </Text>
                        <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                    </View>
                    
                    {/* SubHeader */}
                    {/*<View style={styles.subHeaderView}>
                        <Text style={styles.subHeaderText}>APPRENDRE</Text>
                        <Text style={styles.subHeaderTextOnPage}>CALENDRIER</Text>
                        <Text style={styles.subHeaderText}>OUTILS</Text>
                    </View>*/}
                    
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
                                    dayComponent={({date, state, onPress}) => {
                                        return (
                                            <TouchableOpacity onPress={this.openCreateDreamPage(date.dateString, date.timestamp)}>
                                                <View style={[styles.dayDotCustom, {backgroundColor: state === 'disabled' ? 'rgba(0, 0, 0, 0)' : COLORS.customDark}]}>
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

                        <LandingStats />

                    </ScrollView>
                </LinearGradient>
            </View>
        );
    }
}

export default Landing;