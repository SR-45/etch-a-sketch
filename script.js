let container = document.getElementById('container')
let mouseDown = false
let picker = document.getElementById('picker')
let curcolour = 'black'
let prevcolour = 'black'
let slider = document.getElementById('slider')
let erase = false
let boxes = document.querySelectorAll('div.box')

function createGrid(size) {
    container.innerHTML = ''
    for (let index = 0; index < size; index++) {
        for (let index = 0; index < size; index++) {
            const ratio = 100 / size;
            let div = document.createElement("div");
            div.classList.add("box");
            div.style.flex = "1 1 " + ratio + "%";
            container.appendChild(div);

        }

    }
    boxes = document.querySelectorAll('div.box')
    colourGrid()
}

function colourGrid() {

    boxes.forEach(function (box) {
        box.addEventListener('mousedown', function () {
            mouseDown = true
            colourBox(box, curcolour)
        })
        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                colourBox(box, curcolour)
            }
        })
        document.addEventListener('mouseup', function () {
            mouseDown = false

        })
    }

    )

}

function colourBox(box, colour) {
    box.style.backgroundColor = colour
}

createGrid(16);




document.getElementById('reset').addEventListener('click', function () {
    boxes.forEach(function (box) {
        colourBox(box, 'white')


    })
    eraser.classList.remove('active')
    erase = false
    curcolour = 'black'
    prevcolour = 'black'
    value = 16
    document.getElementById('value').textContent = value
    createGrid(16)
})

let eraser = document.getElementById('erase')
eraser.addEventListener('click', function () {
    erase = !erase
    if (erase == true) {
        curcolour = 'white'
        eraser.classList.add('active')
    } else {
        curcolour = prevcolour
        eraser.classList.remove('active')
    }

})


picker.addEventListener('input', (e) => {
    curcolour = e.target.value
    prevcolour = e.target.value
    console.log(curcolour)
})

slider.addEventListener('input', (e) => {
    value = e.target.value
    document.getElementById('value').textContent = value

    createGrid(value)
    boxes = document.querySelectorAll('div.box')
})