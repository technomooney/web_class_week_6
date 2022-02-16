// alert("this is working!")


let canvas = document.querySelector("#canvas")
let context = canvas.getContext("2d")

let input = document.querySelector("#image-text")
input.disabled = true

let image = new Image()
image.src = 'moon_by_me.jpg'
image.addEventListener("load", function () {
    context.drawImage(image, 0, 0,800,600)
    input.disabled = false
})

input.addEventListener("input", function (){
    let text = this.value
    context.fillStyle = "skyblue"
    context.font = "30px cursive"
    //found how to resize using js from here:
    // https://imagekit.io/blog/how-to-resize-image-in-javascript/
    context.drawImage(image, 0, 0,800,600)
    context.fillText(text, 40,150)
})