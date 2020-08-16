import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image  } from 'react-native'

export default function White({navigation}) {

    const [timeBlack, setTimeBlack] = useState(60)
    const [warning, setWarining] = useState('')
    
    const blackPiecesImg = require('../assets/img/chess_black.png') 

    const Sound = require('react-native-sound')
    const localSound = require('../../android/app/src/main/res/raw/next_play.mp3')
    
    var nextPlaySound = new Sound(localSound, Sound.MAIN_BUNDLE, (error) => {   
        if (error) {
        console.warn('failed to load the sound', error);
        return;
      }})

      
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeBlack(timeBlack -1)
        }, 1000)
        if(timeBlack < 10 && timeBlack > 0){
            setWarining('Você perderá a partida caso não jogue em tempo hábil!')
        }else{
            setWarining('')
        }
        timeBlack < 1  && navigation.navigate('Peças brancas venceu')
        return () => clearInterval(interval)
    })
    
    const finishPlay = () => {
        nextPlaySound.play()
        setTimeout(() => {
            navigation.navigate('Peças brancas')
            setTimeBlack(60)
        }, 100)
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar
            backgroundColor='#CD5C5C'
            />
            <Text style={styles.title}>Peças pretas está jogando...</Text>
            <Image source={blackPiecesImg} style={{width: 50, height: 50, margin: 20}}/>
                <Text style={styles.commonText}>Tempo restante: {timeBlack} segundos.</Text>
                <View style={styles.warningContainer}>
                    <Text style={styles.wariningText}>{warning}</Text>
                </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={finishPlay}>Finalizar jogada</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {marginTop: '60%'}]}>
                <Text style={styles.buttonText} onPress={() => {
                    navigation.navigate('Peças brancas venceu')
                }}>Render-se</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    warningContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: 300,
        padding: 5
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1.3,
        color: '#fff'
    },
    commonText:{
        color: '#fff',
        fontSize: 24
    },
    wariningText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#ff8000',
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
        width: '50%',
        height: 45,
        padding: 5,
        marginTop: '5%',
        backgroundColor: '#CD5C5C',
        borderRadius: 3,
    }

})
