/**
 * @file app.js
 * @description Arquivo principal que contém a lógica da aplicação de pesquisa de escritores.
 */

import { limparCampoPesquisa, validarCampo } from './validacao.js';
import { mostrarSpinner, esconderSpinner } from './spinner.js';
import { buscarEscritores } from './busca.js';
import { exibirResultados } from './exibe.js';

async function pesquisarEscritor() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
  const erroValidacao = validarCampo();
  if (erroValidacao) {
    section.innerHTML = `<h2 class='mensagem-erro'>${erroValidacao}</h2>`;
    return;
  }
  mostrarSpinner();
  let resultados = await buscarEscritores(campoPesquisa);
  
  setTimeout(() => {
    esconderSpinner();
    if (resultados.length === 0) {
      section.innerHTML = `<h2 class='mensagem-erro'>Nenhum resultado encontrado.</h2>`;
    } else {
      section.innerHTML = exibirResultados(resultados, campoPesquisa);
      const itensResultado = document.querySelectorAll('.item-resultado');
      itensResultado.forEach(item => item.classList.add('show'));
    }
  }, 500);
  if (resultados.length > 0) {
    document.getElementById('resultados-pesquisa').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      limparCampoPesquisa();
    }, 100);
  }
}

function pesquisarEscritorSeCampoNaoVazio() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value;
  const section = document.getElementById('resultados-pesquisa');
  if (campoPesquisa) {
    pesquisarEscritor();
  } else {
    section.innerHTML = `<h2 class='mensagem-erro'>Por favor, entre com o nome do escritor(a) ou o gênero policial.</h2>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('botao-pesquisa').addEventListener('click', pesquisarEscritorSeCampoNaoVazio);
});

function AdicionaEventoSaibaMais() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('saiba-mais')) {
      event.target.closest('.item-resultado').classList.toggle('expand');
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', AdicionaEventoSaibaMais);