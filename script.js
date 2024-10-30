/*
Adivina el numero: Passos.

1.-Generar un numero aleatorio entre 1 y 100.
2.-Registrar el numero del intento en el que el jugador se encuentre.
3.-Darle el jugador una forma de adividar cual es el numero.
4.-Una vez que se ha introducido el numero,registrarlo en alguma parte para que el jugador pueda ver sus intensos previos
5.-A continuacio, comprobar si el numero es corecto
6.-si es corecto:
     i.Mostrar un mesaje de felicitation
     ii.hacer que el jugador no pueda introducir mas intentos
     iii.mostrar un control que permita el jugador volver a empezar el juego
7.Si es incorrecto y a juador le quedan intentos:
     i.Decirle al juador que ha fallado
     ii.dejar que el juador lo intente de nuevo
     iii.incrementar el numero de intentos en 1
8..-Si el juador falla y no le queda intentos:
    i.
    ii.
    iii.
9.-Una vez que el juedo se recinicia,k asegurares de que la logica de juego
--------------------------------------------------------------------------------------------------------------------
 Guess the number: steps

    1. Generate a random number between 1 and 100

    2. Register the number of the attempt in which the player is

    3. Give the player a way of guessing the number

    4. Once the number was written save it somewhere so the player can see his tries

    5. Check if the number is correct

    6. If it is correct:
               i. Show a message of congratulations
               ii. Do not allow the player to introduce more tries
               iii. Show the button that let's the player restart

    7. If it's incorrect and the player still has tries:
               i. Tell the player he has failed
               ii. Let the player retry 
               iii. Each time he fails increase the number of fails with 1

    8. If the player fains and has no more tries:
               i. Tell the player that the game has finished
               ii. Don't let the player put in more tries
               iii. Show a control that will let the player restart

    9. Once the game restarts make sure that the logic of the game and de UI (user interface) resets completly and go back to step 1.

*/

/* Generamos el numero aleatorio*/
let randomNumber=Math.floor(Math.random()*100) + 1;

/* Variable contador de intentos y para el boton de reinicio */
const guesses = document.querySelector(".guesses");
const  lastResult = document.querySelector(".lastResult");
const  low0rHi = document.querySelector(".low0rHi");
const  guessSubmit = document.querySelector(".guessSubmit");
const  guessField = document.querySelector(".guessField");

/* A*/
let guessCount=1;
let resetButton;

/*function*/
function checkGuess() {
       
    const userGuess = Number(guessField.value);

    if(guessCount===1){
        guesses.textContent="Intentos Antetorios: ";
    }
    guesses.textContent +=userGuess+ " ";
    if(userGuess === randomNumber){
        lastResult.textContent ="congreats!!!!"
        lastResult.style.backgroundColor ="green";
        low0rHi.textContent=" ";
        setGameOver();
    }else if(guessCount===10){
        lastResult.textContent= "Game over!";
        setGameOver();
    }else{
        lastResult.textContent="Incorect";
        lastResult.style.backgroundColor= "red";
        if(userGuess<randomNumber){
            low0rHi.textContent="The number is loweR";
        }else if(userGuess>randomNumber){
            low0rHi.textContent= "The number is high";
        }
    }

    guessCount++;
    guessField.value= " ";
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton=document.createElement("button");
    resetButton.textContent="comezar de nuevo";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}

 function resetGame()  {
    guessCount=1;

    const resetParas=document.querySelectorAll(".resultParas");
    for(const resetPara of resetParas){
        resetPara.textContent="";
    }

    resetButton.parentNode.removeChild(resetButton);
    
    guessField.disabled= false;
    guessSubmit.disabled=false;
    guessField.value= " ";
    guessField.focus();

    lastResult.style.backgroundColor= "white";

    randomNumber= Math.floor(Math.random()*100)+ 1;
 }
