/*
 * @file app.js
 * @description Arquivo principal que contém a lógica da aplicação de pesquisa de escritores.
 */

import { limparCampoPesquisa, validarCampo } from './validacao.js';
import { mostrarSpinner, esconderSpinner } from './spinner.js';
import { buscarEscritores } from './busca.js';
import { exibirResultados } from './exibe.js';

/*
 * Função assíncrona para pesquisar um escritor.
 * Realiza a validação do campo de pesquisa, mostra um spinner enquanto busca os *resultados e exibe os resultados encontrados ou uma mensagem de erro.
 */
async function pesquisarEscritor() {
  let section = document.getElementById("resultados-pesquisa"); //* Seleciona a seção de resultados
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase(); //* Obtém o valor do campo de pesquisa
  const erroValidacao = validarCampo(); //* Valida o campo de pesquisa
  if (erroValidacao) {
    section.innerHTML = `<h2 class='mensagem-erro'>${erroValidacao}</h2>`; //* Exibe mensagem de erro se a validação falhar
    rolarParaCampoPesquisa(); //* Chama a função para rolar suavemente até o campo de pesquisa
    return;
  }
  mostrarSpinner();
  let resultados = await buscarEscritores(campoPesquisa); // Busca os escritores com base no campo de pesquisa

  setTimeout(() => {
    esconderSpinner();
    if (resultados.length === 0) {
      section.innerHTML = `<h2 class='mensagem-erro'>Nenhum resultado encontrado.</h2>`;
      rolarParaCampoPesquisa(); //* Chama a função para rolar suavemente até o campo de pesquisa
    } else {
      section.innerHTML = exibirResultados(resultados, campoPesquisa);
      const itensResultado = document.querySelectorAll('.item-resultado');
      itensResultado.forEach(item => item.classList.add('show'));
    }
  }, 500);

  //* Se houver resultados, rola a página suavemente até a seção de resultados e limpa o campo de pesquisa
  if (resultados.length > 0) {
    document.getElementById('resultados-pesquisa').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      limparCampoPesquisa(); //* Limpa o campo de pesquisa após 100ms
    }, 100);
  }
}

function pesquisarEscritorSeCampoNaoVazio() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value; 
  const section = document.getElementById('resultados-pesquisa'); 
  if (campoPesquisa) {
    pesquisarEscritor(); //* Chama a função de pesquisa se o campo não estiver vazio
  } else {
    section.innerHTML = `<h2 class='mensagem-erro'>Por favor, entre com o nome do escritor(a) ou o gênero policial.</h2>`;
    rolarParaCampoPesquisa(); //* Chama a função para rolar suavemente até o campo de pesquisa
  }
}

//* Adiciona um evento de clique ao botão de pesquisa para iniciar a pesquisa
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('botao-pesquisa').addEventListener('click', pesquisarEscritorSeCampoNaoVazio);
});

/*
 * Função que adiciona um evento de clique para expandir ou retrair detalhes sobre um resultado.
 */
function AdicionaEventoSaibaMais() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('saiba-mais')) {
      event.target.closest('.item-resultado').classList.toggle('expand'); 
    }
  }, { passive: true });
}

//* Adiciona o evento de "saiba mais" após o carregamento do documento
document.addEventListener('DOMContentLoaded', AdicionaEventoSaibaMais);

//*função  colocao foco no campo de pesquisa quando houver erro na validação
function rolarParaCampoPesquisa() {
  const campoPesquisa = document.getElementById("campo-pesquisa");
  campoPesquisa.scrollIntoView({ behavior: 'smooth' });
  campoPesquisa.focus(); //* Focar no campo de pesquisa
}