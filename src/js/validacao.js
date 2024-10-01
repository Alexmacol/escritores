/**
 * @file validacao.js
 * @description Módulo contendo funções para validação do campo de pesquisa.
 */

/**
 * Limpa o valor do campo de pesquisa.
 */
export function limparCampoPesquisa() {
  document.getElementById('campo-pesquisa').value = "";
}

/**
 * Valida o valor inserido no campo de pesquisa.
 * @returns {string} Uma mensagem de erro se o valor for inválido, ou uma string vazia se for válido.
 */
export function validarCampo() {
  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  /**
   * Verifica se o campo começa com um espaço em branco.
   * @param {string} campoPesquisa - O valor do campo de pesquisa.
   * @returns {boolean} True se o campo começar com um espaço em branco, False caso contrário.
   */
  if (campoPesquisa.startsWith(' ')) {
    // Retorna uma mensagem de erro se o campo começar com espaço
    return "Por favor, inicie com uma letra!";
  }

  /**
   * Verifica se o campo está vazio ou contém apenas espaços em branco.
   * @param {string} campoPesquisa - O valor do campo de pesquisa.
   * @returns {boolean} True se o campo estiver vazio ou contiver apenas espaços em branco, False caso contrário.
   */
  if (!campoPesquisa.trim()) {
    // Retorna uma mensagem de erro se o campo estiver vazio
    return "Entre com o nome do escritor(a) ou o gênero policial";
  }

  /**
   * Verifica se o campo contém apenas letras e espaços, usando expressão regular.
   * @param {string} campoPesquisa - O valor do campo de pesquisa.
   * @returns {boolean} True se o campo contiver apenas letras e espaços, False caso contrário.
   */
  if (!/^[a-zA-Z ]+$/.test(campoPesquisa)) {
    // Retorna uma mensagem de erro se o campo contiver caracteres inválidos
    return "Por favor, digite apenas letras e espaços.";
  }

  // Se todas as validações passarem, retorna uma string vazia (sem erros)
  return "";
}
