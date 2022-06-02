import * as React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from '../../../constants/themes'

const {width, height} = Dimensions.get('window');

const ToolsComponent = (props) => {

    var titleComponent = null, pictoComponent = null, titleLeftSide = null, titleRightSide = null, valueLeftSide = null, valueRightSide = null;

    switch(props.type){
        case 'reveil':
            titleComponent = 'RÉVEIL';
            pictoComponent = require('../../../assets/icons/bell_picto.png');
            titleLeftSide = 'DREAMS';
            titleRightSide = 'LUCID DREAMS';
            valueLeftSide = '0';
            valueRightSide = '0';
            break;
        case 'dreambook':
            titleComponent = 'DREAMBOOK'
            pictoComponent = require('../../../assets/icons/dreambook_picto.png');
            break;   
        case 'tests':
            titleComponent = 'TESTS DE RÉALITÉ';
            pictoComponent = require('../../../assets/icons/realitytests_picto.png')
            break;  
    }

    return (

        <View style={styles.body} {...props}>

                <View style={styles.componentHeader}>
                    <Text style={styles.componentHeaderTitle}> {titleComponent} </Text>
                    <Image source={pictoComponent} style={styles.componentHeaderImage}/>
                </View>

                
                <TouchableOpacity style={styles.componentContent}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.componentContentTexts}>
                            <Text style={styles.componentContentTextHeaderLeft}>{titleLeftSide}</Text>
                            <Text style={styles.componentContentTextContentLeft}>{valueLeftSide}</Text>
                        </View>
                        <View>
                            <LinearGradient colors={[COLORS.blue, COLORS.blue, COLORS.purple, COLORS.purple]} style={styles.componentBreakHR}>
                            </LinearGradient>
                        </View>
                        <View style={styles.componentContentTexts}> 
                            <Text style={styles.componentContentTextHeaderRight}>{titleRightSide}</Text>
                            <Text style={styles.componentContentTextContentRight}>{valueRightSide}</Text>
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
        width: 16.5,
        height: 16.5
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
        color: COLORS.blue
    },
    componentContentTextHeaderRight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        letterSpacing: 0.15,
        color: COLORS.purple
    },
    componentContentTextContentLeft: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 45,
        letterSpacing: 1.93,
        color: COLORS.blue
    },
    componentContentTextContentRight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 45,
        letterSpacing: 1.93,
        color: COLORS.purple,
    },
    componentBreakHR: {
        width: 3, 
        height: 90, 
        borderRadius: 5
    }

});

export default ToolsComponent;
