// oh my god no I didn't write this manually array manually, check out generatePattern.js
const cellData = [false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false]
var container = document.getElementById("solar")
var names = ["Parth Agarwal", "Parth Agarwal", "Parth Agarwal", "Parth Agarwal", "Parth Agarwal", "Parth Agarwal", "Parth Agarwal", "Parth Agarwal", "Parth Agarwal", "Parth Agarwal", "Parth Agarwal"]
var count = 0
var cell = ""
names.forEach(function (name) {
    while (!cellData[count]) {
        cell = "<div class='cell blank'></div>"
        container.innerHTML += cell
        count++
    }
    cell = "<div class='cell on'><div class='donor-name'>" + name + "</div></div>"
    container.innerHTML += cell
    count++
})
while (count < cellData.length - 1) {
    while (!cellData[count] && count < cellData.length) {
        cell = "<div class='cell blank'></div>"
        container.innerHTML += cell
        count++
    }
    cell = "<div class='cell'></div>"
    container.innerHTML += cell
    count++
}