let Wall_W = 10;
let Wall_H = 1;
let Wall_D = .5;

let wall = document.getElementById("Wall");
console.log("wall is" + wall)
wall.setAttribute('height', "Wall_H");
wall.setAttribute('width', "Wall_W");
wall.setAttribute('dept', "Wall_D");


function logdata(data) {
    let va = document.getElementById("logvalue");
    // console.log("ttest"+va)
    va.setAttribute("value", data);
}