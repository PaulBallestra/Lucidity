import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/themes'

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

    title: {
        fontFamily: 'Montserrat-Bold',
        color: COLORS.text,
        fontSize: 22,
        marginTop: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: 'Montserrat-Medium',
        color: COLORS.text,
        fontSize: 15,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: COLORS.customDisabledDark,
        marginHorizontal: 3,
        borderRadius: 2
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles;
