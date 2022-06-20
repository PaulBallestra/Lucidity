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
    allTests: {
        marginTop: 5,
        marginRight: height*0.02,
        marginLeft:  height*0.02,
    },
    allTestsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 7.5,
        marginLeft: 4,
    },
    allTestsHeaderTitle: {
        color: COLORS.text,
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 12.5,
        letterSpacing: 1.5
    },
    allTestsHeaderImage: {
        width: 17,
        height: 17
    },
    allTestsContent: {
        marginTop: 3,
        backgroundColor: COLORS.customLightDark,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        padding: 5,
        maxHeight: height * 0.375
    },
    

});

export default styles;
