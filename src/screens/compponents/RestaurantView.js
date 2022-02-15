import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const RestaruantView = ({ item }) => {
    return (<View>
        
            <Image style={style.imageStyle} source={{ uri: item.photo_url }}></Image>
            <Text style={style.nameStyle}>{item.name}</Text>
            <Text style={style.ratingStyle}>Rating {item.avg_rating} , Review {item.review_count}</Text>

    </View>);
}

const style = StyleSheet.create({

    imageStyle: {
        width: 240,
        height: 120,
        borderRadius: 8,
        margin: 10
    },

    nameStyle: {

        fontWeight: 'bold',
        marginLeft: 10
    },

    ratingStyle: {

        color: 'gray',
        marginLeft: 10
    }

});

export default RestaruantView;