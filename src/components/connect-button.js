import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';

import { COLORS } from '../constants/themes'

import Lottie from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

class ConnectButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            onLoading: !props.disabled
        }
    }

    LoadingAnim = () => {
        this.setState({ onLoading: true });
        setTimeout(() => {
            this.setState({ onLoading: !this.props.disabled });
        }, 1000);
    }

    render(){

        return (
            <View>
                <TouchableOpacity style={[styles.buttonConnect, !this.props.disabled ? styles.buttonConnectStyleEnabled : styles.buttonConnectStyleDisabled]} {...this.props} onPressOut={this.LoadingAnim}>
                    {
                        !this.state.onLoading &&
                        <Text style={styles.buttonConnectText}> {this.props.text} </Text>
                    }
                    {
                        this.state.onLoading && 
                        <Lottie 
                            source={require('../assets/animations/anim_Loading.json')}
                            style={{width: width*0.2125}}
                            autoPlay loop
                        />
                    }
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({

    buttonConnect: {
        width: width*0.9,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center'
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
        padding: 8,
    },

});

export default ConnectButton;
