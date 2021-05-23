var but = document.querySelector("#button");
var count = 0;
var delay = 500;

but.addEventListener("mouseover", () => setTimeout(LocationChanger, delay));

var btn = document.getElementById("button");

function LocationChanger() {
    var i = Math.random() * 1500;
    var j = Math.random() * 900;
    but.style.left = i + "px";
    but.style.top = j + "px";

}
btn.onclick = function() {
    count++;
    if (count == 3) {
        alert("Congrats! you have passed Level 1! Level 2 is starting...")
        delay = delay - 100;
    }
    if (count == 6) {
        alert("Congrats! you have passed Level 2! Level 3 is starting...")
        delay = delay - 100;
    }
    if (count == 9) {
        alert("Congrats! you have passed Level 3! Level 4 is starting...")
        delay = delay - 100;
    }
    if (count == 12) {
        alert("Congrats! you have passed Level 4! Level 5 is starting...")
        delay = delay - 100;
    }
    if (count == 15) {
        alert("Congrats! you have passed Level 5! Level 6 is starting...")
        delay = delay - 100;
    }
}