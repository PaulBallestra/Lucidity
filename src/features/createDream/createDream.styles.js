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
    dreamWriting: {
        marginTop: 5,
        marginRight: height*0.02,
        marginLeft:  height*0.02,
    },
    dreamWritingHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 7.5,
        marginLeft: 4,
    },
    dreamWritingHeaderTitle: {
        color: COLORS.text,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5
    },
    dreamWritingHeaderImage: {
        width: 17,
        height: 17
    },
    dreamWritingContent: {
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
        padding: 5
    },
    textInputs: {
        backgroundColor: COLORS.customDark, 
        fontFamily: 'Montserrat-Medium', 
        color: COLORS.text, 
        fontSize: 17, 
        borderRadius: 4,
        padding: 7, 
        marginVertical: 5,
        maxHeight: height * 0.25
    },
    btnSave: {
        borderRadius: 5,
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    btnText: {
        fontWeight: 'bold', 
        fontSize: 15,
        color: COLORS.customDark
    }


});

export default styles;
