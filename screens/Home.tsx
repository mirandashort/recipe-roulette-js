import axios from 'axios';
import {
  Button,
  Text,
  View,
} from 'react-native';

import styles from '../styles/Styles.tsx'

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Recipes: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title={'Go to Recipes'}
        onPress={() => navigation.push('Recipes')}
      />
    </View>
  );
};