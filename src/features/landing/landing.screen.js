import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';
import { Calendar, LocaleConfig } from 'react-native-calendars'


import styles from './landing.styles'
import { COLORS } from '../../constants/themes'


//French language
LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv', 'Févr', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Di.', 'Lu.', 'Ma.', 'Me.', 'Je.', 'Ve.', 'Sa.']
};

LocaleConfig.defaultLocale = 'fr';

class Landing extends React.Component {

  //LANDING CALENDAR PAGE
    render(){
        return (
            <View style={styles.body}>
              
              <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundBottom]} style={styles.linearGradient}>

                <View style={styles.headerView}>
                  <Text style={styles.headerTitle}> LUCIDITY </Text>
                  <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                </View>

                <View style={styles.calendar}>

                    <View style={styles.calendarHeader}>
                        <Text style={styles.calendarHeaderTitle}> CALENDRIER </Text>
                        <Image source={require('../../assets/icons/calendar_picto.png')} style={styles.calendarHeaderImage}/>
                    </View>

                    <View style={styles.calendarContent}>
                        <Calendar theme={{
                                        arrowColor: COLORS.blue, //ARROWS COLOR
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
                                                paddingHorizontal: -15,
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
                                            <TouchableOpacity onPress={() => onPress(date)}>

                                                <View style={[styles.dayDotCustom, {backgroundColor: state === 'disabled' ? 'rgba(0, 0, 0, 0)' : COLORS.customDark}]}>
                                                    <Text
                                                        style={[{color: state === 'disabled' ? COLORS.customDisabledDark : COLORS.text}, styles.dayTextCustom]}>
                                                        {date.day}
                                                    </Text>
                                                </View>

                                            </TouchableOpacity>
                                        );
                                    }}
                                    onDayPress={(day) => {
                                        console.log(day)
                                    }}
                        />
                    </View>
                </View>
            
              </LinearGradient>
              
            </View>
          );
    }

}

export default Landing;