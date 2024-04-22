
let pBottom = document.querySelector(".pBottom");
let hitNum = document.querySelector("#hitNum");
let scoreBoard = document.querySelector("#scoreBoard");
let tryAgain = document.querySelector("#tryAgain");


let randomHitNum ;


function bubbleLoader()
{
    let clutter = '';


    for(i=1;i<=80;i++)
    {
        let rn =  Math.floor(Math.random()*10);
        clutter +=  `<div class="bubbles">${rn}</div>`
    }
    pBottom.innerHTML = clutter;
}
function hitNumber()
{
    randomHitNum = Math.floor(Math.random()*10) ;
    hitNum.innerText =  randomHitNum ;
}
function Timer()
{
    let timeCount = '15';
    let timer = document.querySelector("#timer");
  
  
    setInterval(()=>{
        if(timeCount >= 0) 
        {
            timer.innerText =   timeCount;
            timeCount--;
        }
        else
        {
            clearInterval();
            pBottom.classList.add ("NewPbottom");
            pBottom.innerHTML = `Game Over`;
            // <button id = "tryAgain">Try Again</button>
        }
        
       
    },1000)
    


}



let score = 0; 

pBottom.addEventListener("click",(e)=>{
    let targetValue = e.target.innerText;
    // console.log(e.target.innerText);
    if(Number(targetValue)  === randomHitNum)
    {
      
        score +=  10;
        scoreBoard.innerText = score;
        bubbleLoader();
        hitNumber();
        
    }
})


bubbleLoader();
hitNumber();
Timer();

// tryAgain.addEventListener("click",()=>{
//     console.log("ok");
// })