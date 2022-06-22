import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../../constants/themes'

import { format } from 'date-fns'

const {width, height} = Dimensions.get('window');

class DreamComponent extends React.Component {

    constructor(props){
        
        super(props);
        this.state = {
            onClicked: false
        }
        this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
    }

    handlerButtonOnClick(){
        if(this.state.onClicked){
            this.setState({
                onClicked: false
            })
        }else{
            this.setState({
                onClicked: true
            })
        }
    }

    render(){

        //var dateToString = format(this.props.date, 'dd-MM-yyyy');

        var miniatureStyleDream, contentStyleDream, dreamColors;
        
        //Etat en clic
        if (this.state.onClicked){
            miniatureStyleDream = {
                height: 'auto',
            }
            contentStyleDream = {
                display: 'flex'
            }

        }else{ //Etat de base
            miniatureStyleDream = {
                height: height*0.103,
            }
            contentStyleDream = {
                display: 'none'
            }
        }

        if(this.props.type){
            dreamColors = {
                backgroundColor: 'rgba(181, 108, 255, 0.01)',
                borderColor: COLORS.purple,
            }
        }else{
            dreamColors = {
                backgroundColor: 'rgba(43, 183, 247, 0.01)',
                borderColor: COLORS.blue,
            }
        }

        const dateToString = format(new Date(this.props.date), 'dd-MM-yyyy')

        return (
            <View style={styles.dream}>

                <View style={styles.dreamHeader}>
                    <Text style={styles.dreamHeaderTitle}> {dateToString} </Text>
                    <Image source={require('../../../assets/icons/dreambook_picto.png')} style={styles.dreamHeaderImage}/>
                </View>

                <TouchableOpacity onPress={this.handlerButtonOnClick} style={[styles.dreamContent, dreamColors]}>
                    <View style={{margin: 5}}>
                        <Text style={styles.dreamContentTitle}> {this.props.title} </Text>
                        <Text style={styles.dreamContentContent}> {this.props.subtitle} </Text>
                    </View>
                    <View style={[contentStyleDream, {margin: 10}]}>
                        <Text style={styles.dreamContentContent}>
                            {this.props.content}
                        </Text>
                    </View>            
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({

    dream: {
        marginTop: 5,
        marginRight: height*0.02,
        marginLeft:  height*0.02,
    },
    dreamHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 7.5,
        marginLeft: 4,
    },
    dreamHeaderTitle: {
        color: COLORS.text,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5
    },
    dreamHeaderImage: {
        width: 17,
        height: 17
    },
    dreamContent: {
        borderWidth: 1,
        marginBottom: 7,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    dreamContentTitle: {
        fontFamily: 'Montserrat-Medium',
        color: COLORS.text,
        fontSize: 20,
    },
    dreamContentContent: {
        fontFamily: 'Montserrat-Medium',
        color: COLORS.text,
        fontSize: 17,
    }

});

export default DreamComponent;
