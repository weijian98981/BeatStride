import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet,  Text,  View, Dimensions, Animated, TouchableWithoutFeedback } from 'react-native';
import { auth as SpotifyAuth,  remote as SpotifyRemote } from 'react-native-spotify-remote';

import Screen from '../MainScreen';

//import components

const {width, height} = Dimensions.get("window")


/**
 * This is a functional component representing the Exercise screen.
 * 
 * @author NTU CZ2006 Team Alpha
 */
const AlphaSocialsScreen = () => {


    return (
        <Screen title={"Exercise"}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Socials </Text>
                
            </View>
            <View>
                <Text>Play Space WeiJian and YouXiang</Text>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    header:{
        width: width,
        height: height * 0.1,
        justifyContent:'center',
        paddingHorizontal: '10%',
        backgroundColor: '#1e2124',
    },
    headerText:{
        color: '#BABBBF',
        fontSize: 28,
        fontWeight: 'bold',
        height: height * 0.1,
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    tabIndicator:{
        width: width,
        height: height * 0.07,
        backgroundColor: '#1e2124',
        overflow: 'hidden',
    },
    tab:{
        width: width * 0.5,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    tabText:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#BABBBF',
    },
    tabHighlight:{
        width: height * 0.02,
        height: height * 0.02,
        borderRadius: height,
        position: 'absolute',
        alignSelf: 'center',
        transform: [{translateY: -(height * 0.01) }]
    },
    scrollview:{
        // backgroundColor: 'green',
        height: height * 0.73,
    },
})

export default AlphaSocialsScreen;