import React, { useState, useEffect } from 'react';
import {  SafeAreaView,  StyleSheet,  Text,  View, Dimensions, FlatList, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { TextInput } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Firestore from '../../api/firestore';

import FriendItem from './components/FriendItem';

const {width, height} = Dimensions.get("window")

// const data = [
//     {id:1, displayName: "james", uid: "123124"},
//     {id:2, displayName: "alfred", uid: "346815"},
//     {id:3, displayName: "max", uid: "16818"},
//     {id:4, displayName: "john", uid: "321685"},
//     {id:5, displayName: "mary", uid: "92623"},
//     {id:6, displayName: "pepe", uid: "184626"},
//     {id:7, displayName: "gabriel", uid: "16282"},
//     {id:8, displayName: "jet", uid: "126653"},
//     {id:9, displayName: "cheryl", uid: "84512"},
//     {id:10, displayName: "gerald", uid: "518451"}
// ]

const SearchScreen = () => {
    const [selfID, setSelfID] = useState('')
    const [data, setData] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchMatch = (userData) => {
        const displayName = userData.displayName.toLowerCase()
        const uid = userData.uid.toLowerCase()
        const keyword = search.toLowerCase()

        return (displayName.includes(keyword)) || (uid.includes(keyword))
    }

    const filterSelf = (userData) => {
        const uid = userData.uid
        return !(uid === selfID);
    }

    // Retreive users
    useEffect(() => {
        Firestore.db_userList(
            (userList) => { setData(userList) },
            (error) => { console.log(error) },
        )

        Firestore.db_getUserDataSnapshot(
            (userData) => { 
                setSelfID(userData.uid); 
                // console.log(userData.uid);
            },
            (error) => { console.log(error) },
        )
    }, [])


    useEffect(() => {
        if (search == "") {
            setSearchResults([])
        } else {
            const searchList = data.filter(filterSelf)
            setSearchResults(searchList.filter(searchMatch))
        }
    }, [search])

    return (
        <SafeAreaView style={styles.screen}>

            {/* Search Bar */}
            <View style={styles.searchBar}>

                <TextInput
                    mode="outlined"
                    label="Search for Users..."
                    keyboardType="default"
                    style={{width: 0.9 * width,}}
                    placeholder="User ID or name"
                    value={search}
                    onChangeText={setSearch}
                    autoCapitalize="none"
                    returnKeyType="default"
                    onSubmitEditing={() => {
                                    Keyboard.dismiss();
                                }}
                    blurOnSubmit={false}
                    right={<TextInput.Icon
                        name={() => <FontAwesome name="search" size={height * 0.03} color="#7289DA"/>}
                        onPress={ () => {
                            Keyboard.dismiss();
                        }}
                    />}
                    theme={{colors: {primary: "#7289DA", placeholder : '#72767D', text: '#BABBBF', underlineColor: 'transparent', background: '#4F535C'},}}
                />
            </View>

            {/* Search Results */}
            <FlatList
                showsVerticalScrollIndicator ={false}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                numColumns={1}
                data={searchResults}
                keyExtractor={item => item.uid}
                renderItem={({item}) => <FriendItem item={item}/>}
                ListEmptyComponent={
                    <View style={styles.emptyList}>
                        <View style={styles.emptyIcon}>
                            <FontAwesome name="search" size={height * 0.04} color="#72767D"/>
                        </View> 
                        <Text style={styles.emptyText}>Search for Users by</Text>
                        <Text style={styles.emptyText}>Name or ID</Text>
                    </View>
                }
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen:{
        width: width,
        height: height,
        backgroundColor: '#282b30',
    },
    searchBar:{
        width: width,
        height: height * 0.1,
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    list:{
        width: width,
        height: height * 0.8,
        // backgroundColor: 'red',
    },
    emptyList: {
        width: width,
        height: height * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    emptyText:{
        fontSize: 14,
        color: '#72767D'
    },
    emptyIcon:{
        height: height * 0.07,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
});

export default SearchScreen;