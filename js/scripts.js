function showHiddenContent(name) {
    element = document.getElementById(name);
    if (element.style.display == 'block') {
        element.style.display = 'none'
    } else {
        element.style.display = 'block'
    }
}

function addP(name) {
    element = document.getElementById(name);
    text = document.createElement()
    element.appendChild(text);
}

// Language

var languages = ["nl", "en"];
var currLanguageIndex = 0;
var currLanguage = languages[currLanguageIndex];

window.onload = function init() {
    changeLanguage();    
}

function cycleLanguage() {
    currLanguageIndex = (currLanguageIndex + 1) % languages.length;
    currLanguage = languages[currLanguageIndex];
    changeLanguage(); 
}

function changeLanguage() {
    languages.forEach(language => {
        var displayStyle = "none";
        if (language == currLanguage) {
            displayStyle = "block";
        }
        var elements = document.getElementsByClassName(language)
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).style.display = displayStyle;
        }
    });
}