import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import style from './style';

export const Categoria = ({ navigation }) => (
  <ScrollView  style={{ backgroundColor: "#000" }}>

    <View style={{ flex: 1, flexDirection: 'row', margin: 10,}}>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
                   <Text style={style.text}>Slowburn</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
                   <Text style={style.text}>Dark</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
                             <Text style={style.text}>Tabu</Text>

      </TouchableOpacity>
    </View>

    <View style={{ flex: 2, flexDirection: 'row', margin: 10,}}>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>BDSM</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>Yang Adult</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>New Adult</Text>
      </TouchableOpacity>
    </View>

    <View style={{ flex: 3, flexDirection: 'row',margin: 10, }}>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>Omegaverse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>enemies to lovers</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>Hate to lovers</Text>
      </TouchableOpacity>
    </View>

    <View style={{ flex: 4, flexDirection: 'row' ,margin: 10,}}>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
         <Text style={style.text}>Friend to lovers</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>Drama</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>Ficção Cientifica</Text>
      </TouchableOpacity>
    </View>

    <View style={{ flex: 5, flexDirection: 'row' , margin: 10,}}>


      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>Distopia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>Ficção Policial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
          <Text style={style.text}>Thriller</Text>
      </TouchableOpacity>

    </View>
  </ScrollView >




);

export default Categoria;
