import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from "react";

import { COLORS } from '../constants/themes'
const {width, height} = Dimensions.get('window');

const HeaderComponent = () => {

    return (
        <View style={styles.headerView}>
            <Text style={styles.headerTitle}> LUCIDITY </Text>
            <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
        </View>
    );
};

export default HeaderComponent;

const styles = StyleSheet.create({
    headerView: {
        height: height*0.12,
        width: width,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundTop,
    },
    headerTitle: {
        fontFamily: 'Montserrat-Black',
        fontSize: 32.5,
        letterSpacing: 2.17,
        textAlign: 'center',
        color: COLORS.text
    },
    headerSubTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        letterSpacing: 3.6,
        textAlign: 'center',
        color: COLORS.text
    },
});