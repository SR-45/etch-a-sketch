let container = document.getElementById('container')

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

function colourGrid(colour) {
    boxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            this.style.backgroundColor = colour
            console.log("box")
        })
    }
    )
}

function selectColour(){

}


createGrid(30);
let boxes = document.querySelectorAll('div.box')

colourGrid('red');
document.getElementById('reset').addEventListener('click', function(){
    boxes.forEach(function(box){
        box.style.backgroundColor = 'white'
    })
    colourGrid('red')
})

document.getElementById('erase').addEventListener('click', function(){
    colourGrid('white')
})
