import React from 'react';
import { View, Button} from 'react-native';
import styles from '../styles/HomeScreen_style';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Button title="Teacher View" onPress={() => navigation.navigate('TopicScreen')} />
    </View>
  );
}