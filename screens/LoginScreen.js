import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity , Image, StatusBar, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component{
    static navigationOptions = {
        header: null
    };
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state;
        
        firebase.auth().signInWithEmailAndPassword(email,password).catch(error => this.setState({errorMessage: error.message}));


    };
    render(){
        LayoutAnimation.easeInEaseOut();
        return(
            <View style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
           {/* Ver depois */}
            {/* <Image source={require("../assets/empregue.png")} style={{marginTop: 0, marginLeft: -50}}></Image>
            <Image source={require("../assets/empregue.png")} style={{position: "absolute", bottom: -325, right: -225 }}></Image>
            <Image source={require("../assets/Grupo10.png")} 
            style={{marginTop: -110, alignSelf: "center"}}></Image> */}
               <Text style={styles.greeting}> 
               {'Bem-Vindo(a) ao Empreguets'}
               </Text>

                <View style={styles.errorMessage}>
                   {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({ email })} value={this.state.email}></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Senha</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none" onChangeText={password => this.setState({password})} value={this.state.password}></TextInput>
                    </View>

                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{alignSelf: "center", marginTop: 32}}
                 onPress={() => this.props.navigation.navigate("Register")}>

                    <Text style={{color: "#414959", fontSize: 13}}>
                        Novo no aplicativo? <Text style={{fontWeight: "500", color: "#E9446A"}}>Registre-se</Text>
                    </Text>

                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    greeting:{
        // marginTop: -32,
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 39
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 18,
        textTransform: "uppercase"
    },
    input:{
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})