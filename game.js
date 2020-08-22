const $sumbitButton=document.getElementById('sumbit');
const $message=document.getElementById('message');
const $lives =document.getElementById('lives');

var guessNumber=Math.floor(Math.random()*100);
var lives=10;
var message;

$sumbitButton.onclick=()=> {
    let userInput=document.getElementById('number-input').value;
    lives--;
    if(userInput == guessNumber){
        location.href="./win.html";
    }
    else if(lives ==0){
        location.href="./lose.html";
    }
    else if(userInput > guessNumber){
        message='Oops ! Your guess is to High...';
    }
    else if(userInput < guessNumber){
        message='Oops ! Your guess is to Low...';
    }
    $message.style.display="inherit";
    $message.innerHTML=message;
    $lives.innerHTML=lives;
};