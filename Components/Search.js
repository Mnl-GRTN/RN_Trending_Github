import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { useState } from 'react';
import { CardList } from './CardList';
import { CustomModal } from './Modaldropdown';

export const Search = ({navigation}) => {

    const [apiData, setApiData] = useState([]);
    const [language, setLanguage] = useState('Javascript');

    const languagesOptions = ['C', 'C++', 'C#', 'Go', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Scala', 'TypeScript'];

    handleLanguageSelect = (index, value) => {
        setLanguage(value.toLowerCase());
    }

    const getTrendingFromApiAsync = async () => {
        const today = new Date();
        const oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        const since = oneWeekAgo.toISOString().split('T')[0];

        console.log(since);
        try {
          const response = await fetch(
            `https://api.github.com/search/repositories?q=language:${language}+pushed:${since}&sort=stars&fork=true&order=desc&per_page=10&page=1`,
          );
          const json = await response.json();
          setApiData(json.items);
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <View style={styles.inner_container}>
            <View style={styles.row}>
                <CustomModal handleOptionSelect={handleLanguageSelect} options={languagesOptions} defaultValue={language}></CustomModal>
                <Button title="Search" onPress={() => getTrendingFromApiAsync()} />
            </View>
            <CardList apiData={apiData} navigation={navigation}></CardList>
        </View>
    )
};

const styles = StyleSheet.create({
    inner_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
    },
});
