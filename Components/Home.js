import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {Search} from './Search';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
    
            <Search navigation={navigation}/>
  
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});