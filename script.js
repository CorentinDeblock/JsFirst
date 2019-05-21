let answer = ['B','O','N','J','O','U','R'];

let response = ['','','','','','',''];

function pushLetter(chance,arr,message){
    let showLetter = "Lettre trouvée : ";
    let cumul = 0;

    for(let i = 0; i < response.length;i++){
        if(response[i] != ''){
            showLetter += response[i];
            cumul++;
        }
    }
    if(cumul == response.length){
        return true;
    }
    cumul = 0;
    let prompter = prompt(showLetter + "\nTentative : " + chance + "\n" + message);
    arr.push(prompter);
    
    let noFind = true;

    for(let i = 0; i < answer.length;i++){
        if(answer[i] == prompter){
            response[i] = answer[i];
            alert("Vous avez trouver une lettre");
            noFind = false;
        }
    }
    if(noFind){
        alert("Vous n'avez pas trouver de lettre");
    }
    return false;
}
function getAllLetter(source,destination){
    
}

function guessLetter(){
    let tentative = 0;
    let savedLetter = [];
    let winOrLoose = false;
    let fullAnswer = "";

    while(!winOrLoose){
        winOrLoose = pushLetter(tentative,savedLetter,"Devinez une lettre");
        tentative++;
    }
    for(let i = 0; i < answer.length; i++){
        fullAnswer += answer[i];
    }
    alert(`Felicitation tu a réussi en ${tentative}\nLe mot était ${fullAnswer}`);
    alert(`Voici toute les lettre que tu a rentrer $`)
}
guessLetter();