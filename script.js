// const API = "https://zenquotes.io/api/random";
const API = "https://programming-quotes-api.herokuapp.com/quotes/random";
const btn = document.getElementById("btn");
const h1data = document.getElementById("data");
const dataAuthor = document.getElementById("dataAuthor");
const speak = document.getElementById("speak");
let flag = 0;
function handleClick(e) {
  fetch(API, {
    headers: {
      Origin: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "/",
    },
  })
    .then((res) => res.json())
    .then((data) => {
        flag++;
        h1data.style.animation = "fadeIn 0.5s ease-in-out";
        h1data.style.transition = "0.5s";
        dataAuthor.style.animation = "fadeIn 0.5s ease-in-out";
        dataAuthor.style.transition = "0.5s";
        h1data.innerText = data.en;
        dataAuthor.innerText = `- ${data.author}`;
    })
    .catch((e) => {
      console.log(e);
    });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  h1data.innerText = "";
  dataAuthor.innerText = "";
  if(flag == 0){
    h1data.innerText = "Loading ...";
  }
  handleClick();
});


speak.addEventListener('click',(e) => {
  e.preventDefault();
  let utterance = new SpeechSynthesisUtterance(h1data.innerText);
  speechSynthesis.speak(utterance);
})