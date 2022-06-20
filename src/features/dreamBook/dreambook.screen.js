import { View, Text, FlatList, ScrollView } from 'react-native'
import React, {useState} from 'react'

import LinearGradient from 'react-native-linear-gradient';

import styles from './dreambook.styles'
import { COLORS } from '../../constants/themes'

import DreamComponent from './components/dream-component';

class DreamBook extends React.Component {

    //DREAMBOOK ALL DREAMS PAGE
    render(){

        return (
            <View style={styles.body}>

                <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                    {/* HEADER */}
                    <View style={styles.headerView}>
                        <Text style={styles.headerTitle}> LUCIDITY </Text>
                        <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                    </View>
                
                    <View style={{marginTop: 10}}>
                        <Text style={{textAlign: 'center', color: COLORS.text, fontSize: 18, fontFamily: 'Montserrat-Light',}}> DreamBook </Text>
                    </View>

                    {/* CONTENT TOUS LES REVES*/}
                    <ScrollView>
                        <DreamComponent type='LUCID'/>
                        <DreamComponent type='CLASSIC'/>
                    </ScrollView>
                    
                    {/*<FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({item}) => (
                            <DreamComponent type='LUCID' />
                        )}
                        />*/}

                </LinearGradient>
            </View>
        );
    }
}

export default DreamBook;