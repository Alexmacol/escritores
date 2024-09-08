let escritores = [
  // Estados Unidos
  {
    nome: "Edgar Allan Poe",
    tags: "terror gótico mistério macabro poesia",
    nascimento: 1809,
    falecimento: 1849,
    nacionalidade: "Americana",
    obras_destaque: ["O Corvo", "A Queda da Casa de Usher", "O Coração Revelador"],
    epoca: "Século XIX",
    genero_principal: "Conto",
    descricao: "Escritor norte-americano, poeta e crítico literário, conhecido por suas obras que exploram temas como morte, loucura e o sobrenatural. É considerado um dos pioneiros do gênero de terror e um dos mais influentes escritores da língua inglesa.",
    link: "https://pt.wikipedia.org/wiki/Edgar_Allan_Poe"
  },
  {
    nome: "Raymond Chandler",
    tags: "noir hard-boiled detetive particular Philip Marlowe cinismo",
    nascimento: 1888,
    falecimento: 1959,
    nacionalidade: "Americana",
    obras_destaque: ["O Sono Eterno", "Adeus, Minha Adorada", "A Dama do Lago"],
    epoca: "Século XX",
    genero_principal: "Romance policial",
    descricao: "Escritor norte-americano, conhecido por seus romances policiais e contos, que popularizaram o gênero hard-boiled. Seus protagonistas, como Philip Marlowe, são detetives particulares cínicos e solitários que investigam crimes em um Los Angeles sombrio e corrupto.",
    link: "https://pt.wikipedia.org/wiki/Raymond_Chandler"
  },
  {
    nome: "Dashiell Hammett",
    tags: "noir hard-boiled detetive particular realismo cinismo Sam Spade",
    nascimento: 1894,
    falecimento: 1961,
    nacionalidade: "Americana",
    obras_destaque: ["O Falcão Maltês", "Colheita Vermelha", "A Chave de Cristal"],
    epoca: "Século XX",
    genero_principal: "Romance policial",
    descricao: "Escritor norte-americano, considerado o pai do romance policial americano e um dos precursores da literatura noir. Seus personagens, como Sam Spade, são detetives particulares duros e cínicos que investigam crimes em um mundo corrupto e violento.",
    link: "https://pt.wikipedia.org/wiki/Dashiell_Hammett"
  },
  {
    nome: "Robert Ludlum",
    tags: "thriller espionagem espião conspiração ação Jason Bourne",
    nascimento: 1927,
    falecimento: 2001,
    nacionalidade: "Americana",
    obras_destaque: ["A Identidade Bourne", "O Ultimato de Bourne", "A Supremacia de Bourne", "O Círculo Matarese"],
    epoca: "Século XX",
    genero_principal: "Thriller",
    descricao: "Escritor americano, mestre do thriller de espionagem. Seus livros, repletos de ação e suspense, exploram teorias da conspiração complexas e a vida de agentes secretos amnésicos. Ludlum é conhecido por suas tramas envolventes, personagens enigmáticos e ritmo frenético. A série Jason Bourne, em particular, se tornou um fenômeno cultural e foi adaptada para o cinema em diversas ocasiões.",
    "link": "https://pt.wikipedia.org/wiki/Robert_Ludlum"
  },
  {
    nome: "Patricia Highsmith",
    tags: "suspense psicológico noir homicídio LGBTQIA+ existencialismo",
    nascimento: 1921,
    falecimento: 1995,
    nacionalidade: "Americana",
    obras_destaque: ["O Talentoso Ripley", "Pacto Sinistro", "Carol"],
    epoca: "Século XX",
    genero_principal: "Romance psicológico",
    descricao: "Escritora norte-americana, conhecida por seus romances psicológicos que exploram a natureza humana, o crime e a sexualidade. Seus personagens, muitas vezes anti-heróis complexos, são envolvidos em situações moralmente ambíguas e cometem atos de violência. Highsmith é considerada uma das maiores mestras do suspense psicológico.",
    link: "https://pt.wikipedia.org/wiki/Patricia_Highsmith"
  },
  {
    nome: "James Ellroy",
    tags: "noir hard-boiled Los Angeles histórico violento obscuro",
    nascimento: 1948,
    falecimento: "-",
    nacionalidade: "Americana",
    obras_destaque: ["O Grande Nada", "A Dália Negra", "Los Angeles Cidade Proibida"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance policial",
    descricao: "Escritor norte-americano, conhecido por seus romances policiais com uma abordagem visceral e histórica, que exploram a violência, a corrupção e a obsessão em Los Angeles. Suas obras, muitas vezes autobiográficas, são marcadas por um estilo cru e violento, e por uma profunda imersão no submundo do crime.",
    link: "https://pt.wikipedia.org/wiki/James_Ellroy"
  },
  {
    nome: "Harlan Coben",
    tags: "thriller suspense mistério desaparecimento família trama rápida",
    nascimento: 1962,
    falecimento: "-",
    nacionalidade: "Americana",
    obras_destaque: ["Não Conte a Ninguém", "Desaparecido para Sempre", "O Inocente"],
    epoca: "Século XX-XXI",
    genero_principal: "Thriller",
    descricao: "Escritor norte-americano, conhecido por seus thrillers que exploram temas como desaparecimentos, segredos familiares e reviravoltas inesperadas. Suas histórias, muitas vezes com um ritmo acelerado e personagens complexos, são marcadas por um suspense crescente e finais surpreendentes.",
    link: "https://pt.wikipedia.org/wiki/Harlan_Coben"
  },
  {
    nome: "Michael Connelly",
    tags: "policial noir detetive procedural Los Angeles realismo legal thriller",
    nascimento: 1956,
    falecimento: "-",
    nacionalidade: "Americana",
    obras_destaque: ["O Gelo Negro", "O Último Coiote", "O Veredito de Chumbo"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance policial",
    descricao: "Escritor norte-americano, conhecido por seus romances policiais que exploram o mundo da polícia e da advocacia em Los Angeles. Seus personagens, como Harry Bosch e Mickey Haller, são detetives e advogados complexos e moralmente ambíguos, que investigam crimes em um cenário urbano realista e sombrio.",
    link: "https://pt.wikipedia.org/wiki/Michael_Connelly"
  },
  {
    nome: "Karin Slaughter",
    tags: "thriller policial suspense médico-legal violencia violência Georgia Will Trent",
    nascimento: 1971,
    falecimento: "-",
    nacionalidade: "Americana",
    obras_destaque: ["Flores Partidas", "A Boa Filha", "Tríptico"],
    epoca: "Século XX-XXI",
    genero_principal: "Thriller policial",
    descricao: "Escritora norte-americana, conhecida por seus thrillers policiais que exploram o mundo da medicina legal e da investigação criminal. Seus romances, muitas vezes cruéis e realistas, são marcados por personagens complexos e enredos envolventes que exploram temas como violência, trauma e a fragilidade das relações humanas.",
    link: "https://pt.wikipedia.org/wiki/Karin_Slaughter"
  },
  {
    nome: "Don Winslow",
    tags: "policial crime organizado cartel drogas violência realismo sátira social ação EUA",
    nascimento: 1953,
    falecimento: "-",
    nacionalidade: "Americana",
    obras_destaque: ["O Poder", "A Fronteira", "A Queda"],
    epoca: "Século XX-XXI",
    genero_principal: "Thriller policial",
    descricao: "Escritor norte-americano, conhecido por seus thrillers que exploram o mundo do crime organizado, especialmente o tráfico de drogas. Seus romances, muitas vezes com um tom realista e violento, retratam a luta por poder entre cartéis, policiais e outros personagens envolvidos nesse universo. Winslow é reconhecido por sua pesquisa detalhada sobre o crime organizado e por sua capacidade de criar personagens complexos e anti-heróis.",
    link: "https://en.wikipedia.org/wiki/Don_Winslow"
  },
  {
    nome: "Patricia Cornwell",
    tags: "policial suspense médico-legal médica legista forense EUA Kay Scarpetta",
    nascimento: 1956,
    falecimento: "-",
    nacionalidade: "Americana",
    obras_destaque: ["Post Mortem", "Corpo de Delito", "Lavoura de Corpos"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance policial",
    descricao: "Escritora americana, renomada por seus thrillers policiais que exploram o mundo da medicina legal e da investigação forense. Seus romances, frequentemente protagonizados pela médica legista Kay Scarpetta, apresentam casos complexos e detalhados, com foco em ciência e tecnologia. Cornwell é conhecida por sua pesquisa rigorosa sobre procedimentos forenses e por sua capacidade de criar narrativas tensas e envolventes.",
    link: "https://pt.wikipedia.org/wiki/Patricia_Cornwell"
  },
  {
    nome: "Lee Child",
    tags: "policial suspense ação americano exército solitário Jack Reacher",
    nascimento: 1954,
    falecimento: "-",
    nacionalidade: "Americana",
    obras_destaque: ["Killing Floor", "One Shot", "Persuader"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance policial",
    descricao: "Escritor americano, conhecido por seus thrillers de ação protagonizados pelo ex-policial militar Jack Reacher. Seus romances, caracterizados por tramas rápidas e personagens complexos, exploram temas como justiça, moralidade e a solidão do indivíduo. Child é reconhecido por sua prosa direta e por sua capacidade de criar sequências de ação intensas e realistas.",
    link: "https://pt.wikipedia.org/wiki/Lee_Child"
  },
  {
    nome: "Daniel Silva",
    tags: "espionagem thriller intriga internacional arte Gabriel Allon",
    nascimento: 1960,
    falecimento: "-",
    nacionalidade: "Americana",
    obras_destaque: ["O Artista da Morte", "A Casa da Russia"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance de espionagem",
    descricao: "Autor norte-americano de renome, Daniel Silva é conhecido por seus thrillers de espionagem, que combinam ação intensa com elementos históricos e artísticos.",
    link: "https://pt.wikipedia.org/wiki/Daniel_Silva_(escritor)"
  },
  // Canadá
  {
    nome: "Louise Penny",
    tags: "policial mistério suspense canadense rural charmoso Inspetor Gamache",
    nascimento: 1959,
    falecimento: "-",
    nacionalidade: "Canadense",
    obras_destaque: ["Natureza-morta", "Graça Fatal", "O Mais Cruel dos Meses"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance policial",
    descricao: "Escritora canadense, conhecida por seus romances policiais que exploram o cotidiano de uma pequena vila no Quebec e as investigações do charmoso Inspetor Gamache. Seus livros, frequentemente com um tom acolhedor e intrigante, combinam elementos do mistério clássico com a complexidade das relações humanas. Penny é reconhecida por sua prosa elegante e por sua capacidade de criar personagens memoráveis e atmosferas envolventes.",
    link: "https://www.louisepenny.com/"
  },
  // Bélgica
  {
    nome: "Georges Simenon",
    tags: " policial realismo psicologia inspetor Jules Maigret",
    nascimento: 1903,
    falecimento: 1989,
    nacionalidade: "Belga",
    obras_destaque: ["O Homem de Londres", "O Quarto de Hotel", "A Neve Estava Suja"],
    epoca: "Século XX",
    genero_principal: "Romance policial",
    descricao: "Prolífico escritor belga, conhecido por seus romances policiais, especialmente a série protagonizada pelo comissário Maigret. Simenon é famoso por sua capacidade de explorar a psicologia humana e o cotidiano de forma realista, criando personagens complexos e ambientes atmosféricos.",
    link: "https://pt.wikipedia.org/wiki/Georges_Simenon"
  },
  // França
  {
    nome: "Maurice Leblanc",
    tags: "policial intriga detetive amador ladrão Arsène Lupin",
    nascimento: 1864,
    falecimento: 1941,
    nacionalidade: "Francesa",
    obras_destaque: ["Arsène Lupin, Ladrão de Casaca", "813", "O colar da rainha"],
    epoca: "Século XIX/XX",
    genero_principal: "Romance policial",
    descricao: "Escritor francês, criador do célebre ladrão de casaca Arsène Lupin. Leblanc é conhecido por suas intrigas elaboradas e por ter popularizado o gênero do romance policial na França. Seus livros são marcados por um tom leve e elegante, com mistérios envolventes e personagens carismáticos.",
    link: "https://pt.wikipedia.org/wiki/Maurice_Leblanc"
  },
  // Inglaterra
  {
    nome: "Agatha Christie",
    tags: "mistério clássico detetive amador assassinato enigmas Hercule Poirot Miss Marple",
    nascimento: 1890,
    falecimento: 1976,
    nacionalidade: "Britânica",
    obras_destaque: ["Assassinato no Expresso do Oriente", "E Não Sobrou Nenhum"],
    epoca: "Século XX",
    genero_principal: "Romance policial",
    descricao: "Considerada a rainha do crime, Agatha Christie é famosa por seus mistérios complexos e personagens memoráveis, como Hercule Poirot e Miss Marple.",
    link: "https://pt.wikipedia.org/wiki/Agatha_Christie"
  },
  {
    nome: "Arthur Conan Doyle",
    tags: "detetive mistério clássico Sherlock Holmes Londres dedução vitoriano vitoriana",
    nascimento: 1859,
    falecimento: 1930,
    nacionalidade: "Escocesa (posteriormente obteve cidadania Britânica)",
    obras_destaque: ["Um Estudo em Vermelho", "O Signo dos Quatro", "O cão dos Baskervilles"],
    epoca: "Século XIX",
    genero_principal: "Romance policial",
    descricao: "Escritor britânico, conhecido por criar o icônico detetive Sherlock Holmes. Seus romances e contos, ambientados na Londres vitoriana, são caracterizados pela lógica dedutiva e pela atmosfera misteriosa. A figura de Sherlock Holmes, com sua inteligência aguçada e seu companheiro Dr. Watson, se tornou um dos personagens mais famosos da literatura mundial.",
    link: "https://pt.wikipedia.org/wiki/Arthur_Conan_Doyle"
  },
  {
    nome: "G. K. Chesterton",
    tags: "ensaio filosofia religião paradoxo apologia humor ficção mistério padre Brown",
    nascimento: 1874,
    falecimento: 1936,
    nacionalidade: "Britânica",
    obras_destaque: ["O Homem Eterno", "Ortodoxia", "A Inocência do Padre Brown"],
    epoca: "Século XIX-XX",
    genero_principal: "Ensaísta, romancista e apologista",
    descricao: "Escritor britânico, conhecido por seus ensaios filosóficos e religiosos, romances policiais e apologias do cristianismo. Seu estilo, caracterizado por paradoxos e um humor irônico, o tornou um dos pensadores mais originais de sua época. Criou o íconico personagem Padre Brown, um astuto observador da condição humana, detetive amador.",
    link: "https://pt.wikipedia.org/wiki/G._K._Chesterton"
  },
  {
    nome: "Wilkie Collins",
    tags: "mistério suspense gótico criminal feminino serializado vitoriano",
    nascimento: 1824,
    falecimento: 1889,
    nacionalidade: "Britânica",
    obras_destaque: ["A Pedra Lunar", "A Mulher de Branco"],
    epoca: "Século XIX",
    genero_principal: "Romance policial",
    descricao: "Escritor britânico, considerado um dos pioneiros do romance policial. Seus trabalhos, frequentemente serializados em revistas, exploram temas como o crime, a loucura e a condição feminina. Collins é conhecido por suas narrativas complexas, com múltiplos pontos de vista e reviravoltas inesperadas. Seus romances, como 'A Pedra Lunar', influenciaram gerações de escritores.",
    link: "https://pt.wikipedia.org/wiki/Wilkie_Collins"
  },
  {
    nome: "John le Carré",
    tags: "espionagem Guerra Fria thriller político George Smiley",
    nascimento: 1931,
    falecimento: 2020,
    nacionalidade: "Britânica",
    obras_destaque: ["O Espião que Veio do Frio", "O Homem que Nunca Foi", "O Jardineiro Fiel"],
    epoca: "Século XX/XXI",
    genero_principal: "Thriller político",
    descricao: "Escritor britânico, mestre do romance de espionagem. Seus livros, frequentemente ambientados durante a Guerra Fria, exploram as complexidades da política internacional, a moralidade da espionagem e as vidas dos agentes secretos. Le Carré é conhecido por seus personagens complexos, diálogos inteligentes e tramas intrigantes. O personagem de George Smiley, um agente secreto britânico, é um dos mais icônicos da literatura.",
    link: "https://pt.wikipedia.org/wiki/John_le_Carré"
  },
  {
    nome: "Ruth Rendell",
    tags: "suspense psicológico psicopatia suburbano Inglaterra Wexford",
    nascimento: 1930,
    falecimento: 2015,
    nacionalidade: "Britânica",
    obras_destaque: ["Um Corpo na Biblioteca", "Um Grito na Noite", "Carne Trêmula"],
    epoca: "Século XX",
    genero_principal: "Romance policial",
    descricao: "Escritora britânica, mestre do suspense psicológico. Seus romances, muitas vezes ambientados em pequenas cidades inglesas, exploram a mente de assassinos e a natureza do mal. Rendell é conhecida por seus personagens complexos, suas narrativas envolventes e sua habilidade de criar atmosferas de tensão e suspense. Criou o icônico personagem do Inspetor Wexford, que protagoniza muitos de seus romances.",
    link: "https://pt.wikipedia.org/wiki/Ruth_Rendell"
  },
  {
    nome: "Val McDermid",
    tags: "suspense psicológico psicopatia criminalística feminismo Escócia Tony Hill",
    nascimento: 1955,
    falecimento: "-",
    nacionalidade: "Escocesa",
    obras_destaque: ["O Fio de Sangue", "Um Lugar de Execução", "O Canto das Sereias"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance policial",
    descricao: "Escritora escocesa, conhecida por seus thrillers psicológicos que exploram a mente de criminosos e os métodos da investigação criminal. Seus romances, muitas vezes com um viés feminista, apresentam personagens complexos e enredos envolventes, com destaque para a parceria entre a psicóloga forense Dr. Tony Hill e a detetive Carol Jordan. McDermid é reconhecida por sua pesquisa detalhada sobre a mente criminosa e por sua capacidade de criar atmosferas de suspense e tensão.",
    link: "https://pt.wikipedia.org/wiki/Val_McDermid"
  },
  // Brasil
  {
    nome: "Rubem Fonseca",
    tags: "policial noir violência realismo sujo corrupção",
    nascimento: 1925,
    falecimento: 2019,
    nacionalidade: "Brasileira",
    obras_destaque: ["Agosto", "Feliz Ano Novo", "A Grande Arte"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance policial",
    descricao: "Conhecido por seus contos e romances policiais com um toque de realismo sujo, Rubem Fonseca é um dos maiores nomes da literatura brasileira.",
    link: "https://pt.wikipedia.org/wiki/Rubem_Fonseca"
  },
  {
    nome: "Luiz Alfredo Garcia-Roza",
    tags: "policial brasileiro psicanálise Rio de Janeiro Brasil Espinosa intriga social",
    nascimento: 1936,
    falecimento: 2020,
    nacionalidade: "Brasileira",
    obras_destaque: ["O Silêncio da Chuva", "Achados e Perdidos", "Berenice Procura"],
    epoca: "Século XX-XXI",
    genero_principal: "Romance policial",
    descricao: "Escritor e psicanalista brasileiro, conhecido por seus romances policiais que exploram a psicologia dos personagens e os mistérios da cidade do Rio de Janeiro. Seus livros, frequentemente protagonizados pelo investigador Espinosa, combinam elementos da investigação policial com reflexões sobre a condição humana. Garcia-Roza é reconhecido por sua prosa elegante e por sua capacidade de criar atmosferas densas e intrigantes.",
    link: "https://pt.wikipedia.org/wiki/Luiz_Alfredo_Garcia-Roza"
  },
  {
    nome: "Raphael Montes",
    tags: "suspense terror jovem adulto contemporâneo psicológico Brasil brasileiro",
    nascimento: 1990,
    falecimento: "-",
    nacionalidade: "Brasileira",
    obras_destaque: ["Suicidas", "Dias Perfeitos", "Bom Dia, Verônica"],
    epoca: "Século XXI",
    genero_principal: "Thriller psicológico",
    descricao: "Escritor brasileiro, conhecido por seus thrillers psicológicos que exploram temas como crime, violência e obsessão. Seus romances, muitas vezes com um tom sombrio e perturbador, conquistaram um público jovem e adulto. Montes é reconhecido por sua narrativa ágil e por sua capacidade de criar personagens complexos e situações extremas.",
    link: "https://pt.wikipedia.org/wiki/Raphael_Montes"
  },
  {
    nome: "Cláudia Lemes",
    tags: "suspense terror brasileira feminismo serial killer dark-fiction Claudia",
    nascimento: 1979,
      falecimento: "-",
    nacionalidade: "Brasileira",
    obras_destaque: ["Medeia Morta", "Eu vejo Kate", "Quando os Mortos Falam"],
    epoca: "Século XXI",
    genero_principal: "Romance policial",
    descricao: "Escritora brasileira, conhecida por seus thrillers psicológicos que exploram temas como violência, serial killers e o lado sombrio da mente humana. Seus romances, muitas vezes com um tom dark, abordam questões como feminismo e a condição da mulher na sociedade contemporânea. Cláudia Lemes é reconhecida por sua narrativa intensa e por sua capacidade de criar atmosferas de suspense e terror.",
    link: "https://www.claudialemes.com.br/sobre-cl%C3%A1udia-lemes"
  },
  // Noruega
  {
    nome: "Jo Nesbø",
    tags: "thriller psicológico noir escandinavo complexo Harry Hole",
    nascimento: 1960,
    nacionalidade: "Norueguesa",
    obras_destaque: ["Baratas", "O Morcego", "O Homem de Neve", "O Leopardo"],
    epoca: "Século XX/XXI",
    genero_principal: "Romance policial",
    descricao: "Escritor norueguês, famoso por seus thrillers psicológicos e pela série de romances protagonizada pelo detetive Harry Hole. Nesbø é conhecido por suas tramas complexas, personagens obscuros e paisagens sombrias da Noruega. Seus livros exploram temas como vício, identidade e a escuridão da natureza humana.",
    link: "https://pt.wikipedia.org/wiki/Jo_Nesbø"
  }
];


function pesquisarEscritor() {
  let secaoResultados = document.getElementById("resultados-pesquisa");
  // ... (resto do código permanece igual)
  
  // Alterar a construção do HTML:
  resultados += `
    <div class="resultados__item">
      <h2 class="resultados__item-titulo">
        <a href="${escritor.link}" class="resultados__item-link" target="_blank">${escritor.nome}</a>
      </h2>
      <p class="resultados__item-descricao">
        ${escritor.descricao}
      </p>
      <a href=${escritor.link} class="resultados__item-link" target="_blank" rel="noopener">Saiba Mais</a>
    </div>
  `;
}
