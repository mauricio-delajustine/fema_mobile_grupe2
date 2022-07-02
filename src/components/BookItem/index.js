import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';


export const BookItem = ({ navigation, book, number }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Information', book)}
    style={style.container}
  >
    <View style={style.left}>
      <Text style={style.numberText}>{number}º</Text>
    </View>
    <View style={style.right}>
      <Text>Titulo: {book.titulo}</Text>
      <Text>Autor: {book.autor}</Text>
      <Text>Ver mais</Text>
    </View>
  </TouchableOpacity>
);

export default BookItem;
