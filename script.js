const mensagens = {
  agora: `ESCREVE AQUI`,
  motivos: `ESCREVE AQUI`,
  rir: `ESCREVE AQUI`,
  momentos: `ESCREVE AQUI`,
  musica: `ESCREVE AQUI`,
  segredo: `ESCREVE AQUI`,
  noite: `ESCREVE AQUI`,
  pensando: `ESCREVE AQUI`,
  saudade: `ESCREVE AQUI`,
  triste: `ESCREVE AQUI`,
  brava: `ESCREVE AQUI`,
  abraco: `ESCREVE AQUI`,
  especial: `ESCREVE AQUI`,
  duvida: `ESCREVE AQUI`,
  dia24: `ESCREVE AQUI`,
  surpresa: `ESCREVE AQUI`
};

function mostrar(id) {
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("conteudo").innerHTML = mensagens[id];

  // toca música quando clicar
  document.getElementById("musicaFundo").play();
}

function fechar() {
  document.getElementById("overlay").style.display = "none";
}

/* CARROSSEL */
let fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
let index = 0;

function atualizarFoto() {
  document.getElementById("foto").src = fotos[index];
}

function proxima() {
  index = (index + 1) % fotos.length;
  atualizarFoto();
}

function anterior() {
  index = (index - 1 + fotos.length) % fotos.length;
  atualizarFoto();
}

/* CORAÇÕES */
function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.innerHTML = ["💛","💖","✨"][Math.floor(Math.random()*3)];
  coracao.style.position = "fixed";
  coracao.style.top = "-20px";
  coracao.style.left = Math.random() * window.innerWidth + "px";
  coracao.style.fontSize = (Math.random() * 10 + 15) + "px";
  coracao.style.animation = "cair 4s linear";

  document.body.appendChild(coracao);

  setTimeout(() => coracao.remove(), 4000);
}

setInterval(criarCoracao, 300);