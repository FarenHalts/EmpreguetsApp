import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Permissions, Button } from "react-native";
//import * as Permissions from 'expo-permissions';

export default class HomeScreen extends React.Component {
    
     /// _getLocationAsync = async () => {
        
      //  const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);

      //  alert(JSON.stringify(Permissions));
       // if (status === 'granted') {
      //    return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
     //   } else {
     //     throw new Error('Location permission not granted');
      //  }
      //}



//mostra na tela
  render() {
    return (
      <View style={styles.container}>
      

        <MapView style={styles.mapStyle} 
        initialRegion={{
            latitude:-25.4284,
            longitude:-49.2733,
            latitudeDelta:0.1,
            longitudeDelta:0.1,

        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
     // width: 200,
     // height: 200
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
