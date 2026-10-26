
const animais = {
    gato: {
        nome: "um gato 🐱",
        arquivo: "gato.mp3",
        som: "Miau!"
    },
    cavalo: {
        nome: "um cavalo 🐴",
        arquivo: "cavalo.mp3",
        som: "Relincho!"
    },
    vaca: {
        nome: "uma vaca 🐄",
        arquivo: "vaca.mp3",
        som: "Muuuu!"
    },
    galo: {
        nome: "um galo 🐓",
        arquivo: "galo.mp3",
        som: "Cocoricó!"
    },
    elefante: {
        nome: "um elefante 🐘",
        arquivo: "elefante.mp3",
        som: "Som do elefante!"
    },
    porco: {
        nome: "um porco 🐷",
        arquivo: "porco.mp3",
        som: "Oinc oinc!"
    },
    leao: {
        nome: "um leão 🦁",
        arquivo: "leao.mp3",
        som: "Rugido!"
    },
    pato: {
        nome: "um pato 🦆",
        arquivo: "pato.mp3",
        som: "Quack quack!"
    },
    pintinho: {
        nome: "um pintinho 🐥",
        arquivo: "pintinho.mp3",
        som: "Piu piu!"
    },
    cachorro: {
        nome: "um cachorro 🐶",
        arquivo: "cachorro.mp3",
        som: "Au au!"
    },
    cabra: {
        nome: "uma cabra 🐐",
        arquivo: "cabra.mp3",
        som: "Mééé!"
    }
};

// Identifica o animal pela URL
const parametros = new URLSearchParams(window.location.search);
const idAnimal = parametros.get("animal") || "vaca";
const animal = animais[idAnimal] || animais.vaca;

// Seleciona o áudio da página
const audio = document.querySelector("#animalAudio");

if (audio) {
    audio.src = animal.arquivo;
    audio.load();
}
