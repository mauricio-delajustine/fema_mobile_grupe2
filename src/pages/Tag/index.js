import React from 'react';
import { Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import style from './style';

export const Tag = ({ navigation }) => (
  <ScrollView style={{ backgroundColor: "#000" }}>

    <View style={{ flex: 1, flexDirection: 'row', margin: 10, }}>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>
    </View>

    <View style={{ flex: 2, flexDirection: 'row', margin: 10, }}>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>
    </View>

    <View style={{ flex: 3, flexDirection: 'row', margin: 10, }}>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>
    </View>

    <View style={{ flex: 4, flexDirection: 'row', margin: 10, }}>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
        <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>
    </View>

    <View style={{ flex: 5, flexDirection: 'row', margin: 10, }}>


      <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('BookAdd')}>
                  <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.buttonWhite}
        onPress={() => navigation.navigate('BookAdd')}>
                  <Text style={style.text}>Standalone</Text>

      </TouchableOpacity>

    </View>
  </ScrollView >
);

export default Tag;
