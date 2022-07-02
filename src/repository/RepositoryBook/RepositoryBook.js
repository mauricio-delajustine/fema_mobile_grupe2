import DB from '../database';

export class RepositoryBook {

  /**
   * Set que conterá todos os `listeners` que devem rodar ao
   * ocorrer um cadstro (store) de novo registro no banco
   * 
   * @constant
   * @type {Set<() => void>}
   */
  static onStoreListeners = new Set;

  /**
   * Método que auxilia na executação dos `listeners` cadastrados
   * 
   * @private
   * @param {'store'} type
   */
  static runListeners(type) {
    if (type !== 'store') return;

    for (const handler of this.onStoreListeners) {
      try {
        handler();
      } catch(ex) {
        console.error(ex);
      }
    }
  }

  /**
   * Grava um novo LIVRO na tabela de livros
   * 
   * @param {object} param0
   * @param {string} param0.titulo
   * @param {string} param0.autor
   * @param {string} param0.resumo
   * @param {string} param0.genero
   * @param {string} param0.tag
   * @param {string} param0.shipper
   * @param {string} param0.descricao
   * @param {string} param0.datainicio
   * @param {string} param0.datafim
   * @param {string} param0.avaliacao
   * 
   * @returns {Promise<boolean>}
   */
  static async store({ titulo, autor, resumo, genero, tag, shipper, descricao, datainicio, datafim, avaliacao }) {
    try {
      const tx = await new Promise((resolve, reject) => {
        DB.transaction(resolve, reject);
      });

      await new Promise((resolve, reject) => {
        tx.executeSql(
          'INSERT INTO books (titulo, autor, resumo, genero, tag, shipper, descricao, datainicio, datafim, avaliacao) VALUES (?,?,?,?,?,?,?,?,?,?)',
          [ titulo, autor, resumo, genero, tag, shipper, descricao, datainicio, datafim, avaliacao ],
          () => resolve(true),
          reject,
        );
      });

      this.runListeners('store');

      return true;

    } catch (error) {
      console.log('asdasd');
      return false;
    }
  }

  /**
   * Pega todos os registros da tabela de livros
   * ordenados por nome de forma crescente
   * 
   * @returns {Promise<object[]>}
   */
  static async getAll () {
    const tx = await new Promise((resolve, reject) => {
      DB.transaction(resolve, reject);
    });

    return await new Promise((resolve, reject) => {
      tx.executeSql('SELECT * FROM books ORDER BY nome ASC', [], (_, { rows }) => resolve(rows._array), reject);
    });
  }
};

export default RepositoryBook;