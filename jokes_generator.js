const jokeDescription = document.getElementById("joke_description");
const btn = document.getElementById("btn");

const jokeResult = async()=>{
    let url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=1-200';

    const res = await fetch(url);
    const data = await res.json();

    jokeDescription.textContent = data.joke;
}

btn.addEventListener("click", jokeResult);

