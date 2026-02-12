// Get Elements
const intro = document.getElementById("intro");
const proposal = document.getElementById("proposal");
const celebration = document.getElementById("celebration");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const music = document.getElementById("music");
const typedText = document.getElementById("typedText");


// Start Surprise (Intro → Proposal)
function startSurprise() {
    intro.classList.add("hidden");
    proposal.classList.remove("hidden");
}


// NO button movement (Mobile Safe)
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


// YES Button Click
yesBtn.addEventListener("click", () => {

    proposal.classList.add("hidden");
    celebration.classList.remove("hidden");

    // Play music
    music.play().catch(err => {
        console.log("Autoplay blocked until user interaction.");
    });

    startTyping();
    startHearts();
});


// Typing Love Message
function startTyping() {

    const message = "My Love ❤️ You are my forever and always 💖";

    let i = 0;

    function type() {
        if (i < message.length) {
            typedText.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }

    type();
}


// Floating Hearts (Lightweight)
function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "floatUp 4s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);

    }, 700);
}
function gotomyletter() {
    window.location.href = "letter.html";
}

