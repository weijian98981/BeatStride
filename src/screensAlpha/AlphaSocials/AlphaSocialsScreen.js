import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import FriendReqPage from './FriendRequest';
import UserSearchPage from './UserSearch';

const {width, height} = Dimensions.get("window")
const Stack = createStackNavigator();

export default function App() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Distance" component={DistanceScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Speed" component={SpeedScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Activity" component={ActivityScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Friend Requests" component={FriendReqScreen} options={{headerStyle: {backgroundColor: '#1E2124',height: height * 0.1,},headerTintColor: '#BABBBF',headerTitleStyle: {fontWeight: 'bold',}}} />
      <Stack.Screen name="Search Users" component={UserSearchScreen} options={{headerStyle: {backgroundColor: '#1E2124',height: height * 0.1,},headerTintColor: '#BABBBF',headerTitleStyle: {fontWeight: 'bold',}}}/>
    </Stack.Navigator>
  );
}

function DistanceScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
                <Text style={styles.headerText}>Social</Text>

                <View style={styles.iconComponent}>
                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8} onPress={() => navigation.navigate('Friend Requests')}>
                    <View>
                    <Icon name="person-add" size={width * 0.1} color= '#BABBBF'/>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8} onPress={() => navigation.navigate('Search Users')}>
                    <View >
                    <Icon name="search" size={width * 0.1} color= '#BABBBF'/>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
      <View style={styles.buttonbody}> 
          <TouchableOpacity style={styles.buttonActive} activeOpacity={0.8} onPress={() => navigation.navigate('Distance')}>
            <Text style={styles.buttonText}>Distance</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button1} activeOpacity={0.8} onPress={() => navigation.navigate('Speed')}>
            <Text style={styles.buttonText}>Speed</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button1} activeOpacity={0.8} onPress={() => navigation.navigate('Activity')}>
            <Text style={styles.buttonText}>Activity</Text>
          </TouchableOpacity> 
      </View>
      <View style={styles.content}>
        <Text>Dist content goes here / Calling the page</Text>
      </View>
    </View>

  );
}

function SpeedScreen({ navigation }) {
  return(
    <View style={styles.container}>
    <View style={styles.header}>
              <Text style={styles.headerText}>Social</Text>

              <View style={styles.iconComponent}>
                  <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8} onPress={() => navigation.navigate('Friend Requests')}>
                  <View>
                  <Icon name="person-add" size={width * 0.1} color= '#BABBBF'/>
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8} onPress={() => navigation.navigate('Search Users')}>
                  <View >
                  <Icon name="search" size={width * 0.1} color= '#BABBBF'/>
                  </View>
                  </TouchableOpacity>
              </View>
          </View>
      <View style={styles.buttonbody}> 
          <TouchableOpacity style={styles.button1} activeOpacity={0.8} onPress={() => navigation.navigate('Distance')}>
            <Text style={styles.buttonText}>Distance</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.buttonActive} activeOpacity={0.8} onPress={() => navigation.navigate('Speed')}>
            <Text style={styles.buttonText}>Speed</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button1} activeOpacity={0.8} onPress={() => navigation.navigate('Activity')}>
            <Text style={styles.buttonText}>Activity</Text>
          </TouchableOpacity> 
      </View>
      <View style={styles.content}>
        <Text>Speed content goes here / Calling the page</Text>
      </View>
    </View>
    
  );
}

function ActivityScreen({ navigation }) {
  return(
    <View style={styles.container}>
    <View style={styles.header}>
              <Text style={styles.headerText}>Social</Text>

              <View style={styles.iconComponent}>
                  <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8} onPress={() => navigation.navigate('Friend Requests')}>
                  <View>
                  <Icon name="person-add" size={width * 0.1} color= '#BABBBF'/>
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8} onPress={() => navigation.navigate('Search Users')}>
                  <View >
                  <Icon name="search" size={width * 0.1} color= '#BABBBF'/>
                  </View>
                  </TouchableOpacity>
              </View>
          </View>
      <View style={styles.buttonbody}> 
          <TouchableOpacity style={styles.button1} activeOpacity={0.8} onPress={() => navigation.navigate('Distance')}>
            <Text style={styles.buttonText}>Distance</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button1} activeOpacity={0.8} onPress={() => navigation.navigate('Speed')}>
            <Text style={styles.buttonText}>Speed</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.buttonActive} activeOpacity={0.8} onPress={() => navigation.navigate('Activity')}>
            <Text style={styles.buttonText}>Activity</Text>
          </TouchableOpacity> 
      </View>
      <View style={styles.content}>
        <Text>Activity content goes here / Calling the page</Text>
      </View>
    </View>
    
  );
}
function FriendReqScreen({ navigation }) {
  return(
    <FriendReqPage/>
  );
}

function UserSearchScreen({ navigation }) {
  return(
    <UserSearchPage/>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#282B30',
  },
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
iconComponent:{
    position: 'absolute',
    height: height * 0.1,
    width: width * 0.35,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
},
iconContainer:{
    width: width * 0.15,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  buttonbody:{
    height: "7%",
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 70,
  },
  button1:{
    width: 100,
    height: 40,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#393C41',
    marginLeft:10,
  },
  buttonActive:{
    width: 100,
    height: 40,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#555a61',
    marginLeft:10,
  },
  content:{
    height: "83%",
    backgroundColor: "#282B30",
  },
  buttonText:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7289DA'
  },

})