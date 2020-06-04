import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

export default class PostScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={{fontSize: 22, textAlign: "center", fontWeight: 700}}>Professor, por favor, Da nota pra gente</Text>
            <Image source={require('../assets/pf.png')} style={{width: 300, height: 300,}}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
    }
});