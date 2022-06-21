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
