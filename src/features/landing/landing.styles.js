import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

import { COLORS } from '../../constants/themes'


const styles = StyleSheet.create({

    body: {
        flex: 1,
        width: width,
    },
    linearGradient: {
        flex: 1,
    },
    horizontalBreak: {
        width: 5, 
        height: 35, 
        borderRadius: 0,
    },
    verticalBreak: {
        width: 5, 
        height: 50, 
        borderRadius: 0,
    },
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
        minWidth: 36,
        borderRadius: 36/2
    },
    dayTextCustom: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        textAlign: 'center',
        margin: 6,
    },
    dayDisabled: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    dayIdle: {
        backgroundColor: COLORS.customDark,
        borderWidth: 0,
        borderColor: 'none'
    },
    dayClassic: {
        backgroundColor: 'rgba(43, 183, 247, 0.01)',
        borderWidth: 1,
        borderColor: COLORS.blue
    },
    dayLucid: {
        backgroundColor: 'rgba(181, 108, 255, 0.01)',
        borderWidth: 1,
        borderColor: COLORS.purple
    }

});

export default styles;
