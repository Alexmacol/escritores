
/*
* Função que busca escritores com base em um termo de pesquisa.
* @param {string} campoPesquisa - O termo de pesquisa fornecido pelo usuário.
* @returns {Promise<Array>} Uma promessa que resolve para um array contendo os escritores que correspondem ao termo de pesquisa.
*/

let escritoresCache = null; //* Variável para armazenar os escritores em memória

export async function buscarEscritores(campoPesquisa) {
  try {
    //* Carrega os dados uma única vez
    if (!escritoresCache) {
      const response = await fetch('/src/js/dados.json'); //* Faz uma requisição para obter o arquivo JSON
      if (!response.ok) throw new Error('Erro ao carregar os dados.'); //* Verifica se a resposta foi bem-sucedida
      escritoresCache = await response.json(); //* Converte a resposta para JSON e armazena em cache
    }

    let resultados = []; //* Cria um array para armazenar os resultados da pesquisa

    for (let escritor of escritoresCache) {
      let nome = escritor.nome.toLowerCase();
      let descricao = escritor.descricao.toLowerCase();
      let tags = escritor.tags.toLowerCase();

      //* Verifica se o termo de pesquisa está presente no nome, descrição ou tags do escritor
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados.push(escritor);
      }
    }
    return resultados; //* Retorna os resultados encontrados

  } catch (error) {
    console.error('Erro durante a pesquisa:', error); //* Loga o erro no console
    return []; //* Retorna um array vazio em caso de erro
  }
}

