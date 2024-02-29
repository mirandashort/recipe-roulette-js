
import React from 'react';
import RecipeList from '../components/RecipeList.tsx';
import { Button, View } from 'react-native';

export default function Recipes({ navigation }: any) {
  return(
    <View>
      <Button
        onPress={() => navigation.navigate('SaveRecipe')}
        title="Add New Recipe"
      />
      <RecipeList />
    </View>
  )
};