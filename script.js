let playerScore = 0;
let computerScore = 0;

let rollSound = document.getElementById("rollSound");

function rollDice(){
    rollSound.currentTime = 0;
    rollSound.play();

    let dice1 = document.getElementById("dice1");
    let dice2 = document.getElementById("dice2");

    dice1.classList.add("roll");
    dice2.classList.add("roll");

    setTimeout(function(){

        dice1.classList.remove("roll");
        dice2.classList.remove("roll");

        let random1 = Math.floor(Math.random()*6)+1;
        let random2 = Math.floor(Math.random()*6)+1;

        dice1.src = "images/num"+random1+".png";
        dice2.src = "images/num"+random2+".png";

        let result = document.getElementById("result");

        if(random1 > random2){
            playerScore++;
            document.getElementById("pScore").innerText = playerScore;
            result.innerHTML = "🏆 You Win!";
            result.style.color = "white";
            confetti({
            particleCount:100,
            spread:70,
            origin:{y:0.6}
    });
        }
        else if(random2 > random1){
            computerScore++;
            document.getElementById("cScore").innerText = computerScore;
            result.innerHTML = "💻 Computer Wins!";
            result.style.color = "white";
        }
        else{

            result.innerHTML = "🤝 Draw!";
            result.style.color = "white";
        }
    },500);
}
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById("pScore").innerText = 0;
    document.getElementById("cScore").innerText = 0;
    document.getElementById("dice1").src = "images/num1.png";
    document.getElementById("dice2").src = "images/num1.png";
    document.getElementById("result").innerHTML = "";
    bgMusic.pause();
    bgMusic.currentTime = 0;
 }