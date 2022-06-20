import { StyleSheet, Pressable, Text, View } from "react-native";
import React from "react";

import { COLORS } from '../../../constants/themes'

const HoraireDayComponent = (props) => {

    const customStyle = props.isChecked ?
        styles.btnHoraireDayChecked : styles.btnHoraireDayNotChecked;

    return (
        <View>
            <Pressable style={[styles.btnHoraireDay, props.isChecked ? styles.btnChecked : styles.btnUnchecked]} onPress={props.onPress}>
                <Text style={[styles.txtHoraireDay, props.isChecked ? styles.txtChecked : styles.txtUnchecked ]}> {props.dayLetter} </Text>
            </Pressable>
        </View>
    );
};

export default HoraireDayComponent;

const styles = StyleSheet.create({
    btnHoraireDay: {
        backgroundColor: COLORS.customDark, 
        borderRadius: 5,
        borderWidth: 2,
        marginHorizontal: 20
    },
    btnChecked: {
        borderColor: COLORS.blue,
    },
    btnUnchecked: {
        borderColor: COLORS.customDisabledDark,
    },  
    txtHoraireDay: {
        fontFamily: 'Montserrat-Medium', 
        fontSize: 23, 
        margin: 5
    },
    txtChecked: {
        color: COLORS.blue
    },
    txtUnchecked: {
        color: COLORS.textDisabled
    }
});