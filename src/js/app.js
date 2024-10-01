/**
 * @file app.js
 * @description Arquivo principal que contém a lógica da aplicação de pesquisa de escritores.
 * @author [AlexMacOl]
 */

import { limparCampoPesquisa, validarCampo } from './validacao.js';
import { mostrarSpinner, esconderSpinner } from './spinner.js';
import { buscarEscritores } from './busca.js';
import { exibirResultados } from './exibe.js';

/**
 * Função principal de pesquisa de escritores.
 * Valida o campo de pesquisa, busca os escritores correspondentes e exibe os resultados.
 */
function pesquisarEscritor() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa, removendo espaços extras e convertendo para minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

  // Valida o campo de pesquisa
  const erroValidacao = validarCampo();

  // Se houver erro de validação, exibe a mensagem de erro e interrompe a execução
  if (erroValidacao) {
    section.innerHTML = `<h2 class='mensagem-erro'>${erroValidacao}</h2>`;
    return;
  }

  // Exibe o spinner enquanto a pesquisa está sendo processada
  mostrarSpinner();

  // Busca nos dados o termo de pesquisa e cria um array se encontrar
  let resultados = buscarEscritores(campoPesquisa);

  // Simula um pequeno atraso (500ms) antes de exibir os resultados
  setTimeout(() => {
    // Esconde o spinner após o término da pesquisa
    esconderSpinner();

    // Verifica se não há resultados para exibir
    if (resultados.length === 0) {
      section.innerHTML = `<h2 class='mensagem-erro'>Nenhum resultado encontrado.</h2>`;
    } else {
      // Exibe os resultados da pesquisa
      section.innerHTML = exibirResultados(resultados, campoPesquisa);
      // Adiciona a classe 'show' aos elementos '.item-resultado'
      document.querySelectorAll('.item-resultado').forEach((item) => {
        item.classList.add('show');
      });
    }
  }, 500);

  // Faz a rolagem suave até a seção de resultados, se necessário
  if (resultados.length > 0) {
    document.getElementById('resultados-pesquisa').scrollIntoView({ behavior: 'smooth' });
  }

  // Limpa o campo de pesquisa após um breve atraso (100ms)
  if (resultados.length > 0) {
    setTimeout(() => {
      limparCampoPesquisa();
    }, 100);
  }
}

/**
 * 
 * @function pesquisarEscritorSeCampoNaoVazio
 * @description Verifica se o campo de pesquisa está vazio e chama a função pesquisarEscritor se não estiver.
 * @returns {void}
 */
function pesquisarEscritorSeCampoNaoVazio() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value;
  const section = document.getElementById('resultados-pesquisa');
  if (campoPesquisa !== '') {
    pesquisarEscritor();
  } else {
    console.log("Mensagem de erro exibida:");
    const erroValidacao = "Por favor, entre com o nome do escritor(a) ou o gênero policial.";
    section.innerHTML = `<h2 class='mensagem-erro'>${erroValidacao}</h2>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('botao-pesquisa').addEventListener('click', pesquisarEscritorSeCampoNaoVazio);
});

/**
 * Adiciona um evento de clique ao documento para expandir ou recolher o item de resultado correspondente ao link "Saiba mais".
 * Quando o link "Saiba mais" é clicado, a função encontra o item de resultado mais próximo e alterna a classe 'expand' para mostrar ou ocultar a descrição do item.
 * 
 * @function AdicionaEventoSaibaMais
 * @description Adiciona um evento de clique ao documento para expandir ou recolher o item de resultado correspondente ao link "Saiba mais".
 * @returns {void}
 */
function AdicionaEventoSaibaMais() {
  document.addEventListener('click', function (event) {
    // Verifica se o clique foi no link "Saiba mais"
    if (event.target.matches('.saiba-mais')) {
      // Encontra o item de resultado mais próximo
      const itemResultado = event.target.closest('.item-resultado');
      // Se o item de resultado foi encontrado, alterna a classe 'expand'
      if (itemResultado) {
        itemResultado.classList.toggle('expand');
      }
    }
  });
}

// Adiciona o evento de expansão da descrição ao clicar em "Saiba mais" após o carregamento do DOM
document.addEventListener('DOMContentLoaded', AdicionaEventoSaibaMais);
