const textInput = document.querySelector('#text-input');
const textClear = document.querySelector('#text-clear');
const downloadCanvas = document.querySelector('#download-canvas');
const fileInput = document.querySelector('#file-input');
const textAdd = document.querySelector('#text-add');
const canvasPict = document.querySelector('#canvas-pict');
const ctx = canvasPict.getContext('2d')

function getCoords(xy,width) {
    return [xy,xy,width-xy*2,width-xy*2]
}

function drawBorder() {
    ctx.fillStyle = '#2A2E3A'
    ctx.fillRect(...getCoords(0,500))
    ctx.fillStyle = '#fff'
    ctx.fillRect(...getCoords(50,500))
    ctx.fillStyle = '#2A2E3A'
    ctx.fillRect(...getCoords(51,500))
}
drawBorder()

fileInput.addEventListener('input', function (event) {
    const file = event.target.files[0]
    const newImage = new Image();
    newImage.src = URL.createObjectURL(file)
    newImage.addEventListener('load', function () {
        ctx.drawImage(newImage, ...getCoords(51,500))
    })
})

textClear.addEventListener('click', function () {
    drawBorder()
    fileInput.value = ''
    textInput.value = ''
})

textAdd.addEventListener('click', function () {
    ctx.font = '20px Tahoma'
    ctx.textAlign = 'center'
    ctx.fillStyle = '#fff'
    ctx.fillText(textInput.value, 250, 480)
})

function download() {
    const link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvasPict.toDataURL()
    link.click();
}


downloadCanvas.addEventListener('click', function () {
    download()
})
