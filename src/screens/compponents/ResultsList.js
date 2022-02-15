import React from 'react'
import { Text, View, StyleSheet, FlatList,TouchableOpacity} from 'react-native'
import RestaruantView from './RestaurantView'
import { NavigationContext, withNavigation } from 'react-navigation'

const ResultList = ({ title, filteredData ,navigation}) => {

    return (<View style={{ margin: 4, paddingBottom: 12 }}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            data={filteredData}
            showsHorizontalScrollIndicator={false}
            key={item => (item.id)}
            renderItem={({ item }) => {
                
                return (
                    <TouchableOpacity
                        onPress={() => {
                            console.log('pressed' + item.name)
                            navigation.navigate('Details');
                        }}
                    >
                        <RestaruantView item={item} />
                    </TouchableOpacity>
                );
            }}
        />
    </View>);
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 4,
        paddingLeft: 8
    }
})

export default withNavigation(ResultList);