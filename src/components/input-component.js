import * as React from 'react';
import {StyleSheet, View, TextInput, Dimensions, Image} from 'react-native';

import icons from '../constants/icons';
import { COLORS } from '../constants/themes'

const {width, height} = Dimensions.get('window');

const InputComponent= ({value, onChangeText, type, placeholder}) => {

        var imageSource;

        if(type === 'USERNAME'){
            imageSource = icons.profile_picto
        }else{
            imageSource = icons.password_picto
        }

        return (
            <View style={styles.textinput}>

                <Image source={imageSource} style={styles.textinputImage}></Image>
                <TextInput
                    style={styles.textinputUsername}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.customDisabledDark}
                    secureTextEntry={type !== 'USERNAME' ? true : false }
                    value={value}
                    onChangeText={onChangeText}
                />

            </View>
        )
};

const styles = StyleSheet.create({

    textinput: {
        width: width*0.9,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.blue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 7.5,
        backgroundColor: COLORS.backgroundTop
    },
    textinputUsername: {
        color: COLORS.text,
        padding: 10,
        width: '90%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
    },
    textinputImage: {
        width: 20,
        height: 20,
    },

});

export default InputComponent;
