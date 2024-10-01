/**
 * Importa o array de escritores do módulo 'dados.js'.
 * @module dados
 */
import { escritores } from './dados.js';

/**
 * Função que busca escritores com base em um termo de pesquisa.
 * @param {string} campoPesquisa - O termo de pesquisa fornecido pelo usuário.
 * @returns {Array} Um array contendo os escritores que correspondem ao termo de pesquisa.
 */
export function buscarEscritores(campoPesquisa) {
  let resultados = []; // Cria um array para armazenar os resultados da pesquisa

  // Itera sobre o array de escritores
  for (let escritor of escritores) {
    // Converte o nome, descrição e tags do escritor para minúsculas
    let nome = escritor.nome.toLowerCase();
    let descricao = escritor.descricao.toLowerCase();
    let tags = escritor.tags.toLowerCase();

    /**
     * Verifica se o termo de pesquisa está presente no nome, descrição ou tags do escritor.
     * @param {string} nome - O nome do escritor em minúsculas.
     * @param {string} descricao - A descrição do escritor em minúsculas.
     * @param {string} tags - As tags do escritor em minúsculas.
     * @param {string} campoPesquisa - O termo de pesquisa fornecido pelo usuário.
     * @returns {boolean} True se o termo de pesquisa for encontrado, False caso contrário.
     */
    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Se encontrar uma correspondência, adiciona o resultado ao array de resultados
      resultados.push(escritor);
    }
  }

  if (resultados.length === 0) {
    // Se nenhum resultado for encontrado, retorna um array vazio
    return [];
  }
  return resultados;
}
