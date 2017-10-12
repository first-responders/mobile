import React from "react";
import { StyleSheet, View } from "react-native";
import { MapView } from "expo";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.762838,
            longitude: -73.9824649,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={{
              latitude: 40.762838,
              longitude: -73.9824649
            }}
            title={"My Girlfriend"}
            description={"Starbucks"}
          />
          <MapView.Marker
            coordinate={{
              latitude: 40.776641,
              longitude: -73.955353
            }}
            title={"Tom"}
            description={"Upper Easy Side"}
          />
          <MapView.Marker
            coordinate={{
              latitude: 40.732819,
              longitude: -73.997410
            }}
            title={"Jerry"}
            description={"Grand Central Terminal"}
          />
          <MapView.Marker
            coordinate={{
              latitude: 40.788069,
              longitude: -73.978925
            }}
            title={"John"}
            description={"Upper West Side"}
          />
        </MapView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
