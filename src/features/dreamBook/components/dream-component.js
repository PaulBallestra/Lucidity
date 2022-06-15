import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../../constants/themes'

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
        console.log(this.props.type)
    }

    render(){

        var miniatureStyleDream, contentStyleDream, dreamColors, titleDream = "TITLE", contentDream = "CONTENT";
        
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

        if(this.props.type === 'LUCID'){
            dreamColors = {
                backgroundColor: 'rgba(181, 108, 255, 0.075)',
                borderColor: COLORS.purple,
            }
        }else{
            dreamColors = {
                backgroundColor: 'rgba(43, 183, 247, 0.075)',
                borderColor: COLORS.blue,
            }
        }

        return (
            <View style={styles.dream}>

                <View style={styles.dreamHeader}>
                    <Text style={styles.dreamHeaderTitle}> 12-12-2020 </Text>
                    <Image source={require('../../../assets/icons/dreambook_picto.png')} style={styles.dreamHeaderImage}/>
                </View>

                <TouchableOpacity onPress={this.handlerButtonOnClick} style={[styles.dreamContent, dreamColors]}>
                    <View style={{margin: 5}}>
                        <Text style={styles.dreamContentTitle}> TITLE </Text>
                        <Text style={styles.dreamContentContent}> CONTENT </Text>
                    </View>
                    <View style={[contentStyleDream, {margin: 10}]}>
                        <Text style={styles.dreamContentContent}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
