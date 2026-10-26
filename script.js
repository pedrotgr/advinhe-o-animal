
const audio = document.querySelector('#animalAudio');
const playBtn = document.querySelector('#playBtn');
const revealBtn = document.querySelector('#revealBtn');
const hideBtn = document.querySelector('#hideBtn');
const answer = document.querySelector('#answer');
const status = document.querySelector('#status');
const answerName = document.querySelector('#answerName');
const answerSound = document.querySelector('#answerSound');
const cowArt = document.querySelector('.cow-art');

// Cada animal tem seu próprio arquivo de áudio.
const animais = {
  gato: {
    nome: 'um gato',
    emoji: '🐱',
    arquivo: 'gato.mp3',
    som: 'Miau! Você acertou?'
  },
  cavalo: {
    nome: 'um cavalo',
    emoji: '🐴',
    arquivo: 'cavalo.mp3',
    som: 'Relincho! Você acertou?'
  },
  vaca: {
    nome: 'uma vaca',
    emoji: '🐄',
    arquivo: 'vaca.mp3',
    som: 'Muuuuuu! Você acertou?'
  },
  galo: {
    nome: 'um galo',
    emoji: '🐓',
    arquivo: 'galo.mp3',
    som: 'Cocoricó! Você acertou?'
  },
  elefante: {
    nome: 'um elefante',
    emoji: '🐘',
    arquivo: 'elefante.mp3',
    som: 'Som do elefante! Você acertou?'
  },
  porco: {
    nome: 'um porco',
    emoji: '🐷',
    arquivo: 'porco.mp3',
    som: 'Oinc oinc! Você acertou?'
  },
  leao: {
    nome: 'um leão',
    emoji: '🦁',
    arquivo: 'leao.mp3',
    som: 'Rugido! Você acertou?'
  },
  pato: {
    nome: 'um pato',
    emoji: '🦆',
    arquivo: 'pato.mp3',
    som: 'Quack quack! Você acertou?'
  },
  pintinho: {
    nome: 'um pintinho',
    emoji: '🐥',
    arquivo: 'pintinho.mp3',
    som: 'Piu piu! Você acertou?'
  },
  cachorro: {
    nome: 'um cachorro',
    emoji: '🐶',
    arquivo: 'cachorro.mp3',
    som: 'Au au! Você acertou?'
  },
  cabra: {
    nome: 'uma cabra',
    emoji: '🐐',
    arquivo: 'cabra.mp3',
    som: 'Mééé! Você acertou?'
  }
};

// Lê o animal indicado na URL.
// Exemplo: ?animal=gato
const parametros = new URLSearchParams(window.location.search);
const idAnimal = (parametros.get('animal') || 'vaca').toLowerCase();
const animal = animais[idAnimal] || animais.vaca;

// Atualiza a resposta que será revelada.
answerName.textContent = `É ${animal.nome}! ${animal.emoji}`;
answerSound.textContent = animal.som;

// Mostra o desenho da vaca apenas no desafio da vaca.
cowArt.hidden = idAnimal !== 'vaca';

// Monta o endereço do áudio a partir da pasta do site.
// Assim, funciona também se o site estiver em uma subpasta.
const arquivoAudio = new URL(animal.arquivo, window.location.href);
arquivoAudio.searchParams.set('versao', '2');

// Atualiza o áudio antes de permitir a reprodução.
audio.pause();
audio.currentTime = 0;
audio.querySelector('source').src = arquivoAudio.href;
audio.load();

playBtn.disabled = true;

audio.addEventListener('canplay', () => {
  playBtn.disabled = false;
  status.textContent = 'Áudio pronto. Clique em “Tocar som” para começar.';
});

audio.addEventListener('error', () => {
  playBtn.disabled = true;
  status.textContent =
    `Não foi possível carregar ${animal.arquivo}. Confira o nome do arquivo no GitHub.`;
});

playBtn.addEventListener('click', async () => {
  try {
    if (audio.ended) {
      audio.currentTime = 0;
    }

    await audio.play();
    status.textContent = 'Som tocando! Tente adivinhar antes de revelar.';
  } catch (error) {
    status.textContent =
      `Não consegui tocar ${animal.arquivo}. Confira se o arquivo existe e tente novamente.`;
  }
});

audio.addEventListener('ended', () => {
  status.textContent = 'O som terminou. Já descobriu o animal?';
});

revealBtn.addEventListener('click', () => {
  answer.classList.add('visible');
  answer.setAttribute('aria-hidden', 'false');
  status.textContent = 'Resposta revelada!';
});

hideBtn.addEventListener('click', () => {
  answer.classList.remove('visible');
  answer.setAttribute('aria-hidden', 'true');
  status.textContent =
    'Resposta escondida novamente. Escute e tente adivinhar!';
});
