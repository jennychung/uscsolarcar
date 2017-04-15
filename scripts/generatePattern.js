// Assumes there is an img element with id "image"
// this image is a png pattern such that solid pixels will have a cell drawn whereas transparency will result in a gap
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
    console.log(JSON.stringify(cellData))
}