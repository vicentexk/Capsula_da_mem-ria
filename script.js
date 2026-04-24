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
}

function fechar() {
  document.getElementById("overlay").style.display = "none";
}

/* música automática */
window.onload = () => {
  let musica = document.getElementById("musicaSite");
  musica.volume = 0.15;
  musica.play().catch(() => {});
};

/* corações */
function criarCoracao() {
  const c = document.createElement("div");
  c.innerHTML = ["💛","💖","✨"][Math.floor(Math.random()*3)];
  c.style.position = "fixed";
  c.style.top = "-20px";
  c.style.left = Math.random()*window.innerWidth+"px";
  c.style.animation = "cair 4s linear";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),4000);
}
setInterval(criarCoracao,300);