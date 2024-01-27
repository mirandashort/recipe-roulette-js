import axios from 'axios';
import React from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles/Styles.tsx'

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>

function submitRecipe(recipe: String) {
  return axios.post('http://localhost:5000/api/v1/recipes', { name: 'chicken orzo', url: recipe })
  .then(res => { 
    Alert.alert("Recipe saved");
  }).catch(err => {
    Alert.alert(err.response.data.message);
  })
};

export default function Recipes({ navigation }: Props) {
  const [recipe, setRecipe] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Recipes Screen</Text>
      <Button
        title={'Go to Home'}
        onPress={() => navigation.push('Home')}
      />

      <View style={styles.smallContainer}>
        <Text>Import Recipe</Text>
        <TextInput
          placeholder={'Put your recipe here'}
          value={recipe} onChangeText={setRecipe} />
        <TouchableHighlight onPress={() => submitRecipe(recipe)}>
          <Text>Press this button to submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};