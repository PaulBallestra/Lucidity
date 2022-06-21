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
    },
    headerView: {
        height: height*0.12,
        width: width,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundTop,
    },
    headerTitle: {
        fontFamily: 'Montserrat-Black',
        fontSize: 32.5,
        letterSpacing: 2.17,
        textAlign: 'center',
        color: COLORS.text
    },
    headerSubTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        letterSpacing: 3.6,
        textAlign: 'center',
        color: COLORS.text
    },
    contentErrors: {
        width: width, 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center', 
        height: height*0.75
    },
    textErrors: {
        color: COLORS.text, 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 22, 
        marginTop: 20
    }

});

export default styles;
