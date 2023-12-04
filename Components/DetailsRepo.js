import React, { useEffect } from 'react';
import { StyleSheet, Text, Button, Linking, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { CustomButton } from './CustomButton';

export const DetailsRepo = ({route, navigation}) => {
    const {link} = route.params
    const [Repo_name, setRepo_name] = useState('');
    const [Repo_description, setRepo_description] = useState('');
    const [Repo_license, setRepo_license] = useState('');
    const [Repo_Branches_count, setRepo_Branches_count] = useState('');
    const [Repo_html_url, setRepo_html_url] = useState('');
    const [Repo_topics, setRepo_topics] = useState([]);


    useEffect(() => {
        getRepoInfoFromApiAsync();
    }, []);

    const getRepoInfoFromApiAsync = async () => {
        try {
            const token = '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';
            const requestOptions = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(link, requestOptions);
            const json = await response.json();
            setRepo_name(json.name);
            setRepo_description(json.description);
            setRepo_license(json.license.name);
            setRepo_html_url(json.html_url);
            setRepo_topics(json.topics);
            

            
            const branches = await fetch(`${link}/branches`, requestOptions);
            const branchesJson = await branches.json();
            setRepo_Branches_count(branchesJson.length);
            
        } catch (error) {
            console.error(error);
        }
    };

    const openURI = () => {
        Linking.openURL(Repo_html_url);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <View style={styles.card}>
                    <Text style={styles.header_name}>{Repo_name}</Text>
                    <Text style={styles.description}>{Repo_description}</Text>
                    <Text>License : {Repo_license}</Text>
                    <Text>Branches : {Repo_Branches_count}</Text>
                    <View style={styles.tags}>
                        {Repo_topics.map((item, index) => (
                            <Text style={styles.tags_text} key={index}>{item}</Text>
                        ))}
                    </View>
                    <CustomButton title="Go to Github" onPress={() => openURI()} colorList={['#9B7EDE','#9B7EDE']}></CustomButton>
                    <CustomButton title="Go to Home" onPress={() => navigation.navigate('Home')} colorList={['#9B7EDE','#9B7EDE']}></CustomButton>
                </View>
            </View>  
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    inner_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    card:{
        width: '90%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,

        shadowColor: '#381E75',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },

    tags:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 8,
    },

    tags_text:{
        backgroundColor: '#B7A3E7',
        color: '#fff',
        padding: 5,
        borderRadius: 5,
        margin: 6,
        elevation: 1,
    },

    header_name:{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    description:{
        fontSize: 16,
        marginBottom: 10,
    }


});