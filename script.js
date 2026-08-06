const envelope = document.getElementById("envelope");
const container = document.getElementById("container");
const continueBtn = document.getElementById("continueBtn");

const inviteCard = document.getElementById("inviteCard");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const yesScreen = document.getElementById("yesScreen");
const noScreen = document.getElementById("noScreen");

let opened = false;

const YOUR_NUMBER = "60107603493"; // ← replace with your real number, country code first, no + or leading 0

function notifyWhatsApp(answer){
    const message = encodeURIComponent(`Krystle answered: ${answer}`);
    const url = `https://wa.me/${YOUR_NUMBER}?text=${message}`;
    window.location.href = url;
}

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

});

continueBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    container.classList.add("hide");

    setTimeout(()=>{

        inviteCard.classList.add("show");

    }, 800);

});

yesBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    yesScreen.classList.add("show");

    setTimeout(()=> notifyWhatsApp("YES ❤️"), 1200);

});

noBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    noScreen.classList.add("show");

    setTimeout(()=> notifyWhatsApp("No 🌙"), 1200);

});

yesScreen.addEventListener("click",()=>{

    yesScreen.classList.remove("show");

});

noScreen.addEventListener("click",()=>{

    noScreen.classList.remove("show");

});