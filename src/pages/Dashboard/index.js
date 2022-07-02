import React from 'react';
import { Text, View, Button} from 'react-native';
import style from './style';

export const Dashboard = ({ navigation }) => (
  <View style={style.container}>
    <Text style={style.text}>Gerenciador de Livros</Text>
    
    <Button
      title='Novo Livro'
      onPress={() => navigation.navigate('BookAdd')}
    />

  </View>
);

export default Dashboard;
