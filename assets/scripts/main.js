/*Hamburger menu */
let navbar = document.getElementsByClassName("navbar")[0];
let navlinks = document.getElementsByClassName("navlinks")[0];
let navlinskul = document.getElementsByClassName("navlinksul")[0];
let navbut = document.getElementsByClassName("navbut")[0];
let navanch = document.querySelectorAll(".navanch");

navbut.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.toggle("active");
    navlinks.classList.toggle("active");
});

for (let each of navanch) {
    each.addEventListener("click", (e) => {
        navbar.classList.remove("active");
        navlinks.classList.remove("active");
    });
}

/*Scrolling works*/
window.addEventListener("scroll", () => {
    let navanch = document.getElementsByClassName("navanch")[0];
    if (window.scrollY >= 50) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }

    let totop = document.getElementsByClassName("to-top")[0];
    if (window.scrollY >= 500) {
        totop.style.display = "inline";
    } else {
        totop.style.display = "none";
    }
});

/*Typewriter effect */
function typewriter() {
    let typewriterchild = document.getElementById("typewrite-child");
    const words = ["Web Developer", "Competitive Programmer", "Mathematician"];
    //const words = ["Competetive Programmer"];
    let counter = 0;
    let index = 0;
    let startdel = false;
    let todisplay = "";
    function solve() {
        if (!startdel && index < words[counter].length) {
            typewriterchild.textContent = words[counter].substring(
                0,
                index + 1
            );
            index++;
        } else if (index == words[counter].length && !startdel) {
            startdel = true;
        } else if (startdel && index >= 0) {
            typewriterchild.textContent = words[counter].substring(
                0,
                index - 1
            );
            index--;
        } else if (index == -1) {
            counter++;
            counter %= 3;
            index = 0;
            startdel = false;
        }
    }
    setInterval(solve, 200);
}
typewriter();

/* Dropdown*/
let textedu = document.querySelectorAll(".text-edu");
for (let edu of textedu) {
    edu.addEventListener("click", () => {
        edu.children[1].classList.toggle("active");
        edu.children[0].children[0].classList.toggle("arrow");
    });
}

/*Tilting effect */
/*
let cards = document.querySelectorAll(".each-skill");

for (let card of cards) {
    // calculating card width and height
    let cardWidth, cardHeight;
    cardWidth = card.clientWidth;
    cardHeight = card.clientHeight;

    card.addEventListener("mousemove", (e) => {
        const xWidth = e.layerX;
        const yHeight = e.layerY;

        //Calculating rotation (you can try different values to see change in effect)

        const xRotation = 30 * ((xWidth - cardWidth / 2) / cardWidth);
        const yRotation = 30 * ((yHeight - cardHeight / 2) / cardHeight);

        transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) `;
        card.style.transform = transform;
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
    });
}*/

/*Clipboard */
const email = document.getElementsByClassName("c-h")[0];
email.addEventListener("click", () => {
    navigator.clipboard.writeText("kaivalya8674@gmail.com");

    alert("Email copid to clipboard!!!");
});

/*Dark Theme */
let dark = document.getElementsByClassName("dark-but")[0];
dark.addEventListener("click", (e) => {
    document.body.classList.toggle("dark");
    dark.classList.toggle("fa-sun");
});
