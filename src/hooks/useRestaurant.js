import { useState, useEffect } from "react";
import yelp from '../api/yelp'

export default () => {
    const [restaruant, setRestaruant] = useState([])

    const fetchRestaurant = async (searchText) => {

        
        try {
            const results = await yelp.get('/sampledata.js', {
                // params: {
                //     query: searchText
                // }

            });
           
            //console.log(JSON.parse(results.data))
            setRestaruant(results.data.businesses)
        } catch (e) {
            console.log(e)
        }
        
    }

    useEffect(() => {
        fetchRestaurant('name');
    }, []);

    return [fetchRestaurant, restaruant]
}