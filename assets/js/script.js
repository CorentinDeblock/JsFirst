let arr = [];

let table = document.querySelector("table");
let research = document.querySelector("#country")

function randomize(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function compareScore(a,b){
    return a.score - b.score;
}
function compareCountry(data){
    if(data.country == "Bahrain"){
        return true;
    }
    return false;
}

function rank(data){
    if(data.score > 750){
        data.rank = "A";
    }else if(data.score > 500){
        data.rank = "B";
    }else {
        data.rank = "C";
    }
}

function displayArray(arr,option){
    arr.map(value => console.log(value[option]));
}
function displayArray(arr){
    arr.map(value => console.log(value));
}
function createTR(name,score,rank,country) {
    let element = document.createElement("tr");

    function createTd(text,classes){
        let td = document.createElement("td");
        td.innerText = text;
        td.classList.add(classes)
        element.appendChild(td);
    }
    createTd(name,"name");
    createTd(score,"score");
    createTd(rank,"rank");
    createTd(country,"country");

    return element;
}   
function pushTR(li){
    table.appendChild(li);
}
function pushTable(value){
    pushTR(createTR(value.name,value.score,value.rank,value.country))
}

let req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.onload = (event) => {
    if(req.status == 200){
        let response = JSON.parse(req.responseText);
        response.map((value) => {
            value.score = randomize(0,1000);
        })
        response.sort(compareScore);
        response.forEach(rank);
        response.forEach(pushTable); 
        console.log(response[0].score)
        console.log(response[response.length - 1].score);
    }
}
req.open('get',"assets/json/data.json",true);
req.send();

research.addEventListener("keydown",(event)=>{
    let child = table.children;
    let value = event.target.value;

    if(value == ""){
        for(let i = 1; i < child.length;i++){
            child[i].classList.remove("hide");
        }      
    }else{
        for(let i = 1; i < child.length;i++){
            if(!child[i].innerText.match(value)){
                child[i].classList.add("hide");
            }
        }   
    }
})