// ============================================================
// CONFIGURAÇÃO DA PÁGINA PELE 40+ — edite só este arquivo
// ============================================================
window.PAGINA = {
  // Links de checkout (cole aqui os links da sua plataforma)
  checkoutCompleto: "#",
  checkoutBasico: "#",

  // Parcelamento exibido no Plano Completo
  parcelas: 12,

  // Depoimentos REAIS de clientes (o bloco fica escondido enquanto esta lista estiver vazia).
  // "foto" é opcional: suba a imagem em /img e coloque o nome, ex: "img/dep-maria.webp".
  // Exemplo de formato:
  // { texto: "O que a cliente escreveu", nome: "Maria S.", detalhe: "48 anos, professora", foto: "" },
  depoimentos: [
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
