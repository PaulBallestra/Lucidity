import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { COLORS } from '../constants/themes'


const SubHeaderComponent = ({subtitle}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}> {subtitle} </Text>
        </View>
    );
};

export default SubHeaderComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: 10, 
        marginBottom: 5,
        borderBottomWidth: 3, 
        borderBottomColor: COLORS.customLightDark, 
        borderTopWidth: 3, 
        borderTopColor: COLORS.customLightDark
    },
    text: {
        textAlign: 'center', 
        color: COLORS.text, 
        fontSize: 20, 
        fontFamily: 'Montserrat-Medium', 
        marginVertical: 10
    }
});