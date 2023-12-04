import { StyleSheet } from 'react-native';
import {Home} from './Components/Home';
import {DetailsRepo} from './Components/DetailsRepo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
          />
        <Stack.Screen
          name="Details"
          component={DetailsRepo}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
