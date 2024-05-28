let randomNumb=parseInt(Math.random()*100+1);
//console.log(randomNumb)
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const starOver=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[];
let numGuess=1;
let playgame=true;

if(playgame){
        submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number');
    }
    else if(guess<1){
        alert('Please enter correct number grater than 1');
    }
     else if(guess>100){
        alert('Please enter correct number less than 1');
    }
    else{
        prevGuess.push(guess);

        if(numGuess===11){
            cleanupGuess(guess);
            displaymessage(`Game Over The random number was ${guess}`)
           endgame()
        }
        else{
            cleanupGuess(guess)
            checkGuess(guess);
        }

    }

}

function checkGuess(guess){
    if(guess===randomNumb){
        displaymessage('you guessed correct number')
    }
    else if(guess<randomNumb){
        displaymessage('you enter low number')
    }
    else if (guess>randomNumb){
        displaymessage('you enter high number')
    }
    

}
function cleanupGuess(guess){
     userInput.value=''
     guessSlot.innerHTML +=`${guess} `
     numGuess++;
     remaining.innerHTML=`${11-numGuess}`
}
    function displaymessage(message){
     lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    
    userInput.value=' '
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id='newGame'> Start new game </h2>`
    starOver.appendChild(p)
    playgame=false;
    newGame();


}

function newGame() {
    const newbtngame = document.querySelector('#newGame'); // Corrected selector
    newbtngame.addEventListener('click', function() { // Corrected event listener syntax
        randomNumb = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        starOver.removeChild(p);
        playgame = true;
    });
}
