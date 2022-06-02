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
    dreambook: {
        maxHeight: height*0.1784,
        marginRight: height*0.02,
        marginLeft:  height*0.02,
        marginBottom: height*0.025
    },
    dreambookHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 7.5,
        marginLeft: 4,
    },
    dreambookHeaderTitle: {
        color: COLORS.text,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5
    },
    dreambookHeaderImage: {
        width: 16.5,
        height: 16.5
    },
    dreambookContent: {
        height: height*0.15,
        backgroundColor: COLORS.customLightDark,
        marginTop: 3,
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
    dreambookContentTexts: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    dreambookContentTextHeaderLeft: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        letterSpacing: 0.15,
        color: COLORS.blue
    },
    dreambookContentTextHeaderRight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        letterSpacing: 0.15,
        color: COLORS.purple
    },
    dreambookContentTextContentLeft: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 45,
        letterSpacing: 1.93,
        color: COLORS.blue
    },
    dreambookContentTextContentRight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 45,
        letterSpacing: 1.93,
        color: COLORS.purple,
    },
    dreambookBreakHR: {
        width: 3, 
        height: 90, 
        borderRadius: 5
    }

});

export default styles;
