```javascript
/* =========================================================
   CONFIGURAÇÃO DO PRESENTE
========================================================= */

const CONFIG = {

    nomePessoa: "Meu amor",

    titulo: "Nossa história",

    mensagemInicial:
        "Algumas pessoas entram na nossa vida e fazem tudo ficar mais bonito.",

    tituloCarta:
        "Uma carta para você",

    carta:
        "Se eu pudesse guardar alguns momentos para sempre, escolheria todos aqueles que vivi ao seu lado.\n\n" +
        "Obrigado por cada sorriso, cada abraço, cada conversa e cada pequeno momento que fez nossa história ser tão especial.\n\n" +
        "Talvez essas palavras nunca sejam suficientes para explicar o quanto você significa para mim.\n\n" +
        "Mas existe uma coisa que eu quero que você nunca esqueça:\n\n" +
        "Eu escolheria você novamente.\n" +
        "Todos os dias.",

    assinatura:
        "Com todo meu amor ❤️",

    youtubeVideoId:
        "dQw4w9WgXcQ",

    /* FOTOS */
    foto1:
        "fotos/fotoa1.jfif",

    foto2:
        "fotos/fotoa2.jfif",

    foto3:
        "fotos/fotoa3.jfif",

    foto4:
        "fotos/fotoa4.jfif",

    /* DATA DO RELACIONAMENTO */
    dataInicio:
        "2024-06-15",

    tituloFinal:
        "Ainda temos muito para viver.",

    mensagemFinal:
        "Obrigado por fazer parte da minha história.",

    assinaturaFinal:
        "Para sempre ❤️",

    /* MÚSICA */
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
   CONFIGURAÇÃO DO TEXTO
========================================================= */

function carregarConfiguracao() {

    document.getElementById("opening-title").textContent =
        CONFIG.nomePessoa;

    document.getElementById("hero-title").textContent =
        CONFIG.titulo;

    document.getElementById("hero-message").textContent =
        CONFIG.mensagemInicial;

    document.getElementById("letter-title").textContent =
        CONFIG.tituloCarta;

    document.getElementById("letter-text").textContent =
        CONFIG.carta.trim();

    document.getElementById("signature").textContent =
        CONFIG.assinatura;


    /* =====================================================
       VÍDEO
    ===================================================== */

    if (CONFIG.youtubeVideoId) {

        const video =
            document.getElementById("youtube-video");

        video.src =
            "https://www.youtube.com/embed/" +
            CONFIG.youtubeVideoId +
            "?rel=0";
    }


    /* =====================================================
       TEXTO FINAL
    ===================================================== */

    document.getElementById("final-title").textContent =
        CONFIG.tituloFinal;

    document.getElementById("final-message").textContent =
        CONFIG.mensagemFinal;

    document.getElementById("final-signature").textContent =
        CONFIG.assinaturaFinal;


    /* =====================================================
       MÚSICA
    ===================================================== */

    if (CONFIG.musica) {

        music.src =
            CONFIG.musica;
    }


    /* =====================================================
       FOTOS
    ===================================================== */

    carregarFoto(
        CONFIG.foto1,
        "Nosso primeiro momento",
        1
    );

    carregarFoto(
        CONFIG.foto2,
        "Uma lembrança especial",
        2
    );

    carregarFoto(
        CONFIG.foto3,
        "Mais um momento nosso",
        3
    );

    carregarFoto(
        CONFIG.foto4,
        "Uma memória inesquecível",
        4
    );
}


/* =========================================================
   CARREGAR FOTOS
========================================================= */

function carregarFoto(
    endereco,
    descricao,
    numero
) {

    const gallery =
        document.getElementById("gallery");

    const item =
        document.createElement("div");

    item.className =
        "gallery-item";


    const image =
        document.createElement("img");

    image.src =
        endereco;

    image.alt =
        descricao;

    image.loading =
        numero === 1
            ? "eager"
            : "lazy";


    image.onerror =
        function () {

            item.style.display =
                "none";
        };


    item.appendChild(image);

    gallery.appendChild(item);
}


/* =========================================================
   ABRIR A SURPRESA
========================================================= */

console.log(
    "Botão encontrado:",
    openButton
);


openButton.addEventListener(
    "click",
    function () {

        openingScreen.classList.add(
            "closed"
        );

        mainContent.classList.remove(
            "hidden"
        );

        iniciarMusica();


        let contadorCoracoes = 0;


        function criarCoracoesIniciais() {

            if (contadorCoracoes >= 8) {
                return;
            }

            criarCoracao();

            contadorCoracoes++;

            setTimeout(
                criarCoracoesIniciais,
                250
            );
        }


        criarCoracoesIniciais();

    }
);


/* =========================================================
   MÚSICA
========================================================= */

let musicaTocando = false;


function iniciarMusica() {

    if (!CONFIG.musica) {
        return;
    }


    music.play()
        .then(
            function () {

                musicaTocando = true;

                atualizarBotaoMusica();
            }
        )
        .catch(
            function () {

                musicaTocando = false;

                atualizarBotaoMusica();
            }
        );
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

            atualizarBotaoMusica();

            return;
        }


        music.play()
            .then(
                function () {

                    musicaTocando = true;

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
            CONFIG.dataInicio +
            "T00:00:00"
        );

    const agora =
        new Date();


    if (
        isNaN(inicio.getTime()) ||
        inicio > agora
    ) {

        return;
    }


    let anos =
        agora.getFullYear() -
        inicio.getFullYear();


    let aniversario =
        new Date(
            agora.getFullYear(),
            inicio.getMonth(),
```
