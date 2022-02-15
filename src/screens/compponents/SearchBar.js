import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Feather} from '@expo/vector-icons'

const SearchBar = ({term,onTermChange,onTermEnd}) => {
    return (
        <View style={styles.serachBackground}>
            <Feather name='search' size={24}></Feather>
            <TextInput 
            style={styles.searchText} 
            placeholder='Search' 
            autoCapitalize='none' autoCorrect={false}
            value  = {term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={()=> onTermEnd()}

            ></TextInput>
        </View>
    );

}

const styles = StyleSheet.create({

    serachBackground: {
        backgroundColor: '#E0EEEE',
        marginHorizontal: 10,
        marginVertical: 10,
        padding :10,
        borderRadius: 4,
        flexDirection:'row'
    },

    searchText: {
        marginHorizontal:10,
        fontSize:16,
        flex : 1
    }
})

export default SearchBar