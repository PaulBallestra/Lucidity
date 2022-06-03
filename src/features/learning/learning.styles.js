import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/themes'


const {width, height} = Dimensions.get('window');

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
        backgroundColor: '#FFF',
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
    techniqueBody: {
        marginTop: 5,
        marginRight: height*0.02,
        marginLeft:  height*0.02,
        marginBottom: height*0.025
    },
    techniqueHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 7.5,
        marginLeft: 4,
    },
    techniqueHeaderTitle: {
        color: COLORS.text,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5
    },
    techniqueHeaderImage: {
        width: 17,
        height: 17
    },

});

export default styles;
