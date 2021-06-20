import React, { useState, useRef, useEffect } from 'react';
import {  Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

import * as LocationLib from '../../api/LocationPermissions';

import textStyle from '../../constants/textStyle';
import color from '../../constants/color';

import TempoRun from './MainTabs/TempoRun';
import BasicRun from './MainTabs/BasicRun';
import RunHistory from './MainTabs/RunHistory';
import TabIndicator from './TabIndicator';

const {width, height} = Dimensions.get("window")

const ExerciseMain = ({navigation}) => {
    const [permissionsStatus, setPermissionsStatus] = useState(3);
    
    /* */
    const forePermissionHandler = () => {
        LocationLib.forePermissionCheck(() => {
            setPermissionsStatus(1);
        })
    } 

    const backPermissionHandler = () => {
        LocationLib.backPermissionCheck(() => {
            setPermissionsStatus(2);
        })
    } 

    useEffect(() => {
        if (permissionsStatus === 0) {
            console.log ('P_Status : 0 - FOREGROUND:not granted / BACKGROUND:not granted')
            forePermissionHandler()
        }
        if (permissionsStatus === 1) {
            console.log ('P_Status : 1 - FOREGROUND:granted / BACKGROUND:not granted')
            backPermissionHandler()
        }
        if (permissionsStatus === 2) {
            console.log ('P_Status : 2 - FOREGROUND:granted / BACKGROUND:granted')
        }
        if (permissionsStatus === 3) {
            setPermissionsStatus(0)
            console.log('P_Status : 3 - App Start')
        }
    }, [permissionsStatus])

    
    /*  */
    const [scrollRef , setScrollRef] = useState(null)
    const scrollHandler = (num) => {
        scrollRef.scrollTo({
            x: width * num,
            animated: true
    })}
    const scrollX = useRef(new Animated.Value(0)).current;

    const [tab, setTab] = useState("Tempo")

    return (
        <SafeAreaView style={styles.screenStyle}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Exercise</Text>
            </View>

        {/* Component Navigation */}
        <View style={{
            flexDirection: 'row',
            // backgroundColor:'pink',
            justifyContent: 'space-around',
            width: 0.7 * width,
            paddingTop: 0.01 * height,
        }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    scrollHandler(0);
                    setTab('Tempo');
            }}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{
                        ...textStyle.subHeader,
                        color: tab == 'Tempo' ? color.primary : color.secondary,
                    }}>
                        Tempo Run
                    </Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback 
                    onPress={() => {
                    scrollHandler(1)
                    setTab("Basic")
            }}>
                <View style={{alignItems: 'center'}}>
                      <Text style={{
                          ...textStyle.subHeader,
                          color: (tab == "Basic") ? color.primary : color.secondary,
                      }}>
                          Basic Run
                      </Text>
                  </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback 
                onPress={() => {
                    scrollHandler(2)
                    setTab("History")
            }}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{
                        ...textStyle.subHeader,
                        color: (tab == "History") ? color.primary : color.secondary,
                    }}>
                        History
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            
        </View>

    
        <TabIndicator scrollX={scrollX}/>
    
        
        

        <Animated.ScrollView
            ref={ref => setScrollRef(ref)}
            horizontal
            pagingEnabled={true}
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            overScrollMode="never"
            disableIntervalMomentum={true}
            style={styles.mainComponentContainer}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
             )}>

          {/* Run components */}
          <View style={styles.componentContainer}>
            <TempoRun />
            <BasicRun/>
            <RunHistory />
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenStyle:{
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
    },
    headerContainer:{
        // backgroundColor: 'pink',
        width: width
    },
    headerText:{
        ...textStyle.header,
    },
    mainComponentContainer:{
        // backgroundColor: 'pink',
        position: 'absolute',
        width: width,
        height: 0.75 * height,
        bottom: 0.15 * height,
    },
    componentContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default ExerciseMain