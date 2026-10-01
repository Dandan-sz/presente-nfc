const CONFIG = {
nomePessoa: "Meu amor",
titulo: "Nossa história",
mensagemInicial: "Algumas pessoas entram na nossa vida e fazem tudo ficar mais bonito.",
tituloCarta: "Uma carta para você",
carta: "Se eu pudesse guardar alguns momentos para sempre, escolheria todos aqueles que vivi ao seu lado.\n\nObrigado por cada sorriso, cada abraço, cada conversa e cada pequeno momento que fez nossa história ser tão especial.\n\nTalvez essas palavras nunca sejam suficientes para explicar o quanto você significa para mim.\n\nMas existe uma coisa que eu quero que você nunca esqueça:\n\nEu escolheria você novamente. Todos os dias.",
assinatura: "Com todo meu amor",
youtubeVideoId: "dQw4w9WgXcQ",
foto1: "fotos/fotoa1.jfif",
foto2: "fotos/fotoa2.jfif",
foto3: "fotos/fotoa3.jfif",
foto4: "fotos/fotoa4.jfif",
dataInicio: "2024-06-15",
tituloFinal: "Ainda temos muito para viver.",
mensagemFinal: "Obrigado por fazer parte da minha história.",
assinaturaFinal: "Para sempre",
musica: "musica/nossa-musica.mp3"
};

const openingScreen = document.getElementById("opening-screen");
const openButton = document.getElementById("open-button");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");
const musicIcon = document.getElementById("music-icon");

function carregarConfiguracao() {
document.getElementById("opening-title").textContent = CONFIG.nomePessoa;
document.getElementById("hero-title").textContent = CONFIG.titulo;
document.getElementById("hero-message").textContent = CONFIG.mensagemInicial;
document.getElementById("letter-title").textContent = CONFIG.tituloCarta;
document.getElementById("letter-text").textContent = CONFIG.carta;
document.getElementById("signature").textContent = CONFIG.assinatura;

"
if (CONFIG.youtubeVideoId) {
    const video = document.getElementById("youtube-video");
    video.src = "https://www.youtube.com/embed/" + CONFIG.youtubeVideoId + "?rel=0";
}

document.getElementById("final-title").textContent = CONFIG.tituloFinal;
document.getElementById("final-message").textContent = CONFIG.mensagemFinal;
document.getElementById("final-signature").textContent = CONFIG.assinaturaFinal;

if (CONFIG.musica) {
    music.src = CONFIG.musica;
}

carregarFoto(CONFIG.foto1, "Nosso primeiro momento");
carregarFoto(CONFIG.foto2, "Uma lembrança especial");
carregarFoto(CONFIG.foto3, "Mais um momento nosso");
carregarFoto(CONFIG.foto4, "Uma memória inesquecível");
"

}

function carregarFoto(endereco, descricao) {
const gallery = document.getElementById("gallery");
const item = document.createElement("div");

"
item.className = "gallery-item";

const image = document.createElement("img");

image.src = endereco;
image.alt = descricao;

image.onerror = function() {
    item.style.display = "none";
};

item.appendChild(image);
gallery.appendChild(item);
"

}

openButton.addEventListener("click", function() {
openingScreen.classList.add("closed");
mainContent.classList.remove("hidden");

"
iniciarMusica();

let contador = 0;

function coracoesIniciais() {
    if (contador >= 8) {
        return;
    }

    criarCoracao();
    contador++;

    setTimeout(coracoesIniciais, 250);
}

coracoesIniciais();
"

});

let musicaTocando = false;

function iniciarMusica() {
if (!CONFIG.musica) {
return;
}

"
music.play()
    .then(function() {
        musicaTocando = true;
        atualizarBotaoMusica();
    })
    .catch(function() {
        musicaTocando = false;
        atualizarBotaoMusica();
    });
"

}

musicButton.addEventListener("click", function() {
if (musicaTocando) {
music.pause();
musicaTocando = false;
atualizarBotaoMusica();
return;
}

"
music.play()
    .then(function() {
        musicaTocando = true;
        atualizarBotaoMusica();
    })
    .catch(function() {
        alert("Não foi possível iniciar a música.");
    });
"

});

function atualizarBotaoMusica() {
if (musicaTocando) {
musicIcon.textContent = "♫";
musicButton.classList.add("playing");
} else {
musicIcon.textContent = "♪";
musicButton.classList.remove("playing");
}
}

function atualizarContador() {
const inicio = new Date(CONFIG.dataInicio + "T00:00:00");
const agora = new Date();

```
if (isNaN(inicio.getTime())) {
    return;
}

let anos = agora.getFullYear() - inicio.getFullYear();

let aniversario = new Date(
    agora.getFullYear(),
    inicio.getMonth(),
    inicio.getDate()
);

if (aniversario > agora) {
    anos--;
}

const depoisDosAnos = new Date(inicio.getTime());

depoisDosAnos.setFullYear(
    inicio.getFullYear() + anos
);

let meses = agora.getMonth() - depoisDosAnos.getMonth();

if (meses < 0) {
    meses += 12;
}

const depoisDosMeses = new Date(depoisDosAnos);

depoisDosMeses.setMonth(
    depoisDosMeses.getMonth() + meses
);

if (depoisDosMeses > agora) {
    meses--;

    depoisDosMeses.setMonth(
        depoisDosMeses.getMonth() - 1
    );
}

const diferenca = agora - depoisDosMeses;

const dias = Math.floor(
    diferenca / (1000 * 60 * 60 * 24)
);

const horas = Math.floor(
    (
        diferenca % (1000 * 60 * 60 * 24)
    ) / (1000 * 60 * 60)
);

document.getElementById("years").textContent = anos;
document.getElementById("months").textContent = meses;
document.getElementById("days").textContent = dias;
document.getElementById("hours").textContent = horas;
"

}

atualizarContador();

setInterval(atualizarContador, 60000);

function criarCoracao() {
const container = document.getElementById("hearts-container");
const heart = document.createElement("span");

"
heart.className = "floating-heart";

heart.textContent =
    Math.random() > 0.5 ? "♥" : "♡";

heart.style.left =
    Math.random() * 100 + "%";

heart.style.fontSize =
    10 + Math.random() * 18 + "px";

const duration = 7 + Math.random() * 8;

heart.style.animationDuration =
    duration + "s";

container.appendChild(heart);

setTimeout(function() {
    heart.remove();
}, duration * 1000);
"

}

setInterval(function() {
criarCoracao();
}, 1800);

carregarConfiguracao();
