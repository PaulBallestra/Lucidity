import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import { COLORS } from '../../../constants/themes'

const {width, height} = Dimensions.get('window');

class TechniqueComponent extends React.Component {

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

            var miniatureStyleTechnique, styleTechnique, titleTechnique = null, fullTitleTechnique = null;

            //Etat en clic
            if (this.state.onClicked){
                miniatureStyleTechnique = {
                    height: 'auto',
                }
                styleTechnique = {
                    display: 'flex'
                }

            }else{ //Etat de base
                miniatureStyleTechnique = {
                    height: height*0.103,
                }
                styleTechnique = {
                    display: 'none'
                }
            }

            switch(this.props.type){
                case 'WILD':
                    titleTechnique = 'WILD',
                    fullTitleTechnique = 'Wake Initiated Lucid Dream'
                    break;
                case 'MILD':
                    titleTechnique = 'MILD',
                    fullTitleTechnique = 'Mnémonique Induction of Lucid Dreams'
                    break;   
                case 'WBTB':
                    titleTechnique = 'WBTB',
                    fullTitleTechnique = 'Wake Back To Bed'
                    break; 
                case 'AUTO':
                    titleTechnique = 'AUTO SUGGESTION',
                    fullTitleTechnique = ''
                    break;
            }

            return (
                <View style={{marginVertical: 2}}>
                    <TouchableOpacity onPress={this.handlerButtonOnClick} style={[miniatureStyleTechnique, styles.techniqueContent]}>
                        <View style={styles.techniqueContentTitlesContent}>
                            <Text style={styles.techniqueContentTitle}>{titleTechnique}</Text>
                            <Text style={styles.techniqueContentSubTitle}>{fullTitleTechnique}</Text>
                        </View>
                        <View style={[styleTechnique, styles.contentTechnique]}>
                            <Text style={styles.textContentTechnique}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        </View>
                    </TouchableOpacity>
                </View> 
            )
        }
};

const styles = StyleSheet.create({

    techniqueContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: COLORS.customLightDark,
        marginTop: 7,
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
    techniqueContentTitlesContent: {
        marginHorizontal: 7,
        marginTop: 7,
        flex: 1,
        flexDirection: 'column',
    },
    techniqueContentTitle: {
        fontFamily: 'Montserrat-ExtraBold',
        color: COLORS.text,
        fontSize: 20,
    },
    techniqueContentSubTitle: {
        fontFamily: 'Montserrat-Medium',
        color: COLORS.text,
        fontSize: 17,
    },
    contentTechnique: {
        margin: 7,
        flex: 1,
        flexDirection: 'column',
    },
    textContentTechnique: {
        color: COLORS.text,
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,

    }

});

export default TechniqueComponent;
