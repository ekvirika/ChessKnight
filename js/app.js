let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

function Draw(){
    let out = '';
    let m = 0;
    for(let i = 0; i < chess.length; i++){
        let arr = chess[i];
        for(let j = 0; j < arr.length; j++){
            if(m%2 == 0){
                out+=
                `<div 
                class="chess-block" 
                data-x="${j}" 
                data-y="${i}">
                </div>`;
            } else{
                out+=
                `<div 
                class="chess-block bg-black"  
                data-x ="${j}" 
                data-y="${i}">
                </div>`;
            }
            m++;
        }
        m++;
    }

    document.querySelector(".chess-desk").innerHTML = out;
    document.querySelectorAll(".chess-block").forEach(function(element){
        element.onclick = KnighMove;
    });
}

function KnighMove(){
    document.querySelectorAll('.chess-block').forEach(function(element){
        element.classList.remove("bg-green");
        element.classList.remove("bg-active");
    });
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('bg-green');
    console.log(`${x} ${y}`);

                // x     y     logic
    AddActiveClass(+x+2, +y+1, +x+2 <8 && +y+1 < 8);
    AddActiveClass(+x+2, +y-1, +x+2 <8 && +y-1 >= 0);
    AddActiveClass(+x-2, +y+1, +x-2 >=0 && +y+1 < 8);
    AddActiveClass(+x-2, +y-1, +x-2 >=0 && +y-1 >= 0);
    AddActiveClass(+x+1, +y-2, +x+1 <8 && +y-2 >= 0);
    AddActiveClass(+x-1, +y+2, +x-1 >= 0 && +y+2 < 8);
    AddActiveClass(+x+1, +y+2, +x+1 <8 && +y+2 < 8);
    AddActiveClass(+x-1, +y-2, +x-1 >= 0 && +y-2 >= 0);

}

function AddActiveClass(x, y, logic){

    if(logic){
        document.querySelector(`.chess-block[data-x="${x}"][data-y="${y}"]`).classList.add("bg-active");
    }
}

Draw();