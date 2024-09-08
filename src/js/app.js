function pesquisarEscritor() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Atribui o valor digitado ao campoPesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<h2 class='mensagem-erro'>Entre com o nome do escritor(a) ou o gênero policial!<h2>";
    return;
  }

  // Verifica se o campo de pesquisa começa com espaço
  if (campoPesquisa.startsWith(' ')) {
    section.innerHTML = "<h2 class='mensagem-erro'>Por favor, inicie com uma letra!</h2>";
    return;
  }

  // Verifica se o campo de pesquisa contém apenas letras e espaços
  for (let i = 0; i < campoPesquisa.length; i++) {
    const char = campoPesquisa.charAt(i);
    if (!/[a-zA-Z ]/.test(char)) {
      section.innerHTML = "<h2 class='mensagem-erro'>Por favor, digite apenas letras e espaços.<h2>";
      return;
    }
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada escritor no array 'escritores'
  for (let escritor of escritores) {

    nome = escritor.nome.toLowerCase()
    descricao = escritor.descricao.toLowerCase()
    tags = escritor.tags.toLowerCase()

    if (nome.includes(campoPesquisa)
      || descricao.includes(campoPesquisa)
      || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada escritor, incluindo nome, descrição e link
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${escritor.link}" target="_blank">${escritor.nome}</a>
        </h2>
        <p class="descricao-meta">
          ${escritor.descricao}
        </p>
        <a href=${escritor.link} target="_blank" rel="noopener">Saiba Mais</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<h2 class='mensagem-erro'>Nada foi encontrado!<h2>";
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
};
