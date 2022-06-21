import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

    body: {
        flex: 1,
        width: width,
    },
    linearGradient: {
        flex: 1,
    },

});

export default styles;
