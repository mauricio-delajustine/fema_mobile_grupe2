import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Books from './src/pages/Books';
import Information from './src/pages/Information';
import BookAdd from './src/pages/BookAdd';
import Categoria from './src/pages/Categoria';
import Tag from './src/pages/Tag';
import Dashboard from './src/pages/Dashboard';
import { RepositoryBook } from './src/repository/RepositoryBook';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ route }) {
  const { booksListRef } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Tela Inicial',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen 
        options={{
          title: 'Lista de Livros',
          tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />
        }}
        name="Books"
        component={Books}
        initialParams={{ booksListRef }}
      />
      <Tab.Screen
        options={{
          title: 'Tags',
          tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />
        }}
        name="Tag"
        component={Tag}
        initialParams={{ booksListRef }}
      />
            <Tab.Screen
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />
        }}
        name="Categoria"
        component={Categoria}
        initialParams={{ booksListRef }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const booksListRef = useRef([]);

  useEffect(() => {
    RepositoryBook.getAll().then((rows) => booksListRef.current = rows)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Container" component={Tabs} initialParams={{ booksListRef }} />
        <Stack.Screen options={{ title: 'Dados do livro' }} name="Information" component={Information} />
        <Stack.Screen options={{ title: 'Cadastro de livro' }} name="BookAdd" component={BookAdd} />
        <Stack.Screen options={{ title: 'Categoria Gêneros' }} name="Categoria" component={Categoria} />
        <Stack.Screen options={{ title: 'Categoria Tag' }} name="Tag" component={Tag} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
