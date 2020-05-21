// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Empreguets!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#735CDD',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

var firebaseConfig = {
  apiKey: "AIzaSyA5vXQEEw-gkqxpQ5QafMyRhI7xIekChd8",
  authDomain: "react-native-firebase-7e013.firebaseapp.com",
  databaseURL: "https://react-native-firebase-7e013.firebaseio.com",
  projectId: "react-native-firebase-7e013",
  storageBucket: "react-native-firebase-7e013.appspot.com",
  messagingSenderId: "1032415524436",
  appId: "1:1032415524436:web:d880c331ee5201b4cd5fc1",
  measurementId: "G-JYEPFRDPGD"
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }

  )

)