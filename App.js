import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen'; 
import ListMovies from './pages/ListMovies';
import Description from './pages/Description';
import SearchBar from './component/SearchBar';

const Stack = createStackNavigator();

export default function App() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"  component={HomeScreen} />
                <Stack.Screen name="ListMovies" component={ListMovies} />
                <Stack.Screen name="Description" component={Description} />
                <Stack.Screen name="search" component={SearchBar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}