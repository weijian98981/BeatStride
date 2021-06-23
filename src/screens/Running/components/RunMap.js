import React, {useState, useEffect} from 'react';
import {  SafeAreaView,  ScrollView,  StyleSheet,  Text,  View, Dimensions} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const {width, height} = Dimensions.get("window")

const RunMap = (props) => {
    const runStatus = props.runStatus;
    const positions = props.positions;
    const currCoord = props.currCoord;

    return (
        <View style={styles.componentContainer}>
            <MapView 
                style={styles.map}
                region={{
                latitude: currCoord.latitude,
                longitude: currCoord.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                }}
                >
                <Polyline
                    coordinates={positions}
                    strokeWidth={5}
                    strokeColor={'orange'}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    componentContainer:{
        width: width,
        height: height * 0.7,
    },
    map: {
        width: width,
        height: height * 0.7,
      },
})

export default RunMap;