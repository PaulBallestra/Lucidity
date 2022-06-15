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
        alignItems: 'center' ,
        justifyContent: 'space-evenly'
    },
    headerView: {
        marginVertical: 10,
        height: height*0.12,
        width: width,
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
        fontSize: 21,
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

});

export default styles;
