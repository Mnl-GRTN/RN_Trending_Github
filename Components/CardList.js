import React from 'react'
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native'

export const CardList = ({apiData, navigation}) => {

    return (
        <FlatList style={styles.listing} data={apiData} renderItem={({ item }) =>
            <View style={styles.container}>
                {/* Go to a new screen with the repository details */}
                <TouchableOpacity onPress={() => navigation.navigate('Details', {link: item.url})}>
                <Text style={styles.card_name}>{item.name} </Text>
                <Text style={styles.card_full_name}>{item.full_name}</Text>
                <Text>{item.description}</Text>
                <View style={styles.card_counter}>
                    <Text style={styles.card_counter_text}>Issues: {item.open_issues}</Text>
                    <Text style={styles.card_counter_text}>Forks : {item.forks_count}</Text>
                    <Text style={styles.card_counter_text}>🌟 {item.stargazers_count}</Text>
                </View>
                </TouchableOpacity>
            </View>}>
        </FlatList>
    )
};

const styles = StyleSheet.create({
    listing: {
        width: '100%',
        padding: 10,
    },

    container: {
        width: '90%',
        height: 'auto',
        backgroundColor: '#f4f4f4f4',
        marginVertical: 10,
        borderRadius: 16,
        padding: 20,
        alignSelf: 'center',

        shadowColor: '#211F37',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 8,
    },

    card_name: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    card_full_name: {
        fontSize: 12,
        color: '#666',
        marginBottom: 10,
    },

    card_counter:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },

    card_counter_text:{
        fontSize: 12,
        marginHorizontal: 6,
        
    }
});