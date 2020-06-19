const users = [
 {
    name: 'Edina Soares',
    // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'Pietra Martins',
    // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'Roberta Justo',
    // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'Marli Souza',
    // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },

]

import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class MessageScreen extends React.Component {
    render() {
        return (
            <Card title="Prestadores de serviço próximos a sua localização">
                {
                users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: u.avatar }}
                            />
                            
                            <Text style={styles.name}>{u.name}</Text>
                        </View>
                        );
                    })
                }
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginTop: 30,
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center"
    }
});
