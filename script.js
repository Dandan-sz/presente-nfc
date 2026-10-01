```javascript
/* =========================================================
   CONFIGURAÇÃO DO PRESENTE
   =========================================================

   ALTERE SOMENTE ESTA PARTE PARA CRIAR
   UM NOVO PRESENTE.

========================================================= */

const CONFIG = {

    /* -------------------------
       INFORMAÇÕES PRINCIPAIS
    -------------------------- */

    nomePessoa: "Meu amor",

    titulo: "Nossa história",

    mensagemInicial:
        "Algumas pessoas entram na nossa vida e fazem tudo ficar mais bonito.",


    /* -------------------------
       CARTA
    -------------------------- */

    tituloCarta:
        "Uma carta para você",

    carta: `
        "Se eu pudesse guardar alguns momentos para sempre, escolheria todos aqueles que vivi ao seu lado.",
        "",
        "Obrigado por cada sorriso, cada abraço, cada conversa e cada pequeno momento que fez nossa história ser tão especial.",
        "",
        "Talvez essas palavras nunca sejam suficientes para explicar o quanto você significa para mim.",
        "",
        "Mas existe uma coisa que eu quero que você nunca esqueça:",
        "",
        "Eu escolheria você novamente.",
        "Todos os dias."
    ].join("\n"),
    `,

    assinatura:
        "Com todo meu amor ❤️",


    /* -------------------------
       VÍDEO DO YOUTUBE
    --------------------------

       Coloque somente o ID do vídeo.

       Exemplo:

       URL normal:
       https://www.youtube.com/watch?v=ABC123XYZ

       ID:
       ABC123XYZ

    -------------------------- */

    youtubeVideoId:
        "dQw4w9WgXcQ",


    /* -------------------------
       FOTOS
    --------------------------

       Você pode usar:

       1. Fotos dentro do GitHub:

       "fotos/foto1.jpg"

       ou

       2. Fotos hospedadas na internet:

       "https://site.com/foto.jpg"

    -------------------------- */

    fotos: [

        {
            url: "fotos/foto1.jpg",
            alt: "Nosso primeiro momento"
        },

        {
            url: "fotos/foto2.jpg",
            alt: "Uma lembrança especial"
        },

        {
            url: "fotos/foto3.jpg",
            alt: "Mais um momento nosso"
        },

        {
            url: "fotos/foto4.jpg",
            alt: "Uma memória inesquecível"
        }

    ],


    /* -------------------------
       CONTADOR
    --------------------------

       Formato:

       ANO-MÊS-DIA

       Exemplo:

       2024-06-15

    -------------------------- */

    dataInicio:
        "2024-06-15",


    /* -------------------------
       TEXTO FINAL
    -------------------------- */

    tituloFinal:
        "Ainda temos muito para viver.",

    mensagemFinal:
        "Obrigado por fazer parte da minha história.",

    assinaturaFinal:
        "Para sempre ❤️",


    /* -------------------------
       MÚSICA

       IMPORTANTE:

       Para o GitHub funcionar corretamente,
       coloque o arquivo dentro da pasta:

       musica/

       Exemplo:

       musica/nossa-musica.mp3

    -------------------------- */

    musica:
        "musica/nossa-musica.mp3"

};


/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

const openingScreen =
    document.getElementById("opening-screen");

const openButton =
    document.getElementById("open-button");

const mainContent =
    document.getElementById("main-content");

const music =
    document.getElementById("background-music");

const musicButton =
    document.getElementById("music-button");

const musicIcon =
    document.getElementById("music-icon");


/* =========================================================
   PREENCHER INFORMAÇÕES
========================================================= */

function carregarConfiguracao() {

    /*
     * Título da tela inicial
     */

    document.getElementById("opening-title")
        .textContent =
        CONFIG.nomePessoa;


    /*
     * Hero
     */

    document.getElementById("hero-title")
        .textContent =
        CONFIG.titulo;

    document.getElementById("hero-message")
        .textContent =
        CONFIG.mensagemInicial;


    /*
     * Carta
     */

    document.getElementById("letter-title")
        .textContent =
        CONFIG.tituloCarta;

    document.getElementById("letter-text")
        .textContent =
        CONFIG.carta.trim();

    document.getElementById("signature")
        .textContent =
        CONFIG.assinatura;


    /*
     * Vídeo
     */

    if (CONFIG.youtubeVideoId) {

        const video =
            document.getElementById("youtube-video");

       video.src =
    "https://www.youtube.com/embed/" +
    CONFIG.youtubeVideoId +
    "?rel=0";
    }


    /*
     * Texto final
     */

    document.getElementById("final-title")
        .textContent =
        CONFIG.tituloFinal;

    document.getElementById("final-message")
        .textContent =
        CONFIG.mensagemFinal;

    document.getElementById("final-signature")
        .textContent =
        CONFIG.assinaturaFinal;


    /*
     * Música
     */

    if (CONFIG.musica) {

        music.src =
            CONFIG.musica;

    }


    /*
     * Galeria
     */

    carregarGaleria();

}


/* =========================================================
   GALERIA
========================================================= */

function carregarGaleria() {

    const gallery =
        document.getElementById("gallery");

    gallery.innerHTML = "";


    CONFIG.fotos.forEach(
        (foto, index) => {

            const item =
                document.createElement("div");

            item.className =
                "gallery-item";


            const image =
                document.createElement("img");

            image.src =
                foto.url;

            image.alt =
                foto.alt || `Foto ${index + 1}`;

            image.loading =
                index === 0
                    ? "eager"
                    : "lazy";


            /*
             * Caso a imagem não exista,
             * mostramos um espaço neutro.
             */

            image.onerror =
                function () {

                    item.style.display =
                        "none";

                };


            item.appendChild(image);

            gallery.appendChild(item);

        }
    );

}


/* =========================================================
   ABRIR A SURPRESA
========================================================= */

console.log("Botão encontrado:", openButton);

openButton.addEventListener(
    "click",
    function () {

        openingScreen.classList.add(
            "closed"
        );

        mainContent.classList.remove(
            "hidden"
        );


        /*
         * Tenta iniciar a música.
         *
         * Como o usuário acabou de clicar,
         * o navegador normalmente permite
         * o autoplay neste momento.
         */

        iniciarMusica();


        /*
         * Cria alguns corações
         */

        for (let i = 0; i < 8; i++) {

            setTimeout(
                criarCoracao,
                i * 250
            );

        }

    }
);


/* =========================================================
   MÚSICA
========================================================= */

let musicaTocando = false;


async function iniciarMusica() {

    if (!CONFIG.musica) {
        return;
    }

    try {

        await music.play();

        musicaTocando = true;

        atualizarBotaoMusica();

    } catch (error) {

        /*
         * Alguns navegadores podem bloquear
         * a reprodução automática.

         * Nesse caso, o usuário pode apertar
         * o botão de música.
         */

        musicaTocando = false;

        atualizarBotaoMusica();

    }

}


musicButton.addEventListener(
    "click",
    function () {

        if (!CONFIG.musica) {

            alert(
                "Nenhuma música foi configurada."
            );

            return;
        }


        if (musicaTocando) {

            music.pause();

            musicaTocando = false;

        } else {

            music.play()
                .then(
                    function () {

                        musicaTocando =
                            true;

                        atualizarBotaoMusica();

                    }
                )
                .catch(
                    function () {

                        alert(
                            "Não foi possível iniciar a música."
                        );

                    }
                );

        }


        atualizarBotaoMusica();

    }
);


function atualizarBotaoMusica() {

    if (musicaTocando) {

        musicIcon.textContent =
            "♫";

        musicButton.classList.add(
            "playing"
        );

    } else {

        musicIcon.textContent =
            "♪";

        musicButton.classList.remove(
            "playing"
        );

    }

}


/* =========================================================
   CONTADOR
========================================================= */

function atualizarContador() {

    const inicio =
        new Date(
            CONFIG.dataInicio + "T00:00:00"
        );

    const agora =
        new Date();


    if (
        isNaN(inicio.getTime()) ||
        inicio > agora
    ) {

        return;

    }


    /*
     * Calcula anos completos.
     */

    let anos =
        agora.getFullYear() -
        inicio.getFullYear();


    let aniversario =
        new Date(
            agora.getFullYear(),
            inicio.getMonth(),
            inicio.getDate()
        );


    if (aniversario > agora) {

        anos--;

    }


    /*
     * Data depois dos anos completos.
     */

    const depoisDosAnos =
        new Date(
            inicio.getTime()
        );

    depoisDosAnos.setFullYear(
        inicio.getFullYear() + anos
    );


    /*
     * Calcula meses.
     */

    let meses =
        agora.getMonth() -
        depoisDosAnos.getMonth();

    let anoTemporario =
        agora.getFullYear();


    if (meses < 0) {

        meses += 12;

        anoTemporario--;

    }


    /*
     * Data depois de anos + meses.
     */

    const depoisDosMeses =
        new Date(
            depoisDosAnos
        );

    depoisDosMeses.setMonth(
        depoisDosMeses.getMonth() + meses
    );


    if (depoisDosMeses > agora) {

        meses--;

        depoisDosMeses.setMonth(
            depoisDosMeses.getMonth() - 1
        );

    }


    /*
     * Diferença em dias.
     */

    const diferenca =
        agora -
        depoisDosMeses;


    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (
                diferenca %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    /*
     * Atualiza a página.
     */

    document.getElementById("years")
        .textContent =
        anos;

    document.getElementById("months")
        .textContent =
        meses;

    document.getElementById("days")
        .textContent =
        dias;

    document.getElementById("hours")
        .textContent =
        horas;

}


/*
 * Atualiza imediatamente.
 */

atualizarContador();


/*
 * Atualiza a cada minuto.
 */

setInterval(
    atualizarContador,
    60000
);


/* =========================================================
   CORAÇÕES FLUTUANTES
========================================================= */

function criarCoracao() {

    const container =
        document.getElementById(
            "hearts-container"
        );

    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > 0.5
            ? "♥"
            : "♡";


    /*
     * Posição horizontal aleatória.
     */

    heart.style.left =
        Math.random() * 100 + "%";


    /*
     * Tamanho aleatório.
     */

    heart.style.fontSize =
        (10 + Math.random() * 18) + "px";


    /*
     * Duração aleatória.
     */

    const duration =
        7 + Math.random() * 8;

    heart.style.animationDuration =
        duration + "s";


    container.appendChild(
        heart
    );


    /*
     * Remove depois da animação.
     */

    setTimeout(
        function () {

            heart.remove();

        },
        duration * 1000
    );

}


/*
 * Cria corações periodicamente.
 */

setInterval(
    function () {

        criarCoracao();

    },
    1800
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

carregarConfiguracao();
```
