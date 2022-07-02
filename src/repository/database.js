import * as SQLite from 'expo-sqlite';

export const DB = SQLite.openDatabase('db.booksDB');

DB.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS books (id integer primary key not null, titulo text, autor text, resumo text, genero text, tag text, shipper text, descricao text, datainicio text, datafim text, avaliacao text)'
  );
});

export default DB;
