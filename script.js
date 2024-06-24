//The function bellow is called using html to change for the second screen
function changeSecondScreen(){
    document.querySelector(".firstScreen").style.display = "none";
    document.querySelector(".secondScreen").style.display = "grid";
}
// The functions bellow are part of the feedback on the choose buttons
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

//Each sequence of code bellow is responsable to make the feedback of the choosing button, using the functions above, this right bellow is for the rock option
const rockDiv = document.querySelector("#rockDiv")
rockDiv.addEventListener("click", e => {
    eraseBackgrounds();
    rockDiv.style.backgroundColor = "rgba(240, 248, 255, 0.14)"
    eraseCheked()
    document.querySelector("#rock").setAttribute("checked", true)
})
// This right there, for the paper
const paperDiv = document.querySelector("#paperDiv")
paperDiv.addEventListener("click",  e => {
    eraseBackgrounds();
    paperDiv.style.backgroundColor = "rgba(240, 248, 255, 0.14)"
    eraseCheked()
    document.querySelector("#paper").setAttribute("checked", true)
})
// And this right here, for the scissors option
const scissorDiv = document.querySelector("#scissorDiv")
scissorDiv.addEventListener("click", e => {
    eraseBackgrounds();
    scissorDiv.style.backgroundColor = "rgba(240, 248, 255, 0.14)"
    eraseCheked()
    document.querySelector("#scissor").setAttribute("checked", true)
})

const chooseButton = document.querySelector(".chooseButton")

chooseButton.addEventListener("click", changeThirdScreen);

function changeThirdScreen(){
    const allChooses = document.querySelectorAll(".inputs");

    if(allChooses[0].checked || allChooses[1].checked || allChooses[2].checked){
        document.querySelector(".secondScreen").style.display = "none";
        document.querySelector("#thirdScreen").style.display = "flex";
    }else{
        window.alert("Selecione alguma opção")
    }

}
