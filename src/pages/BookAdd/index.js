import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, TextInput, Button, Alert, Pressable, Keyboard, ScrollView, Image } from 'react-native';


import { RepositoryBook } from '../../repository/RepositoryBook';
import style from './style';


export const BookAdd = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [resumo, setResumo] = useState('');
  const [genero, setGenero] = useState('');
  const [tag, setTag] = useState('');
  const [shipper, setShipper] = useState('');
  const [descricao, setDescricao] = useState('');
  const [datainicio, setInicio] = useState('');
  const [datafim, setFim] = useState('');
  const [avaliacao, setAvalia] = useState('');


  const saveHandler = () => {

    if ([titulo, autor, datainicio].some(value => value.trim() === '')) {
      Alert.alert('Campo obrigatórios', 'Por favor preencha todos os campos');
      return;
    }


    RepositoryBook
      .store({ titulo, autor, resumo, genero, tag, shipper, descricao, datainicio, datafim, avaliacao })
      .then(
        (saved) => {
          if (saved) {
            Alert.alert('Cadastrado com sucesso!', 'O que deseja fazer?', [
              {
                text: 'Cadastrar mais',
              },
              {
                text: 'Ir para lista de Livros',
                onPress: () => navigation.navigate('Livros')
              }
            ]);
            setTitulo('');
            setAutor('');
            setResumo('');
            setGenero('');
            setTag('');
            setShipper('')
            setDescricao('');
            setInicio('');
            setFim('');
            setAvalia('');
          } else {
            alert('Algum problema ocorreu ao cadastrar!');
          }
        },
        () => { alert('Algum problema ocorreu ao cadastrar!'); }
      );
  }

  return (
    <ScrollView>

      <Pressable style={style.container} onPress={Keyboard.dismiss} >
        <Text style={style.label}>Titulo</Text>

        <TextInput style={style.input} onChange={(event) => setTitulo(event.nativeEvent.text)} value={titulo} />
        <Text style={style.label}>Autor</Text>

        <TextInput style={style.input} onChange={(event) => setAutor(event.nativeEvent.text)} value={autor} />
        <Text style={style.label}>Resumo</Text>
        <TextInput style={style.input} onChange={(event) => setResumo(event.nativeEvent.text)} value={resumo} />

        <Text style={style.label}>Gênero</Text>
        <Picker
          selectedValue={genero}
          onValueChange={(itemValue, itemIndex) =>
            setGenero(itemValue)
          }>
          <Picker.Item label="SlowBurn" value="slowBurn" />
          <Picker.Item label="Dark" value="dark" />
          <Picker.Item label="Tabu" value="tabu" />
          <Picker.Item label="BDSM" value="bdsm" />
          <Picker.Item label="Yang Adult" value="ya" />
          <Picker.Item label="New Adult" value="na" />
          <Picker.Item label="Omegaverse" value="omegaverse" />
          <Picker.Item label="Enimies to Lovers" value="el" />
          <Picker.Item label="Friends to Lovers" value="fl" />
          <Picker.Item label="Hate to Lovers" value="hl" />
          <Picker.Item label="Drama" value="drama" />
          <Picker.Item label="Ficção Cientifica" value="fc" />
          <Picker.Item label="Distopia" value="distopia" />
          <Picker.Item label="Ficção Policial" value="fp" />
          <Picker.Item label="Thriller" value="thriller" />
          <Picker.Item label="Romance" value="romance" />
          <Picker.Item label="Terror" value="terror" />

        </Picker>     

         <Text style={style.label}>Tag</Text>
        <Picker style={style.Caixa}
          selectedValue={tag}
          onValueChange={(itemValue, itemIndex) =>
            setTag(itemValue)
          }>

         <Picker.Item label="Standalone" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />
          <Picker.Item label="" value="" />

        </Picker>

        <Text style={style.label}>Shipper</Text>
        <TextInput style={style.input} onChange={(event) => setShipper(event.nativeEvent.text)} value={shipper} />

        <Text style={style.label}>Descricao</Text>
        <TextInput style={style.input} onChange={(event) => setDescricao(event.nativeEvent.text)} value={descricao} />

        <Text style={style.label}>Data Inicio</Text>
        <TextInput style={style.input} onChange={(event) => setInicio(event.nativeEvent.text)} value={datainicio} />

        <Text style={style.label}>Data Fim</Text>
        <TextInput style={style.input} onChange={(event) => setFim(event.nativeEvent.text)} value={datafim} />

        <Text style={style.label}>Avaliação</Text>
        <TextInput style={[style.input, style.lastInput]} onChange={(event) => setAvalia(event.nativeEvent.text)} value={avaliacao} />

        <Button
          title='Cadastrar'
          onPress={saveHandler}
        />
      </Pressable>
    </ScrollView>
  )
};

export default BookAdd;
