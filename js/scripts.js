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
