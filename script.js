let container = document.getElementById('container')
let mouseDown = false
let picker = document.getElementById('picker')
let curcolour = 'black'



function createGrid(size) {
    for (let index = 0; index < size; index++) {
        for (let index = 0; index < size; index++) {
            const ratio = 100 / size;
            let div = document.createElement("div");
            div.classList.add("box");
            div.style.flex = "1 1 " + ratio + "%";
            container.appendChild(div);

        }

    }
}

function colourGrid() {
    boxes.forEach(function (box) {
        box.addEventListener('mousedown', function () {
            mouseDown = true
            colourBox(box,curcolour)
        })
        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                colourBox(box,curcolour)
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

createGrid(30);
let boxes = document.querySelectorAll('div.box')

colourGrid();

document.getElementById('reset').addEventListener('click', function () {
    boxes.forEach(function (box) {
        colourBox(box,'white')
    })
})

document.getElementById('erase').addEventListener('click', function () {
    curcolour = 'white'
})


picker.addEventListener('input',(e)=>{
    curcolour = e.target.value
    console.log(curcolour)
})