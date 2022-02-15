import { React, useState } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import SearchBar from './compponents/SearchBar'
import useRestaurant from '../hooks/useRestaurant'
import ResultsList from './compponents/ResultsList'

const SearchScreen = (props) => {

    console.log(props)
    const [term, setTerm] = useState('')
    const [fetchRestaurant, restaruant] = useRestaurant()

    const groupFetchRestaurant = (price) => {
        return restaruant.filter((item) => {
            return item.price === price
        })
    }

    return (<View style={{flex:1}}>

        <SearchBar

            term={term}
            onTermChange={(newTerm => setTerm(newTerm))}
            onTermEnd={() => fetchRestaurant(term)}
        ></SearchBar>
        <ScrollView>
            <ResultsList title='Cost Effective' filteredData={groupFetchRestaurant('$')}></ResultsList>
            <ResultsList title='Bit Costly' filteredData={groupFetchRestaurant('$$')} ></ResultsList>
            <ResultsList title='High Spender' filteredData={groupFetchRestaurant('$$$')} ></ResultsList>
            <ResultsList title='High Spender' filteredData={groupFetchRestaurant('$$$')} ></ResultsList>
        </ScrollView>
    </View>);
}

const styles = StyleSheet.create({

})

export default SearchScreen