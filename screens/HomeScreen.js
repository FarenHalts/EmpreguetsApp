import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Image} from 'react-native';
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component{
    // state = {
    //     email: "",
    //     displayName: ""
    // };
    // componentDidMount(){
    //     const {email, displayName} = firebase.auth().currentUser;

    //     this.setState({email, displayName});
        
    // }
    // signOutUser = () => {
    //     firebase.auth().signOut();
    // };

    render(){
        LayoutAnimation.easeInEaseOut();

        return ( 
            // <View style={styles.container}>
            //     <Image source={require('../assets/log.png')} style={{marginTop: 15, width: 400, height: 400,}}></Image>
            //     <Text style={{fontSize: 16, textAlign: "center"}}>Você está logado com segurança meu fi</Text>
            //     <Text style={{fontSize: 16, textAlign: "center"}}>{this.state.email}</Text>

            //     <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
            //         <Text>Sair</Text>
            //     </TouchableOpacity>
            // </View>
            <View style={styles.container}>
                
                <Text style={{fontSize: 16, textAlign: "center"}}>Tela Inicial</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})