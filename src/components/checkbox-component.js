import { Pressable, StyleSheet, View, Image } from "react-native";
import React from "react";
import icons from "../constants/icons";

const CheckBoxComponent = (props) => {

    const iconName = props.isChecked ?
        icons.checkboxChecked : icons.checkboxIdle;

    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <Image source={iconName} style={{width: 40, height: 40}}/>
            </Pressable>
        </View>
    );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({
    container: {
        width: 'auto',
    },
});