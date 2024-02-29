import axios from 'axios';
import React from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles/Styles.tsx'

import { useNavigation } from '@react-navigation/native';

async function submitRecipe(url: string, name: string, navigation: any) {
  var response = axios.post('http://localhost:5000/api/v1/recipes', { name: name, url: url })
  .then(() => {
    navigation.goBack();
  }).catch(err => {
    console.log(err);
    Alert.alert(err.response.data.message);
  });
  
  return response;
};

export default function SaveRecipe() {
  const navigation = useNavigation();
  const [recipeUrl, setRecipeUrl] = React.useState('');
  const [recipeName, setRecipeName] = React.useState('');

  return (
    <View style={styles.smallContainer}>
      <Text>Import Recipe</Text>
      <TextInput
        placeholder={'Recipe url'}
        value={recipeUrl} onChangeText={setRecipeUrl} />
      <TextInput
        placeholder={'Recipe name'}
        value={recipeName} onChangeText={setRecipeName} />
      <TouchableHighlight onPress={() => submitRecipe(recipeUrl, recipeName, navigation)}>
        <Text>Press this button to submit</Text>
      </TouchableHighlight>
    </View>
  );
};