import * as React from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import { COLORS } from '../constants/themes'

const {width, height} = Dimensions.get('window');

class LittleTextComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return (
            <View style={styles.littletextView}>
                <Text style={styles.textLittleText}> {this.props.littleText} <Text {...this.props} style={styles.textLittleColoredText} > {this.props.clicText} </Text></Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({

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

export default LittleTextComponent;
