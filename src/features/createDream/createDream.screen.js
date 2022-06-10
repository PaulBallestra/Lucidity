import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from './createDream.styles'
import { COLORS } from '../../constants/themes'

class CreateDream extends React.Component {

    //Create New Dream
    render(){

        const {dateString, timestamp} = this.props.route.params;
        const date = new Date(dateString)

        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


        const showDatePicker = () => {
            setDatePickerVisibility(true);
        };

        const hideDatePicker = () => {
            setDatePickerVisibility(false);
        };
        
        const handleConfirm = (date) => {
            console.warn("A date has been picked: ", date);
            hideDatePicker();
        };

        return (

            <View style={styles.body}>

                <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                {/* HEADER */}
                <View style={styles.headerView}>
                    <Text style={styles.headerTitle}> LUCIDITY </Text>
                    <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                </View>
            
                <View>
                    <Button title={dateString} onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>

                </LinearGradient>
            </View>
            
        );

    }
}

export default CreateDream;