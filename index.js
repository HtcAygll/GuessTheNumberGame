const number = Math.trunc(Math.random(1 - 100) * 100);

console.log(number);

const btnElement = document.getElementById("btn");
const inputElement = document.getElementById("input");

const again = document.getElementById("again")

const guessP= document.querySelector(".guess")
const attemptP= document.querySelector(".attemps")

let guess = Number(inputElement.value);

let minClosest = 0;
let maxClosest = 100;
let attempt = 1;

btnElement.addEventListener("click", () => {
  console.log(inputElement.value);

  guess = Number(inputElement.value);

    if (number > guess) {
      minClosest = guess;
      attemptP.textContent=`Number of attempt is : ${attempt}`
      guessP.textContent = `Enter a number between ${minClosest} and ${maxClosest}`;
      inputElement.value=""
      attempt++;

      
    } else if(number<guess){
      maxClosest = guess;
      attemptP.textContent=`Number of attempt is : ${attempt}`
      guessP.textContent = `Enter a number between ${minClosest} and ${maxClosest}`;
      inputElement.value=""
      attempt++;

    }

    if(guess===number) {
      attemptP.textContent=`Number of attempt is : ${attempt}`
      guessP.textContent= `Congrats, Attempt is : ${attempt} And Number is : ${number}` ;
    }

});






