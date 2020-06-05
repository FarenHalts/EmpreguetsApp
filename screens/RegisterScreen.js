import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import * as firebase from 'firebase'
import UserPermissions from '../utilities/UserPermissions'
import * as ImagePicker from 'expo-image-picker'

export default class RegisterScreen extends React.Component{
    static navigationOptions = {
        header: null
    };
    state = {
        user: {
            name: "",
            email: "",
            password: "",
            avatar: null
        },
        errorMessage: null
    };

    handlePickAvatar = async () => {
        UserPermissions.getCameraPermission();

        let result = await ImagePicker.launchImageLibraryAsync({
            // mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.setState({ user: { ...this.state.user, avatar: result.uri} });
        }
    };

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials =>{
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({errorMessage: error.message}));
    };

    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
           {/* Ver depois */}
            {/* <Image source={require("../assets/empregue.png")} style={{marginTop: 116, marginLeft: -50, width: 15, height: 15}}></Image> */}
            
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
            </TouchableOpacity>
            <View style={{position: "absolute", top: 64, alignItems: "center", width: "100%"}}>
                 <Text style={styles.greeting}> 
               {'Faça Seu Registro Para Usufruir De Todas \nAs Nossas Funcionalidades'}
               </Text>
               <TouchableOpacity style={styles.avatarPlaceholder} onPress={this.handlePickAvatar}>
                <Image source={{uri: this.state.user.avatar}} style={styles.avatar}/>
                <Ionicons 
                    name="ios-add"
                    size={40} 
                    color="#FFF"
                    style={{ marginTop: 6, marginLeft: 2}}>
                    </Ionicons>
               </TouchableOpacity>
            </View>
                <View style={styles.errorMessage}>
                   {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Nome</Text>
                        <TextInput style={styles.input} autoCapitalize="none" onChangeText={name => this.setState({ name })} value={this.state.name}></TextInput>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({ email })} value={this.state.email}></TextInput>
                    </View>

                    <View style={{marginTop: 15}}>
                        <Text style={styles.inputTitle}>Senha</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none" onChangeText={password => this.setState({password})} value={this.state.password}></TextInput>
                    </View>

                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{alignSelf: "center", marginTop: 32}}   
                onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{color: "#414959", fontSize: 13}}>
                        Novo no aplicativo? <Text style={{fontWeight: "500", color: "#E9446A"}}>Login</Text>
                    </Text>

                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    greeting:{
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        // color: "#FFF"
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
    },
    back: {
        position: "absolute",
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center"
    },
    avatarPlaceholder:{
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50,
    }
});
