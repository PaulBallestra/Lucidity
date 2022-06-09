import React from 'react';
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
    headerView: {
        height: height*0.12,
        width: width,
        backgroundColor: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundTop,
    },
    headerTitle: {
        fontFamily: 'Montserrat-Black',
        fontSize: 32.5,
        letterSpacing: 2.17,
        textAlign: 'center',
        color: COLORS.text
    },
    headerSubTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        letterSpacing: 3.6,
        textAlign: 'center',
        color: COLORS.text
    },
    subHeaderView: {
        marginTop: 5,
        marginBottom: -5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
        maxWidth: width*1,
        maxHeight: height*0.05,
    },
    subHeaderText: {
        color: COLORS.text,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5,
        textAlign: 'left'
    },
    subHeaderTextOnPage: {
        color: COLORS.blue,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5,
        textAlign: 'center'
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

export default styles;
