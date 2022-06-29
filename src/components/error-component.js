import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import React from "react";
import { COLORS } from '../constants/themes'
import icons from "../constants/icons";

const {width, height} = Dimensions.get('window');

const ErrorComponent = ({errorText, errorImage}) => {

    var iconName = null;

    switch(errorImage){
        case 'profile_error':
            iconName = icons.profile_picto  
            break;
        case 'no_dreams_error':
            iconName = icons.dreambook_picto
            break;
    }

    return (
        <View style={styles.contentErrors}>
            <Image source={iconName} style={{width: 55, height: 55}}/>
            <Text style={styles.textErrors}> {errorText} </Text>
        </View>
    );
};

export default ErrorComponent;

const styles = StyleSheet.create({
    contentErrors: {
        width: width, 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center', 
        height: height*0.75
    },
    textErrors: {
        color: COLORS.text, 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 22, 
        marginTop: 20,
        textAlign: 'center',
        paddingHorizontal: 30
    }
});