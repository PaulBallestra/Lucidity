import * as React from 'react';
import {StyleSheet, View, TextInput, Dimensions, Image} from 'react-native';
import { COLORS } from '../constants/themes'

const {width, height} = Dimensions.get('window');

class InputComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        var imageSource;

        if(this.props.type === 'USERNAME'){
            imageSource = require('../assets/icons/profile_picto.png')
        }else{
            imageSource = require('../assets/icons/password_picto.png')
        }

        return (
            <View style={styles.textinput}>

                <Image source={imageSource} style={styles.textinputImage}></Image>
                <TextInput
                    style={styles.textinputUsername}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={COLORS.customDisabledDark}
                    secureTextEntry={this.props.type !== 'USERNAME' ? true : false }
                />

            </View>
        )
    }
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
        width: 22,
        height: 22,
    },

});

export default InputComponent;
