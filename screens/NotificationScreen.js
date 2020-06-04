import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

export default class NotificationScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={{fontSize: 20, textAlign: "center"}}>Você nao tem notificações meu netinho</Text>
            <Image source={require('../assets/nothing.png')} style={{width: 400, height: 400,}}></Image>
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