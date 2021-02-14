
var level_index = -1;

// Note the order of elements in this array determines the order of the levels
// Y -= 95
var all_levels = [
    ["mensen22", "586, 226,621, 228,634, 240,653, 223,678, 224,678, 246,650, 255,677, 285,655, 311   ,626, 312,597, 289,619, 260,582, 240"],
    ["mensen25", " 505, 325, 621, 340, 592, 426, 509, 412"],
    ["mensen2",  ""],
    ["mensen19", ""],
    ["mensen10", ""],
    ["mensen14", ""],
    ["mensen27", ""],
    ["mensen24", ""],
    ["mensen26", ""],
    ["mensen15", ""],
    ["mensen13", ""],
    ["mensen9",  ""],
    ["mensen1",  ""],
    ["mensen3",  ""],
    ["mensen16", ""],
    ["mensen23", ""],
    ["mensen12", ""],
    ["mensen17", ""],
    ["mensen18", ""],
    ["mensen7",  ""],
    ["mensen20", ""],
    ["mensen28", ""],
    ["mensen21", ""],
    ["mensen8",  ""],
    ["mensen6",  ""],
    ["mensen5",  ""],
    ["mensen4",  ""],
    ["mensen11", ""]
]

window.onload = function init() {
    complete_level();
}

function complete_level() {
    if (level_index == all_levels.length) {
        document.location.href = "waariswouterfinallevel.html";
    } else {
        level_index += 1;
        current_level = all_levels[level_index];
        console.log(current_level);
        document.getElementById("level_header_text").innerHTML  = "Level " + (level_index + 1);
        document.getElementById("picture").src = "resources/images/waariswouter/" + current_level[0] + ".jpg";
        document.getElementById("wouter_area").coords = current_level[1];
    }
}

function display_coords() {
    var x = window.event.clientX;
    var y = window.event.clientY;
    console.log("iks " + x + ", " + (y - 95))
}
