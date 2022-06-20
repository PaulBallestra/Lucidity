import { Pressable, StyleSheet, View, Image } from "react-native";
import React from "react";

const CustomCheckBox = (props) => {

    const iconName = props.isChecked ?
        require('../assets/icons/checkbox-checked.png') : require('../assets/icons/checkbox-idle.png');

    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <Image source={iconName} style={{width: 40, height: 40}}/>
            </Pressable>
        </View>
    );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
    container: {
        width: 'auto',
    },
});