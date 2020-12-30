const heading = document.getElementById('colourValue');
const buttons = document.getElementsByClassName('colourButton');
const answerMessage = document.getElementById('answer');
const correctAnswer = document.getElementById("correct-score");
const wrongAnswer = document.getElementById("wrong-score");

let correctScore = 0;
let wrongScore = 0;

function startGame(){
  answerMessage.innerHTML = "Choose Color";
  answerMessage.style.color='#535c68';
  let isClicked = false;
  let red = makeColourValue();
  let green = makeColourValue();
  let blue = makeColourValue();

  let answerButton = Math.round(Math.random() * (buttons.length - 1));

  
  for (var i = 0; i < buttons.length; i++) {

    red = makeColourValue();
    green = makeColourValue();
    blue = makeColourValue();
  
    setButtonColour(buttons[i], red, green, blue);
    
    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }
    buttons[i].classList.add("hover"); 

    buttons[i].addEventListener('click', function(){   // feradi gilaki daechira

          if(!isClicked){// tu dacherili araa

            if (this === buttons[answerButton]){ // tu swor pasuxs daachira
                disableButtons();
                answerMessage.innerHTML = "Correct answer!"; // gamoachens am teqsts
                answerMessage.style.color='#2ecc71'; // am teqstis fers cvlis

                correctScore++; // movumatot swori pasuxebis odenoba 1 it
                correctAnswer.innerText  = correctScore; // gamovachinot ganaxlebuli correctScore

                this.style.transform = "scale(1.1)";
                this.style.opacity = "1";

            } else{ // tu araswor pasuxs daachira
                disableButtons();   
                answerMessage.innerHTML = "Wrong answer!"; // gamoachents am teqsts
                answerMessage.style.color='#e74c3c';// am teqstis fers cvlis

                wrongScore++; // gavzardot mcdari pasuxebis odenoba
                wrongAnswer.innerText  = wrongScore; // ganvaaxlot teqsti

                this.style.transform = "scale(1.1)";
                this.style.opacity = "1";
            }
            
            isClicked = true; // dacherilia
          }
        
      });

  }
  
}


function disableButtons(){
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("hover");
      buttons[i].style.opacity = "0.6";
  }
}



function setButtonColour(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}

function makeColourValue(){
    return Math.round(Math.random()*255);
}


startGame();
document.getElementById('resetButton').addEventListener('click', startGame);