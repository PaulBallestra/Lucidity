import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import CheckBoxComponent from '../../../components/checkbox-component';

import icons from '../../../constants/icons';
import { COLORS } from '../../../constants/themes'

const {width, height} = Dimensions.get('window');

const RealityTestComponent = ({type, title, subtitle, onPress, isChecked}) => {

    var imageSource = null, infoTest = null, titleInfoTest = null;

    switch(type){
        case 'hand':
            imageSource = icons.hand_picto;
            titleInfoTest = 'Main'
            infoTest = "Lorsque je regarde ma main dans un rêve, il y a quelque chose qui ne va pas. Un doigt en trop ou en moins, pas la meme couleur de peau, ..."
            break;
        case 'nose':
            imageSource = icons.nose_picto
            titleInfoTest = 'Nez'
            infoTest = "Lorsque je me bouche le nez dans un rêve, je peux toujours respirer."
            break;
        case 'eye':
            imageSource = icons.eye_picto
            titleInfoTest = 'Oeil'
            infoTest = "Lorsque vous fermez un oeil dans un rêve, vous ne voyez pas votre nez."
            break;
        case 'mirror':
            imageSource = icons.mirror_picto
            titleInfoTest = 'Oeil'
            infoTest = "Lorsque vous vous regardez dans un mirroir lors d'un rêve, vous vous verrez de manière différente. Quelque chose qui ne va pas."
            break;
        case 'pinch':
            imageSource = icons.pinch_picto
            titleInfoTest = 'Oeil'
            infoTest = "Et oui, si je ne ressens rien au pincement, c'est que je suis dans un rêve."
            break;
    }

    const showInfoTest = () => {
        alert(infoTest)
    }

        return (
            <View style={styles.customTest}>
                <View style={styles.customTestContent}>
                    <View style={{maxWidth: '5%'}}>
                        <Image source={imageSource} style={{width: 30, height: 30}}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', maxWidth: '50%'}}>
                        <Text style={styles.customTestContentTextTitle}>{title} :</Text>                                        
                        <Text style={styles.customTestContentTextSubtitle}> {subtitle}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', maxWidth: '20%', marginLeft: 5}}>
                        <TouchableOpacity style={{marginHorizontal: 10}} onPress={showInfoTest}>
                            <Image source={icons.info_picto} style={{width: 25, height: 25}}/>
                        </TouchableOpacity>
                        <CheckBoxComponent  onPress={onPress} isChecked={isChecked}/>
                    </View>
                </View>
            </View>
        )
};

const styles = StyleSheet.create({

    customTest: {
        height: height*0.10,
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.customDark
    },
    customTestContent: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    customTestContentTextTitle: {
        color: COLORS.text,
        fontSize: 13.5,
        fontFamily: 'Montserrat-Medium',
        letterSpacing: 0.54
    },
    customTestContentTextSubtitle: {
        color: COLORS.text,
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        letterSpacing: 0.54,
        fontStyle: 'italic',
        textAlign: 'center',
        flexWrap: 'wrap'
    },

});

export default RealityTestComponent;
