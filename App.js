import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailsScreen from './src/screens/DetailsScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
    Search : SearchScreen,
    Details : DetailsScreen
},{
  initialRouteName : 'Search',
  defaultNavigationOptions : {
    title : 'Restaruant Search'
  }
});

export default createAppContainer(navigator)

// Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx

