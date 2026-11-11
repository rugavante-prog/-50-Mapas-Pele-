// ============================================================
// CONFIGURAÇÃO DA PÁGINA PELE 40+ — edite só este arquivo
// ============================================================
window.PAGINA = {
  // Links de checkout (cole aqui os links da sua plataforma)
  checkoutCompleto: "https://lastlink.com/p/C8B7636B1/checkout-payment/",
  checkoutBasico: "https://lastlink.com/p/C8A138BA9/checkout-payment/",

  // Parcelamento exibido no Plano Completo
  parcelas: 12,

  // Depoimentos REAIS de clientes (o bloco fica escondido enquanto esta lista estiver vazia).
  // "foto" é opcional: suba a imagem em /img e coloque o nome, ex: "img/dep-maria.webp".
  // Exemplo de formato:
  // { texto: "O que a cliente escreveu", nome: "Maria S.", detalhe: "48 anos, professora", foto: "" },
  depoimentos: [
    { texto: "Eu comprava vários cremes e nem sabia direito qual usar primeiro. Esses mapas me ajudaram muito! Agora tenho minha rotina da manhã e da noite organizada, sem aquela confusão de antes. Tudo explicado de um jeito muito fácil!", nome: "Márcia Oliveira", detalhe: "54 anos", foto: "" },
    { texto: "Depois dos 50 comecei a me preocupar mais com as manchas e as linhas do rosto, mas ficava perdida com tanta informação. Gostei demais dos mapas, principalmente das explicações sobre vitamina C, hidratante e protetor solar. Valeu muito a pena!", nome: "Rosângela Martins", detalhe: "62 anos", foto: "" },
    { texto: "O que mais gostei foi descobrir que não preciso comprar um monte de produtos caros para começar a cuidar da pele. As explicações são simples, com imagens e passo a passo. Finalmente consegui montar uma rotina que cabe no meu dia a dia!", nome: "Cláudia Ferreira", detalhe: "47 anos", foto: "" }
  ],

  // Carrosséis do bloco "Um mapa para cada etapa da sua pele".
  // Suba as imagens na pasta /img com estes nomes (ex: img/entenda-1.webp).
  // Enquanto a imagem não existir, aparece o espaço vazio.
  carrosseis: [
    { titulo: "Entenda sua Pele 40+", prefixo: "entenda", qtd: 2 },
    { titulo: "Rotina da Manhã",      prefixo: "manha",   qtd: 2 },
    { titulo: "Rotina da Noite",      prefixo: "noite",   qtd: 2 },
    { titulo: "Ativos Sem Mistério",  prefixo: "ativos",  qtd: 2 },
    { titulo: "Cada Incômodo, um Mapa", prefixo: "incomodo", qtd: 2 }
  ]
};
