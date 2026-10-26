
const audio = document.querySelector("#animalAudio");
const playBtn = document.querySelector("#playBtn");
const revealBtn = document.querySelector("#revealBtn");
const hideBtn = document.querySelector("#hideBtn");
const answer = document.querySelector("#answer");
const status = document.querySelector("#status");

playBtn.disabled = false;

playBtn.addEventListener("click", async () => {
    try {
        audio.currentTime = 0;
        await audio.play();
        status.textContent = "Escute e tente adivinhar o animal!";
    } catch (error) {
        status.textContent = "Erro ao tocar o áudio. Confira o arquivo vaca.mp3.";
    }
});

revealBtn.addEventListener("click", () => {
    answer.classList.add("visible");
    answer.setAttribute("aria-hidden", "false");
    status.textContent = "Resposta revelada!";
});

hideBtn.addEventListener("click", () => {
    answer.classList.remove("visible");
    answer.setAttribute("aria-hidden", "true");
    status.textContent = "Resposta escondida. Tente novamente!";
});
