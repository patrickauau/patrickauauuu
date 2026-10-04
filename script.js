// ===== CONFIGURAÇÃO =====
const TOTAL_FOTOS = 60;               // fotos foto1.jpeg até foto59.jpeg
const EXTENSAO = "jpeg";              // "jpeg" ou "jpg"
const POSICAO_FOTO01 = "center 70%";  // enquadramento da foto01 no quadro central

// ===== LEGENDAS =====
// Edite as legendas aqui. O número é a POSIÇÃO na galeria:
// 1 = foto01.jpeg (a primeira), 2 = foto1.jpeg, 3 = foto2.jpeg ... 60 = foto59.jpeg
const legendasPadrao = {
  1: "Primeiro de muitas memórias 💕",
  2: "Aquele dia especial 😍",
  3: "Você e eu, sempre 💑",
  4: "Momentos de felicidade 💖",
  5: "Com caretas 💞",
  6: "E lingua pra fora com cara séria 💝",
  7: "E com cara neutra 💗",
  8: "Com filtros 💘",
  9: "Esperando pastel 💌",
  10: "Entre sorrisos e beijos 🥰",
  11: "Com cara de bobo pelo nosso dia 💓",
  12: "08/08/2026, que dia especial ❣️",
  13: "Dia que poderia não ter fim 🌹",
  14: "Mas na verdade...🤍",
  15: "O que não pode ter fim é nosso amor ❤️",
  16: "Em ti eu descanso ❤️‍🩹",
  17: "Nosso passeio na lagoa quando enfim namorados 💟",
  18: "O sol tava forte ♥️",
  19: "Mas mesmo assim faziamos o que sabemos de melhor: Caretas! 💜",
  20: "O teu brilho que me encanta 🫶",
  21: "A gente sorri quando estamos juntos ❤️‍🔥",
  22: "E também rimos pra valer 🩷",
  23: "Eu te amo meu amor, me faz feliz 👩‍❤️‍👨",
  24: "Me faz bem 🫰",
  25: "E quero conhecer o mundo contigo 💐",
  26: "Assim como já viajamos pro minecraft 💛",
  27: "E ficamos lá até a barba crescer 😂💙",
  28: "Eu te admiro muito 🤟",
  29: "É o meu desejo de cada dia 💕",
  30: "Ter o prazer de te ter na minha vida é inexplicável ♥️",
  31: "Eu amo seu sorriso 🥰",
  32: "Seus cabelos 💖",
  33: "Seus olhos 💝",
  34: "Suas delicadas mãos 💓",
  35: "Que eu tive o prazer de por uma aliança ❣️",
  36: "No dia 19/09/2026 ❤️",
  37: "Data que ficará marcada pra sempre em meu coração 💜",
  38: "Assim como alguém também fica e ficará ❤️‍🔥",
  39: "Você meu amor 💘",
  40: "Te quero para sempre em minha vida 💌",
  41: "Esse dia foi um dia difícil, mas ainda assim acabamos desse jeito 💐",
  42: "E novamente nos beijamos 💞",
  43: "E essa é a minha foto favorita, sabia? 🫶",
  44: "E assim quando a gente ia ver série 🩷",
  45: "Nesse dia fui passar a tarde na sua vó 👩‍❤️‍👨",
  46: "Foi muito legal esse dia 💗",
  47: "E esse no aniversário da sua tia 🌹",
  48: "Esse foi outro dia dificil, mas nele você até me trouxe bolo 💘",
  49: "Aqui completamos 1 mês de namoro, foi muito divertido o dia 💛",
  50: "As fotos ficaram muito legais 😍",
  51: "Essa foi a formatura da minha prima, eu gostei muito de cada momento 💙",
  52: "Mas eu infelizmente tava capenga de sono 😴💐",
  53: "Foi legal dançar contigo e pegar salgadinho 🫶",
  54: "Aqui foi pra exibir a aliança 💌",
  55: "E a clássica foto da linguinha logo após a aliança ser mostrada ❣️",
  56: "Foi muito divertido poder tirar essas fotos, as caretas vinham a todo momento 💞",
  57: "Olha esse beijo que fofo que foi 💘",
  58: "E dale linguinha pra fora 💗",
  59: "Eu todos os dias me apaixono cada vez mais por ti 💐",
  60: "Eu te amo meu amor, e amei muito a sensação desse dia que te trouxe aqui em casa 🫶",
  
};

// Galeria: foto1.jpeg até foto59.jpeg
const fotos = Array.from({ length: TOTAL_FOTOS }, (_, i) =>
  `fotos/foto${i + 1}.${EXTENSAO}`
);

