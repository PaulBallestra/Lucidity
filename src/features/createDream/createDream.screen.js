import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { format } from 'date-fns'

import styles from './createDream.styles'
import { COLORS } from '../../constants/themes'
import SubHeaderComponent from '../../components/subheader-component';

class CreateDream extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        checkBoxValue: false
    };
}

//Create New Dream
render(){

    const {dateString} = this.props.route.params;
    const date = new Date(dateString);

    var dateToString = format(date, 'dd-MM-yyyy');

    return (

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.body}>

            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

            {/* HEADER */}
            <View style={styles.headerView}>
                <Text style={styles.headerTitle}> LUCIDITY </Text>
                <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
            </View>

            <SubHeaderComponent subtitle='Notez votre rêve' />

            <ScrollView>

                <View style={styles.dreamWriting}>

                    <View style={styles.dreamWritingHeader}>
                        <Text style={styles.dreamWritingHeaderTitle}> {dateToString} </Text>
                        <Image source={require('../../assets/icons/dreambook_picto.png')} style={styles.dreamWritingHeaderImage}/>
                    </View>
                    <View style={styles.dreamWritingContent}>
                        <View>
                            <TextInput
                                style={[styles.textInputs, {maxHeight: 'auto'}]}
                                placeholder='Nommez,'
                                placeholderTextColor={COLORS.customDisabledDark}
                                maxLength={40}
                            ></TextInput>
                            <TextInput 
                                style={[styles.textInputs, {maxHeight: 'auto'}]}
                                placeholder='Aguichez,'
                                placeholderTextColor={COLORS.customDisabledDark}
                                maxLength={60}
                            ></TextInput>
                            <TextInput
                                style={styles.textInputs}
                                placeholder='Racontez !'
                                placeholderTextColor={COLORS.customDisabledDark}
                                multiline={true}
                                height={200}
                            ></TextInput>
                        </View>

                        <View style={{marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.setState({checkBoxValue: !this.state.checkBoxValue})} style={[styles.btnSave, this.state.checkBoxValue ? {backgroundColor: COLORS.purple, borderWidth: 1, borderColor: COLORS.purple} : {backgroundColor: COLORS.customLightDark, borderWidth: 1, borderColor: COLORS.blue} ]}>
                                    <Text style={[styles.btnText, this.state.checkBoxValue ? {color: COLORS.customDark} : {color: COLORS.blue}]}> {this.state.checkBoxValue ? 'RÊVE LUCIDE' : 'RÊVE NORMAL'} </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnSave}>
                                    <Text style={styles.btnText}> SAUVEGARDER </Text>
                                </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>

                {/* LISTE DES REVES DU JOURS SI IL Y EN A */}
                <View>
                    
                </View>

            </ScrollView>


            </LinearGradient>
        </KeyboardAvoidingView>
    );
}
}

export default CreateDream;