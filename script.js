function switchSecondScreen(){
    let getPresentationBox = document.querySelector(".presentationBox");
    let list = document.createElement("ul");
    list.innerHTML = "<li> Pedra </li> <li> Papel </li> <li> Tesoura </li>"
    getPresentationBox.append(list);
}