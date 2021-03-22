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

var navOpen = False;

function switchNav() {
    if (navOpen) {
        navOpen = False;
        closeNav();
    } else {
        navOpen = True;
        openNav();
    }
}

function openNav() {
    var navWidth = "250px";
    document.getElementById("mySidenav").style.width = navWidth;
    document.getElementById("main").style.marginLeft = navWidth;
    document.getElementById("page-title").style.marginLeft = navWidth;
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("page-title").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";
}