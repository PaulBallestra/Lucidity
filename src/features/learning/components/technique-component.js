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

        var miniatureStyleTechnique, contentStyleTechnique, titleTechnique = null, fullTitleTechnique = null, contentTechnique = null;

        //Etat en clic
        if (this.state.onClicked){
            miniatureStyleTechnique = {
                height: 'auto',
            }
            contentStyleTechnique = {
                display: 'flex'
            }

        }else{ //Etat de base
            miniatureStyleTechnique = {
                height: height*0.103,
            }
            contentStyleTechnique = {
                display: 'none'
            }
        }

        switch(this.props.type){
            case 'WILD':
                titleTechnique = 'WILD',
                fullTitleTechnique = 'Wake Initiated Lucid Dream'
                contentTechnique = "C'est-à-dire 'rêve lucide débuté depuis l'état de veille'. Cet acronyme se réfère à toute technique qui implique de s'endormir consciemment.\n\nLes méthodes WILD sont réputées comme étant les plus difficiles à maîtriser. Selon le psychologue Paul Tholey, les personnes qui sont les plus aptes à pratiquer les méthodes WILD sont celles qui s'endorment facilement et qui sont fréquemment sujettes aux hallucinations hypnagogiques lors de l'endormissement. Les personnes sujettes au trouble appelé 'paralysie du sommeil' ont aussi des facilités à les pratiquer."
                break;

            case 'MILD':
                titleTechnique = 'MILD',
                fullTitleTechnique = 'Mnémonique Induction of Lucid Dreams'
                contentTechnique = ''
                break;   

            case 'WBTB':
                titleTechnique = 'WBTB',
                fullTitleTechnique = 'Wake Back To Bed'
                contentTechnique = ''
                break; 

            case 'AUTO':
                titleTechnique = 'AUTO SUGGESTION',
                fullTitleTechnique = 'Comme son nom l\'indique',
                contentTechnique = "L’autosuggestion est une des techniques d’induction de rêves lucides les plus courantes.\nElle est aussi utile pour développer son rappel de rêves, et certains l’utilisent même pour se réveiller à une heure particulière (cela reste cependant moins fiable qu’un réveil en général).\n\nLe principe est simple : il s’agit de choisir une phrase exprimant clairement une intention, et de se la répéter de nombreuses fois, au moment de s’endormir, pour affirmer cette intention et, en quelque sorte, la faire “enregistrer” par le subconscient."
                break;
        }

        return (
            <TouchableOpacity onPress={this.handlerButtonOnClick} style={[miniatureStyleTechnique, styles.techniqueContent]}>
                <View style={styles.techniqueContentTitlesContent}>
                    <Text style={styles.techniqueContentTitle}>{titleTechnique}</Text>
                    {this.props.type !== 'AUTO'? <Text style={styles.techniqueContentSubTitle}>{fullTitleTechnique}</Text> : null }
                </View>
                <View style={[contentStyleTechnique, styles.contentTechnique]}>
                    <Text style={styles.textContentTechnique}>
                        {contentTechnique}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({

techniqueContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: COLORS.customLightDark,
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
techniqueContentTitlesContent: {
    margin: 7,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
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
    fontSize: 15
}

});

export default TechniqueComponent;
