import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

import { COLORS } from '../../constants/themes'


const styles = StyleSheet.create({

    body: {
        flex: 1,
        width: width,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center' 
    },
    headerView: {
        marginVertical: height*0.1,
        height: height*0.12,
        width: width,
        backgroundColor: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundTop,
    },
    headerTitle: {
        fontFamily: 'Montserrat-Black',
        fontSize: 45,
        letterSpacing: 2.17,
        textAlign: 'center',
        color: COLORS.text
    },
    headerSubTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
        letterSpacing: 3.6,
        textAlign: 'center',
        color: COLORS.text
    },
    pageNameView: {
        justifyContent: 'center',
        height: height * 0.1,
    },
    pageNameText: {
        color: COLORS.text,
        fontFamily: 'Montserrat-Medium',
        fontSize: 35,
        textAlign: 'center'
    },
    textinput: {
        width: width*0.9,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.blue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    textinputUsername: {
        color: COLORS.text,
        padding: 10,
        width: '90%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
    },
    textinputImage: {
        width: 20,
        height: 20,
    },
    buttonConnect: {
        backgroundColor: COLORS.blue, 
        width: width*0.9,
        borderRadius: 8
    },
    buttonConnectText: {
        color: COLORS.customDark,
        fontFamily: 'Montserrat-Medium',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 8,
    },
    littletextView: {
        width: width * 0.9,
        alignContent: 'center',
        marginTop: 7.5
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

export default styles;
