document.getElementById("image").onload = function () {
    var cellData = []
    var canvas = document.createElement("canvas")
    var context = canvas.getContext("2d")
    var image = document.getElementById("image")
    context.drawImage(image, 0, 0)
    var imageData = context.getImageData(0, 0, image.width, image.height).data
    for (var i = 0; i < imageData.length; i += 4) {
        if (imageData[i + 3] > 128) {
            cellData[cellData.length] = true
        }
        else {
            cellData[cellData.length] = false
        }
    }
    var cellCount = 0
    cellData.forEach(function (item) {
        if (item) {
            cellCount++
        }
    })
    console.log(cellCount)
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
}