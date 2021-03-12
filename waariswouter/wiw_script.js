/** Sources: 
*   https://jlocatis.github.io/2017/02/24/build-wheres-waldo.html 
*   https://www.geeksforgeeks.org/check-whether-a-given-point-lies-inside-a-triangle-or-not/ 
*/

/* ------------------- Init functions ------------------- */

window.addEventListener("load", function() {
    document.getElementsByClassName("waldo")[0].addEventListener("click", checkClickLocation);
})

window.onload = function init() {
    multiplyNode(document.getElementsByClassName("life")[0], lives, true);
    complete_level();
}

/* ------------------- Level Selection and Data ------------------- */

var level_index = -1;
var rectangle = "r";
var triangle = "t";
var lives = 3;

/** 
 *  Rectangle coordinates:
 *  [x1, y1, x2, y2], where (x1, y1) is the top-left corner and (x2, y2) the bottom-right corner
 *  
 *  Triangle coordinates:
 *  [x1, y1, x2, y2, x3, y3], where every (xi, yi) is a coordinate of the triangle, for i = 1, 2, 3, so in arbitrary order
 */

// Note the order of elements in this array determines the order of the levels
var all_levels = [
    ["mensen22", rectangle, [782,303,898,410]],                 // 1
    ["mensen25", rectangle, [678,434,775,568]],                 // 2
    ["mensen2",  rectangle, [913,331,1026,468]],                // 3
    ["mensen19", rectangle, [312,191,434,357]],                 // 4
    ["mensen10", rectangle, [912,49,969,137]],                  // 5
    ["mensen14", rectangle, [803,763,990,976]],                 // 6
    ["mensen27", rectangle, [634,464,719,584]],                 // 7
    ["mensen24", rectangle, [834,775,908,847]],                 // 8
    ["mensen26", rectangle, [895,424,966,503]],                 // 9
    ["mensen15", rectangle, [953,195,1014,272]],                // 10
    ["mensen13", rectangle, [144,466,208,543]],                 // 11
    ["mensen9",  rectangle, [648,489,1068,940]],                // 12
    ["mensen1",  rectangle, [1337,325,1418,457]],               // 13
    ["mensen3",  rectangle, [518,417,561,477]],                 // 14
    ["mensen16", rectangle, [1490,905,1543,980]],               // 15
    ["mensen23", triangle,  [1795,122,1688,206,1798,255]],      // 16
    ["mensen12", rectangle, [260,412,317,465]],                 // 17
    ["mensen17", triangle,  [1715,0,1795,4,1797,93]],           // 18
    ["mensen18", rectangle, [816,269,934,427]],                 // 19
    ["mensen7",  rectangle, [898,287,966,344]],                 // 20
    ["mensen20", triangle,  [0,1218,92,1348,0,1348]],           // 21
    ["mensen28", rectangle, [1247,205,1290,303]],               // 22
    ["mensen21", rectangle, [1271,2,1333,67]],                  // 23
    ["mensen8",  rectangle, [14,94,84,199]],                    // 24
    ["mensen6",  rectangle, [1494,558,1542,626]],               // 25
    ["mensen5",  rectangle, [1151,165,1182,195]],               // 26
    ["mensen4",  rectangle, [841,77,854,91]],                   // 27
    ["mensen11", rectangle, [838,409,859,431]]                  // 28
]

function complete_level() {
    document.getElementById("picture").style.display = "block";
    document.getElementById("check").style.display = "none";
    if (level_index >= all_levels.length - 1) {
        document.location.href = "waariswouterfinallevel.html";
    } else {
        level_index += 1;
        current_level = all_levels[level_index];
        console.log(current_level);
        document.getElementById("level_header_text").innerHTML  = "Level " + (level_index + 1);
        document.getElementById("picture").src = "resources/images/waariswouter/" + current_level[0] + ".jpg";
    }
}

function checkClickLocation(event) {
	var click_event = window.event;
	var x = click_event.offsetX?(click_event.offsetX):click_event.pageX - document.getElementsByClassName("waldo").offsetLeft;
	var y = click_event.offsetY?(click_event.offsetY):click_event.pageY - document.getElementsByClassName("waldo").offsetTop;
    // console.log(x + "," + y);
    
    var current_level = all_levels[level_index];
    var current_shape = current_level[1];
    var current_coordinates = current_level[2];

    switch(current_shape) {
        case rectangle: 
            if (isInRectangle(x, y, current_coordinates)) {
                correctClick();
            } else {
                removeLife();
            }
            break;
        case triangle:
            if (isInTriangle(x, y, current_coordinates)) {
                correctClick();
            } else {
                removeLife();
            }
            break;
        default:
    }
}

/** Function executed immediately after a correct click;
 *  Displays a checkmark, then waits 0.5 seconds to go to the next level */ 
function correctClick() {
    document.getElementById("check").style.display = "block";
    document.getElementById("picture").style.display = "none";
    window.setTimeout(complete_level, 500);
}

function isInRectangle(x, y, rect) {
    return x >= rect[0] && x <= rect[2] && y >= rect[1] && y <= rect[3];
}

function isInTriangle(x, y, tri) {
    x1 = tri[0];
    y1 = tri[1];
    x2 = tri[2];
    y2 = tri[3];
    x3 = tri[4];
    y3 = tri[5];

    /* Calculate area of triangle ABC */
   var A = area (x1, y1, x2, y2, x3, y3); 
  
   /* Calculate area of triangle PBC */   
   var A1 = area (x, y, x2, y2, x3, y3); 
  
   /* Calculate area of triangle PAC */   
   var A2 = area (x1, y1, x, y, x3, y3); 
  
   /* Calculate area of triangle PAB */    
   var A3 = area (x1, y1, x2, y2, x, y); 
    
   /* Check if sum of A1, A2 and A3 is same as A */ 
   return (A == A1 + A2 + A3); 
}

function area(x1, y1, x2, y2, x3, y3) { 
   return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0); 
} 

function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

function removeLife() {
    document.getElementsByClassName("life")[lives - 1].remove();
    lives -= 1;
    if (lives <= 0) {
        document.location.href = "waariswoutergameover.html";
    }
}
