import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home.tsx';
import Recipes from './screens/Recipes.tsx';
import SaveRecipe from './components/SaveRecipe.tsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Recipes" component={Recipes} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="SaveRecipe" component={SaveRecipe} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



