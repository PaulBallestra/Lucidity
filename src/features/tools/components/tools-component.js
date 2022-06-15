import * as React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from '../../../constants/themes'

const {width, height} = Dimensions.get('window');

const ToolsComponent = (props) => {

    var titleComponent = null, pictoComponent = null, titleLeftSide = null, titleRightSide = null, valueLeftSide = null, valueRightSide = null, colorUpHR = null, colorDownHR = null;

    switch(props.type){
        case 'reveil':
            titleComponent = 'RÉVEIL';
            pictoComponent = require('../../../assets/icons/bell_picto.png');
            titleLeftSide = 'ACTIVÉS';
            titleRightSide = 'AUTO-STOP';
            valueLeftSide = '0';
            valueRightSide = '0';
            colorUpHR = COLORS.purple,
            colorDownHR = COLORS.blue
            break;
        case 'dreambook':
            titleComponent = 'DREAMBOOK'
            pictoComponent = require('../../../assets/icons/dreambook_picto.png');
            titleLeftSide = 'DREAMS';
            titleRightSide = 'LUCID DREAMS';
            valueLeftSide = '2';
            valueRightSide = '1';
            colorUpHR = COLORS.blue,
            colorDownHR = COLORS.purple
            break;   
        case 'tests':
            titleComponent = 'TESTS DE RÉALITÉ';
            pictoComponent = require('../../../assets/icons/realitytests_picto.png')
            titleLeftSide = 'TESTS';
            titleRightSide = 'ACTIVÉS';
            valueLeftSide = '7';
            valueRightSide = '0';
            colorUpHR = COLORS.purple,
            colorDownHR = COLORS.blue
            break;  
    }

    return (

        <View style={styles.body}>

                <View style={styles.componentHeader}>
                    <Text style={styles.componentHeaderTitle}> {titleComponent} </Text>
                    <Image source={pictoComponent} style={styles.componentHeaderImage}/>
                </View>

                <TouchableOpacity style={styles.componentContent}  {...props}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.componentContentTexts}>
                            <Text style={[styles.componentContentTextHeaderLeft, {color: colorUpHR}]}>{titleLeftSide}</Text>
                            <Text style={[styles.componentContentTextContentLeft, {color: colorUpHR}]}>{valueLeftSide}</Text>
                        </View>
                        <View>
                            <LinearGradient 
                                colors={[colorUpHR, COLORS.backgroundMiddle, colorDownHR]} 
                                style={styles.componentBreakHR}>
                            </LinearGradient>
                        </View>
                        <View style={styles.componentContentTexts}> 
                            <Text style={[styles.componentContentTextHeaderRight, {color: colorDownHR}]}>{titleRightSide}</Text>
                            <Text style={[styles.componentContentTextContentRight, {color: colorDownHR}]}>{valueRightSide}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

        </View>

    )
};

const styles = StyleSheet.create({

    body: {
        maxHeight: height*0.1784,
        marginRight: height*0.02,
        marginLeft:  height*0.02,
        marginBottom: height*0.025
    },
    componentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 7.5,
        marginLeft: 4,
    },
    componentHeaderTitle: {
        color: COLORS.text,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5
    },
    componentHeaderImage: {
        width: 17,
        height: 17
    },
    componentContent: {
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
    componentContentTexts: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    componentContentTextHeaderLeft: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        letterSpacing: 0.15,
    },
    componentContentTextHeaderRight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        letterSpacing: 0.15,
    },
    componentContentTextContentLeft: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 45,
        letterSpacing: 1.93,
    },
    componentContentTextContentRight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 45,
        letterSpacing: 1.93,
    },
    componentBreakHR: {
        width: 3, 
        height: 90, 
        borderRadius: 5
    }

});

export default ToolsComponent;
