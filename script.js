/* Down bellow, I do all the scripts necessary to switch to the second screen.
First of all, I create a variable to get the button
Then I add an event listener on that, that E.L contains an arrow func that will do all I need to switch the screen, removing elements, modifying them or adding new elements
 */
let playButton = document.querySelector(".buttonBox")

playButton.addEventListener("click", e => {
    // Down bellow I remove the h2 element
    let h2 = document.querySelector(".header")
    h2.remove()

    /* Down bellow I replace the text in the paragraph for the text of the second screen */
    let paragraph = document.querySelector("#paragraph")
    paragraph.replaceWith("Selecione qual será sua jogada:")

    //Down bellow I create all the variables needed to the next steps
    let html = document.querySelector("body")
    let rockRadio = document.createElement("input")
    let paperRadio = document.createElement("input")
    let scissorsRadio = document.createElement("input")
    let choisesDiv = document.createElement("div")
    let rockDiv = document.createElement("div")
    let paperDiv = document.createElement("div")
    let scissorsDiv = document.createElement("div")
    let rockLabel = document.createElement("label")
    let paperLabel = document.createElement("label")
    let scissorsLabel = document.createElement("label")
    let getPresentationBox = document.querySelector(".presentationBox")
    getPresentationBox.setAttribute("id", "presentationBox")
    let form = document.createElement("form")
    let button = document.querySelector("#button")

    
    /* Here it's created all of the structure of divs for the choices.
    A parent div called choisesDiv that contains 3 divs, rock, paper and scissors div, respectively.
    Each one of this child divs will contain your own radio and label linked with it.
     */
    html = playButton.parentNode;
    html.insertBefore(choisesDiv, playButton)
    choisesDiv.append(form)
    choisesDiv.setAttribute("class", "choisesDiv")
    form.append(rockDiv)
    form.append(paperDiv)
    form.append(scissorsDiv)
    
    form.setAttribute("id", "choisesForm")
    rockDiv.setAttribute("id", "rockDiv")
    paperDiv.setAttribute("id", "paperDiv")
    scissorsDiv.setAttribute("id", "scissorsDiv")




    //Down bellow I define all needed to insert the inputRadio into the html before button
    rockDiv.append(rockRadio)
    rockRadio.setAttribute("hidden", '')
    rockRadio.setAttribute("type", "radio")
    rockRadio.setAttribute("name", "choise")
    rockRadio.setAttribute("value", "rock") 
    rockRadio.setAttribute("id", "rock")
    rockLabel.innerText = "Pedra";
    rockLabel.setAttribute("class", "choises");
    rockDiv.append(rockLabel)
    rockLabel.setAttribute("for", "rock")

    paperDiv.append(paperRadio)
    paperRadio.setAttribute("hidden", '')
    paperRadio.setAttribute("type", "radio")
    paperRadio.setAttribute("id", "paper")
    paperRadio.setAttribute("name", "choise")
    paperRadio.setAttribute("value", "paper")
    paperLabel.innerText = "Papel";
    paperLabel.setAttribute("class", "choises");
    paperDiv.append(paperLabel)
    paperLabel.setAttribute("for", "paper")

    scissorsDiv.append(scissorsRadio)
    scissorsRadio.setAttribute("hidden", '')
    scissorsRadio.setAttribute("type", "radio")
    scissorsRadio.setAttribute("id", "scissors")
    scissorsRadio.setAttribute("name", "choise")
    scissorsRadio.setAttribute("value", "scissors")
    scissorsLabel.innerText = "Tesoura";
    scissorsLabel.setAttribute("class", "choises");
    scissorsDiv.append(scissorsLabel)
    scissorsLabel.setAttribute("for", "scissors")

    button.textContent = "Escolher"

    form.addEventListener("change", e => {
        let parent = e.target.parentElement
        if(e.target.checked === true){
            parent.style.backgroundColor = "rgba(240, 248, 255, 0.31)";
        }else if(e.target === false){
            parent.style.backgroundColor = "rgba(240, 248, 255, 0.148)";
        }
    })

}, {once: true})

