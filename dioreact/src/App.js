import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorGitHub = '#010409'
const colorFontGithub = '#C9D1D9'

const imageProfileGithhub = 'https://pps.whatsapp.net/v/t61.24694-24/146123914_384383510281060_3431249326739614493_n.jpg?ccb=11-4&oh=01_AVyxCyaRHRWBAJGif4gPGGiOOD1yK4BiGTNZMExO3nU-Pg&oe=62BA8D80'

const urlToMyGithub = 'https://github.com/andrade91https://github.com/andrade91'

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('Link aprovado')
            console.log('Abrindo link...')
            await Linking.openURL(urlToMyGithub);
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
            <View style={style.content}>
                <Image style={style.avatar} source={{ uri: imageProfileGithhub }} />
                <Text style={[style.defaultText, style.name]}>Jefferson Andrade</Text>
                <Text style={[style.defaultText, style.nickname]}>andrade91</Text>
                <Text style={[style.defaultText, style.descrição]}>Estudande de ADS</Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //Column
        backgroundColor: colorGitHub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname: {
        fontSize: 18,
        color: '#4F565E',
    },

    descrição: {
        fontSize: 14,
    },

    button: {
        marginTop: 20,
        backgroundColor: '#4F565E',
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});