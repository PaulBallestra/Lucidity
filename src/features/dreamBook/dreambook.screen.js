import { View, Text, Image, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

import styles from './dreambook.styles'
import { COLORS } from '../../constants/themes'
import { ScrollView } from 'react-native-gesture-handler';

import DreamComponent from './components/dream-component';

class DreamBook extends React.Component {

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
        console.log(this.state.onClicked)
    }


    //DREAMBOOK ALL DREAMS PAGE
    render(){

        

        return (
            <View style={styles.body}>

                <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                    {/* HEADER */}
                    <View style={styles.headerView}>
                        <Text style={styles.headerTitle}> DreamBook </Text>
                        <Text style={styles.headerSubTitle}> TOUS VOS RÊVES </Text>
                    </View>
                
                    
                    {/* CONTENT TOUS LES REVES*/}
                    <ScrollView>
                        <DreamComponent type='LUCID'/>
                        <DreamComponent type='CLASSIC'/>
                    </ScrollView>
                    
                </LinearGradient>
            </View>
        );
    }
}

export default DreamBook;