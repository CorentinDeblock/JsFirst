let languages = "fr";
let message = "";

if(languages == "fr"){
    message = "Bonjours tout le monde";
}else if(languages == "en"){
    message = "Hello world";
}else if(languages == "es"){    
    message = "Hola, Mundo"
}else{
    message = "Langue non défini";
}
console.log(message);