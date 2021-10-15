import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet,  Text,  View, Dimensions, FlatList, TouchableWithoutFeedback,useWindowDimensions } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import * as Firestore from '../../api/firestore';

import RequestScreenTab from './RequestTab';
import PendingScreenTab from './PendingTab';

const {width, height} = Dimensions.get("window")


/**
 * This is a functional component representing main screen when an user view their request screen.
 * 
 * @author NTU CZ2006 Team Alpha
 */


const RequestTab = () => (
    <View style={styles.screen}>
       <RequestScreenTab/>
    </View>
);
  
const PendingTab = () => (
    <View style={styles.screen}>
        <PendingScreenTab/>
    </View>
);

const FriendTab = () => (
    <View style={styles.screen}>
    
    </View>
);

const renderScene = SceneMap({
requestTab: RequestTab,
pendingTab: PendingTab,
friendTab: FriendTab,
});


const RequestScreen = () => {

    const renderTabBar = props => (
        <TabBar
              {...props}
              activeColor={'#7289DA'}
              inactiveColor={'white'}
              style={{backgroundColor:'#393C41'}}
              indicatorStyle={{ backgroundColor: '#7289DA' }}
        />
      );
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
    { key: 'requestTab', title: 'Request' },
    { key: 'pendingTab', title: 'Pending' },
    { key: 'friendTab', title: 'Friend'},]
    
);
    return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
    );
        
};

const styles = StyleSheet.create({
    screen:{
        width: width,
        height: height,
        backgroundColor: '#282b30',
    },
    tabIndicator:{
        width: width,
        height: height * 0.07,
        backgroundColor: '#1e2124',
        overflow: 'hidden',
    },
    tab:{
        width: width * 0.33,
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
        height: height * 0.83,
    },
});

export default RequestScreen;
