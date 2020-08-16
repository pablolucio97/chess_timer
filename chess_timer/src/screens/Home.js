import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image  } from 'react-native'

import chessAnimation from '../assets/lotties/chess.json'
import LottieView from 'lottie-react-native'


export default function Home({navigation}) {

    const logoImg = require('../assets/img/logo.png')

    return (
        <View style ={styles.mainContainer}>
            <StatusBar
            backgroundColor='#CD5C5C'
            />
            <Text style={styles.title}>Chess Timer</Text>
            <LottieView
                resizeMode='cover'
                speed={.8}
                source={chessAnimation}
                autoPlay
                style={{width: '90%', height: '90%', margin: -50, alignSelf: 'center', padding: 50}}
                loop
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Peças brancas')}>Iniciar partida</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: 'center',
        backgroundColor: '#BC8F8F',
    },
    title:{
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    text:{
        fontSize: 20,
        margin: 20,
        color: '#fff',
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
        width: '80%',
        height: 45,
        padding: 5,
        marginBottom: 50,
        backgroundColor: '#CD5C5C',
        borderRadius: 3,
    }
})
