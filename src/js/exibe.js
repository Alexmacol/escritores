/**
 * Importa a função highlightMatch do módulo 'destaque.js'.
 * @module destaque
 */
import { highlightMatch } from './destaque.js';

/**
 * Função para processar e exibir os resultados da pesquisa.
 * @param {Array} resultados - Array contendo os objetos de escritores encontrados na pesquisa.
 * @param {string} campoPesquisa - O termo de pesquisa fornecido pelo usuário.
 * @returns {string} O HTML contendo os resultados da pesquisa.
 */
export function exibirResultados(resultados, campoPesquisa) {
  let resultadosHtml = ""; // Inicializa uma string vazia para armazenar o HTML dos resultados

  // Itera sobre o array de resultados
  for (let escritor of resultados) {
    /**
     * Cria o HTML para cada resultado encontrado.
     * @param {Object} escritor - Objeto contendo informações sobre o escritor.
     * @param {string} escritor.nome - O nome do escritor.
     * @param {string} escritor.link - O link para mais informações sobre o escritor.
     * @param {string} escritor.descricao - A descrição do escritor.
     * @param {string} campoPesquisa - O termo de pesquisa fornecido pelo usuário.
     */
    resultadosHtml += `
      <div class="item-resultado">
        <h2>
          <!-- Chama a função highlightMatch para destacar o termo de pesquisa no nome do escritor -->
          <a href="${escritor.link}" target="_blank">${highlightMatch(escritor.nome, campoPesquisa)}</a>
        </h2>
        <!-- Destaca a descrição com o termo de pesquisa -->
        <p class="descricao-meta">${highlightMatch(escritor.descricao, campoPesquisa)}</p>
        <a href="javascript:void(0);" class="saiba-mais">Saiba mais</a>
      </div>
    `;
  }

  return resultadosHtml;
}