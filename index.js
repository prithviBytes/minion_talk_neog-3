var url = "https://api.funtranslations.com/translate/minion.json";
var input = document.querySelector(".textarea");
var output = document.querySelector(".output");
var btnTranslate =  document.querySelector(".btn-translate");

function getTranslatorUrl(text){
    return url + "?text=" + text;
}

function clickHandler() {
    var userInput = input.value;
    fetch(getTranslatorUrl(userInput))
    .then(respons => 
        respons.json()).then( json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
}

btnTranslate.addEventListener("click",clickHandler);
