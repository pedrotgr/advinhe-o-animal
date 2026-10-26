
const audio = document.querySelector("#animalAudio");

const playBtn = document.querySelector("#playBtn");
const revealBtn = document.querySelector("#revealBtn");
const hideBtn = document.querySelector("#hideBtn");

const answer = document.querySelector("#answer");
const status = document.querySelector("#status");

// O áudio já está no HTML, então o botão fica disponível.
playBtn.disabled = false;

// Tocar o som da vaca
playBtn.addEventListener("click", async () => {
    try {
        audio.currentTime = 0;
        await audio.play();

        status.textContent =
            "Escute com atenção e tente adivinhar o animal!";
    } catch (error) {
        status.textContent =
            "Não foi possível reproduzir o som. Confira o arquivo MP3.";
    }
});

// Revelar a resposta
revealBtn.addEventListener("click", () => {
    answer.classList.add("visible");
    answer.setAttribute("aria-hidden", "false");

    status.textContent = "Resposta revelada!";
});

// Esconder a resposta
hideBtn.addEventListener("click", () => {
    answer.classList.remove("visible");
    answer.setAttribute("aria-hidden", "true");

    status.textContent =
        "Resposta escondida. Tente adivinhar novamente!";
});
