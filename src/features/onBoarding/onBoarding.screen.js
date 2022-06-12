import React from 'react'
import { SafeAreaView, Dimensions, FlatList, Image, StatusBar, View, Text, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')

import styles from './onBoarding.styles'
import { COLORS } from '../../constants/themes'

const slides = [
    {
        id: '1',
        image: require('../../assets/images/image1.png'),
        title: 'LUCIDITY',
        subtitle: 'PRENEZ LE CONTRÔLE',
        content: 'Utilisez vos rêves pour mieux vous comprendre.'
    },
    {
        id: '2',
        image: require('../../assets/images/calendrier_onBoarding_image2.png'),
        title: 'CALENDRIER',
        subtitle: 'Un suivi hebdomadaire,',
        content: 'De vos rêves et leurs statitiques.'
    },
    {
        id: '3',
        image: require('../../assets/images/learning_onBoarding_image3.png'),
        title: 'LES TECHNIQUES',
        subtitle: 'Au nombre de 4,',
        content: 'Sont là pour vous apprendre les bases.'
    },
    {
        id: '4',
        image: require('../../assets/images/tools_onBoarding_image4.png'),
        title: 'LES OUTILS',
        subtitle: 'DreamBook, Réveils et Tests,',
        content: 'Tous les outils dont vous aurez besoin.'
    },
    {
        id: '5',
        image: require('../../assets/images/letsgo_onBoarding_image5.png'),
        title: 'LET\'S GO',
        subtitle: 'RÊVEZ LUCIDE',
        content: 'Vainquez une phobie, questionnez votre subconscient, vous avez les outils !'
    }
];

const Slide = ({item}) => {

    return (
        <View style={{alignItems: 'center'}}>
            <Image source={item.image} style={{height: '75%', width, resizeMode: 'contain'}}/>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <Text style={styles.subtitle}>
                {item.subtitle}
            </Text>
            <Text style={styles.content}>
                {item.content}
            </Text>
        </View>
    );
};

const OnBoardingScreen = ({navigation}) => {

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
    const ref = React.useRef(null)

    //Footer
    const Footer = () => {
        return (
            <View style={{height: height * 0.175, justifyContent: 'space-between', paddingHorizontal: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    {slides.map((_, index) => (
                        <View key={index} style={[styles.indicator, currentSlideIndex == index && {backgroundColor: COLORS.text, width: 25}]}/>
                    ))}
                </View>
                <View style={{marginBottom: 20}}>
                    {
                        currentSlideIndex == slides.length - 1 ?
                        <View style={{height: 50 }}>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Landing')}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.customDark}}> COMMENCER </Text>
                            </TouchableOpacity>
                        </View> :
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={skip} style={[styles.btn, {backgroundColor: 'tranparent', borderWidth: 1, borderColor: COLORS.text}]}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.text}}> PASSER </Text>
                            </TouchableOpacity>
                            <View style={{width: 15}}/>
                            <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.customDark}}> SUIVANT </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        );
    }

    //Update de l'index des slides
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x
        const currentIndex = Math.round(contentOffsetX / width)
        setCurrentSlideIndex(currentIndex)
    }

    //Passer d'une slide a l'autre lors du click sur SUIVANT
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1

        if(nextSlideIndex != slides.length){
            const offset = nextSlideIndex * width
            ref?.current.scrollToOffset({offset})
            setCurrentSlideIndex(nextSlideIndex)
        }
    }

    //Passer jusque la derniere slide lors du clic sur PASSER
    const skip = () => {
        const lastSlideIndex = slides.length - 1
        const offset = lastSlideIndex * width
        ref?.current.scrollToOffset({offset})
        setCurrentSlideIndex(lastSlideIndex)
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.backgroundBottom}}>
            <StatusBar backgroundColor={COLORS.text}/>
            <FlatList
                ref={ref}
                pagingEnabled
                onMomentumScrollEnd={updateCurrentSlideIndex}
                data={slides} 
                contentContainerStyle={{height: height*0.75}} 
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <Slide item={item} />}
            />
            <Footer/>
        </SafeAreaView>
    )
}

export default OnBoardingScreen;
