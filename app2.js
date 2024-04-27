let gameseq=[];
let userseq=[];

let btns=['yellow','red','purple','green'];

let started = false;
let level = 0;

let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
    }   
    levelUp();
    
})
function levelUp(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    
    let ranIdx=Math.floor(Math.random()*3);
    let rancolor=btns[ranIdx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    game_flash(ranbtn);
}

function game_flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },220);
}

function user_flash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },220);
    
}

function btnPress(){
    let btn=this;
    user_flash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);

    
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}
 function checkAns(idx){
   
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML=`Game Over! Your Score was <b> ${level} <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
 }

 function reset(){
    userseq=[];
    gameseq=[];
    started=false;
    level=0;
 }
