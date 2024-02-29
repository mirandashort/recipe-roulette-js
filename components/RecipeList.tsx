import axios from 'axios';
import React from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';

import styles from '../styles/Styles.tsx'
import { useNavigation } from '@react-navigation/native';

interface RecipeType {
  name: string;
  url: string;
  id: string;
}

export default function RecipeList() {
  const navigation = useNavigation();
  const [recipes, setRecipes] = React.useState<Array<RecipeType>>([])

  const Recipe = ({ name, url }: RecipeType) => (
    <View>
      <Text style={styles.textContainer}>{name}: {url}</Text>
    </View>
  );

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/v1/recipes');
          setRecipes(response.data)
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchRecipes();
    });
    

  }, [navigation]);


  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => <Recipe name={item.name} url={item.url} id={item.id} />}
      keyExtractor={item => item.id}
    />
  );
}