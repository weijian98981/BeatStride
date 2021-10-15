import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet,  Text,  View, Dimensions, FlatList, TouchableWithoutFeedback,useWindowDimensions } from 'react-native';
import * as Firestore from '../../api/firestore';

import RequestItem from './RequestItem';
const {width, height} = Dimensions.get("window")

export default function Request(){
    const [requestList , setRequestList] = useState([]);

    /**
     * This is a render effect triggered upon component mount.
     */
    useEffect(() => {
        Firestore.db_requestList( 
            (userList) => {
                setRequestList(userList)
                // console.log(userList)
            },
            (error) => {console.log(error)},
        )
    }, [])

    return(
        <FlatList
            style={styles.list}
            showsVerticalScrollIndicator ={false}
            contentContainerStyle={styles.listContent}
            numColumns={1}
            data={requestList}
            keyExtractor={item => item.uid}
            renderItem={({item}) => <RequestItem item={item}/>}
            ListEmptyComponent={
            <View style={styles.emptyList}>
                <Text style={styles.emptyText}>No Incoming Friend Requests</Text>
            </View>
            }   
        />
    );
}

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
    emptyList: {
        width: width,
        height: height * 0.60,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    emptyText:{
        fontSize: 18,
        color: '#72767D'
    },
});