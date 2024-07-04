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

        setTimeout(()=> {
            changeLastScreen();
        }, 2500)

    }else{
        // Oh eu to tentando fazer um código pra fazer com que o texto da presentChooses fique piscando em vermelho por um tempo, provavelmente vou ter que fazer uma função por fora e chamar ela aqui
        piscar();
    }

    function piscar(){
        let dontChoose = document.querySelector(".presentChooses");

            let interval = setInterval(() =>{
                setTimeout(() => {
                    dontChoose.style.color = "red";   
                })
                setTimeout(()=> {
                    dontChoose.style.color = "rgb(215, 228, 235)";   
                },230)
            })

            setTimeout(() => {
                clearInterval(interval);
            }, 230)
        
    }

    if(allChooses[0].checked){
        choosedValue = "Pedra";

    } else if(allChooses[1].checked){
        choosedValue = "Papel";
    }else if(allChooses[2]){
        choosedValue = "Tesoura";
    }else{
        choosedValue = "Levar rola";
    }


}

function changeLastScreen(){
    document.querySelector("#thirdScreen").style.display = "none";
    document.querySelector("#fourScreen").style.display = "flex";

    // Dow here I'll do the logic behind the choose of the RPS
    let randomicNumber = Math.floor(Math.random() * 99);
    randomicNumber -= 1;
    console.log(randomicNumber)
    let rpsMsg;
    const drawMsg = "Empate, que azar!";
    const winMsg = "Você venceu!"
    const loseMsg = "Você perdeu..."

    if(randomicNumber <= 33){
        //Pedra
        rpsMsg = "Pedra"

        if(choosedValue === "Pedra"){
            document.querySelector("#winnerResult").innerHTML = drawMsg;
        }else if(choosedValue === "Papel"){
            document.querySelector("#winnerResult").innerHTML = winMsg;
        }else if(choosedValue === "Tesoura"){
            document.querySelector("#winnerResult").innerHTML = loseMsg;
        }
    }else if(randomicNumber <= 66){
        // Papel
        rpsMsg = "Papel"

        if(choosedValue === "Pedra"){
            document.querySelector("#winnerResult").innerHTML = loseMsg;
        }else if(choosedValue === "Papel"){
            document.querySelector("#winnerResult").innerHTML = drawMsg;
        }else if(choosedValue === "Tesoura"){
            document.querySelector("#winnerResult").innerHTML = winMsg;
        }
    }else if(randomicNumber <= 99){
         // Tesoura
        rpsMsg = "Tesoura"
        if(choosedValue === "Pedra"){
            document.querySelector("#winnerResult").innerHTML = winMsg;
        }else if(choosedValue === "Papel"){
            document.querySelector("#winnerResult").innerHTML = loseMsg;
        }else if(choosedValue === "Tesoura"){
            document.querySelector("#winnerResult").innerHTML = drawMsg;
        }
    }

    document.querySelector("#yourChoose").innerHTML = "Você escolheu: " + choosedValue;
    document.querySelector("#rpsChoose").innerHTML = "RPS escolheu: " + rpsMsg;

    document.querySelector("#tryAgainBtn").addEventListener("click", ()=>{
        document.querySelector("#fourScreen").style.display = "none";
        document.querySelector(".secondScreen").style.display = "flex";
    })

    document.querySelector("#homeBtn").addEventListener("click", () => {
        document.querySelector("#fourScreen").style.display = "none";
        document.querySelector(".firstScreen").style.display = "flex";
    })
}
