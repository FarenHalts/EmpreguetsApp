import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class NotificationScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Você não possui notificações</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
