import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import { COLORS } from '../constants/themes'

const {width, height} = Dimensions.get('window');

class ConnectButton extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return (
            <View>
                <TouchableOpacity style={[styles.buttonConnect, this.props.canGo ? styles.buttonConnectStyleEnabled : styles.buttonConnectStyleDisabled]} {...this.props}>
                    <Text style={styles.buttonConnectText}> {this.props.text} </Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({

    buttonConnect: {
        width: width*0.9,
        borderRadius: 8
    },
    buttonConnectStyleEnabled: {
        backgroundColor: COLORS.blue,
    },
    buttonConnectStyleDisabled: {
        backgroundColor: COLORS.blue, 
        opacity: 0.35
    },
    buttonConnectText: {
        color: COLORS.customDark,
        fontFamily: 'Montserrat-Medium',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 8,
    },
    littletextView: {
        width: width * 0.9,
        alignContent: 'center',
        marginVertical: 5
    },
    textLittleText: {
        textAlign: 'center',
        color: COLORS.text
    },
    textLittleColoredText: {
        textAlign: 'center',
        color: COLORS.purple
    }

});

export default ConnectButton;
