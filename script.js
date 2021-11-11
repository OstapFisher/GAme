const dino = document.getElementById("dino");
const Cactus = document.getElementById("Cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let CactusLeft = parseInt(window.getComputedStyle(Cactus).getPropertyValue("left"));

    if (CactusLeft < 50 && CactusLeft > 0 && dinoTop >= 140) {
        alert("GAME OVER!!!")
    }
}, 10)







