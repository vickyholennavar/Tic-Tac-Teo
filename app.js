let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let drawNewBtn=document.querySelector("#draw-new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let drawMsgContainer=document.querySelector(".draw-msg-container");
let drawMsg=document.querySelector("#drawmsg");

let turnO=true;//player x and player O
let count=0;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]

    boxes.forEach((box)=>{
        box.addEventListener("click",()=>
        {
            count++;
            if(turnO)
                {
                    box.innerText="X";
                    box.style.color="#FFC6D9";
                    turnO=false;
                }
                else{
                    box.innerText="O";
                    box.style.color="#916C80";
                    turnO=true;
                }
                box.disabled=true;
                checkWinner();
                console.log("count is :: ",count);
             if(count==9)
                {
                    matchDraw();
                }
        });
    });

    const checkWinner=()=>{
        for(let pattern of winPatterns)
            {
                let pos1Value=boxes[pattern[0]].innerText;
                let pos2Value=boxes[pattern[1]].innerText; 
                let pos3Value=boxes[pattern[2]].innerText;
               if(pos1Value !="" && pos2Value !="" && pos3Value !="")
                {
                      if(pos1Value ===pos2Value && pos2Value ===pos3Value)
                        {

                            showWinner(pos1Value);
                        }
                }
            }
    };

    const showWinner=(winner)=>{
        count=0;
        msg.innerText=`Congratulation Winner is ${winner}`;
        disableBoxes();
        msgContainer.classList.remove("hide");

    }

const disableBoxes=()=>
        {
            for(let box of boxes)
                {
                  box.disabled=true;
                }
        };
const anableBoxes=()=>
            {
                for(let box of boxes)
                    {
                      box.disabled=false;
                      box.innerText="";
                    }
            };
const resetGame=()=>{
    count=0;
    let turnO=true;
    anableBoxes();
    msgContainer.classList.add("hide");
       
    };
const drawresetGame=()=>{
        count=0;
        let turnO=true;
        anableBoxes();
        drawMsgContainer.classList.add("drawhide");
           
        };
const matchDraw=()=>
    {
        count=0;
        disableBoxes();
        drawMsgContainer.classList.remove("drawhide");
    };
drawNewBtn.addEventListener("click",drawresetGame);
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
