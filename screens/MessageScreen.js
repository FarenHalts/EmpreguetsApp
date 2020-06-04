import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

export default class MessageScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Oi meu filho, veio ver o chat?</Text>
        <Image source={require('../assets/veinha.png')} style={{width: 300, height: 300,}}></Image>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});