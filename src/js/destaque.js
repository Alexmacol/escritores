/**
 * Destaca os termos correspondentes no texto com o termo de pesquisa.
 * @param {string} text - O texto no qual os termos serão destacados.
 * @param {string} term - O termo de pesquisa a ser destacado no texto.
 * @returns {string} O texto com os termos correspondentes destacados usando a tag <mark>.
 */
export function highlightMatch(text, term) {
  // Cria uma expressão regular que ignora maiúsculas/minúsculas para encontrar o termo
  const regex = new RegExp(`(${term})`, 'gi');

  // Substitui o termo encontrado pelo termo destacado usando a tag <mark>
  return text.replace(regex, "<mark>$1</mark>");
}
