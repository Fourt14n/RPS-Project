function changeSecondScreen(){
    document.querySelector(".firstScreen").style.display = "none";
    document.querySelector(".secondScreen").style.display = "grid";
}

function eraseBackgrounds(){
    const malditosBotoes = document.querySelectorAll(".inputsButton")
    for(i = 0; i < malditosBotoes.length; i++){
        malditosBotoes[i].style.backgroundColor = ""
    }
}

function eraseCheked(){
    const inputs = document.querySelectorAll(".inputs");
    for(i = 0; i < inputs.length; i++){
        inputs[i].removeAttribute("checked");
    }
}

const rockDiv = document.querySelector("#rockDiv")
rockDiv.addEventListener("click", e => {
    eraseBackgrounds();
    rockDiv.style.backgroundColor = "rgba(240, 248, 255, 0.14)"
    eraseCheked()
    document.querySelector("#rock").setAttribute("checked", true)
})

const paperDiv = document.querySelector("#paperDiv")
paperDiv.addEventListener("click",  e => {
    eraseBackgrounds();
    paperDiv.style.backgroundColor = "rgba(240, 248, 255, 0.14)"
    eraseCheked()
    document.querySelector("#paper").setAttribute("checked", true)
})

const scissorDiv = document.querySelector("#scissorDiv")
scissorDiv.addEventListener("click", e => {
    eraseBackgrounds();
    scissorDiv.style.backgroundColor = "rgba(240, 248, 255, 0.14)"
    eraseCheked()
    document.querySelector("#scissor").setAttribute("checked", true)
})

