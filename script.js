let container = document.getElementById('container');

function createGrid(size){
    for (let index = 0; index < size; index++) {
       // let row = document.createElement("div")
        //row.classList.add("row");
        for (let index = 0; index < size; index++) { 
            const ratio = 100/size;
            let div = document.createElement("div");
            div.classList.add("box");
            div.style.flex = "1 1 " + ratio +"%";
            //div.style.width = "200px";
           // div.style.height = "200px";
           // row.appendChild(div);
           container.appendChild(div);
            
        }
       // container.appendChild(row);
      
    }
}

createGrid(10);