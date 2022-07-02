import React, { useEffect, useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import BookItem from '../../components/BookItem';
import { RepositoryBook } from '../../repository/RepositoryBook';
import { groupByFirstLetter } from '../../utils';
import style from './style';


export const Books = ({ navigation }) => {
  const [ booksList, setBooksList ] = useState([]);

  useEffect(() => {
    RepositoryBook.getAll().then(setBooksList);
    RepositoryBook.onStoreListeners.add(() => {
      RepositoryBook.getAll().then(setBooksList);
    });
  }, []);

  return (
    <View>
      <SectionList
        style={style.listContainer}
        sections={groupByFirstLetter(booksList)}
        data={booksList}
        renderItem={({ item, index }) => (
          <BookItem book={item} number={index + 1} navigation={navigation}  />
        )}
        renderSectionHeader={({ section: { title }}) => (
          <Text style={style.listHeadings}>{title}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Books;