let fotoAtual = 0;

// ===== ELEMENTOS =====
const btnIniciar   = document.getElementById("btn-iniciar");
const telaInicio   = document.getElementById("tela-inicio");
const telaGaleria  = document.getElementById("tela-galeria");
const fotoAtualEl  = document.getElementById("foto-atual");
const miniAnterior = document.getElementById("mini-anterior");
const miniProximo  = document.getElementById("mini-proximo");
const legendaFoto  = document.getElementById("legenda-foto");
const btnAnterior  = document.getElementById("btn-anterior");
const btnProximo   = document.getElementById("btn-proximo");
const contador     = document.getElementById("contador");
const modal        = document.getElementById("modal");
const modalImagem  = document.getElementById("modal-imagem");
const modalLegenda = document.getElementById("modal-legenda");
const btnFechar    = document.getElementById("btn-fechar");

// ===== FUNÇÕES =====
function legendaDaFoto(indice) {
  const numero = indice + 1;
  return legendasPadrao[numero] || `Nossa memória número ${numero} 💖`;
}

function indiceAnterior(i) {
  return (i - 1 + fotos.length) % fotos.length;
}

function indiceProximo(i) {
  return (i + 1) % fotos.length;
}

function mostrarFoto() {
  fotoAtualEl.src = fotos[fotoAtual];

  // Só a primeira foto (foto1.jpeg) usa enquadramento especial
  if (fotoAtual === 0) {
    fotoAtualEl.style.objectPosition = POSICAO_FOTO01;
  } else {
    fotoAtualEl.style.objectPosition = "center";
  }

  legendaFoto.textContent = legendaDaFoto(fotoAtual);
  contador.textContent = `${fotoAtual + 1} / ${fotos.length}`;
  miniAnterior.src = fotos[indiceAnterior(fotoAtual)];
  miniProximo.src = fotos[indiceProximo(fotoAtual)];
}

function proximaFoto() {
  fotoAtual = indiceProximo(fotoAtual);
  mostrarFoto();
}

function fotoAnterior() {
  fotoAtual = indiceAnterior(fotoAtual);
  mostrarFoto();
}

function abrirModal() {
  modalImagem.src = fotos[fotoAtual];
  modalLegenda.textContent = legendaDaFoto(fotoAtual);
  modal.classList.add("aberto");
}

function fecharModal() {
  modal.classList.remove("aberto");
}

// ===== TRANSIÇÕES ENTRE TELAS =====
const TEMPO_TRANSICAO = 450;

function irParaGaleria() {
  telaInicio.classList.add("saindo");
  setTimeout(() => {
    telaInicio.classList.remove("ativa", "saindo");
    telaGaleria.classList.add("ativa", "entrando");
    mostrarFoto();
    setTimeout(() => telaGaleria.classList.remove("entrando"), TEMPO_TRANSICAO + 50);
  }, TEMPO_TRANSICAO);
}

function voltarParaInicio() {
  telaGaleria.classList.add("saindo");
  setTimeout(() => {
    telaGaleria.classList.remove("ativa", "saindo");
    telaInicio.classList.add("ativa", "entrando");
    setTimeout(() => telaInicio.classList.remove("entrando"), TEMPO_TRANSICAO + 50);
  }, TEMPO_TRANSICAO);
}

// ===== CHUVA DE CORAÇÕES =====
const chuva = document.getElementById("chuva-coracoes");
if (chuva) {
  for (let i = 0; i < 24; i++) {
    const c = document.createElement("span");
    c.className = "coracao-chuva";
    c.textContent = "❤";
    c.style.left = Math.random() * 100 + "vw";
    c.style.fontSize = 12 + Math.random() * 22 + "px";
    c.style.animationDuration = 6 + Math.random() * 9 + "s";
    c.style.animationDelay = Math.random() * 10 + "s";
    c.style.opacity = 0.25 + Math.random() * 0.45;
    chuva.appendChild(c);
  }
}

// ===== EVENTOS =====
btnIniciar.addEventListener("click", irParaGaleria);
btnProximo.addEventListener("click", proximaFoto);
btnAnterior.addEventListener("click", fotoAnterior);
miniAnterior.addEventListener("click", fotoAnterior);
miniProximo.addEventListener("click", proximaFoto);
fotoAtualEl.addEventListener("click", abrirModal);
btnFechar.addEventListener("click", fecharModal);

const btnVoltar = document.getElementById("btn-voltar");
btnVoltar.addEventListener("click", voltarParaInicio);

modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") proximaFoto();
  if (e.key === "ArrowLeft") fotoAnterior();
  if (e.key === "Escape") fecharModal();
});