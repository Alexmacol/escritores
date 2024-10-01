// Função para exibir o spinner (indicador de carregamento)
export function mostrarSpinner() {
  // Torna o spinner visível alterando o estilo para 'block'
  document.getElementById("spinner").style.display = "block";
}

// Função para esconder o spinner
export function esconderSpinner() {
  // Esconde o spinner alterando o estilo para 'none'
  document.getElementById("spinner").style.display = "none";
}