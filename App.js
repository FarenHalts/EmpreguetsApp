import React from "react";
import { StyleSheet} from 'react-native';

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";
import PostScreen from "./screens/PostScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";

import ignoreWarnings from 'react-native-ignore-warnings';

const AppContainer = createStackNavigator(
    {
        default: createBottomTabNavigator(
            {
                Home: {
                    screen: HomeScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
                    }
                },
                Message: {
                    screen: MessageScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-contacts" size={24} color={tintColor} />
                    }
                },
                // Post: {
                //     screen: PostScreen,
                //     navigationOptions: {
                //       tabBarIcon: ({ tintColor }) => <Ionicons name="ios-calendar" size={24}  color={tintColor}/>
                //     }
                // },
                Notification: {
                    screen: NotificationScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
                    }
                },
                Profile: {
                    screen: ProfileScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
                    }
                }
            },
            {
                defaultNavigationOptions: {
                    tabBarOnPress: ({ navigation, defaultHandler }) => {
                        if (navigation.state.key === "Post") {
                            navigation.navigate("postModal");
                        } else {
                            defaultHandler();
                        }
                    }
                },
                tabBarOptions: {
                    activeTintColor: "#2E294E",
                    inactiveTintColor: "#735CDD",
                    showLabel: false
                }
            }
        ),
        // postModal: {
        //     screen: PostScreen
        // }
    },
    {
        mode: "modal",
        headerMode: "none"
        // initialRouteName: "postModal"
    }
);

ignoreWarnings([
    'Watch your six',
    'Mind the gap',
    'Beware the ides of March'
  ]);
  
  ignoreWarnings('error', [
    'The house is on fire',
    'System failure'
  ]);
  
  ignoreWarnings('log', 'Hello, world');

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

console.disableYellowBox = true;

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppContainer,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
