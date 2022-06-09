import * as React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity, Dimensions} from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars'

import { COLORS } from '../../../constants/themes'

const {width, height} = Dimensions.get('window');

//French language
LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv', 'Févr', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Di.', 'Lu.', 'Ma.', 'Me.', 'Je.', 'Ve.', 'Sa.']
};

LocaleConfig.defaultLocale = 'fr';

const CalendarComponent = (props) => {

        return (

            <View style={styles.calendar}>

                <View style={styles.calendarHeader}>
                    <Text style={styles.calendarHeaderTitle}> CALENDRIER </Text>
                    <Image source={require('../../../assets/icons/calendar_picto.png')} style={styles.calendarHeaderImage}/>
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
                                <TouchableOpacity {...props}>
                                    <View style={[styles.dayDotCustom, {backgroundColor: state === 'disabled' ? 'rgba(0, 0, 0, 0)' : COLORS.customDark}]}>
                                        <Text style={[{color: state === 'disabled' ? COLORS.customDisabledDark : COLORS.text}, styles.dayTextCustom]}>
                                            {date.day}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </View>
        )
};

const styles = StyleSheet.create({

    calendar: {
        marginTop: 5,
        marginRight: height*0.02,
        marginLeft:  height*0.02,
    },
    calendarHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 7.5,
        marginLeft: 4,
    },
    calendarHeaderTitle: {
        color: COLORS.text,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5
    },
    calendarHeaderImage: {
        width: 17,
        height: 17
    },
    calendarContent: {
        marginTop: 3,
        backgroundColor: COLORS.customLightDark,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    calendarComponent: {
        justifyContent: 'center'
    },
    dayDotCustom: {
        marginVertical: 2,
        minWidth: 36,
        borderRadius: 36/2
    },
    dayTextCustom: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        textAlign: 'center',
        margin: 6,
    }

});

export default CalendarComponent;
