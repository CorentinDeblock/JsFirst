let charac = document.querySelector("#character");

function changeBg(color){
    charac.style.backgroundColor = color;
}

function bgChange(event){
    switch(event.key){
        case "0":
            changeBg("red");
            break;
        case "1":
            changeBg("blue");
            break;
        case "2":
            changeBg("orange");
            break;
        case "3":
            changeBg("green");
            break;
        case "4":
            changeBg("black");
            break;
        case "5":
            changeBg("purple");
            break;
        case "6":
            changeBg("pink");
            break;
        case "7":
            changeBg("yellow");
            break;
        case "8":
            changeBg("brown");
            break;
        case "9":
            changeBg("grey");
            break;
        default:
            
    }
}

document.addEventListener("keydown",bgChange);