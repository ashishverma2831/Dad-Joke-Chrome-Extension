// i have to learn this that's why i had left this coding part
// const jokes = require("give-me-a-joke")
// jokes.getRandomDadJoke(function(joke){
//     console.log(joke)
// })


// https://api.quotable.io/random
// https://icanhazdadjoke.com/

const button = document.querySelector("#btn")
const jokeText = document.querySelector("#content")

button.addEventListener("click",getJoke);

async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            "Accept":"application/json"
        }
    })
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}