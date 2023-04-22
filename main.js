const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f493574019msh66329473641fb71p1ef2ebjsnc9689afb80bd",
    "X-RapidAPI-Host": "daddyjokes.p.rapidapi.com",
  },
};

const icons = [
  "fa-face-grin-stars",
  "fa-face-grin-tears",
  "fa-face-laugh",
  "fa-face-grin-squint",
  "fa-face-grin-beam",
  "fa-face-grin-beam-sweat",
];
const iElement = document.getElementById("icon");
const spinner = document.getElementById("spinner");
const punchline = document.getElementById("punchline");
const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

function getJoke() {
  spinner.classList.remove("hidden");
  fetch("https://daddyjokes.p.rapidapi.com/random", options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.joke) {
        joke.textContent = data.joke;
        punchline.classList.remove("hidden");
        const index = Math.floor(Math.random() * icons.length);
        iElement.className = icons[index] + " fa-solid text-teal-600 text-6xl";
      } else {
        joke.textContent = "Come back tomorrow to read more jokes.";
        joke.classList.add("text-center");
      }
      spinner.classList.add("hidden");
    })
    .catch((err) => console.error(err));
}

btn.addEventListener("click", getJoke);
