let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetbtn");
let player1=document.querySelector(".P1");
let player2=document.querySelector(".P2");
let noti=document.querySelector(".hide");
let message=document.querySelector(".mess");
let newgame=document.querySelector("#newgame");
let p1name=prompt("Enter name of player 1");
let p2name=prompt("Enter name of player 2");
player1.innerText=p1name;
player2.innerText=p2name;

let p1=true;
const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
const disablebtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
   
}
const resetgame=()=>{
    p1=true
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    noti.classList.add("hide");
    reset.classList.remove("hide");
    player1.style.backgroundColor="yellow";
    player2.style.backgroundColor="transparent";
   
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(p1){
            box.innerText="O";
            player2.style.backgroundColor="yellow";
            player1.style.backgroundColor="transparent";

            p1=false;
        }
        else{
            box.innerText="X";
            player1.style.backgroundColor="yellow";
            player2.style.backgroundColor="transparent";
           
            p1=true;
        }
        box.disabled=true;
        checkwin();
    })
});

function checkwin(){
 
    for(let win of winpat){
    
        let pos1=boxes[win[0]].innerText;
        let pos2=boxes[win[1]].innerText;
        let pos3=boxes[win[2]].innerText;
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1===pos2&&pos1===pos3){
                disablebtn();
                notiwinner();
        }
    
          
    }}}
    const notiwinner=()=>{
        if( player1.style.backgroundColor==="yellow"){
            message.innerText=`Congratulation ${p2name} you're winner of this Game`;
        }
        else{
            message.innerText=`Congratulation ${p1name} you're winner of this Game`;

        }
        noti.classList.remove("hide");
        reset.classList.add("hide");
        player1.style.backgroundColor="transparent";
        player2.style.backgroundColor="transparent";
    }
    newgame.addEventListener("click",resetgame);
    reset.addEventListener("click",resetgame)
    