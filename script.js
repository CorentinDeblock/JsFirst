let arr = [];
function ramdomize(min,max){
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

fetch("data.json")
    .then(response => response.json())
    .then(data => arr = data)
    .then(function() {
        arr.map(function(data){
            data.score = ramdomize(0,1000);
        });
        arr.sort(compareScore)
        arr.forEach(rank)
        let filted = arr.filter(compareCountry);
        console.log(arr[0].score);
        console.log(arr[arr.length - 1].score);
    });
