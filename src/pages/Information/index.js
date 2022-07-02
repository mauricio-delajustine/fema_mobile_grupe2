import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export const Information = ({ route }) => {
  const { titulo, autor, resumo, genero, tag, shipper, descricao, datainicio, datafim, avaliacao } = route.params;

  return (
    <View style={style.container}>
      <Text>Titulo: {titulo}</Text>
      <Text>Autor: {autor}</Text>
      <Text>Resumo: {resumo}</Text>
      <Text>Gênero: {genero}</Text>
      <Text>Tag: {tag}</Text>
      <Text>Shipper: {shipper}</Text>
      <Text>Descrição: {descricao}</Text>
      <Text>Data Inicio: {datainicio}</Text>
      <Text>Data Fim: {datafim}</Text>
      <Text>Avaliação: {avaliacao}</Text>
    </View>
  )
};

export default Information;
