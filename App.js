import React from 'react'
// import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import MessageScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'
// import * as firebase from 'firebase'

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

// var firebaseConfig = {
//   apiKey: "AIzaSyA5vXQEEw-gkqxpQ5QafMyRhI7xIekChd8",
//   authDomain: "react-native-firebase-7e013.firebaseapp.com",
//   databaseURL: "https://react-native-firebase-7e013.firebaseio.com",
//   projectId: "react-native-firebase-7e013",
//   storageBucket: "react-native-firebase-7e013.appspot.com",
//   messagingSenderId: "1032415524436",
//   appId: "1:1032415524436:web:d880c331ee5201b4cd5fc1",
//   measurementId: "G-JYEPFRDPGD"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const AppTabNavigator = createBottomTabNavigator (
  {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24}  color={tintColor}/>
        }
      },
      Message: {
        screen: MessageScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24}  color={tintColor}/>
        }
      },
      Post: {
        screen: PostScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Ionicons name="ios-calendar" size={24}  color={tintColor}/>
        }
        },
      Notification: {
        screen: NotificationScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24}  color={tintColor}/>
        }
        },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24}  color={tintColor}/>
        }
        }
        },
      {
          tabBarOptions: {
            activeTintColor: "#161F3D",
            inactiveTintColor: "#B8BBC4",
            showLabel: false
          }
      }
);


const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
},{
  initialRouteName: "Register"
}
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }

  )

)