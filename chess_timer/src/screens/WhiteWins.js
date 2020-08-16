import React, {useEffect} from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image} from 'react-native'
import RNRestart from 'react-native-restart'

import LottieView from 'lottie-react-native'
import winnerAnimation from '../assets/lotties/winner.json'


export default function WhiteWins() {

    const whitePiecesImg = require('../assets/img/chess_white.png')
    const Sound = require('react-native-sound')
    const localSound = require('../../android/app/src/main/res/raw/winner.mp3')

    const winnerSound = new Sound(localSound, Sound.MAIN_BUNDLE, (error) => {   
        if (error) {
        console.warn('failed to load the sound', error);
        return;
    }})

    useEffect(() => {
    setTimeout(() => {
        winnerSound.play()
    },100)
    })

    return (
        <View style={styles.mainContainer}>
            <StatusBar
            backgroundColor='#CD5C5C'
            />
            <Text style={styles.text}>Peças brancas venceu esta partida!</Text>
            <Image source={whitePiecesImg} style={{width: 100, height: 100, alignSelf: 'center'}}/>
            <LottieView
                resizeMode='center'
                speed={.7}
                source={winnerAnimation}
                autoPlay
                style={styles.animationContainer}
                loop
            />
            <TouchableOpacity style={styles.button} onPress={()=>RNRestart.Restart()}>
            <Text style={styles.buttonText}>Nova partida</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        display: "flex",
        backgroundColor: '#BC8F8F'
    },
    animationContainer:{
        width: '100%',
        height: '65%',
        backgroundColor: '#BC8F8F',
        justifyContent: 'center',
        alignItems:'center',
        left: 25
    },
    text:{
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
    buttonText:{
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 1.2
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 150,
        height: 45,
        padding: 5,
        marginBottom: 60,
        backgroundColor: '#CD5C5C',
        borderRadius: 3,
    }
})

